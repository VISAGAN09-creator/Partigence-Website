
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, Brain, User, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const ChatAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your personal AI assistant. I've been trained to think and respond just like you would. What would you like to discuss today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sampleResponses = [
    "That's an interesting question! Based on how I understand your thinking style, I'd approach this by first breaking it down into smaller components...",
    "Great point! From your perspective, I think the key consideration here would be the long-term impact rather than just the immediate solution...",
    "I can see why you'd ask that. Given your preference for systematic approaches, let me walk you through how I'd tackle this step by step...",
    "That resonates with your problem-solving style! I'd probably start by gathering more context before making any decisions...",
    "Excellent question! Based on your communication preferences, I think the best way to explain this would be through a practical example...",
  ];

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: sampleResponses[Math.floor(Math.random() * sampleResponses.length)],
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const suggestedQuestions = [
    "How would you approach this problem?",
    "What's your opinion on this topic?",
    "Can you help me think through this decision?",
    "What would be your strategy here?",
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 pt-20 pb-4">
        <div className="container mx-auto max-w-4xl h-full flex flex-col px-4">
          {/* Header */}
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                <Brain className="w-6 h-6 text-white" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Talk to Your <span className="gradient-text">Personal AI</span>
              </h1>
              
              <p className="text-muted-foreground">
                Chat with your AI that thinks and responds just like you would.
              </p>
            </div>
          </div>

          {/* Chat Container */}
          <Card className="flex-1 flex flex-col border-2 border-primary/10 min-h-[500px]">
            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex max-w-[80%] ${
                      message.sender === "user" ? "flex-row-reverse" : "flex-row"
                    } items-start space-x-3`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "user"
                          ? "bg-primary text-white ml-3"
                          : "bg-gradient-to-r from-primary to-accent text-white mr-3"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Brain className="w-4 h-4" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-white/70" : "text-muted-foreground"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-muted px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs border-primary/20 hover:bg-primary/5"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  ref={inputRef}
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 border-primary/20 focus:border-primary"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Your AI is in demo mode. Train your personal AI to get responses tailored to your thinking style.
              </p>
            </div>
          </Card>

          {/* Demo Notice */}
          <Card className="mt-6 border-primary/20 bg-primary/5">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold text-primary">Demo Mode</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                This is a demonstration of how your personal AI will work. To get responses that truly think like you do, you need to train your AI first.
              </p>
              <Link to="/train">
                <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white">
                  Train Your Personal AI
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChatAI;
