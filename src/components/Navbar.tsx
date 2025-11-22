import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Hotel, ChevronDown, Menu, X, ArrowRight, Server, Cloud, Wifi, Code, Building2, Stethoscope, Factory, Home, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { 
      name: "IT Services", 
      path: "/services/it-services",
      icon: Server,
      description: "Comprehensive IT support and management"
    },
    { 
      name: "Network Infrastructure", 
      path: "/services/network-infrastructure",
      icon: Network,
      description: "Uninterrupted digital operations"
    },
    { 
      name: "Cloud Services", 
      path: "/services/cloud-services",
      icon: Cloud,
      description: "Scalable cloud infrastructure solutions"
    },
    { 
      name: "Wireless Network Services", 
      path: "/services/wireless-network",
      icon: Wifi,
      description: "Enterprise wireless connectivity"
    },
  ];

  const industries = [
    { 
      name: "Hospitality", 
      path: "/industries/hospitality",
      icon: Hotel,
      description: "Hospitality technology solutions"
    },
    { 
      name: "Healthcare", 
      path: "/industries/healthcare",
      icon: Stethoscope,
      description: "Healthcare IT solutions"
    },
    { 
      name: "Manufacturing", 
      path: "/industries/manufacturing",
      icon: Factory,
      description: "Industrial technology systems"
    },
    { 
      name: "Real Estate", 
      path: "/industries/real-estate",
      icon: Building2,
      description: "Property management technology"
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={logo}
              alt="ITExceed Logo"
              className="h-12 w-auto"
            />
            <div className="relative">
              <div className="text-2xl font-display font-bold text-foreground">
                IT<span className="text-professional-darkBlue">Exceed</span>
              </div>
              <div className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
                Exceeding the limits
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>

            {/* Services Mega Menu */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-2">
                    {services.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setServicesOpen(false)} 
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-blue-50 transition-all group ${
                            index !== services.length - 1 ? 'mb-1' : ''
                          }`}
                        >
                          <div className="w-9 h-9 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-all">
                            <IconComponent className="w-4 h-4 text-blue-700 group-hover:text-blue-800 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900 transition-colors">
                              {service.name}
                            </h4>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="border-t border-gray-200 bg-gray-50">
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-professional-darkBlue hover:bg-gray-100 transition-colors group"
                    >
                      View More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Mega Menu */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {industriesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-50"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <div className="p-2">
                  {industries.map((industry, index) => {
                    const IconComponent = industry.icon;
                    return (
                      <Link
                        key={industry.name}
                        to={industry.path}
                        onClick={() => setIndustriesOpen(false)} 
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-blue-50 transition-all group ${
                          index !== industries.length - 1 ? 'mb-1' : ''
                        }`}
                      >
                        <div className="w-9 h-9 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-all">
                          <IconComponent className="w-4 h-4 text-blue-700 group-hover:text-blue-800 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 transition-colors">
                            {industry.name}
                          </h4>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="border-t border-gray-200 bg-gray-50">
                  <Link
                    to="/industries"
                    onClick={() => setIndustriesOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-professional-darkBlue hover:bg-gray-100 transition-colors group"
                  >
                    View More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
            </div>
            <Link
              to="/services/web-development"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Web Development
            </Link>
            <Link
              to="/products"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Who We Are
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button - Only visible on xl screens and above */}
          <div className="hidden xl:block">
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
            <Link
              to="/"
              className="block py-2.5 px-3 text-sm font-medium text-black hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services */}
            <div className="py-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Services
              </div>
              <div className="space-y-1 mt-1">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-md hover:bg-gray-50 transition-all group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <IconComponent className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-black group-hover:text-primary transition-colors">
                        {service.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <Link
                to="/services"
                className="flex items-center justify-between mt-2 py-2 px-3 text-sm font-medium text-primary hover:bg-gray-50 rounded-md transition-colors group"
                onClick={() => setMobileMenuOpen(false)}
              >
                View All Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Industries */}
            <div className="py-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Industries
              </div>
              <div className="space-y-1 mt-1">
                {industries.map((industry) => {
                  const IconComponent = industry.icon;
                  return (
                    <Link
                      key={industry.name}
                      to={industry.path}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-md hover:bg-gray-50 transition-all group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <IconComponent className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-black group-hover:text-primary transition-colors">
                        {industry.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <Link
                to="/industries"
                className="flex items-center justify-between mt-2 py-2 px-3 text-sm font-medium text-primary hover:bg-gray-50 rounded-md transition-colors group"
                onClick={() => setMobileMenuOpen(false)}
              >
                View All Industries
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <Link
              to="/services/web-development"
              className="block py-2.5 px-3 text-sm font-medium text-black hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Web Development
            </Link>
            <Link
              to="/products"
              className="block py-2.5 px-3 text-sm font-medium text-black hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block py-2.5 px-3 text-sm font-medium text-black hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link
              to="/contact"
              className="block py-2.5 px-3 text-sm font-medium text-black hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            {/* Mobile Get Started Button */}
            <div className="pt-4 pb-2">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;