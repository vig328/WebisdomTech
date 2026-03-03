import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, BarChart3, Globe } from "lucide-react";

const caseStudies = [
  {
    title: "Nissan Oman (App)",
    description: "We made a list of issues of the client and brainstormed with our team of app developers to find the solutions. During this phase, we ensured that the interface is quite user-friendly and provides apt information when asked.",
    details: "For the better understanding of local costumers and to develop an instant connect with them, Arabic language was implemented in the app. A team was formed to maintain and update the app and to answer the customers if any query, feedback or a complaint is raised.",
    image: "https://www.webisdom.com/include/images/nissan.png",
    category: "Mobile App"
  },
  {
    title: "HCL",
    description: "HCL tech team with a unique project has approached us. They were looking for an exceptionally incredible agency, who was ready to take up challenges on operational/ execution grounds.",
    details: "We took the challenge of designing and coding a website that goes beyond the excellence. Our team finally delivered the masterpiece of a website i.e. a blend of 3D modeling, 3D Animation and 3D Texturing to deliver the best 3D User Experience.",
    image: "https://www.webisdom.com/include/images/hcl.png",
    category: "3D Web Experience"
  },
  {
    title: "Honda Oman",
    description: "Honda believes in providing joys to the world through new challenges and realization of dreams. Honda associates have been demonstrating a challenging spirit, wanting to bring joy to people, contribute to society with technologies.",
    details: "Its products include motorcycles, automobiles and power products. Honda realizes the joy and freedom of mobility and a sustainable society where people can enjoy life.",
    image: "https://www.webisdom.com/include/images/honda.jpg",
    category: "Digital Transformation"
  },
  {
    title: "QUANTINSTI: Algorithmic Trading",
    description: "QuantInsti is India's pioneer Algorithm Trading Research and Training Institute. High frequency and Algorithmic trading domain is one of the most lucrative career choices in the contemporary financial markets.",
    details: "QuantInsti aims to provide critical competitive edge to its participants through its skillfully designed programs, which not just help them understand the basics but also to become a domain expert.",
    image: "https://www.webisdom.com/include/images/quant.jpg",
    category: "Ed-Tech"
  },
  {
    title: "Toyota Oman",
    description: "Saud Bahwan Group: Totally Committed to Customer Satisfaction. For several decades, the Saud Bahwan Group has been serving customers in diverse fields.",
    details: "Services include Transportation, Construction, Projects, Oil & Gas, Industrial Equipment, Air and Seaport Equipment & Systems, Travel & Tourism and Agriculture.",
    image: "https://www.webisdom.com/include/images/toyata.jpg",
    category: "Enterprise Solutions"
  },
  {
    title: "Webinfra Real Estate Solutions",
    description: "Webisdom's innovative webInfra solution helps a dynamic real estate companies to enhance their web presence and generate online quality leads.",
    details: "This helps an organization to utilize online marketing budget efficiently and increase sales by up to 20% of the current sales.",
    image: "https://www.webisdom.com/include/images/real.jpg",
    category: "Real Estate Tech"
  }
];

const CaseStudies = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION WITH PROFESSIONAL BACKGROUND */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')`, 
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0f172a] via-[#1e293b]/90 to-[#1e293b]/20" />

        <div className="container relative z-20 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-blue-500/20 backdrop-blur-md mb-6 border border-blue-400/30">
              <span className="text-blue-200 text-sm font-bold tracking-widest uppercase">Proven Success</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight text-left tracking-tighter">
              Case Studies
            </h1>
            
            {/* UPDATED STYLE: Straight words (removed italic), pl-6, and leading-relaxed */}
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed border-l-4 border-blue-600 pl-6 text-left">
              The proof is in the pudding. We deliver stunning results across industries, from automotive giants to financial pioneers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMPACT STATS SECTION */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-white/20 md:divide-x">
            <motion.div {...fadeInUp} className="space-y-2">
              <BarChart3 className="mx-auto h-8 w-8 mb-2 text-blue-200" />
              <h3 className="text-4xl font-bold">20% +</h3>
              <p className="text-blue-100 text-xs uppercase tracking-[0.2em] font-bold">Sales Increase</p>
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-2">
              <Globe className="mx-auto h-8 w-8 mb-2 text-blue-200" />
              <h3 className="text-4xl font-bold">8+ Countries</h3>
              <p className="text-blue-100 text-xs uppercase tracking-[0.2em] font-bold">Global Reach</p>
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-2">
              <CheckCircle2 className="mx-auto h-8 w-8 mb-2 text-blue-200" />
              <h3 className="text-4xl font-bold">100% Client</h3>
              <p className="text-blue-100 text-xs uppercase tracking-[0.2em] font-bold">Satisfaction Focus</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white overflow-hidden group flex flex-col text-left">
                  <div className="relative h-60 overflow-hidden">
                    <div className="absolute top-4 left-4 z-20 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {study.category}
                    </div>
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  <CardHeader className="pt-8 px-8">
                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                      {study.title}
                      <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base font-medium mt-2 line-clamp-3">
                      {study.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-8 pb-10 flex-grow">
                    <div className="h-px w-full bg-slate-100 mb-6" />
                    <p className="text-slate-500 text-sm leading-relaxed italic">
                      {study.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl"
          >
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Want to see your brand here?</h2>
             <p className="text-blue-100/70 mb-10 text-lg text-center">Let’s discuss how our digital strategies can transform your business results.</p>
             <button 
                onClick={() => window.location.href='/contact'}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl"
             >
                Get Started Today
             </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;