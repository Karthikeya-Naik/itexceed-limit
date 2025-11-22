import React from 'react';
import { Package, Cloud, Shield, Server, Database, Network, Wifi, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ScrollableServices = () => {
  const scrollContainerRef = React.useRef(null);

  const services = [
    {
      icon: Package,
      category: "IT Products & Hardware",
      tagline: "Enterprise-grade hardware and software solutions from trusted vendors.",
      link: "/products",
      items: [
        { title: "Hardware Solutions", description: "Laptops, desktops, servers, and networking equipment from leading brands." },
        { title: "Software Licensing", description: "Microsoft, Adobe, VMware licenses with expert configuration support." },
        { title: "Bulk Ordering", description: "Volume discounts and white-glove deployment for enterprise purchases." }
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
      const scrollAmount = window.innerWidth < 768 ? 300 : 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm font-semibold text-gray-500 mb-2 tracking-wider uppercase">
            MAXIMIZE EFFECTIVENESS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Fully Managed IT Services
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="relative">
          {/* Scroll Buttons - Always on sides for all devices */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all -ml-2 sm:-ml-4 md:-ml-6 border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all -mr-2 sm:-mr-4 md:-mr-6 border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-4 md:pb-6 snap-x snap-mandatory scrollbar-hide px-2 md:px-4"
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
                  className="flex-none w-[280px] sm:w-[300px] md:w-[340px] lg:w-[380px] snap-start group cursor-pointer"
                >
                  <div className="h-full bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:-translate-y-1 md:group-hover:-translate-y-2">
                    {/* Icon Header - Compact on Mobile */}
                    <div className="p-4 md:p-6 lg:p-8 border-b border-gray-100">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                        {service.category}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Services List - Compact on Mobile */}
                    <div className="px-4 md:px-6 lg:px-8 py-3 md:py-4">
                      {service.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="mb-3 md:mb-4 last:mb-0">
                          <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                            {item.title}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed ml-3.5">
                            {item.description}
                          </p>
                        </div>
                      ))}
                      
                      {/* Learn More Link */}
                      <div className="pt-2 md:pt-3 pb-4 md:pb-6 border-t border-gray-100 mt-2">
                        <span className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm font-semibold text-gray-900 group-hover:gap-2 md:group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableServices;