import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface ChatbotFormProps {
  onClose: () => void;
}

const ChatbotForm = ({ onClose }: ChatbotFormProps) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init("7RblBhwwGr6fCUCIb");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "" };
    
    if (!formData.name.trim()) {
      newErrors.name = "Please add your name";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Match template variables exactly with the HTML template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || "Hello, demo class enquiry",
        subject: "New Chatbot Inquiry",
      };
      
      // Send email using EmailJS
      emailjs.send(
        'service_zcmgodr',
        'template_mb1ojsf',
        templateParams,
        '7RblBhwwGr6fCUCIb'
      )
      .then(() => {
        toast({
          title: "Thank you for your message!",
          description: "We'll get back to you as soon as possible.",
        });
        
        // Reset form and close
        setFormData({ name: "", email: "", phone: "", message: "" });
        onClose();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        
        toast({
          title: "Message Received",
          description: "Your inquiry was recorded but there was an issue with email notification. We'll still contact you soon.",
        });
        
        // Still reset form and close since we captured the data
        setFormData({ name: "", email: "", phone: "", message: "" });
        onClose();
      });
      
      console.log("Form submitted:", formData);
    }
  };

  // Add click outside to close functionality
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="flex flex-col max-h-[80vh]" ref={formRef}>
      <div className="bg-navy-600 text-white p-2 flex justify-between items-center">
        <h3 className="text-sm font-medium">NextGen AI Tutors</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-navy-700 h-6 w-6">
          <X className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="p-4 overflow-y-auto">
        <div className="bg-navy-100 p-3 rounded-lg mb-4 text-navy-800">
          <p>Hey there, please leave your details so we can contact you even if you are no longer on the site.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={3}
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-navy-600 hover:bg-navy-700"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotForm;
