import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sanjeev Garg",
    company: "Tata Motors",
    image: "https://www.webisdom.com/include/images/testimonial/sanjeev-garg.jpg",
    text: "Webisdom plays an instrumental role in making us prominently visible in the web world. The team helps us generate leads through digital strategies and online campaign. With the creation of e-Commerce portal, the sale has been surprisingly rising up in both, commercial vehicle and personal vehicle category."
  },
  {
    name: "Rajesh Bhatia",
    company: "Treehouse",
    image: "https://www.webisdom.com/include/images/testimonial/rajesh-bhatia.jpg",
    text: "Our association with Webisdom was a right decision for the visibility of our brand in the industry. Starting from the Web Development to Web Management, the team Webisdom's SEO & SMO strategies were apt and ensured the brand finds it prominent visibility around the web world."
  },
  {
    name: "Jayanta Mukherjee",
    company: "Nissan Oman",
    image: "https://www.webisdom.com/include/images/testimonial/jayanta-mukherjee.jpg",
    text: "Connecting with the potential and present customers was a task. But after Webisdom created Nissan Connect app, it was just a matter of time for customers to connect with us. With over 50 features in it, it was conceptualised to assist the Nissan Consumers and Webisdom made it possible. They were determined, punctual and responsive throughout the process."
  },
  {
    name: "Apurva Chamaria",
    company: "HCL",
    image: "https://www.webisdom.com/include/images/testimonial/apurva-chamaria.jpg",
    text: "It is indeed true that Website is the front face of a business in today's time. And, Webisdom understood it really well for our business. Their understanding of examining our issues and coming up with solutions to each of them is commendable."
  },
  {
    name: "Sanjeev Gupta",
    company: "VLCC",
    image: "https://www.webisdom.com/include/images/testimonial/2.jpg",
    text: "With the increasing competition in the market, it is vital to maintaining the position a brand holds. VLCC is a name that needs no introduction yet we found it difficult to reach out to our target audience. Then Webisdom happened. They not only helped us reach out to our audience but made sure that we gain prominent page ranking as well."
  },
  {
    name: "Pankaj Bajaj",
    company: "MD, Eldeco Group",
    image: "https://www.webisdom.com/include/images/testimonial/pankaj-bajaj.jpg",
    text: "With competition in the market so high and the responsibilities, it was nearly impossible to aware the general public of Eldeco's work ethics. Empowered with honesty and tremendous skills, the team Webisdom ensures that the Eldeco remains the best in the sector."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading businesses across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 line-clamp-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
