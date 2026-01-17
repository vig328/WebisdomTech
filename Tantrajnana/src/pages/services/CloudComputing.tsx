import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Cloud, Shield, Zap, TrendingUp, Database, Lock, 
  Server, HardDrive, Cpu, Globe, RefreshCcw, CheckCircle2, Activity
} from "lucide-react";
import { motion } from "framer-motion";

const CloudComputing = () => {
  const navigate = useNavigate();

  const benefits = [
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade security with advanced encryption and compliance standards" },
    { icon: Zap, title: "High Performance", description: "Lightning-fast response times with optimized infrastructure" },
    { icon: TrendingUp, title: "Scalability", description: "Seamlessly scale resources based on your business needs" },
    { icon: Database, title: "Data Management", description: "Efficient data storage and retrieval with automated backups" },
    { icon: Lock, title: "Disaster Recovery", description: "Robust backup solutions ensuring business continuity" }
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
        {/* Background Image - High Tech Cloud Infrastructure */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
          }}
        />
        {/* Deep Sky Blue / Cobalt Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-sky-950/95 via-blue-900/80 to-transparent" />

        <div className="container relative z-20 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-sky-500/20 backdrop-blur-md mb-6 border border-sky-400/30">
              <span className="text-sky-200 text-sm font-bold tracking-widest uppercase text-[10px] md:text-xs">Infinite Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cloud Computing
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mb-10 leading-relaxed pl-4 border-l-4 border-sky-500">
              Transform your business with scalable, secure, and cost-effective cloud infrastructure. 
              Access unlimited power from anywhere in the world.
            </p>
            <div className="flex flex-wrap gap-4">
               <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white border-none shadow-lg px-8 transition-all hover:scale-105" onClick={() => navigate("/contact")}>
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-24">
            
            {/* --- WHAT IS CLOUD? - THE "AWESOME VIEW" --- */}
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -left-6 top-0 w-1.5 h-full bg-gradient-to-b from-sky-600 via-sky-400 to-transparent rounded-full hidden lg:block" />
              
              <div className="mb-10">
                <h2 className="text-4xl font-extrabold mb-6 text-sky-950 tracking-tight italic">
                  What is Cloud Computing?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Cloud computing is the delivery of computing services—including servers, storage, and software—over the <span className="text-sky-600 font-bold border-b-2 border-sky-200">Internet</span>. Instead of owning and maintaining physical data centers and servers, you rent access to power and storage from a provider like us.
                </p>
              </div>

              {/* 4-Step Process Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                {[
                  { step: "01", label: "Virtualize", detail: "Your hardware is turned into digital, flexible resources." },
                  { step: "02", label: "Store", detail: "Data is kept safely in global, high-security data centers." },
                  { step: "03", label: "Scale", detail: "Instantly add more power as your business grows larger." },
                  { step: "04", label: "Access", detail: "Login and work from any device, anywhere on Earth." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-sky-300 hover:shadow-xl transition-all group"
                  >
                    <div className="text-4xl font-black text-sky-100 group-hover:text-sky-500 transition-colors mb-4">{item.step}</div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{item.label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </motion.div>
                ))}
              </div>

              

[Image of cloud computing service models SaaS PaaS IaaS diagram]


              {/* The Contrast & Comparison Box */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mt-12">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-sky-600 rounded-full blur-[120px] opacity-20" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-sky-400">
                      <RefreshCcw className="h-8 w-8 text-sky-400 animate-spin-slow" />
                      Infrastructure Shift
                    </h3>
                    
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="mt-1 text-red-500"><CheckCircle2 className="opacity-20" /></div>
                        <div>
                          <h4 className="text-red-400 font-bold text-sm uppercase tracking-widest mb-1">On-Premise (Old)</h4>
                          <p className="text-slate-400 leading-relaxed">Buying expensive servers that take up space, generate heat, and eventually break or become too slow.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="mt-1 text-green-500"><CheckCircle2 /></div>
                        <div>
                          <h4 className="text-green-400 font-bold text-sm uppercase tracking-widest mb-1">Cloud Method (New)</h4>
                          <p className="text-slate-200 leading-relaxed">No hardware to buy. Pay only for what you use. It's always fast, always updated, and always available.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2rem] text-center lg:text-left">
                    <h4 className="text-sky-300 font-medium mb-2 uppercase text-xs tracking-tighter">Cost Efficiency</h4>
                    <div className="text-6xl font-black text-white mb-4">40%</div>
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                      Average reduction in IT maintenance costs after migrating to optimized cloud solutions.
                    </p>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "40%" }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-sky-600 to-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- UNDERSTANDING CLOUD SIMPLY (Backpack Analogy) --- */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-sky-50 p-8 md:p-12 rounded-[2.5rem] border border-sky-100"
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-900">
                  Is Cloud Computing Confusing?
                </h3>
                <p className="text-lg text-sky-800/70">
                  Think of it like your phone's memory. Instead of carrying a heavy backpack of books (Physical Server), you carry a library card (Cloud Access).
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: HardDrive, color: "text-sky-600", bg: "bg-sky-100", title: "The Storage", desc: "Instead of saving files on one computer, you save them in a digital vault you can open from any device." },
                  { icon: Server, color: "text-blue-600", bg: "bg-blue-100", title: "The Server", desc: "A powerful computer in a safe location does all the hard work so your laptop stays fast." },
                  { icon: Globe, color: "text-indigo-600", bg: "bg-indigo-100", title: "The Connection", desc: "As long as you have internet, your 'office' is everywhere you are—at home, or on a plane." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-sky-50">
                    <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4 ${item.color}`}>
                      <item.icon size={28} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-sky-200 text-center">
                <p className="text-sky-900 italic font-medium">
                  <span className="bg-sky-600 text-white text-[10px] px-2 py-0.5 rounded-full mr-2 not-italic align-middle">SIMPLE TRUTH</span>
                  Cloud computing means you don't own the computer; you just own the power it provides!
                </p>
              </div>
            </motion.div>

            {/* --- ENHANCEMENT LIST --- */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-10 text-sky-900 text-center md:text-left">
                How We Enhance Your Cloud Journey
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { text: "Infrastructure Optimization Assessments", icon: Cpu },
                  { text: "Scalable Cloud Architecture Design", icon: TrendingUp },
                  { text: "Seamless Data & App Migration", icon: RefreshCcw },
                  { text: "24/7 Monitoring & Maintenance", icon: Activity },
                  { text: "Robust Security & Compliance", icon: Shield },
                  { text: "Cost Optimization Strategies", icon: Database },
                  { text: "Disaster Recovery Planning", icon: Lock },
                  { text: "Global Platform Implementation", icon: Globe },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10, backgroundColor: "#f1f5f9" }}
                    className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all"
                  >
                    <div className="bg-sky-600 p-2.5 rounded-xl shadow-md shadow-sky-100">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-950 tracking-tight">Key Cloud Benefits</h2>
            <p className="text-muted-foreground">Everything you need to run a modern, digital-first organization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={index} whileHover={{ y: -10 }}>
                  <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white overflow-hidden group">
                    <CardContent className="pt-10 p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-sky-200 shadow-xl group-hover:rotate-12 transition-transform">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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

export default CloudComputing;