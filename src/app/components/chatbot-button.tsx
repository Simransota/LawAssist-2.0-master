"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltipchatbot";
import { Input } from "../components/ui/input";
import { ScrollArea } from "../components/ui/ScrollArea";
import { MessageCircle, Scale, Send, X } from "lucide-react";
import { FaUser, FaRobot } from "react-icons/fa"; // Import user and bot icons

type Message = {
  text: string;
  sender: "user" | "bot";
  time: string; // Add timestamp for messages
};

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState<"client" | "lawyer" | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [botTyping, setBotTyping] = useState(false); // For bot typing status

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const timestamp = new Date().toLocaleTimeString();
      setMessages([...messages, { text: inputMessage, sender: "user", time: timestamp }]);
      setInputMessage("");
      
      setBotTyping(true); // Simulate bot typing
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `This is a simulated response to: "${inputMessage}"`, sender: "bot", time: timestamp },
        ]);
        setBotTyping(false); // Stop typing indicator
      }, 1000);
    }
  };

  const closeChatbot = () => {
    setIsOpen(false);
    setUserType(null);
    setMessages([]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="default"
              size="lg"
              className={`rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out ${
                isOpen ? "scale-105" : "hover:scale-110"
              } ${
                !isOpen && "animate-bounce"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Open Chatbot</span>
            </Button>
          </TooltipTrigger>
          {/* <TooltipContent side="left" align="center">
            <p>Open Legal Assistant</p>
          </TooltipContent> */}
        </Tooltip>
      </TooltipProvider>

      {isOpen && !userType && (
        <div className="absolute bottom-16 right-0 flex flex-col space-y-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-black text-secondary-foreground hover:bg-secondary/90"
            onClick={() => setUserType("client")}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Ask a Lawyer
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-black text-secondary-foreground hover:bg-secondary/90"
            onClick={() => setUserType("lawyer")}
          >
            <Scale className="mr-2 h-4 w-4" />
            Legal Assistant
          </Button>
        </div>
      )}

      {userType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-lg bg-card p-6 shadow-lg space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-center">
                {userType === "client" ? "Ask a Lawyer" : "Legal Assistant"}
              </h2>
              <Button variant="ghost" size="icon" onClick={closeChatbot}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <ScrollArea className="h-[300px] mb-4 p-4 border rounded-lg shadow-inner bg-muted">
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start mb-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  {message.sender === "user" ? (
                    <FaUser className="top-5 relative w-6 h-6 text-primary mr-2" /> // User icon
                  ) : (
                    <FaRobot className="top-5 relative w-6 h-6 text-primary ml-2" /> // Bot icon
                  )}
                  <div
                    className={`p-3 rounded-xl shadow-md ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    } max-w-[80%] break-words`}
                  >
                    <div className="text-sm">{message.text}</div>
                    <div className="text-xs text-muted mt-1">{message.time}</div>
                  </div>
                </div>
              ))}
              {botTyping && (
                <div className="text-sm text-muted italic">Bot is typing...</div>
              )}
            </ScrollArea>

            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                className="rounded-full px-4 py-2"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="rounded-full p-2 bg-black">
                <Send className="h-4 w-4 text-white" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
