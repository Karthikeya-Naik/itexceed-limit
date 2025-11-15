import React from 'react';
import { Cloud, Shield, Server, Database, Network, Wifi, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ScrollableServices = () => {
  const scrollContainerRef = React.useRef(null);

  const services = [
    {
      icon: Server,
      category: "Managed IT Services",
      tagline: "Scale success with expert IT management for security & optimization.",
      link: "/services/it-services",
      items: [
        { title: "24/7 Helpdesk", description: "Round-the-clock helpdesk support, ensuring uninterrupted business operations." },
        { title: "Employee On/Off-boarding", description: "Smooth team transitions with secure onboarding/offboarding." },
        { title: "Device Lifecycle Management", description: "Optimize operations: Computer management, procurement, and security." }
      ]
    },
    {
      icon: Cloud,
      category: "Cloud Solutions",
      tagline: "Unleash next-gen cloud infrastructure with smart managed services.",
      link: "/services/cloud-services",
      items: [
        { title: "Managed Azure", description: "Optimize Azure with managed services for efficiency & scale." },
        { title: "Managed Microsoft 365", description: "Boost productivity with Managed Microsoft 365 for collaboration." },
        { title: "Cloud Migration", description: "Secure cloud transition with expert migration services." }
      ]
    },
    {
      icon: Shield,
      category: "Cybersecurity Services",
      tagline: "Empower your business with advanced security solutions.",
      link: "/services/cybersecurity",
      items: [
        { title: "Managed Detection & Response", description: "Proactive monitoring and rapid response to security threats." },
        { title: "Vulnerability Management", description: "Comprehensive risk identification and mitigation strategies." },
        { title: "Cloud Security", description: "Dynamic threat detection and protection for Cloud & Microsoft 365." }
      ]
    },
    {
      icon: Network,
      category: "Network Infrastructure",
      tagline: "High-performance networking solutions for modern business.",
      link: "/services/network-infrastructure",
      items: [
        { title: "Network Design", description: "Custom network architecture tailored to your business needs." },
        { title: "Performance Monitoring", description: "Real-time network monitoring and optimization services." },
        { title: "Security Integration", description: "Seamless security protocols across your entire network." }
      ]
    },
    {
      icon: Wifi,
      category: "Wireless Solutions",
      tagline: "Enterprise-grade wireless networking with optimal coverage.",
      link: "/services/wireless-network",
      items: [
        { title: "Wireless Design", description: "Strategic wireless infrastructure planning and deployment." },
        { title: "Coverage Optimization", description: "Maximize signal strength and eliminate dead zones." },
        { title: "Secure Access", description: "Enterprise-level wireless security and access control." }
      ]
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wider uppercase">
            MAXIMIZE EFFECTIVENESS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Fully Managed IT Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all -ml-6 hidden md:flex border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all -mr-6 hidden md:flex border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <a
                  key={index}
                  href={service.link}
                  className="flex-none w-[340px] md:w-[380px] snap-start group cursor-pointer"
                >
                  <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:-translate-y-2">
                    {/* Icon Header */}
                    <div className="p-8 border-b border-gray-100">
                      <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.category}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Services List */}
                    <div className="p-8">
                      {service.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="mb-5 last:mb-0">
                          <h4 className="text-base font-semibold text-gray-900 mb-1 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed ml-3.5">
                            {item.description}
                          </p>
                        </div>
                      ))}
                      
                      {/* Learn More Link */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ScrollableServices;