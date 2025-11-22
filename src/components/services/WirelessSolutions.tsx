import React from 'react';
import { Wifi, Zap, Shield, Users, CheckCircle, Award, ArrowRight, Signal, Radio, Lock, Smartphone, Building, TrendingUp, Activity, Gauge, MapPin } from "lucide-react";

const WirelessSolutionsDetail = () => {
  const features = [
    {
      icon: Signal,
      title: "Maximum Coverage",
      description: "Enterprise-grade wireless networks with seamless coverage across your entire facility with zero dead zones."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Ultra-fast WiFi 6/6E technology delivering gigabit speeds for demanding business applications."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "WPA3 encryption, network segmentation, and intrusion detection to protect your wireless infrastructure."
    },
    {
      icon: Users,
      title: "Scalable Design",
      description: "Flexible architecture that grows with your business, supporting hundreds or thousands of concurrent users."
    }
  ];

  const challenges = [
    {
      icon: Signal,
      title: "Poor Coverage",
      description: "Dead zones and weak signals frustrating employees and impacting productivity throughout the workspace.",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80"
    },
    {
      icon: Activity,
      title: "Slow Speeds",
      description: "Bandwidth congestion and outdated equipment causing sluggish performance and connection drops.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
    },
    {
      icon: Lock,
      title: "Security Risks",
      description: "Unsecured wireless networks exposing your business to data breaches and unauthorized access.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    },
    {
      icon: Users,
      title: "Device Overload",
      description: "Legacy networks struggling to handle modern IoT devices, smartphones, tablets, and laptops.",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80"
    }
  ];

  const services = [
    {
      icon: Radio,
      title: "Site Survey & Design",
      description: "Professional RF analysis and heat mapping to design optimal wireless coverage for your specific environment.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      icon: Wifi,
      title: "Enterprise WiFi Installation",
      description: "Deployment of business-grade wireless access points with seamless roaming and high-density support.",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80"
    },
    {
      icon: Lock,
      title: "Guest Network Solutions",
      description: "Secure, isolated guest WiFi networks with captive portals and bandwidth management controls.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      icon: Building,
      title: "Outdoor Wireless Systems",
      description: "Weather-resistant outdoor access points for campus-wide coverage, parking areas, and outdoor venues.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      icon: Activity,
      title: "Network Management",
      description: "Centralized cloud management platform for monitoring, configuration, and optimization of your wireless infrastructure.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      icon: Smartphone,
      title: "IoT Integration",
      description: "Dedicated wireless networks for IoT devices with VLAN segmentation and device management capabilities.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
    }
  ];

  const benefits = [
    "Eliminate dead zones with complete coverage",
    "Support 100+ concurrent users per access point",
    "Reduce IT support tickets related to WiFi issues",
    "Enable BYOD policies securely",
    "Seamless roaming between access points",
    "Real-time network monitoring and analytics",
    "Automatic firmware updates and patches",
    "Future-proof with WiFi 6/6E technology"
  ];

  const stats = [
    { number: "99.9%", label: "Network Uptime" },
    { number: "1Gbps+", label: "Maximum Speeds" },
    { number: "24/7", label: "Support Available" }
  ];

  const technologies = [
    {
      name: "WiFi 6 (802.11ax)",
      description: "Latest wireless standard with 4x faster speeds, improved efficiency, and better performance in high-density environments.",
      icon: Wifi,
      benefits: ["Up to 9.6 Gbps", "75% less latency", "Better battery life"]
    },
    {
      name: "WiFi 6E",
      description: "Extended WiFi 6 with access to the 6GHz band, providing more channels and less interference for demanding applications.",
      icon: Zap,
      benefits: ["6GHz spectrum", "Zero congestion", "Ultra-low latency"]
    },
    {
      name: "Mesh Networking",
      description: "Self-healing wireless mesh technology that ensures continuous connectivity even if individual access points fail.",
      icon: Radio,
      benefits: ["Automatic healing", "Seamless coverage", "Easy expansion"]
    },
    {
      name: "Beamforming",
      description: "Advanced antenna technology that focuses wireless signals directly to devices for stronger connections and better range.",
      icon: Signal,
      benefits: ["Extended range", "Stronger signals", "Better reliability"]
    }
  ];

  const useCases = [
    {
      industry: "Corporate Offices",
      description: "High-density wireless networks supporting video conferencing, cloud applications, and mobile workforces.",
      needs: ["Guest WiFi", "Conference rooms", "BYOD support"],
      color: "blue"
    },
    {
      industry: "Healthcare",
      description: "HIPAA-compliant wireless networks for medical devices, EMR systems, and patient/visitor connectivity.",
      needs: ["Medical IoT", "Secure access", "Real-time data"],
      color: "red"
    },
    {
      industry: "Retail & Hospitality",
      description: "Customer-facing wireless networks with captive portals, location analytics, and POS system connectivity.",
      needs: ["Guest access", "POS systems", "Analytics"],
      color: "purple"
    },
    {
      industry: "Education",
      description: "Campus-wide WiFi supporting thousands of students with device management and content filtering.",
      needs: ["High density", "Content filtering", "Student devices"],
      color: "green"
    },
    {
      industry: "Manufacturing",
      description: "Industrial-grade wireless networks for warehouse management, robotics, and real-time inventory tracking.",
      needs: ["Harsh environments", "IoT sensors", "Automation"],
      color: "orange"
    },
    {
      industry: "Multi-Tenant Buildings",
      description: "Separate wireless networks for each tenant with centralized management and billing capabilities.",
      needs: ["Tenant isolation", "Bandwidth control", "Managed services"],
      color: "teal"
    }
  ];

  const managementFeatures = [
    {
      icon: Gauge,
      title: "Performance Analytics",
      description: "Real-time insights into network usage, device connections, and application performance."
    },
    {
      icon: MapPin,
      title: "Location Services",
      description: "Indoor positioning and presence analytics for asset tracking and customer behavior insights."
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Continuous threat detection with automatic blocking of rogue access points and suspicious devices."
    },
    {
      icon: TrendingUp,
      title: "Capacity Planning",
      description: "Historical data analysis to forecast growth and optimize access point placement and configuration."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden mt-12 sm:mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=1600&q=80" 
            alt="Wireless Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 to-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">Wireless Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Enterprise Wireless<br />That Actually Works
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Transform your workspace with lightning-fast, secure wireless networks designed for the modern business.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Get Free Site Survey
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Schedule Consultation
            </a>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common WiFi Problems */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Is Your Wireless Network Holding You Back?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Poor WiFi is more than an inconvenience—it's a productivity killer that costs your business money.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <div key={index} className="group">
                  <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden rounded-xl mb-3 sm:mb-4">
                    <img 
                      src={challenge.image} 
                      alt={challenge.title}
                      className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-indigo-500" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Built for Business, Designed for Performance
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                Your wireless network is the backbone of modern business operations. From video conferencing to cloud applications, from mobile devices to IoT sensors, everything depends on reliable, high-speed wireless connectivity.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                We design and deploy enterprise-grade wireless solutions that eliminate frustration and enable productivity. Our networks are built to handle the demands of today's mobile workforce while being flexible enough to scale with your future needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-xs sm:text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" 
                alt="Wireless Network"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Our Wireless Solutions Stand Out
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Enterprise capabilities without enterprise complexity or cost.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Cutting-Edge Wireless Technologies
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We deploy the latest wireless standards and innovations for maximum performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    {tech.description}
                  </p>
                  <div className="space-y-2">
                    {tech.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Complete Wireless Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              From planning to deployment to ongoing management, we handle every aspect of your wireless network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-indigo-600" />
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

      {/* Industry Use Cases */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Solutions for Every Industry
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Tailored wireless networks designed for your specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 border-white/10 hover:border-indigo-500 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {useCase.industry}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.needs.map((need, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-300">{need}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Cloud-Managed Intelligence
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Centralized management platform providing complete visibility and control over your wireless network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {managementFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Deployment Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Professional installation with minimal disruption to your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Site Survey", desc: "RF analysis and heat mapping to identify optimal AP placement" },
              { step: "02", title: "Design", desc: "Custom network architecture tailored to your requirements" },
              { step: "03", title: "Installation", desc: "Professional deployment of access points and infrastructure" },
              { step: "04", title: "Testing", desc: "Comprehensive validation of coverage, performance, and security" },
              { step: "05", title: "Support", desc: "Ongoing monitoring, optimization, and technical assistance" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold mx-auto mb-3 sm:mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-6 sm:top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Transform Your Wireless Experience Today
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-6 sm:mb-8 px-4">
            Get a free wireless site survey and discover how we can eliminate your WiFi frustrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Request Free Site Survey
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            {/* <a 
              href="#demo"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              See Demo Network
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WirelessSolutionsDetail;