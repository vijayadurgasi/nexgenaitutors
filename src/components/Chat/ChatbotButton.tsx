'use client'

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatbotForm from "./ChatbotForm";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatbotRef = useRef<HTMLDivElement>(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          onClick={toggleChatbot} 
          className="w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-navy-600 hover:bg-navy-700 shadow-lg"
          size="icon"
        >
          {isOpen ? (
            <X className="h-5 lg:h-8 w-5 lg:w-8 text-white" />
          ) : (
            <MessageCircle className="h-5 lg:h-12 w-5 lg:w-12 text-white" />
          )}
        </Button>
      </div>

      {isOpen && (
        <div 
          ref={chatbotRef} 
          className="fixed bottom-20 right-4 z-50 w-[320px] md:w-[380px] bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out border border-gray-200"
          style={{ maxHeight: 'calc(100vh - 120px)' }}
        >
          <ChatbotForm onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
