
interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  [key: string]: any;
}

interface ValidationResult {
  isValid: boolean;
  errors: {
    name: string;
    email: string;
    phone: string;
    [key: string]: string;
  };
}

export function validateForm(data: FormData): ValidationResult {
  const errors = {
    name: "",
    email: "",
    phone: ""
  };
  let isValid = true;
  
  if (!data.name.trim()) {
    errors.name = "Please add your name";
    isValid = false;
  }
  
  if (!data.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Please enter a valid email";
    isValid = false;
  }
  
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
    isValid = false;
  }
  
  return {
    isValid,
    errors
  };
}
