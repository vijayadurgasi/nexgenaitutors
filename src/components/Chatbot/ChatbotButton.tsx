
import { useState } from 'react';
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatbotForm from "./ChatbotForm";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={toggleChatbot} 
          className="w-14 h-14 rounded-full bg-navy-600 hover:bg-navy-700 shadow-lg"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out">
          <ChatbotForm onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
