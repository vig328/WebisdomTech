import { Cloud, Settings, Wifi, Globe, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable and secure cloud infrastructure solutions tailored to your business needs.",
    slug: "cloud-computing",
  },
  {
    icon: Settings,
    title: "Software Application Maintenance",
    description: "Comprehensive maintenance and support for your critical software applications.",
    slug: "software-maintenance",
  },
  {
    icon: Wifi,
    title: "Internet of Things (IoT)",
    description: "Connect, monitor, and control your devices with our advanced IoT solutions.",
    slug: "iot",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance.",
    slug: "web-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that engage your users.",
    slug: "app-development",
  },
];

const Services = ({ showAll = false }: { showAll?: boolean }) => {
  const navigate = useNavigate();
  
  // Show only first 3 services on home page (Web Dev, App Dev, Software Maintenance)
  const displayedServices = showAll ? services : [services[3], services[4], services[1]];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {!showAll && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to power your business transformation
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant hover:scale-[1.03] group cursor-pointer"
                onClick={() => navigate(`/services/${service.slug}`)}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-primary text-white px-8 py-3 text-lg font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              View More Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
