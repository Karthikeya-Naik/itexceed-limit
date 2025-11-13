import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Cloud, Shield, Server, Database, Network, Headphones, Code, Smartphone, Mail, HardDrive, Wifi, Lock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: "IT Support & Helpdesk",
      description: "Comprehensive technical support for your business operations",
      features: [
        "24/7 help desk support",
        "Remote and on-site assistance",
        "Ticket management system",
        "Priority response times",
        "Proactive monitoring",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Modern cloud infrastructure and migration services",
      features: [
        "Cloud strategy and consulting",
        "AWS, Azure, Google Cloud deployment",
        "Cloud migration services",
        "Multi-cloud management",
        "Cost optimization",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Advanced security solutions to protect your business",
      features: [
        "Security audits and assessments",
        "Threat detection and response",
        "Firewall and antivirus solutions",
        "Compliance management (GDPR, ISO 27001)",
        "Security training for staff",
      ],
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure and efficient data storage solutions",
      features: [
        "Database design and optimization",
        "Data backup and recovery",
        "Data analytics and insights",
        "Big data solutions",
        "Data migration services",
      ],
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Robust network design and management",
      features: [
        "Network design and implementation",
        "LAN/WAN setup",
        "VPN configuration",
        "Network monitoring",
        "Performance optimization",
      ],
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Reliable server infrastructure services",
      features: [
        "Server installation and configuration",
        "Windows/Linux server management",
        "Virtualization solutions",
        "Server monitoring and maintenance",
        "Disaster recovery planning",
      ],
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions for your business",
      features: [
        "Web application development",
        "Mobile app development",
        "API integration",
        "Legacy system modernization",
        "Quality assurance and testing",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Device Management",
      description: "Enterprise mobility management solutions",
      features: [
        "BYOD policy implementation",
        "Mobile security",
        "App deployment",
        "Device provisioning",
        "Remote wipe capabilities",
      ],
    },
    {
      icon: Mail,
      title: "Email & Collaboration",
      description: "Professional email and communication tools",
      features: [
        "Microsoft 365 deployment",
        "Email migration services",
        "Collaboration tools setup",
        "Email security solutions",
        "Training and support",
      ],
    },
    {
      icon: HardDrive,
      title: "Backup & Disaster Recovery",
      description: "Comprehensive business continuity solutions",
      features: [
        "Automated backup solutions",
        "Disaster recovery planning",
        "Business continuity strategies",
        "Data restoration services",
        "Compliance backup",
      ],
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Enterprise-grade wireless networking",
      features: [
        "WiFi network design",
        "Guest network setup",
        "Wireless security",
        "Coverage optimization",
        "Wireless controller management",
      ],
    },
    {
      icon: Lock,
      title: "Access Control & Identity",
      description: "Secure identity and access management",
      features: [
        "Single sign-on (SSO)",
        "Multi-factor authentication",
        "Active Directory management",
        "Identity governance",
        "Privileged access management",
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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive IT solutions designed to drive your business forward. 
              From cloud infrastructure to cybersecurity, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Service Delivery Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A proven methodology to ensure successful implementation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your needs and goals" },
                { step: "02", title: "Planning", desc: "Creating a tailored solution strategy" },
                { step: "03", title: "Implementation", desc: "Deploying solutions with minimal disruption" },
                { step: "04", title: "Support", desc: "Ongoing maintenance and optimization" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Need a Custom Solution?"
          description="Our experts are ready to design a service package tailored to your specific requirements"
          primaryButtonText="Schedule a Consultation"
          primaryButtonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
