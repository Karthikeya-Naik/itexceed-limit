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
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-accent px-4 py-2 rounded-full">
                Exceeding the limits
              </span>
            </div>

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

            {/* Trust Badges */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading organizations</p>
              <div className="flex flex-wrap gap-8 items-center opacity-60">
                <div className="text-sm font-semibold">Microsoft Partner</div>
                <div className="text-sm font-semibold">AWS Certified</div>
                <div className="text-sm font-semibold">ISO 27001</div>
                <div className="text-sm font-semibold">Cyber Essentials</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-accent to-primary/10 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-square bg-background/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full animate-pulse" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Innovation • Excellence • Results
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
