
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("7RblBhwwGr6fCUCIb");

const SERVICE_ID = 'service_zcmgodr';
const DEFAULT_TEMPLATE_ID = 'template_mb1ojsf';
const PUBLIC_KEY = '7RblBhwwGr6fCUCIb';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  subject?: string;
  preferredTime?: string;
  defaultMessage?: string;
  templateId?: string;
  [key: string]: any;
}

export async function sendEmail(data: EmailData): Promise<any> {
  // Prepare email template parameters
  // Note: These fields exactly match what's expected in the HTML template
  const templateParams = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message || data.defaultMessage || "",
    // Include any additional context parameters that might be useful
    subject: data.subject || "New Inquiry",
    preferredTime: data.preferredTime || "",
    // Add reply_to parameter to send a copy to the user
    reply_to: data.email,
  };
  
  console.log("Sending email with parameters:", templateParams);
  
  // Send email using EmailJS
  return emailjs.send(
    SERVICE_ID,
    data.templateId || DEFAULT_TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
}
