import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import AISection from "@/components/AISection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services showAll={false} />
      <AISection />
      <Clients />
      <Testimonials />
      
      {/* Get In Touch CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-white text-primary hover:bg-white/90 hover:text-primary border-white"
          >
            Get In Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
