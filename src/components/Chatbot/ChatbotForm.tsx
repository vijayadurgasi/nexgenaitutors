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
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      content: "Hi there! I'm NextGen AI Tutor. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const apiUrl = "https://api.nextgenaitutors.com/chat";

  // Scroll to bottom of chat when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus on the input field when the chatbot opens
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
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
    <div className="flex flex-col h-[500px] max-h-[80vh]" ref={formRef}>
      <div className="bg-navy-600 text-white p-3 flex justify-between items-center">
        <h3 className="text-sm font-medium">NextGen AI Tutors</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-navy-700 h-6 w-6">
          <X className="h-3 w-3" />
        </Button>
      </div>
      
      <ScrollArea className="flex-grow overflow-y-auto">
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
          
          <form onSubmit={sendChatMessage} className="sticky bottom-0 p-3 border-t border-gray-200 flex items-center bg-white shadow-md">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-grow mr-2 bg-gray-50 border-navy-200 focus:border-navy-400 focus:ring-2 focus:ring-navy-300"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="bg-navy-600 hover:bg-navy-700 px-4 py-2" 
              disabled={isLoading || !userInput.trim()}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatbotForm;
