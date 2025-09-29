import { Link } from "react-router-dom";
import { Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">Phoenix Data Consulting</div>
            <p className="text-sm opacity-90">
              Becoming the leader in Next Gen IT - Mobile, Social, Cloud and Big Data
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Globe className="h-4 w-4" />
                <span>www.phoenixitac.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block text-sm hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/training" className="block text-sm hover:text-primary transition-colors">
                Training
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <div className="text-sm opacity-90">Development</div>
              <div className="text-sm opacity-90">Consulting</div>
              <div className="text-sm opacity-90">Training</div>
              <div className="text-sm opacity-90">Payroll</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>baktha.bharani@gmail.com</span>
              </div>
              {/* <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>sowmidevaki@gmail.com</span>
              </div> */}
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 9344834879</span>
              </div>
              {/* <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 9677532130</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Phoenix Data Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;