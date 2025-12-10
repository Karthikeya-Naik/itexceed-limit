import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 from-gray-900 to-gray-800/30 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">ITExceed</h3>
            <p className="text-sm text-gray-400 mb-4">
              Exceeding the limits in IT solutions, services, and products for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Who We Are
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/it-services" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  IT Support
                </Link>
              </li>
              <li>
                <Link to="/services/network-infrastructure" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Network Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/printing-designing" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Printing & Designing
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-services" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>16 Devalls Close, London, England, E6 5PL</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+44 20 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>sales@itexceed.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ITExceed. All rights reserved.{" "}
            <Link to="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms-of-service" className="text-gray-400 hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;