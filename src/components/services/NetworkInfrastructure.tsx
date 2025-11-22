import React from 'react';
import { Network, Wifi, Globe, Zap, CheckCircle, Award, ArrowRight, Activity, Lock, Server, Router, Signal, MonitorSmartphone } from "lucide-react";

const NetworkInfrastructureDetail = () => {
  const features = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast network speeds with optimized routing and minimal latency for seamless operations."
    },
    {
      icon: Lock,
      title: "Secure Architecture",
      description: "Multi-layered security protocols protecting your network from unauthorized access and threats."
    },
    {
      icon: Activity,
      title: "24/7 Monitoring",
      description: "Continuous network surveillance with proactive issue detection and instant alerts."
    },
    {
      icon: Globe,
      title: "Scalable Design",
      description: "Future-proof infrastructure that grows seamlessly with your business expansion."
    }
  ];

  const services = [
    {
      icon: Network,
      title: "Network Design & Implementation",
      description: "Custom network architecture designed for optimal performance, security, and scalability tailored to your business needs.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop"
    },
    {
      icon: Wifi,
      title: "LAN/WAN Setup",
      description: "Professional local and wide area network configuration ensuring reliable connectivity across all locations.",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=400&fit=crop"
    },
    {
      icon: Lock,
      title: "VPN Configuration",
      description: "Secure virtual private network solutions enabling safe remote access for your distributed workforce.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    },
    {
      icon: Activity,
      title: "Network Monitoring",
      description: "Advanced monitoring tools providing real-time visibility into network health, performance, and security.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Continuous tuning and enhancement to maximize network speed, reliability, and efficiency.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      icon: Router,
      title: "Network Upgrades",
      description: "Modernization of legacy infrastructure with cutting-edge networking technologies and equipment.",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=400&fit=crop"
    }
  ];

  const benefits = [
    "Reduce network downtime and connectivity issues",
    "Improve data transfer speeds by up to 10x",
    "Enable seamless remote work capabilities",
    "Lower operational costs through optimization",
    "Scale infrastructure without disruption",
    "Enhance security with advanced firewalls",
    "Centralized network management and control",
    "Future-proof technology investments"
  ];

  const stats = [
    { number: "99.99%", label: "Network Uptime" },
    { number: "<5ms", label: "Average Latency" },
    { number: "10Gbps+", label: "Network Speed" },
    // { number: "1000+", label: "Networks Deployed" }
  ];

  const networkComponents = [
    {
      icon: Router,
      title: "Routers & Switches",
      description: "Enterprise-grade routing and switching equipment for optimal data flow",
      image: "https://i.pinimg.com/736x/ef/ec/8c/efec8c97013277e2a3e3fc7a925288ab.jpg"
    },
    {
      icon: Wifi,
      title: "Wireless Access Points",
      description: "High-performance WiFi infrastructure providing seamless coverage",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=400&fit=crop"
    },
    {
      icon: Lock,
      title: "Firewall Systems",
      description: "Next-generation firewalls protecting against advanced threats",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
    },
    {
      icon: Server,
      title: "Network Servers",
      description: "Dedicated servers for DHCP, DNS, and network management",
      image: "https://i.pinimg.com/736x/10/44/a6/1044a6edc3273cf7d5856745a4c01705.jpg"
    }
  ];

  const technologies = [
    { name: "Cisco", icon: "🔷" },
    { name: "Juniper", icon: "🟦" },
    { name: "Aruba", icon: "🟠" },
    { name: "Fortinet", icon: "🔴" },
    { name: "Palo Alto", icon: "🟢" },
    { name: "Ubiquiti", icon: "⚪" },
    { name: "Meraki", icon: "🔵" },
    { name: "HPE", icon: "🟩" },
    { name: "Dell EMC", icon: "💙" },
    { name: "Netgear", icon: "🔶" },
    { name: "TP-Link", icon: "🟡" },
    { name: "MikroTik", icon: "⚫" }
  ];

  const networkTypes = [
    {
      title: "Local Area Network (LAN)",
      description: "High-speed connectivity within your office or campus environment",
      features: ["Gigabit Ethernet", "VLAN Segmentation", "QoS Management"]
    },
    {
      title: "Wide Area Network (WAN)",
      description: "Connect multiple locations with reliable long-distance connectivity",
      features: ["MPLS Connections", "SD-WAN Solutions", "Redundant Links"]
    },
    {
      title: "Wireless Networks",
      description: "Enterprise WiFi with seamless roaming and optimal coverage",
      features: ["WiFi 6/6E Support", "Guest Networks", "IoT Integration"]
    },
    {
      title: "Virtual Private Network (VPN)",
      description: "Secure remote access for employees working from anywhere",
      features: ["Site-to-Site VPN", "SSL VPN", "Multi-Factor Auth"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden mt-12 sm:mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&h=900&fit=crop" 
            alt="Network Infrastructure"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-teal-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Network className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">Network Infrastructure Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Build a Network That<br />Powers Your Success
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Robust, secure, and scalable network infrastructure designed to keep your business connected and productive.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Get Network Assessment
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Explore Solutions
            </a>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=500&fit=crop" 
                alt="Network Infrastructure"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Enterprise Network Solutions That Drive Performance
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Your network is the backbone of your business operations. A well-designed, properly managed network infrastructure ensures reliable connectivity, optimal performance, and the security your organization needs to thrive.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Our network infrastructure services provide comprehensive solutions from initial design and deployment to ongoing management and optimization. We work with leading technology partners to deliver enterprise-grade networking that scales with your business.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our Network Solutions?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Cutting-edge infrastructure designed for reliability, performance, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-emerald-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network Types */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Network Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              From local area networks to global connectivity, we design and implement all types of network infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {networkTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-emerald-500 transition-all">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Components */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Essential Network Components
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              We deploy and manage all critical infrastructure components for optimal network performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {networkComponents.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <div key={index} className="group bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={component.image} 
                      alt={component.title}
                      className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {component.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {component.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Network Infrastructure Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              End-to-end solutions for designing, deploying, and managing your network infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies - Commented out as per original */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Partner Technologies
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We work with industry-leading vendors to deliver best-in-class network solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all text-center">
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="font-semibold text-sm">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Implementation Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Network Deployment Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Our proven methodology ensures successful network implementation with minimal disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Evaluate current infrastructure and business requirements" },
              { step: "02", title: "Design", desc: "Create detailed network architecture and topology" },
              { step: "03", title: "Deployment", desc: "Install and configure all network equipment" },
              { step: "04", title: "Testing", desc: "Comprehensive validation and performance testing" },
              { step: "05", title: "Management", desc: "Ongoing monitoring, maintenance, and optimization" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold mx-auto mb-3 sm:mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-6 sm:top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-lg sm:text-xl text-emerald-100 mb-6 sm:mb-8 px-4">
            Let our network experts design a solution that powers your business growth and productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Signal className="w-4 h-4 sm:w-5 sm:h-5" />
              Schedule Network Audit
            </a>
            {/* <a 
              href="#demo"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              View Case Studies
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkInfrastructureDetail;