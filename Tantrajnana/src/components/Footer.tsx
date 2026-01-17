import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Webisdom Tech</h3>
            <p className="text-white/80 text-sm mb-6">
              Delivering innovative digital solutions across all industries.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://in.linkedin.com/company/webisdom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/webisdom/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/webisdom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter/X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/Webisdomdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/80 hover:text-white text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-white/80 hover:text-white text-sm transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/cloud-computing" className="text-white/80 hover:text-white text-sm transition-colors">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="/services/software-maintenance" className="text-white/80 hover:text-white text-sm transition-colors">
                  Software Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/iot" className="text-white/80 hover:text-white text-sm transition-colors">
                  IoT Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-white/80 hover:text-white text-sm transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-white/80 hover:text-white text-sm transition-colors">
                  App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:webisdomtech@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  webisdomtech@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+919403412529"
                  className="hover:text-white transition-colors"
                >
                  +91 9403412529
                </a>
              </li>

              <li className="flex items-start gap-2 text-white/80 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=B-36+Sector-132+Noida+Express+Trade+Tower+2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  B-36 SECTOR-132 NOIDA EXPRESS TRADE TOWER-2 7TH FLOOR OFFICE NO-35 AL7-F NOIDA GAUTAM BUDDHA NAGAR
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center">
            <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Webisdom Tech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
