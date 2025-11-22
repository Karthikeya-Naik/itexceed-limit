import Hero from "@/components/Hero";
import OurPeople from "@/components/OurPeople";
import Services from "@/components/ScrollableServices";
import ProductsSection from "@/components/ProductsSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import {
  Cloud,
  Shield,
  Server,
  Database,
  Network,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Award,
  Clock,
  Users
} from "lucide-react";
import { useRef } from "react";

const Home = () => {
  const scrollContainerRef = useRef(null);

  const services = [
    {
      icon: Cloud,
      category: "Managed Cloud Services",
      tagline:
        "Unleash next-gen security for your biz with smart managed services",
      items: [
        {
          title: "Managed Azure",
          description:
            "Optimize Azure with managed services for efficiency & scale.",
        },
        {
          title: "Managed Microsoft 365",
          description:
            "Boost productivity with Managed Microsoft 365 for collaboration.",
        },
        {
          title: "Cloud Apps Management",
          description:
            "Manage third-party apps efficiently for enhanced compatibility.",
        },
      ],
    },
    {
      icon: Shield,
      category: "Cybersecurity Services",
      tagline: "Empower your business. Advanced security solutions beyond SOC.",
      items: [
        {
          title: "Managed Detection & Response",
          description:
            "Boost security with MDR: Proactive monitoring and response.",
        },
        {
          title: "Vulnerability Management",
          description:
            "Secure assets with our risk identification and mitigation.",
        },
        {
          title: "Cloud Security",
          description:
            "Dynamic threat detection and protection for Cloud & Microsoft 365.",
        },
      ],
    },
    {
      icon: Server,
      category: "Managed IT Services",
      tagline:
        "Scale success with expert IT management for security & optimization.",
      items: [
        {
          title: "24/7 Helpdesk",
          description:
            "Round-the-clock helpdesk support, ensuring uninterrupted business operations.",
        },
        {
          title: "Employee On/Off-boarding",
          description:
            "Smooth team transitions with secure onboarding/offboarding.",
        },
        {
          title: "Device Lifecycle Management",
          description:
            "Optimize operations: Computer management, procurement, and security.",
        },
      ],
    },
    {
      icon: Database,
      category: "Professional Services",
      tagline: "Maximize efficiency with expert IT professionals.",
      items: [
        {
          title: "vCIO",
          description:
            "Strategize with vCIO: IT leadership to drive business success.",
        },
        {
          title: "IT Consulting",
          description:
            "Transform business with IT consulting for efficient solutions.",
        },
        {
          title: "Cloud Migration",
          description: "Secure cloud transition with migration services.",
        },
      ],
    },
    {
      icon: Network,
      category: "Network Services",
      tagline: "High-performance networking solutions for modern business.",
      items: [
        {
          title: "Network Design",
          description: "Custom network architecture tailored to your needs.",
        },
        {
          title: "Performance Monitoring",
          description: "Real-time network monitoring and optimization.",
        },
        {
          title: "Security Integration",
          description: "Seamless security protocols across your network.",
        },
      ],
    },
    {
      icon: Headphones,
      category: "24/7 IT Support",
      tagline: "Round-the-clock technical assistance when you need it most.",
      items: [
        {
          title: "Help Desk Support",
          description: "Immediate assistance for all your IT concerns.",
        },
        {
          title: "Remote Troubleshooting",
          description: "Quick resolution without on-site visits.",
        },
        {
          title: "On-site Assistance",
          description: "Expert technicians ready to help in person.",
        },
      ],
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Services />
        <ProductsSection />
        
        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose ITExceed?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Two decades of excellence in delivering cutting-edge IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-professional-darkBlue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  9+ Years of Expertise
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Serving businesses since 2016 with industry-leading professionals and proven solutions
                </p>
              </div>

              <div className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-professional-darkBlue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">24/7 Support</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Round-the-clock availability with rapid response times to keep your business running
                </p>
              </div>

              <div className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-professional-darkBlue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  Satisfied Clients
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Trusted by businesses across industries with a track record of successful implementations
                </p>
              </div>
            </div>
          </div>
        </section>

        <OurPeople />
        <Testimonials />
        <CTASection
          title="Ready to Transform Your Business?"
          description="Let's discuss how ITExceed can help you achieve your technology goals"
          primaryButtonText="Contact Us Today"
          primaryButtonLink="/contact"
          secondaryButtonText="View Our Products"
          secondaryButtonLink="/products"
        />
      </main>
    </div>
  );
};

export default Home;