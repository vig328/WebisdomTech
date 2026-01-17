import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Users, Globe, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Add this line
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const stats = [
    { number: "859", label: "Satisfied Clients", icon: Users },
    { number: "1,800", label: "Completed Projects", icon: Award },
    { number: "8", label: "Countries Served", icon: Globe },
  ];

  const team = [
    {
      name: "Amardeep Bajpai",
      role: "FOUNDER, IIM-A ALUMNUS",
      image: "https://webisdomtech.com/amardeep.jpg",
      description: "Mr. Amardeep Bajpai did his management education from the prestigious Indian Institute of Management, Ahmedabad.",
      linkedin: "https://in.linkedin.com/company/webisdom"
    },
    {
      name: "Gourav Singh",
      role: "Sr. Vice President, BD & Client Servicing",
      image: "https://webisdomtech.com/gourav.jpg",
      description: "Accomplishes project objectives by planning and evaluating project activities.",
      linkedin: "https://in.linkedin.com/company/webisdom"
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* HERO SECTION WITH BACKGROUND IMAGE (IOT Style) */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`, 
          }}
        />
        {/* Professional Deep Blue Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-transparent" />

        <div className="container relative z-20 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-blue-500/20 backdrop-blur-md mb-6 border border-blue-400/30">
              <span className="text-blue-200 text-sm font-bold tracking-widest uppercase">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About Webisdom Tech
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light pl-4 border-l-4 border-blue-500 italic">
              "Young DNA… But Enduring Values"
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                We transform digital technology in favor of our clients
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div {...fadeInUp} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Webisdom, a digital enterprise solutions company, helps clients develop business models for the new age. We are a community of diligent experts across different spheres working together to develop streamlined digital transformation solutions.
                </p>
                <p>
                  Our team comprises digital strategists, user experience innovators, visualizers, creative content developers, and management consultants. We are your best asset in combating digital disruption.
                </p>
              </motion.div>
              
              <motion.div {...fadeInUp} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="font-semibold text-blue-900">
                  Our uniqueness stems from our IP-based methodology called "DCOE" (Digital Center of Excellence).
                </p>
                <p>
                  We disentangle node-based digital issues to repair and improve each part of a business, streamlining it to the entire business process. With a global presence in the Gulf, US, and UK, our culture is strictly client-oriented.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border-none shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden bg-white">
                  <CardContent className="pt-12 pb-8">
                    <stat.icon className="h-10 w-10 text-blue-500 mx-auto mb-4 opacity-20" />
                    <div className="text-5xl font-black text-blue-600 mb-2">
                      {stat.number}+
                    </div>
                    <div className="text-sm uppercase tracking-widest font-bold text-slate-500">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Meet Our Leadership
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are ordinary people, engaged in doing extraordinary things.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-1 text-slate-900">{member.name}</h3>
                      <p className="text-blue-600 font-bold text-xs uppercase tracking-tighter mb-4">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                        "{member.description}"
                      </p>
                      <div className="pt-4 border-t border-slate-100">
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors font-semibold text-sm"
                        >
                          <Linkedin className="h-5 w-5" />
                          Connect on LinkedIn
                        </a>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <TrendingUp className="absolute -right-10 -bottom-10 h-96 w-96 rotate-12" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to start your digital journey?</h2>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50 px-10 rounded-full font-bold shadow-xl"
            onClick={() => navigate("/contact")}
          >
            Work With Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;