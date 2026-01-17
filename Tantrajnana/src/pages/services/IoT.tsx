import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Wifi, Smartphone, Radio, Network, Cpu, LineChart, 
  Eye, Zap, Brain, Activity, Leaf, Lightbulb, Users, CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

const IoT = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Network, title: "Device Connectivity", description: "Seamlessly connect and manage thousands of IoT devices" },
    { icon: Cpu, title: "Real-time Processing", description: "Process data in real-time for instant insights and actions" },
    { icon: LineChart, title: "Analytics & Insights", description: "Advanced analytics to derive actionable business intelligence" },
    { icon: Radio, title: "Secure Communication", description: "End-to-end encryption for secure device communication" },
    { icon: Smartphone, title: "Remote Monitoring", description: "Monitor and control devices from anywhere in the world" }
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
      
      {/* HERO SECTION WITH IMAGE & OVERLAY */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-transparent" />

        <div className="container relative z-20 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-blue-500/20 backdrop-blur-md mb-6 border border-blue-400/30">
              <span className="text-blue-200 text-sm font-bold tracking-widest uppercase text-[10px] md:text-xs">Smart Connected World</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Internet of Things (IoT)
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mb-10 leading-relaxed pl-4 border-l-4 border-blue-500">
              Transforming traditional objects into intelligent, connected systems. 
              We give your hardware a voice and the ability to think.
            </p>
            <div className="flex flex-wrap gap-4">
               <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg px-8 transition-all hover:scale-105" onClick={() => navigate("/contact")}>
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-24">
            
            {/* --- WHAT IS IOT? - THE "AWESOME VIEW" --- */}
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -left-6 top-0 w-1.5 h-full bg-gradient-to-b from-blue-600 via-blue-400 to-transparent rounded-full hidden lg:block" />
              
              <div className="mb-10">
                <h2 className="text-4xl font-extrabold mb-6 text-blue-950 tracking-tight italic">
                  What is IoT?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The <span className="text-blue-600 font-bold border-b-2 border-blue-200">Internet of Things (IoT)</span> is like a giant nervous system for the planet. It connects everyday items—from farm tractors to lightbulbs—to the internet so they can send us information and follow our commands automatically.
                </p>
              </div>

              {/* 4-Step Process Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                {[
                  { step: "01", label: "Sense", detail: "Devices use sensors to 'feel' things like heat, sound, or movement." },
                  { step: "02", label: "Send", detail: "That data is sent instantly through the air using the Internet." },
                  { step: "03", label: "Think", detail: "A computer 'brain' analyzes the data to see if something is wrong." },
                  { step: "04", label: "Act", detail: "The device takes action, like sending an alert to your phone." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-blue-300 hover:shadow-xl transition-all group"
                  >
                    <div className="text-4xl font-black text-blue-100 group-hover:text-blue-500 transition-colors mb-4">{item.step}</div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{item.label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </motion.div>
                ))}
              </div>

              {/*  */}

              {/* The Contrast & Comparison Box */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mt-12">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-blue-400">
                      <Activity className="h-8 w-8 text-blue-400 animate-pulse" />
                      The Power of Connection
                    </h3>
                    
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="mt-1 text-red-500"><CheckCircle2 className="opacity-20" /></div>
                        <div>
                          <h4 className="text-red-400 font-bold text-sm uppercase tracking-widest mb-1">Traditional Method</h4>
                          <p className="text-slate-400 leading-relaxed">You manually check your machines or water tanks every day. You only find problems after they break.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="mt-1 text-green-500"><CheckCircle2 /></div>
                        <div>
                          <h4 className="text-green-400 font-bold text-sm uppercase tracking-widest mb-1">The IoT Method</h4>
                          <p className="text-slate-200 leading-relaxed">Your machines monitor themselves 24/7. They "text" you before a problem even happens, saving time and money.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2rem] text-center lg:text-left">
                    <h4 className="text-blue-300 font-medium mb-2 uppercase text-xs tracking-tighter">System Reliability</h4>
                    <div className="text-6xl font-black text-white mb-4">99.9%</div>
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                      Our IoT systems provide constant uptime, ensuring you never lose touch with your assets.
                    </p>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "99.9%" }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- UNDERSTANDING IOT SIMPLY (Human Body Analogy) --- */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 md:p-12 rounded-[2.5rem] border border-blue-100"
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                  New to Technology?
                </h3>
                <p className="text-lg text-blue-800/70">
                  Think of IoT like the human body. It’s the easiest way to understand how billions of machines talk.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Eye, color: "text-blue-600", bg: "bg-blue-100", title: "The Senses", desc: "Just like your eyes see, IoT 'sensors' feel things like temperature or soil moisture." },
                  { icon: Zap, color: "text-yellow-600", bg: "bg-yellow-100", title: "The Nerves", desc: "Information travels through the air (the Internet) just like nerves send signals to your brain." },
                  { icon: Brain, color: "text-green-600", bg: "bg-green-100", title: "The Brain", desc: "A computer receives the message and decides to act, like turning on a pump automatically." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-blue-50">
                    <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4 ${item.color}`}>
                      <item.icon size={28} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-blue-200 text-center">
                <p className="text-blue-900 italic font-medium">
                  <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full mr-2 not-italic align-middle">PRO TIP</span>
                  In the past, you went to the machine. With IoT, the machine comes to you (on your phone)!
                </p>
              </div>
            </motion.div>

            {/* --- ENHANCEMENT LIST --- */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-10 text-blue-900 text-center md:text-left">
                How We Enhance Your IoT Journey
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { text: "Custom Platform Development", icon: Cpu },
                  { text: "Predictive Maintenance (Fix early)", icon: Activity },
                  { text: "Real-time Data Processing", icon: Zap },
                  { text: "Smart Energy Saving Solutions", icon: Lightbulb },
                  { text: "Modern Farming & Agri-Tech", icon: Leaf },
                  { text: "Secure Data Encryption", icon: Radio },
                  { text: "Beginner-Friendly Training", icon: Users },
                  { text: "Easy-to-use Mobile Apps", icon: Smartphone },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10, backgroundColor: "#f1f5f9" }}
                    className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all"
                  >
                    <div className="bg-blue-600 p-2.5 rounded-xl shadow-md shadow-blue-100">
                      <item.icon className="text-white h-5 w-5" />
                    </div>
                    <span className="font-semibold text-slate-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-950 tracking-tight">Enterprise IoT Capabilities</h2>
            <p className="text-muted-foreground">Professional-grade infrastructure for your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} whileHover={{ y: -10 }}>
                  <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white overflow-hidden group">
                    <CardContent className="pt-10 p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-blue-200 shadow-xl group-hover:rotate-12 transition-transform">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoT;