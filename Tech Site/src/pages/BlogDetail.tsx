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
    readTime: "25 min read",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    content: `
      <p class="lead">As we navigate the opening weeks of 2026, the artificial intelligence landscape has shifted from "novelty integration" to "foundational architecture." At Webisdom, we believe the next 12 months will define the 'Agentic Era'.</p>
      
      <h3>1. The Shift to Agentic Workflows</h3>
      <p>In 2024 and 2025, enterprises focused on Chatbots—systems that responded to user prompts. In 2026, Webisdom is deploying <strong>Autonomous Agents</strong>. These are systems that don't just talk; they act. They can navigate software, manage cloud resources, and negotiate with other AI agents without human intervention.</p>
      <p>The core of our strategy relies on 'Long-Horizon Planning.' Our agents are now capable of breaking down a complex goal (e.g., "Optimize our Q1 supply chain for a 15% carbon reduction") into thousands of sub-tasks, executing them, and self-correcting when errors occur. This reduces the human cognitive load by over 70% in operations-heavy sectors.</p>

      <h3>2. Neural Fine-Tuning vs. RAG</h3>
      <p>While Retrieval-Augmented Generation (RAG) served us well, the 2026 enterprise demands higher precision. Webisdom's 'Neural Ledger' technology allows for real-time fine-tuning. This means the model's internal weights are updated daily based on your organization's specific successful outcomes. It doesn't just look up your data; it learns your 'business intuition'.</p>
      <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" alt="Neural Logic Architecture" class="article-small-img" />

      <h3>3. The Ethics of Synthetic Decision Making</h3>
      <p>As agents take more control, the 'Black Box' problem becomes a legal liability. Webisdom has pioneered <strong>Explainable Logic Trails (ELT)</strong>. Every decision an agent makes is backed by a cryptographic proof of its reasoning process, allowing human auditors to step in and understand exactly *why* a certain strategic pivot was recommended.</p>
      <p>We are also addressing the 'Data Exhaust' problem. In 2026, privacy isn't just about encryption; it's about 'Local Intelligence'. Our models run on-premise or in private clouds, ensuring that your strategic edge never leaks into public training sets.</p>

      <h3>4. Roadmap to 2027: The AGI Horizon</h3>
      <p>Looking ahead, we are preparing for 'Multi-Modal Synergy.' This is where AI understands the physical world through Vision Edge sensors and the digital world through code, blending them into a single operational reality. The future of Webisdom is building the bridge between these two worlds.</p>
    `
  },
  {
    id: 2,
    title: "UI Trends for 2026: The Era of Depth and Spatial Awareness",
    date: "Jan 05, 2026",
    author: "Creative Director",
    readTime: "20 min read",
    category: "Design Strategy",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080",
    content: `
      <p class="lead">Digital interfaces in 2026 are shedding their 'flat' skin. We are entering the age of Functional Realism, where the laws of physics govern how we interact with data.</p>
      
      <h3>1. Z-Axis Hierarchy and Visual Density</h3>
      <p>Flat design failed to communicate importance. In 2026, Webisdom uses <strong>Variable Depth Mapping</strong>. High-priority data literally 'floats' closer to the user using dynamic drop shadows and light refraction. This isn't just an aesthetic choice—it's a cognitive shortcut that allows users to process complex dashboards in seconds rather than minutes.</p>
      <p>We use 'Atmospheric Perspective'—background elements are slightly blurred and desaturated, mimicking how the human eye perceives distance. This reduces the visual noise that has plagued enterprise software for a decade.</p>

      <h3>2. The Rise of Bio-Adaptive Interfaces</h3>
      <p>In 2026, the UI knows how you feel. By integrating with workplace wellness sensors, Webisdom interfaces can adjust their complexity based on user fatigue. If a trader's heart rate is high or their eye-tracking shows signs of strain, the UI automatically simplifies, increasing font sizes and hiding non-essential widgets to prevent 'Decision Fatigue'.</p>
      <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800" alt="Adaptive Interface Visualization" class="article-small-img" />

      <h3>3. Spatial Computing for the Web</h3>
      <p>With the mainstream adoption of mixed-reality glasses, the browser is no longer a rectangle. Our 'Spatial-First' components are built in 3D. When viewed through AR, a Webisdom table can be 'pulled out' of the screen and expanded into a 3D floor plan or a volumetric chart. This transition between 2D and 3D is seamless, powered by our proprietary GL-Engine.</p>

      <h3>4. Conclusion: Human-Centricity</h3>
      <p>Despite the high-tech features, our goal remains 'Invisibility'. Great design in 2026 doesn't make the user think about the tool; it makes them think about the task. We are designing for the subconscious mind.</p>
    `
  },
  {
    id: 3,
    title: "The Quantum Leap: Webisdom’s 2026 Computing Roadmap",
    date: "Jan 18, 2026",
    author: "R&D Lab",
    readTime: "22 min read",
    category: "Quantum Computing",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070",
    content: `
      <p class="lead">The 'Quantum Winter' is over. In 2026, we are seeing the first practical applications of Hybrid Quantum-Classical (HQC) computing in enterprise resource planning.</p>
      
      <h3>1. Breaking the Optimization Ceiling</h3>
      <p>Traditional computers struggle with 'Combinatorial Explosions'—scenarios like global logistics where there are trillions of possible routes. Webisdom's <strong>Q-Link middleware</strong> offloads these specific calculations to quantum processors. What used to take a supercomputer weekend to calculate now takes our hybrid engine 45 seconds.</p>
      <p>This has immediate applications in high-frequency trading and pharmaceutical research, where Webisdom is already helping clients simulate molecular bonds with 99.9% accuracy.</p>

      <h3>2. Post-Quantum Cryptography (PQC) Transition</h3>
      <p>The 'Harvest Now, Decrypt Later' threat is real. State actors are stealing encrypted data today, waiting for quantum computers to break it tomorrow. Webisdom is leading the <strong>Lattice-Based Encryption</strong> movement. We are helping our FinTech partners migrate their core ledgers to PQC standards, ensuring 100-year security for their assets.</p>
      <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800" alt="Quantum Hardware Architecture" class="article-small-img" />

      <h3>3. Sustainable Computing</h3>
      <p>Quantum systems are inherently energy-intensive due to cryogenic cooling. However, Webisdom is developing 'Warm Quantum' simulators that run on standard GPU clusters. This allows for 'Quantum-Ready' code development without the massive carbon footprint of actual cryo-processors, making advanced computation accessible to ESG-conscious firms.</p>

      <h3>4. The Future of HQC</h3>
      <p>By 2028, we expect Quantum-as-a-Service (QaaS) to be as common as AWS. Webisdom's roadmap ensures that every product in our 'Technology Stack' is quantum-compatible by the end of this year.</p>
    `
  },
  {
    id: 4,
    title: "Cyber-Resilience: Protecting the Neural Enterprise",
    date: "Jan 20, 2026",
    author: "Security Lead",
    readTime: "24 min read",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    content: `
      <p class="lead">In an era where 90% of cyber-attacks are generated by AI, human-led defense is no longer sufficient. We are building the 'Autonomous Immune System' for the modern corporation.</p>
      
      <h3>1. The Zero-Trust Neural Layer</h3>
      <p>Legacy security focused on 'perimeters'. In 2026, there is no perimeter. Webisdom's <strong>Zero-Trust Neural Architecture (ZTNA)</strong> assumes that every user, device, and *line of code* is potentially compromised. Every internal API call is audited by a micro-model that detects 'Behavioral Anomalies'. If a developer's IDE suddenly starts writing code at 3 AM with a 5% increase in syntax patterns associated with backdoors, the system locks the account instantly.</p>

      <h3>2. Combatting Model Poisoning</h3>
      <p>The new frontline is 'Model Integrity'. Adversaries are trying to 'poison' training data to create subtle biases or backdoors in enterprise AIs. Webisdom's <strong>Shield-AI</strong> platform uses 'Federated Verification'—it compares your model's outputs against a decentralized network of 'clean' reference models to ensure that your intelligence hasn't been tampered with.</p>
      <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" alt="Cybersecurity Visualization" class="article-small-img" />

      <h3>3. Automated Incident Response (AIR)</h3>
      <p>When a breach occurs, the first 60 seconds are critical. Our AIR engine doesn't wait for a human to click 'Allow'. It can isolate infected cloud segments, rotate all corporate passwords, and spin up honeypot servers to distract the attacker—all in under 200 milliseconds. This 'Active Defense' posture has reduced the cost of data breaches for our clients by an average of $2.4M per incident.</p>

      <h3>4. Summary</h3>
      <p>Cyber-resilience in 2026 isn't about being unhackable—it's about being 'anti-fragile'. We build systems that get stronger and smarter every time they are attacked.</p>
    `
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Insight Not Found</h2>
          <button onClick={() => navigate("/resources")} className="text-blue-600 font-bold underline">Return to Resources</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-blue-50">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-left">
            <button onClick={() => navigate("/resources")} className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-all font-bold uppercase text-[10px] tracking-widest">
              <ArrowLeft size={14} /> Back to Knowledge Hub
            </button>
          </div>

          <article className="max-w-4xl mx-auto">
            <header className="mb-12 text-left">
              <div className="flex items-center gap-3 text-blue-600 font-bold uppercase text-[10px] tracking-widest mb-6">
                <span>{blog.category}</span>
                <span className="text-slate-200">•</span>
                <span className="flex items-center gap-1"><Calendar size={12}/> {blog.date}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">{blog.title}</h1>
              <div className="flex items-center gap-4 py-6 border-y border-slate-100">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold">{blog.author[0]}</div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">{blog.author}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-medium tracking-widest">Webisdom Editorial Board</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-slate-400">
                  <Clock size={16} />
                  <span className="text-[11px] font-bold uppercase tracking-tighter">{blog.readTime}</span>
                </div>
              </div>
            </header>

            <div className="rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
              <img src={blog.image} className="w-full h-[500px] object-cover" alt="Hero" />
            </div>

            <div className="prose prose-slate max-w-none text-left">
              <div className="blog-body text-slate-700" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            <div className="mt-24 pt-12 border-t border-slate-100 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">End of Technical Insight</p>
            </div>
          </article>
        </div>
      </main>

      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center justify-between">
                Continue Reading <ChevronRight size={24} className="text-blue-600"/>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.filter(b => b.id !== Number(id)).slice(0, 2).map(nextBlog => (
                <div key={nextBlog.id} onClick={() => navigate(`/blog/${nextBlog.id}`)} className="group bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer flex gap-6 items-center">
                  <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden">
                    <img src={nextBlog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-md font-bold text-slate-900 mb-2 line-clamp-2 leading-tight">{nextBlog.title}</h4>
                    <span className="text-[10px] text-blue-600 font-black uppercase tracking-widest flex items-center gap-1">Read Insight <ChevronRight size={12}/></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <style>{`
        .blog-body { font-size: 1.25rem; line-height: 2; color: #334155; }
        .blog-body .lead { font-size: 1.6rem; line-height: 1.7; color: #1e293b; margin-bottom: 3.5rem; font-weight: 300; border-left: 4px solid #2563eb; padding-left: 2rem; }
        .blog-body h3 { font-size: 2.2rem; font-weight: 800; color: #0f172a; margin: 4.5rem 0 1.5rem; letter-spacing: -0.03em; line-height: 1.2; }
        .blog-body p { margin-bottom: 2.2rem; }
        .blog-body blockquote { border-left: 5px solid #2563eb; padding-left: 2.5rem; margin: 4rem 0; font-style: italic; font-size: 1.6rem; color: #1e40af; line-height: 1.6; font-weight: 300; }
        .article-small-img { width: 100%; height: auto; border-radius: 2rem; margin: 4rem 0; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); }
        .blog-body strong { color: #0f172a; font-weight: 700; }
      `}</style>
    </div>
  );
};

export default BlogDetail;