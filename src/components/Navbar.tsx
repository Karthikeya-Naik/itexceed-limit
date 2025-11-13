import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    { name: "IT Support", path: "/services#it-support" },
    { name: "Cloud Solutions", path: "/services#cloud" },
    { name: "Cybersecurity", path: "/services#cybersecurity" },
    { name: "Data Management", path: "/services#data" },
    { name: "Network Infrastructure", path: "/services#network" },
  ];

  const industries = [
    { name: "Healthcare", path: "/industries#healthcare" },
    { name: "Finance", path: "/industries#finance" },
    { name: "Education", path: "/industries#education" },
    { name: "Retail", path: "/industries#retail" },
    { name: "Manufacturing", path: "/industries#manufacturing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">ITExceed</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
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
                  className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
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
                  className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      to={industry.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/products" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/about" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Who We Are
            </Link>
            <Link to="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
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
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block py-2 text-sm font-medium text-foreground">
              Home
            </Link>
            <div>
              <div className="py-2 text-sm font-medium text-foreground">Services</div>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link key={service.name} to={service.path} className="block py-1 text-sm text-muted-foreground">
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="py-2 text-sm font-medium text-foreground">Industries</div>
              <div className="pl-4 space-y-2">
                {industries.map((industry) => (
                  <Link key={industry.name} to={industry.path} className="block py-1 text-sm text-muted-foreground">
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/products" className="block py-2 text-sm font-medium text-foreground">
              Products
            </Link>
            <Link to="/about" className="block py-2 text-sm font-medium text-foreground">
              Who We Are
            </Link>
            <Link to="/contact" className="block py-2 text-sm font-medium text-foreground">
              Contact Us
            </Link>
            <Button asChild className="w-full">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
