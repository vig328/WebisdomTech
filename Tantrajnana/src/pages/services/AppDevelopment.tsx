import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Smartphone, Tablet, Watch, Layers, RefreshCw, Bell, 
  Layout, Code, Globe, PenTool, Rocket, ShieldCheck, Zap, Activity 
} from "lucide-react";
import { motion } from "framer-motion";

const AppDevelopment = () => {
  const navigate = useNavigate();

  const capabilities = [
    { icon: Smartphone, title: "Native Apps", description: "High-performance native apps for iOS and Android platforms" },
    { icon: Layers, title: "Cross-Platform", description: "Build once, deploy everywhere with React Native and Flutter" },
    { icon: Tablet, title: "Tablet Optimization", description: "Optimized experiences for tablets and larger screens" },
    { icon: Watch, title: "Wearable Apps", description: "Apps for smartwatches and wearable devices" },
    { icon: Bell, title: "Push Notifications", description: "Engage users with timely and relevant notifications" },
    { icon: RefreshCw, title: "Offline Sync", description: "Seamless offline functionality with automatic sync" }
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
        {/* Background Image - Mobile App Focused */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-indigo-950/95 via-indigo-900/80 to-transparent" />

        <div className="container relative z-20 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-indigo-500/20 backdrop-blur-md mb-6 border border-indigo-400/30">
              <span className="text-indigo-200 text-sm font-bold tracking-widest uppercase text-[10px] md:text-xs">Mobile First Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              App Development
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mb-10 leading-relaxed pl-4 border-l-4 border-indigo-500">
              Build powerful mobile applications that engage users and drive business success. 
              We turn your ideas into high-performance digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
               <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-none shadow-lg px-8 transition-all hover:scale-105" onClick={() => navigate("/contact")}>
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-24">
            
            {/* --- WHAT IS APP DEVELOPMENT? - THE "AWESOME VIEW" --- */}
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -left-6 top-0 w-1.5 h-full bg-gradient-to-b from-indigo-600 via-indigo-400 to-transparent rounded-full hidden lg:block" />
              
              <div className="mb-10">
                <h2 className="text-4xl font-extrabold mb-6 text-indigo-950 tracking-tight italic">
                  What is Mobile App Development?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Mobile app development is the art of creating software designed to run on the devices we carry everywhere. It’s about more than just code; it’s about creating a <span className="text-indigo-600 font-bold border-b-2 border-indigo-200">digital tool</span> that makes life easier, faster, and more connected for your users.
                </p>
              </div>

              {/* 4-Step Process Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                {[
                  { step: "01", label: "Strategy", detail: "We define the purpose and user journey of your application." },
                  { step: "02", label: "Design", detail: "Creating beautiful, easy-to-use screens and buttons." },
                  { step: "03", label: "Develop", detail: "Building the engine that makes the app fast and secure." },
                  { step: "04", label: "Launch", detail: "Deploying to the App Store and Google Play for the world." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-300 hover:shadow-xl transition-all group"
                  >
                    <div className="text-4xl font-black text-indigo-100 group-hover:text-indigo-500 transition-colors mb-4">{item.step}</div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{item.label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </motion.div>
                ))}
              </div>

              {/*  */}

              {/* The Contrast & Comparison Box */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mt-12">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-600 rounded-full blur-[120px] opacity-20" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-indigo-400">
                      <Zap className="h-8 w-8 text-indigo-400 animate-pulse" />
                      Mobile Performance
                    </h3>
                    
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="mt-1 text-red-500"><Activity className="opacity-20" /></div>
                        <div>
                          <h4 className="text-red-400 font-bold text-sm uppercase tracking-widest mb-1">Generic Web Apps</h4>
                          <p className="text-slate-400 leading-relaxed">Often slow on phones and don't work without internet. They feel like a website squeezed into a small screen.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="mt-1 text-green-500"><ShieldCheck /></div>
                        <div>
                          <h4 className="text-green-400 font-bold text-sm uppercase tracking-widest mb-1">Our Managed Apps</h4>
                          <p className="text-slate-200 leading-relaxed">Lightning fast, works offline, and uses the phone's full power (Camera, GPS, FaceID) for a premium feel.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2rem] text-center lg:text-left">
                    <h4 className="text-indigo-300 font-medium mb-2 uppercase text-xs tracking-tighter">User Retention</h4>
                    <div className="text-6xl font-black text-white mb-4">85%</div>
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                      Our apps are designed to keep users coming back through intuitive UI and smart notifications.
                    </p>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- UNDERSTANDING APP DEV SIMPLY (House Analogy) --- */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-indigo-50 p-8 md:p-12 rounded-[2.5rem] border border-indigo-100"
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">
                  New to App Building?
                </h3>
                <p className="text-lg text-indigo-800/70">
                  Think of building an app like building a house. It’s easier to understand when you look at the parts.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: PenTool, color: "text-indigo-600", bg: "bg-indigo-100", title: "The Blueprint", desc: "Before we build, we draw exactly how every screen will look so you know the result." },
                  { icon: Code, color: "text-purple-600", bg: "bg-purple-100", title: "The Foundation", desc: "We write the 'code' (instructions) that makes the app strong, secure, and stable." },
                  { icon: Layout, color: "text-pink-600", bg: "bg-pink-100", title: "The Interior", desc: "We add the buttons and colors that make it easy for anyone to walk in and use." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-indigo-50">
                    <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4 ${item.color}`}>
                      <item.icon size={28} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-indigo-200 text-center">
                <p className="text-indigo-900 italic font-medium">
                  <span className="bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full mr-2 not-italic align-middle">PRO TIP</span>
                  A great app doesn't just look good—it solves a problem in 3 clicks or less!
                </p>
              </div>
            </motion.div>

            {/* --- ENHANCEMENT LIST --- */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-10 text-indigo-900 text-center md:text-left">
                How We Enhance Your Mobile Strategy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { text: "Native iOS & Android Development", icon: Smartphone },
                  { text: "Cross-Platform (React Native/Flutter)", icon: Globe },
                  { text: "User-Centric UI/UX Design", icon: PenTool },
                  { text: "Secure Payment Integrations", icon: ShieldCheck },
                  { text: "Real-time Chat & Notifications", icon: Bell },
                  { text: "Backend API & Cloud Sync", icon: RefreshCw },
                  { text: "Full App Store Management", icon: Rocket },
                  { text: "Continuous Maintenance & Support", icon: Activity },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10, backgroundColor: "#f1f5f9" }}
                    className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all"
                  >
                    <div className="bg-indigo-600 p-2.5 rounded-xl shadow-md shadow-indigo-100">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-950 tracking-tight">Mobile Development Capabilities</h2>
            <p className="text-muted-foreground">Expert solutions for every screen size and platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div key={index} whileHover={{ y: -10 }}>
                  <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white overflow-hidden group">
                    <CardContent className="pt-10 p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-2xl flex items-center justify-center mb-8 shadow-indigo-200 shadow-xl group-hover:rotate-12 transition-transform">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">{capability.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
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

export default AppDevelopment;