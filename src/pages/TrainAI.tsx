
import { useState } from "react";
import { ArrowLeft, Brain, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TrainAI = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    fieldOfWork: "",
    problemSolvingApproach: "",
    favoriteTools: "",
    communicationStyle: "",
    sampleProblem: "",
    sampleSolution: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "AI Training Started!",
      description: "Your personal AI is being trained with your data. You'll be notified when it's ready.",
    });

    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      fieldOfWork: "",
      problemSolvingApproach: "",
      favoriteTools: "",
      communicationStyle: "",
      sampleProblem: "",
      sampleSolution: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                <Brain className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Train Your <span className="gradient-text">Personal AI</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Help us understand how you think and work so we can create your perfect AI companion.
              </p>
            </div>
          </div>

          {/* Form */}
          <Card className="border-2 border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl">Tell Us About Yourself</CardTitle>
              <CardDescription>
                The more details you provide, the better your AI will understand and replicate your thinking patterns.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fieldOfWork">Field of Work *</Label>
                    <Input
                      id="fieldOfWork"
                      placeholder="e.g., Software Development, Marketing, Research"
                      value={formData.fieldOfWork}
                      onChange={(e) => handleInputChange("fieldOfWork", e.target.value)}
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Problem-Solving Approach */}
                <div className="space-y-2">
                  <Label htmlFor="problemSolvingApproach">Problem-Solving Approach *</Label>
                  <Textarea
                    id="problemSolvingApproach"
                    placeholder="Describe how you typically approach and solve problems. Do you break them down into smaller parts? Do you prefer to research first? What's your thinking process?"
                    value={formData.problemSolvingApproach}
                    onChange={(e) => handleInputChange("problemSolvingApproach", e.target.value)}
                    required
                    className="min-h-[120px] border-primary/20 focus:border-primary"
                  />
                </div>

                {/* Tools and Methods */}
                <div className="space-y-2">
                  <Label htmlFor="favoriteTools">Favorite Tools and Methods *</Label>
                  <Textarea
                    id="favoriteTools"
                    placeholder="What tools, frameworks, methodologies, or techniques do you use regularly? Include software, workflows, or mental models that are important to your work."
                    value={formData.favoriteTools}
                    onChange={(e) => handleInputChange("favoriteTools", e.target.value)}
                    required
                    className="min-h-[100px] border-primary/20 focus:border-primary"
                  />
                </div>

                {/* Communication Style */}
                <div className="space-y-2">
                  <Label htmlFor="communicationStyle">Communication Style *</Label>
                  <Textarea
                    id="communicationStyle"
                    placeholder="How do you prefer to communicate? Are you direct or diplomatic? Do you use analogies? Do you prefer detailed explanations or concise answers?"
                    value={formData.communicationStyle}
                    onChange={(e) => handleInputChange("communicationStyle", e.target.value)}
                    required
                    className="min-h-[100px] border-primary/20 focus:border-primary"
                  />
                </div>

                {/* Sample Problem and Solution */}
                <div className="space-y-6 p-6 bg-muted/30 rounded-lg border border-primary/10">
                  <h3 className="text-lg font-semibold">Sample Problem & Solution</h3>
                  <p className="text-sm text-muted-foreground">
                    Provide a real example of a problem you've solved and your solution. This helps us understand your practical approach.
                  </p>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sampleProblem">Sample Problem *</Label>
                    <Textarea
                      id="sampleProblem"
                      placeholder="Describe a specific problem or challenge you've faced in your work..."
                      value={formData.sampleProblem}
                      onChange={(e) => handleInputChange("sampleProblem", e.target.value)}
                      required
                      className="min-h-[100px] border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sampleSolution">Your Solution *</Label>
                    <Textarea
                      id="sampleSolution"
                      placeholder="Explain how you solved this problem, including your thought process, steps taken, and the outcome..."
                      value={formData.sampleSolution}
                      onChange={(e) => handleInputChange("sampleSolution", e.target.value)}
                      required
                      className="min-h-[120px] border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white text-lg px-8 py-6 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Training Your AI...
                      </>
                    ) : (
                      <>
                        Start AI Training
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-primary">Privacy & Security</h3>
                <p className="text-sm text-muted-foreground">
                  Your data is encrypted and used only to train your personal AI model. We never share your information with third parties.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-primary">Training Time</h3>
                <p className="text-sm text-muted-foreground">
                  Your AI will be ready in 24-48 hours. You'll receive an email notification when training is complete.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrainAI;
