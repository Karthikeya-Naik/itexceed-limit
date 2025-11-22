import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your Business with{" "}
              <span className="text-professional-darkBlue">ITExceed</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
              Professional IT solutions, cutting-edge technology products, and industry-leading services 
              that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="text-base group">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            {/* Service Highlights */}
            <div className="pt-6 md:pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-center md:justify-start">
                <div className="px-3 py-2 bg-background/50 backdrop-blur-sm rounded-lg text-sm md:text-base font-semibold border border-border/50">
                  24/7 Support
                </div>
                <div className="px-3 py-2 bg-background/50 backdrop-blur-sm rounded-lg text-sm md:text-base font-semibold border border-border/50">
                  Fast Onboarding
                </div>
                <div className="px-3 py-2 bg-background/50 backdrop-blur-sm rounded-lg text-sm md:text-base font-semibold border border-border/50">
                  Certified Experts
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards - Hidden on md and smaller */}
          <div className="hidden lg:block relative">
            <div className="space-y-4">
              <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 transform hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Network Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">Robust and scalable networking solutions for modern businesses</p>
                  </div>
                </div>
              </div>

              <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 transform hover:scale-105 transition-transform ml-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-accent rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">IT Consulting</h3>
                    <p className="text-sm text-muted-foreground">Strategic guidance for digital transformation</p>
                  </div>
                </div>
              </div>

              <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 transform hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-500 rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cloud Solutions</h3>
                    <p className="text-sm text-muted-foreground">Enterprise-grade cloud infrastructure and migration services</p>
                  </div>
                </div>
              </div>

              <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 transform hover:scale-105 transition-transform ml-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cybersecurity</h3>
                    <p className="text-sm text-muted-foreground">Protect your business with advanced security solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;