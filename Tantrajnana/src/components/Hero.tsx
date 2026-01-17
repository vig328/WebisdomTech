import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.webp";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 animate-fade-in"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-scale-in overflow-visible">
            Transform Your Business with
            <span className="inline-block bg-gradient-accent bg-clip-text text-transparent leading-normal">
              Digital Excellence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            Webisdom Tech delivers cutting-edge digital solutions across all
            industries. From cloud computing to IoT, we bring your vision to
            life.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in">
            <button
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-primary text-white px-8 py-3 text-lg font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Explore Services
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white border-2 border-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
