
import { ArrowRight, Brain, MessageCircle, Settings, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const steps = [
    {
      icon: Settings,
      title: "Share your way of working and thinking",
      description: "Tell us about your problem-solving approach, favorite tools, and communication style. The more you share, the better your AI becomes.",
    },
    {
      icon: Brain,
      title: "Let our system build your personal AI model",
      description: "Our advanced AI analyzes your patterns and creates a personalized model that understands your unique way of thinking.",
    },
    {
      icon: MessageCircle,
      title: "Ask questions — your AI answers like you would",
      description: "Interact with your personal AI that responds with your perspective, knowledge, and problem-solving style.",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Personalized Intelligence",
      description: "Your AI learns and adapts to your unique thinking patterns and work style.",
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Get immediate answers and solutions that align with your approach to problem-solving.",
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Your AI evolves and improves as it learns more about how you work and think.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">The Future of Personal AI</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your <span className="gradient-text">Personal AI</span>
              <br />
              Second Brain
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A personalized AI that learns how <strong>YOU</strong> think, work, and solve problems — 
              and answers questions like your second brain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/train">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white text-lg px-8 py-6 group">
                  Start Training Your AI
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/chat">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5">
                  Try Demo Chat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating AI Brain Animation */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <div className="relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-logo-red to-logo-green rounded-full flex items-center justify-center animate-float">
              <Brain className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-logo-red to-logo-green rounded-full animate-pulse-glow opacity-50"></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to create your own personal AI that thinks and responds like you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-logo-red to-logo-green rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="w-8 h-8 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">MyPersonalAI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of truly personalized artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="gradient-text">Personal AI</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start training your AI today and experience the future of personalized intelligence.
          </p>
          
          <Link to="/train">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white text-lg px-8 py-6 group">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
