
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

  // Scroll to bottom of chat when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

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
      console.log("Sending request to API:", {
        query: userMessage.content,
        conversation_id: conversationId
      });
      
      // Send message to API
      const response = await fetch("http://3.27.231.20:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Origin": window.location.origin
        },
        body: JSON.stringify({
          query: userMessage.content,
          conversation_id: conversationId
        })
      });
      
      console.log("API response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("API error response:", errorText);
        throw new Error(`Failed to get response from AI (Status: ${response.status})`);
      }
      
      const data = await response.json();
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
        description: "Failed to connect to the AI service. Please check the console for details.",
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
      </ScrollArea>
    </div>
  );
};

export default ChatbotForm;
