import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eagerly loaded - critical for initial render
import Index from "./pages/Index";
import BlogDetail from "./pages/BlogDetail";

// Lazy loaded - non-critical pages
const About = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Partner = lazy(() => import("./pages/Partner"));
const Resources = lazy(() => import("./pages/Resources")); // ADDED THIS
const CloudComputing = lazy(() => import("./pages/services/CloudComputing"));
const SoftwareMaintenance = lazy(() => import("./pages/services/SoftwareMaintenance"));
const IoT = lazy(() => import("./pages/services/IoT"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const AppDevelopment = lazy(() => import("./pages/services/AppDevelopment"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/resources" element={<Resources />} /> {/* ADDED THIS */}
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/services/cloud-computing" element={<CloudComputing />} />
            <Route path="/services/software-maintenance" element={<SoftwareMaintenance />} />
            <Route path="/services/iot" element={<IoT />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;