
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import emailjs from '@emailjs/browser';

interface ChatbotFormProps {
  onClose: () => void;
}

interface ChatMessage {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatbotForm = ({ onClose }: ChatbotFormProps) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
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

  const [chatMode, setChatMode] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      content: "Hi there! I'm NextGen AI Tutor. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [conversationId, setConversationId] = useState<string | null>(null);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init("7RblBhwwGr6fCUCIb");
  }, []);

  // Scroll to bottom of chat when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

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
        
        // Switch to chat mode
        setChatMode(true);
        
        // Add personalized welcome message
        setMessages(prev => [...prev, {
          content: `Thanks ${formData.name}! Your details have been submitted. Feel free to ask me any questions about our tutoring services.`,
          isUser: false,
          timestamp: new Date()
        }]);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        
        toast({
          title: "Message Received",
          description: "Your inquiry was recorded but there was an issue with email notification. We'll still contact you soon.",
        });
        
        // Still switch to chat mode
        setChatMode(true);
      });
      
      console.log("Form submitted:", formData);
    }
  };

  const sendChatMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!userInput.trim()) return;
    
    // Add user message to chat
    const userMessage: ChatMessage = {
      content: userInput,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input field
    setUserInput("");
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Send message to API
      const response = await fetch("http://3.27.231.20:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: userMessage.content,
          conversation_id: conversationId
        })
      });
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }
      
      const data = await response.json();
      
      // Store conversation ID if it's the first message
      if (!conversationId && data.conversation_id) {
        setConversationId(data.conversation_id);
      }
      
      // Add bot response to chat
      setMessages(prev => [...prev, {
        content: data.response || "I'm sorry, I couldn't process that request.",
        isUser: false,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error("Chat API error:", error);
      
      // Add error message to chat
      setMessages(prev => [...prev, {
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        isUser: false,
        timestamp: new Date()
      }]);
      
      toast({
        title: "Connection Error",
        description: "Failed to connect to the AI service. Please try again later.",
      });
    } finally {
      setIsLoading(false);
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
    <div className="flex flex-col h-[500px] max-h-[80vh]" ref={formRef}>
      <div className="bg-navy-600 text-white p-2 flex justify-between items-center">
        <h3 className="text-sm font-medium">NextGen AI Tutors</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-navy-700 h-6 w-6">
          <X className="h-3 w-3" />
        </Button>
      </div>
      
      <ScrollArea className="flex-grow overflow-y-auto">
        {!chatMode ? (
          <div className="p-4">
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
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-grow p-4" ref={chatContainerRef}>
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`mb-3 ${msg.isUser ? 'text-right' : 'text-left'}`}
                >
                  <div 
                    className={`inline-block max-w-[85%] px-4 py-2 rounded-lg ${
                      msg.isUser 
                        ? 'bg-navy-600 text-white rounded-tr-none' 
                        : 'bg-gray-100 text-navy-800 rounded-tl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-left mb-3">
                  <div className="inline-block px-4 py-2 rounded-lg bg-gray-100 text-navy-800 rounded-tl-none">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-navy-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-navy-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-navy-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={sendChatMessage} className="p-3 border-t border-gray-200 flex items-center">
              <Input
                type="text"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-grow mr-2"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="bg-navy-600 hover:bg-navy-700 px-3" 
                disabled={isLoading || !userInput.trim()}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default ChatbotForm;
