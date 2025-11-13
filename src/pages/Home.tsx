import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { Cloud, Shield, Server, Database, Network, Headphones } from "lucide-react";

const Home = () => {
  const featuredServices = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for modern businesses",
      features: [
        "Cloud migration and deployment",
        "Multi-cloud management",
        "Cost optimization",
      ],
      link: "/services#cloud",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions",
      features: [
        "Threat detection and response",
        "Security audits",
        "Compliance management",
      ],
      link: "/services#cybersecurity",
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Reliable infrastructure management",
      features: [
        "Server management",
        "Network infrastructure",
        "Disaster recovery",
      ],
      link: "/services#network",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure data storage and analytics",
      features: [
        "Data backup solutions",
        "Analytics and insights",
        "Database optimization",
      ],
      link: "/services#data",
    },
    {
      icon: Network,
      title: "Network Services",
      description: "High-performance networking solutions",
      features: [
        "Network design and setup",
        "Performance monitoring",
        "Security integration",
      ],
      link: "/services#network",
    },
    {
      icon: Headphones,
      title: "24/7 IT Support",
      description: "Round-the-clock technical assistance",
      features: [
        "Help desk support",
        "Remote troubleshooting",
        "On-site assistance",
      ],
      link: "/services#it-support",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        <StatsSection />

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose ITExceed?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We go beyond expectations to deliver exceptional value
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-muted-foreground">
                  Certified professionals with years of industry experience
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Response</h3>
                <p className="text-muted-foreground">
                  Quick turnaround times and 24/7 support availability
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Successfully serving 500+ clients across various industries
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Transform Your Business?"
          description="Let's discuss how ITExceed can help you achieve your technology goals"
          primaryButtonText="Contact Us Today"
          primaryButtonLink="/contact"
          secondaryButtonText="View Our Products"
          secondaryButtonLink="/products"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
