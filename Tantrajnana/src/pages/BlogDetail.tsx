import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Webisdom: A 2026 Strategic Deep-Dive",
    date: "Jan 12, 2026",
    author: "Tech Strategy Team",
    readTime: "15 min read",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    content: `
      <p class="lead">As we move further into 2026, the distinction between "business logic" and "artificial intelligence" is disappearing. At Webisdom, we view AI not as a tool, but as the new central nervous system of the modern enterprise.</p>
      
      <h3>1. The Evolution of Contextual Intelligence</h3>
      <p>For years, Large Language Models (LLMs) were treated as static encyclopedias. You asked a question, and it gave you a generalized answer. However, the enterprise demand has shifted toward <strong>Contextual Intelligence</strong>.</p>
      
      <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" alt="Neural Logic" class="article-small-img" />

      <p>Webisdom's proprietary training methodology involves "Neural Fine-Tuning." Unlike RAG which simply looks up documents, our systems adapt their internal weighting based on historical decision-making patterns within your firm.</p>

      <h3>2. Bridging the Productivity Gap</h3>
      <p>Our 2026 roadmap focuses on <strong>Autonomous Agentic Workflows</strong>. These aren't just chatbots; they are workers capable of multi-step reasoning.</p>
      <ul>
        <li><strong>Self-Correcting Data Pipelines:</strong> AI agents that identify errors in financial records and fix them instantly.</li>
        <li><strong>Predictive Resource Allocation:</strong> Systems that move human talent to high-priority projects dynamically.</li>
      </ul>

      <blockquote>"The goal is not to create a machine that thinks like a human, but a machine that helps humans think better."</blockquote>

      <h3>3. Infrastructure and Global Scaling</h3>
      <p>Scaling these models requires edge-computing architecture. By processing data closer to the source—whether that's a factory floor or a retail branch—we reduce latency to near-zero levels.</p>
    `
  },
  {
    id: 2,
    title: "UI Trends for 2026: The Era of Depth and Spatial Awareness",
    date: "Jan 05, 2026",
    author: "Creative Director",
    readTime: "12 min read",
    category: "Design Strategy",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080",
    content: `
      <p class="lead">After a decade of "Flat Design" dominating our screens, 2026 marks the return of depth. But this isn't the skeuomorphism of the past; it is a sophisticated, physics-based approach to digital hierarchy.</p>
      
      <h3>1. The Return of Z-Axis Hierarchy</h3>
      <p>In the flat design era, everything lived on a single plane. This often led to "cognitive clutter," where users struggled to distinguish between primary actions and background information. At Webisdom, our 2026 design language utilizes <strong>Z-Axis Hierarchy</strong>.</p>
      
      <p>By using real light refraction and variable blur densities, we pull critical enterprise alerts into the "foreground" of the user's perception. Elements that are less urgent are visually pushed "back" using atmospheric perspective. This mimics how the human eye perceives the physical world, reducing the mental effort required to navigate complex data dashboards.</p>

      <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800" alt="Modern Interface Design" class="article-small-img" />

      <h3>2. Adaptive Circadian Interfaces</h3>
      <p>We spend more time than ever in front of screens. In 2026, a static "Dark Mode" toggle is no longer enough. Webisdom is pioneering <strong>Circadian UI</strong>—interfaces that automatically adjust their color temperature, contrast, and font-weight based on the user's local time and ambient light levels.</p>
      
      <p>During peak morning hours, the UI utilizes high-contrast, crisp typography to drive focus and energy. As evening approaches, the system transitions into "Warmer Tones," reducing blue light emission and softening the visual borders of elements to decrease eye strain and align with the user's biological clock.</p>

      <h3>3. Micro-Haptics and Tactile Feedback</h3>
      <p>Design is no longer just visual; it's experiential. With the advancement of trackpad and mobile haptic engines, our 2026 interfaces incorporate <strong>Micro-Haptics</strong>. When a user drags a financial report into a folder, there is a subtle "magnetic" click. When a transaction fails, there is a distinct, low-frequency vibration.</p>

      <blockquote>"Great design in 2026 is invisible. It doesn't scream for attention; it whispers direction."</blockquote>

      <h3>4. Spatial Interaction for Enterprise</h3>
      <p>As spatial computing (AR/VR) merges with traditional web browsing, our web-based agents are now "Spatial Ready." This means our buttons and cards are built with 3D metadata. If viewed through a spatial headset, the Webisdom dashboard doesn't just look like a flat website; it unfolds into a multi-layered workspace where data visualizations can be manipulated in three dimensions.</p>

      <img src="https://images.unsplash.com/photo-1613909209432-7b1ef0673424?q=80&w=800" alt="Spatial UI Components" class="article-small-img" />

      <h3>Conclusion</h3>
      <p>The trends of 2026 move away from "minimalism for the sake of minimalism" and toward <strong>Functional Realism</strong>. By bridging the gap between digital interfaces and physical physics, we create tools that feel natural, intuitive, and ultimately more human.</p>
    `
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top every time the ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Insight Not Found</h2>
          <button onClick={() => navigate("/resources")} className="text-blue-600 font-bold underline">
            Return to Resources
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-blue-50">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          
          {/* NAVIGATION */}
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <button 
              onClick={() => navigate("/resources")}
              className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-all font-bold uppercase text-[10px] tracking-widest"
            >
              <ArrowLeft size={14} /> Back to Knowledge Hub
            </button>
          </div>

          <article className="max-w-3xl mx-auto">
            {/* HEADER */}
            <header className="mb-12 text-left">
              <div className="flex items-center gap-3 text-blue-600 font-bold uppercase text-[10px] tracking-widest mb-6">
                <span>{blog.category}</span>
                <span className="text-slate-200">•</span>
                <span className="flex items-center gap-1"><Calendar size={12}/> {blog.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                {blog.title}
              </h1>
              
              <div className="flex items-center gap-4 py-6 border-y border-slate-100">
                <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-sm font-bold">
                  {blog.author[0]}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">{blog.author}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-medium">Webisdom Editorial</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-slate-400">
                  <Clock size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">{blog.readTime}</span>
                </div>
              </div>
            </header>

            {/* FEATURED IMAGE */}
            <div className="rounded-3xl overflow-hidden mb-12 border border-slate-100">
              <img src={blog.image} className="w-full h-[400px] object-cover" alt="Hero" />
            </div>

            {/* CONTENT AREA */}
            <div className="prose prose-slate max-w-none text-left">
              <div 
                className="blog-body text-slate-700" 
                dangerouslySetInnerHTML={{ __html: blog.content }} 
              />
            </div>

            {/* FOOTER */}
            <div className="mt-20 pt-10 border-t border-slate-100 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">End of Article</p>
            </div>
          </article>
        </div>
      </main>

      {/* RECOMMENDED SECTION */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center justify-between">
                Explore More <ChevronRight size={18} className="text-blue-600"/>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.filter(b => b.id !== Number(id)).slice(0, 2).map(nextBlog => (
                <div 
                  key={nextBlog.id}
                  onClick={() => navigate(`/blog/${nextBlog.id}`)}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all cursor-pointer flex gap-4 items-center"
                >
                  <img src={nextBlog.image} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{nextBlog.title}</h4>
                    <span className="text-[9px] text-blue-600 font-bold uppercase tracking-widest">Read Article</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .blog-body { font-size: 1.15rem; line-height: 1.9; }
        .blog-body .lead { font-size: 1.4rem; line-height: 1.6; color: #1e293b; margin-bottom: 2.5rem; font-weight: 300; }
        .blog-body h3 { font-size: 1.85rem; font-weight: 700; color: #0f172a; margin: 3.5rem 0 1.2rem; letter-spacing: -0.02em; }
        .blog-body p { margin-bottom: 1.8rem; }
        .blog-body ul { margin: 1.5rem 0; padding-left: 1.2rem; }
        .blog-body li { margin-bottom: 0.8rem; list-style-type: square; color: #334155; }
        .blog-body blockquote { border-left: 3px solid #2563eb; padding-left: 2rem; margin: 3rem 0; font-style: italic; font-size: 1.4rem; color: #1e40af; line-height: 1.5; }
        .article-small-img { width: 100%; max-width: 700px; height: auto; border-radius: 1.5rem; margin: 3rem auto; display: block; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
      `}</style>
    </div>
  );
};

export default BlogDetail;