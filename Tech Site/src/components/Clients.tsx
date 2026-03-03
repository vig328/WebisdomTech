import { Card, CardContent } from "@/components/ui/card";

const clients = [
  { name: "Honda", logo: "https://www.webisdom.com/include/images/clients/Honda-Logo-01.png" },
  { name: "MediaTeck", logo: "https://www.webisdom.com/include/images/clients/mindlearn.png" },
  { name: "Kuber", logo: "https://www.webisdom.com/include/images/clients/Kuber-Final.png" },
  { name: "DLF", logo: "https://www.webisdom.com/include/images/clients/DLF.png" },
  { name: "Pizza Hut", logo: "https://www.webisdom.com/include/images/clients/pizza-hut-logo-png-transparent-01.png" },
  { name: "Blue Nectar", logo: "https://www.webisdom.com/include/images/clients/bluenectar.png" },
  { name: "Tech Mahindra", logo: "https://www.webisdom.com/include/images/clients/Tech-01.png" },
  { name: "Learning Curve", logo: "https://www.webisdom.com/include/images/clients/learningnew.png" },
  { name: "Kuber Shop", logo: "https://www.webisdom.com/include/images/clients/ksclient-2.png" },
  { name: "Mitsubishi", logo: "https://www.webisdom.com/include/images/clients/Mitsubishi-logo-01.png" },
  { name: "Indus", logo: "https://www.webisdom.com/include/images/clients/indus.png" },
  { name: "Treehouse", logo: "https://www.webisdom.com/include/images/clients/treehouse.png" },
  { name: "Unitech", logo: "https://www.webisdom.com/include/images/clients/unitech.png" },
  { name: "Nextra", logo: "https://www.webisdom.com/include/images/clients/nextra.png" },
  { name: "Sonata", logo: "https://www.webisdom.com/include/images/clients/Sonata_Software_Logo-01.png" },
  { name: "Toyota", logo: "https://www.webisdom.com/include/images/clients/toyota.png" },
  { name: "Skywaltz", logo: "https://www.webisdom.com/include/images/clients/skywaltz.png" },
  { name: "EFT Capital", logo: "https://www.webisdom.com/include/images/clients/EFT-Capital-Logo-01.png" },
  { name: "NVL", logo: "https://www.webisdom.com/include/images/clients/1.png" },
  { name: "Achievers", logo: "https://www.webisdom.com/include/images/clients/Achievers-logo.png" },
  { name: "Ask Me Bazar", logo: "https://www.webisdom.com/include/images/clients/Ask-me-bazar.png" },
  { name: "DSP", logo: "https://www.webisdom.com/include/images/clients/dsp_black_logo-.png" },
  { name: "FinSec", logo: "https://www.webisdom.com/include/images/clients/FinSec-logo-new.png" },
  { name: "IFB", logo: "https://www.webisdom.com/include/images/clients/IFB.png" },
  { name: "IIFL", logo: "https://www.webisdom.com/include/images/clients/IIFL.png" },
  { name: "Jungle Rummy", logo: "https://www.webisdom.com/include/images/clients/Jungle-rummy.png" },
  { name: "KPMG", logo: "https://www.webisdom.com/include/images/clients/kpmg-logo.png" },
  { name: "Le", logo: "https://www.webisdom.com/include/images/clients/Le.png" },
  { name: "Ferns N Petals", logo: "https://www.webisdom.com/include/images/clients/new-fnplogo.png" },
  { name: "Nissan", logo: "https://www.webisdom.com/include/images/clients/nissan-logo.png" },
  { name: "Paytm", logo: "https://www.webisdom.com/include/images/clients/paytm-logo.png" },
  { name: "Tata Motors", logo: "https://www.webisdom.com/include/images/clients/tata_motors_logo.png" },
  { name: "VLCC", logo: "https://www.webisdom.com/include/images/clients/Vlcc.png" },
  { name: "WAVE", logo: "https://www.webisdom.com/include/images/clients/WAVE.png" },
  { name: "Fitness First", logo: "https://www.webisdom.com/include/images/clients/Fitness-First.png" },
  { name: "Sodexo", logo: "https://www.webisdom.com/include/images/clients/sodexo-logo-01.png" },
  { name: "Square", logo: "https://www.webisdom.com/include/images/clients/Square.png" },
  { name: "MakeMyTrip", logo: "https://www.webisdom.com/include/images/clients/make.my.trip.png" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading businesses across industries
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-h-[500px] overflow-y-auto pr-2"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'hsl(var(--primary) / 0.3) transparent'
            }}
          >
            {clients.map((client, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
                <CardContent className="flex items-center justify-center h-32 p-4">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            More success stories coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
