import { Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AISection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Brain className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">AI Solutions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Explore Our AI Solutions
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover how artificial intelligence can transform your business. Our AI-powered solutions 
                help you automate processes, gain insights, and stay ahead of the competition.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">Machine Learning & Predictive Analytics</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">Natural Language Processing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">Computer Vision & Image Recognition</p>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://webisdom.ai/', '_blank')}
              >
                Explore AI Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right Visual */}
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border-2 border-primary/20 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-background/80 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">AI-Powered Analytics</div>
                      <div className="text-sm text-muted-foreground">Real-time insights</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-background/80 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Smart Automation</div>
                      <div className="text-sm text-muted-foreground">Streamline workflows</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-background/80 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Predictive Models</div>
                      <div className="text-sm text-muted-foreground">Data-driven decisions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
