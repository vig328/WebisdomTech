import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Activity, Zap, Brain, Eye, 
  Rocket, ShieldCheck, HeartHandshake, Laptop,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION - IOT STYLE */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center bg-slate-900">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')`, 
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent" />
        
        <div className="container relative z-20 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-blue-500/20 backdrop-blur-sm mb-6 border border-blue-400/30">
              <span className="text-blue-200 text-sm font-bold tracking-widest uppercase text-[10px] md:text-xs">
                360° Digital Excellence
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed border-l-4 border-blue-500 pl-6 mb-10">
              Comprehensive digital solutions designed to power your business transformation. We don't just build tools; we build growth.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 font-bold shadow-xl transition-all hover:scale-105"
              onClick={() => navigate("/contact")}
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CORE PROCESS SECTION (The "Awesome View" like IOT) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="text-4xl font-extrabold mb-6 text-blue-950 tracking-tight italic">
                How We Deliver Success
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our approach is rooted in <span className="text-blue-600 font-bold border-b-2 border-blue-200">strategic precision</span>. We follow a proven lifecycle to ensure your digital assets are scalable, secure, and successful.
              </p>
            </motion.div>

            {/* 4-Step Process Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                { step: "01", label: "Strategize", detail: "We analyze your market and define a roadmap for growth." },
                { step: "02", label: "Design", detail: "Creating user-centric interfaces that people love to use." },
                { step: "03", label: "Develop", detail: "Building robust, clean code that powers your vision." },
                { step: "04", label: "Optimize", detail: "Continuous monitoring and scaling for peak performance." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-300 hover:shadow-xl transition-all group"
                >
                  <div className="text-4xl font-black text-blue-100 group-hover:text-blue-500 transition-colors mb-4">{item.step}</div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{item.label}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* The Contrast Comparison Box */}
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-8 flex items-center gap-3 text-blue-400">
                    <Activity className="h-10 w-10 text-blue-400 animate-pulse" />
                    The Webisdom Edge
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="mt-1 text-red-500"><CheckCircle2 className="opacity-20 h-6 w-6" /></div>
                      <div>
                        <h4 className="text-red-400 font-bold text-sm uppercase tracking-widest mb-1">Other Agencies</h4>
                        <p className="text-slate-400 leading-relaxed">Standard templates, slow communication, and high maintenance costs with zero scalability.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="mt-1 text-green-500"><CheckCircle2 className="h-6 w-6" /></div>
                      <div>
                        <h4 className="text-green-400 font-bold text-sm uppercase tracking-widest mb-1">The Webisdom Way</h4>
                        <p className="text-slate-200 leading-relaxed">Custom-built performance, 24/7 dedicated support, and data-driven results that scale with you.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] text-center">
                  <h4 className="text-blue-300 font-medium mb-2 uppercase text-xs tracking-tighter">Client Performance Boost</h4>
                  <div className="text-7xl font-black text-white mb-4">4.5x</div>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Average increase in user engagement after implementing our strategic UI/UX and performance optimizations.
                  </p>
                  <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC SERVICE CARDS SECTION */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Explore Our Expertise</h2>
             <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </div>
          <Services showAll={true} />
        </div>
      </section>

      {/* HUMAN-CENTRIC ANALOGY SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 md:p-16 rounded-[3rem] border border-blue-100 max-w-6xl mx-auto"
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 italic">
                Our Digital Ecosystem
              </h3>
              <p className="text-xl text-blue-800/70 leading-relaxed">
                Just like a healthy ecosystem, your business needs different parts working in perfect harmony to survive and thrive.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-100", title: "Security (The Armor)", desc: "We protect your data and reputation with enterprise-grade security protocols." },
                { icon: Rocket, color: "text-orange-600", bg: "bg-orange-100", title: "Scale (The Engine)", desc: "Our systems are built to handle 1 user or 1 million users without breaking a sweat." },
                { icon: HeartHandshake, color: "text-red-600", bg: "bg-red-100", title: "Support (The Heart)", desc: "We don't just finish a project; we partner with you for the long-term journey." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-[2rem] shadow-sm border border-blue-50 hover:shadow-xl transition-all group">
                  <div className={`w-20 h-20 ${item.bg} rounded-3xl flex items-center justify-center mb-6 ${item.color} group-hover:rotate-6 transition-transform`}>
                    <item.icon size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITY GRID SECTION */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            The Full Spectrum of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { text: "Full Stack Web Apps", icon: Laptop },
              { text: "Native Mobile Apps", icon: Zap },
              { text: "AI & Machine Learning", icon: Brain },
              { text: "UI/UX Design Strategy", icon: Eye },
              { text: "Digital Marketing", icon: Activity },
              { text: "Cloud Infrastructure", icon: ShieldCheck },
              { text: "SEO Optimization", icon: Rocket },
              { text: "E-commerce Solutions", icon: Laptop },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all"
              >
                <div className="bg-blue-600 p-2 rounded-lg">
                  <item.icon className="text-white h-5 w-5" />
                </div>
                <span className="font-medium text-slate-200">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;