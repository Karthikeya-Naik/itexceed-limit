import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryCard from "@/components/IndustryCard";
import CTASection from "@/components/CTASection";
import { Building2, GraduationCap, Stethoscope, ShoppingBag, Factory, Scale, Plane, Home } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Secure and compliant IT solutions for healthcare providers",
      solutions: [
        "HIPAA-compliant data management",
        "Electronic health records (EHR) systems",
        "Telemedicine infrastructure",
        "Medical device integration",
        "Healthcare analytics platforms",
      ],
    },
    {
      icon: Building2,
      title: "Finance & Banking",
      description: "Robust security and reliability for financial institutions",
      solutions: [
        "PCI DSS compliance solutions",
        "Secure payment processing",
        "Fraud detection systems",
        "Core banking platforms",
        "Financial data analytics",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Technology solutions for modern learning environments",
      solutions: [
        "Learning management systems",
        "Campus-wide WiFi infrastructure",
        "Student information systems",
        "Virtual classroom solutions",
        "Educational content delivery",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description: "Seamless technology for retail operations",
      solutions: [
        "Point of sale (POS) systems",
        "E-commerce platforms",
        "Inventory management",
        "Customer relationship management",
        "Omnichannel retail solutions",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industrial IT solutions for production efficiency",
      solutions: [
        "Industrial IoT implementation",
        "Supply chain management",
        "Production monitoring systems",
        "Quality control automation",
        "Equipment maintenance solutions",
      ],
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "Secure and efficient technology for law firms",
      solutions: [
        "Document management systems",
        "Legal case management software",
        "Secure client portals",
        "E-discovery solutions",
        "Compliance and security",
      ],
    },
    {
      icon: Plane,
      title: "Transportation & Logistics",
      description: "Technology for efficient fleet and logistics management",
      solutions: [
        "Fleet management systems",
        "Route optimization",
        "Real-time tracking solutions",
        "Warehouse management",
        "Supply chain visibility",
      ],
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Digital solutions for property management",
      solutions: [
        "Property management software",
        "Virtual tour technology",
        "Customer portal systems",
        "Lease management solutions",
        "Building automation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-muted-foreground">
              Specialized IT solutions tailored to the unique needs of your industry. 
              We understand your challenges and deliver results.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <IndustryCard key={index} {...industry} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Industry Expertise That Matters
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our deep industry knowledge ensures solutions that truly fit your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  We understand industry-specific regulations and ensure your technology stack remains compliant 
                  with standards like HIPAA, PCI DSS, GDPR, and more.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Years of experience serving clients across diverse industries means we bring best practices 
                  and proven solutions to every engagement.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  Our solutions grow with your business, from startups to enterprises, ensuring your 
                  technology investment delivers long-term value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Discuss Your Industry Needs?"
          description="Let our industry experts show you how we can help transform your business operations"
          primaryButtonText="Book a Consultation"
          primaryButtonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
