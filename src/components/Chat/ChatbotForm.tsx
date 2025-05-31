'use client'

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      content: "Hi there! I'm NextGen AI Assistant. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const apiUrl = "https://api.nextgenaitutors.com/chat";

  // Helper function to scroll to bottom
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      } else if (chatContainerRef.current) {
        let element: HTMLElement | null = chatContainerRef.current;
        while (element) {
          if (element.scrollHeight > element.clientHeight) {
            element.scrollTop = element.scrollHeight;
            break;
          }
          element = element.parentElement;
          if (!element) break;
        }
      }
    }
  };

  // Scroll to bottom of chat when new messages appear
  useEffect(() => {
    // We need to wait for the messages to render before scrolling
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }, [messages]);

  // Focus on the input field when the chatbot opens
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Initial scroll to bottom
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }, []);

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
    
    // Scroll to bottom after adding user message
    setTimeout(() => {
      scrollToBottom();
    }, 50);
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Prepare request payload
      const payload = {
        query: userMessage.content,
        conversation_id: conversationId
      };
      
      console.log("Sending request to API:", payload);
      console.log("API URL:", apiUrl);

      // Use XMLHttpRequest instead of fetch for better CORS compatibility
      const xhr = new XMLHttpRequest();
      xhr.open("POST", apiUrl, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Origin", window.location.origin);
      
      xhr.onload = function() {
        console.log("Response status:", xhr.status);
        console.log("Response headers:", xhr.getAllResponseHeaders());
        
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            console.log("API response data:", data);
            
            // Store conversation ID if it's the first message
            if (!conversationId && data.conversation_id) {
              setConversationId(data.conversation_id);
              console.log("Set conversation ID:", data.conversation_id);
            }
            
            // Add bot response to chat
            setMessages(prev => [...prev, {
              content: data.response || "I'm sorry, I couldn't process that request.",
              isUser: false,
              timestamp: new Date()
            }]);
          } catch (parseError) {
            console.error("Error parsing response:", parseError);
            handleError("Failed to parse the API response");
          }
        } else {
          console.error("API error response status:", xhr.status);
          console.error("API error response text:", xhr.responseText);
          handleError(`API responded with error: ${xhr.status}`);
        }
        
        setIsLoading(false);
      };
      
      xhr.onerror = function() {
        console.error("Network error occurred");
        handleError("Network error occurred while connecting to the API");
        setIsLoading(false);
      };
      
      xhr.send(JSON.stringify(payload));
      
    } catch (error) {
      console.error("Chat API error:", error);
      handleError("An unexpected error occurred");
      setIsLoading(false);
    }
  };
  
  const handleError = (errorMessage: string) => {
    // Add error message to chat
    setMessages(prev => [...prev, {
      content: "Sorry, I'm having trouble connecting right now. Please try again later.",
      isUser: false,
      timestamp: new Date()
    }]);
    
    toast({
      title: "Connection Error",
      description: errorMessage,
      variant: "destructive"
    });
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
    <div className="flex flex-col h-[500px] max-h-[80vh] rounded-lg shadow-lg border border-gray-200 dark:border-navy-900 overflow-hidden" ref={formRef}>
      <div className="bg-navy-800 text-white p-3 flex justify-between items-center rounded-t-lg">
        <h3 className="text-sm font-medium">NextGen AI Assistant</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:text-white hover:bg-navy-700 h-6 w-6">
          <X className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="flex-grow flex flex-col overflow-hidden bg-white dark:bg-gray-900">
        <ScrollArea className="flex-grow relative" ref={scrollAreaRef}>
          <div className="p-4 min-h-full" ref={chatContainerRef}>
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={`mb-4 ${msg.isUser ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block max-w-[85%] px-4 py-2.5 rounded-2xl ${
                    msg.isUser 
                      ? 'bg-navy-600 text-white rounded-br-none' 
                      : 'bg-gray-100 dark:bg-navy-300 text-navy-950 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                </div>
                <div className="text-xs text-gray-500 mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block px-4 py-2.5 rounded-2xl bg-gray-100 text-navy-800 rounded-bl-none">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-navy-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-navy-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-navy-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <form onSubmit={sendChatMessage} className="p-3 border-t border-gray-200 dark:border-none flex items-center bg-white dark:bg-navy-900 rounded-b-lg shadow-inner">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-grow mr-2 text-black bg-gray-50 border-navy-200 focus:border-navy-400 focus:ring-2 focus:ring-navy-300 rounded-full"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            className="bg-navy-600 text-white w-12 h-10 hover:bg-navy-600 rounded-full" 
            disabled={isLoading || !userInput.trim()}
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotForm;
