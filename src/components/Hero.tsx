import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your Business with{" "}
              <span className="text-primary">ITExceed</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Professional IT solutions, cutting-edge technology products, and industry-leading services 
              that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg text-base font-semibold border border-border/50">
                  24/7 Support
                </div>
                <div className="px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg text-base font-semibold border border-border/50">
                  Fast Onboarding
                </div>
                <div className="px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg text-base font-semibold border border-border/50">
                  Certified Experts
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:block relative">
            <div className="space-y-4">
              {/* Feature Card 1 */}
              <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 transform hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cloud Solutions</h3>
                    <p className="text-sm text-muted-foreground">Enterprise-grade cloud infrastructure and migration services</p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 transform hover:scale-105 transition-transform ml-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-accent rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cybersecurity</h3>
                    <p className="text-sm text-muted-foreground">Protect your business with advanced security solutions</p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 transform hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">IT Consulting</h3>
                    <p className="text-sm text-muted-foreground">Strategic guidance for digital transformation</p>
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
