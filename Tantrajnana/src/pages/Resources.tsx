import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection"; // IMPORTED NEWS SECTION
import { motion } from "framer-motion";
import { 
  ArrowRight, Search, Brain, Activity, Utensils, 
  Users, Landmark, ShieldCheck, LineChart, Lock, UserCheck, 
  Code2, FileSearch, Eye, Cpu, Mic2, ExternalLink
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Blog Data Structure
const blogs = [
  {
    id: 1,
    title: "The Future of AI in Webisdom",
    date: "Jan 12, 2026",
    author: "Tech Strategy Team",
    readTime: "12 min read",
    excerpt: "Exploring how we integrate machine learning into our client's daily workflows for maximum efficiency.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
  },
  {
    id: 2,
    title: "UI Trends for 2026: The Era of Depth",
    date: "Jan 05, 2026",
    author: "Creative Director",
    readTime: "10 min read",
    excerpt: "Why glassmorphism and deep blue themes are dominating the enterprise market this year.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080",
  }
];

// Product Data Structure
const materials = [
  { title: "AI Chieftain", type: "AI Product", link: "https://webisdom.ai/products/ai-chieftain", icon: Brain, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" },
  { title: "AI PMS", type: "Management", link: "https://webisdom.ai/products/ai-pms", icon: Activity, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026" },
  { title: "Restaurant Agent", type: "Automation", link: "https://webisdom.ai/products/restaurant-agent", icon: Utensils, img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070" },
  { title: "Coworking Agent", type: "Automation", link: "https://webisdom.ai/products/coworking-agent", icon: Users, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" },
  { title: "Loan Agent", type: "FinTech", link: "https://webisdom.ai/products/loan-agent", icon: Landmark, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022" },
  { title: "Compliance Agent", type: "Security", link: "https://webisdom.ai/products/compliance-agent", icon: ShieldCheck, img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070" },
  { title: "Quant Trader Bot", type: "Trading", icon: LineChart, link: "https://webisdom.ai/products/quant-trader-bot", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070" },
  { title: "Fraud Sentinel", type: "Security", icon: Lock, link: "https://webisdom.ai/products/fraud-sentinel", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070" },
  { title: "HR Screening Bot", type: "HR Tech", icon: UserCheck, link: "https://webisdom.ai/products/hr-screening-bot", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070" },
  { title: "Dev Auto GPT", type: "Development", icon: Code2, link: "https://webisdom.ai/products/dev-auto-gpt", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070" },
  { title: "Doc Brain RAG", type: "Data AI", icon: FileSearch, link: "https://webisdom.ai/products/doc-brain-rag", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070" },
  { title: "Vision Guard Edge", type: "Vision AI", icon: Eye, link: "https://webisdom.ai/products/vision-guard-edge", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070" },
  { title: "Factory IoT Twin", type: "IoT", icon: Cpu, link: "https://webisdom.ai/products/factory-iot-twin", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" },
  { title: "Voice Clone Studio", type: "Voice AI", icon: Mic2, link: "https://webisdom.ai/products/voice-clone-studio", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070" }
];

const Resources = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMaterials = materials.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[500px] flex items-center bg-slate-900">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')` }}
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
              <span className="text-blue-200 text-[10px] font-bold tracking-widest uppercase">
                Intellectual Assets
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Resources <span className="text-blue-500">&</span> Insights
            </h1>
            <p className="text-xl text-white/80 font-light max-w-xl border-l-4 border-blue-500 pl-6 mb-10">
              Proprietary technology stack and strategic insights designed to power digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMBINED SECTION: BLOGS + DYNAMIC NEWS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT SIDE: FEATURED BLOGS (8 Columns) */}
            <div className="lg:col-span-8">
              <div className="max-w-3xl mb-12 text-left">
                 <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Insights</h2>
                 <p className="text-slate-500">Stay updated with the latest in AI and Design Strategy.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                  <motion.div 
                    key={blog.id} 
                    whileHover={{ y: -8 }} 
                    className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group border border-slate-100" 
                    onClick={() => navigate(`/blog/${blog.id}`)}
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={blog.image} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        alt={blog.title} 
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter text-blue-600">
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 text-left">
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {blog.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-6 line-clamp-2">{blog.excerpt}</p>
                      <div className="flex items-center text-blue-600 font-bold uppercase text-[10px] tracking-widest gap-2">
                        Read Full Article <ArrowRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: DYNAMIC NEWS SIDEBAR (4 Columns) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <NewsSection />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">The Technology Stack</h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full mb-8" />
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                placeholder="Search proprietary technologies..." 
                className="rounded-full py-6 px-12 border-slate-200 shadow-lg focus:ring-blue-600 text-md" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-[1600px] mx-auto">
            {filteredMaterials.map((item) => (
              <motion.div 
                key={item.title} 
                whileHover={{ scale: 1.02, y: -5 }} 
                onClick={() => window.open(item.link, '_blank')} 
                className="relative h-[320px] rounded-[1.5rem] overflow-hidden group cursor-pointer shadow-md bg-slate-900 border border-slate-100"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent group-hover:from-blue-950/80" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white text-left">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/20 group-hover:bg-blue-600 transition-all">
                    <item.icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold mb-1 tracking-tight leading-tight">{item.title}</h4>
                  <p className="text-[9px] uppercase font-black tracking-widest text-blue-400 opacity-80">{item.type}</p>
                  
                  <div className="mt-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                    Explore Solution <ExternalLink size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;