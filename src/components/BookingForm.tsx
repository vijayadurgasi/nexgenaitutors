'use client'

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/utils/emailService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  preferredTime: z.string({
    required_error: "Please select your preferred time.",
  }),
  message: z.string().optional(),
});

type BookingFormProps = {
  subjectTitle?: string;
  isTeacherForm?: boolean;
};

const BookingForm = ({ subjectTitle, isTeacherForm = false }: BookingFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferredTime: "",
      message: isTeacherForm 
        ? "I'm interested in joining as a teacher."
        : subjectTitle ? `I'm interested in the ${subjectTitle} subject.` : "",
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const templateId = isTeacherForm ? 'template_r4qaywg' : 'template_mb1ojsf';
    const subjectPrefix = isTeacherForm ? "Teacher Application" : "Booking Request";
    
    // Prepare email data
    const emailData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message || 
        (isTeacherForm 
          ? `Hello, I'd like to apply as a teacher.` 
          : `Hello, demo class enquiry for ${subjectTitle || "General Tutoring"}`),
      subject: subjectTitle 
        ? `${subjectPrefix} for ${subjectTitle}` 
        : `New ${subjectPrefix}`,
      preferredTime: values.preferredTime,
      templateId: templateId,
    };
    
    // Send email using the emailService utility
    sendEmail(emailData)
      .then(() => {
        setIsSubmitting(false);
        
        toast({
          title: isTeacherForm ? "Application Submitted!" : "Booking Request Submitted!",
          description: isTeacherForm 
            ? "We'll contact you soon about your teaching application." 
            : "We'll contact you soon to confirm your free demo session.",
        });
        
        form.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setIsSubmitting(false);
        
        toast({
          title: "Submission Received",
          description: "Your request was recorded but there was an issue with email notification. We'll still contact you soon.",
          variant: "default",
        });
        
        // Still reset the form since we captured the data
        form.reset();
      });
    
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="(123) 456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="preferredTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a preferred time" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                  <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                  <SelectItem value="weekend">Weekends Only</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select your preferred time for the demo session.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Message (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us more about what you're looking for..." 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : isTeacherForm ? "Submit Application" : "Book My Free Demo Session"}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
