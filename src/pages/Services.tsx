import React from 'react';
import { Link } from "react-router-dom";
import { Code, Cloud, Shield, Server, Database, Network, Headphones, Mail, HardDrive, Wifi, Lock, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: "IT Support & Helpdesk",
      description: "Comprehensive technical support for your business operations with 24/7 availability",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      link: "/services/it-services"
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Robust network design, implementation, and optimization services",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      link: "/services/network-infrastructure"
    },
    {
      icon: Code,
      title: "Printing & Designing",
      description: "Professional printing and graphic design services for all your branding needs",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      link: "/services/printing-designing"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Modern cloud infrastructure and migration services for scalable business growth",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      link: "/services/cloud-services"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      link: "/services/web-development"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Advanced security solutions to protect your business from evolving threats",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      link: "/services/cybersecurity"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure and efficient data storage, backup, and analytics solutions",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      link: "/services/data-management"
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Reliable server infrastructure with proactive monitoring and maintenance",
      image: "https://plus.unsplash.com/premium_photo-1683134018612-560033455e43?w=600&h=400&fit=crop",
      link: "/services/server-management"
    },
    {
      icon: Mail,
      title: "Email & Collaboration",
      description: "Professional email systems and collaboration tools for seamless communication",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop",
      link: "/services/email-collaboration"
    },
    {
      icon: HardDrive,
      title: "Backup & Disaster Recovery",
      description: "Comprehensive business continuity solutions to protect your operations",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=400&fit=crop",
      link: "/services/backup-recovery"
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Enterprise-grade wireless networking with optimal coverage and security",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=400&fit=crop",
      link: "/services/wireless-network"
    },
    {
      icon: Lock,
      title: "Access Control & Identity",
      description: "Secure identity and access management with multi-factor authentication",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop",
      link: "/services/access-control"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop" 
            alt="Services background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Empowering Your Business<br />Through Technology
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto px-4">
            Transforming challenges into opportunities with innovative IT solutions
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                What We Offer
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                We provide comprehensive IT solutions that drive business growth and operational excellence. Our expert team delivers cutting-edge technology services tailored to your unique business needs.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                From cloud infrastructure to cybersecurity, from software development to IT support, we offer end-to-end solutions that keep your business running smoothly and securely.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Expert team with 9+ years of experience",
                  "24/7 support and monitoring",
                  "Scalable solutions for businesses of all sizes",
                  "Cutting-edge technology implementation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-professional-darkBlue flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop" 
                alt="What we offer"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Explore our comprehensive range of IT services designed to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-professional-darkBlue" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-professional-darkBlue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center text-professional-darkBlue font-semibold text-sm sm:text-base group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-professional-darkBlue to-professional-darkBlue/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-4">
            Our experts are ready to design a service package tailored to your specific requirements
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-professional-darkBlue px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;