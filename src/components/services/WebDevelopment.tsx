import React from 'react';
import { Code, Shield, Zap, Users, CheckCircle, Award, ArrowRight, Smartphone, Cloud, FileCheck, Layers, Settings, Globe } from "lucide-react";

const WebDevelopmentDetail = () => {
  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored web solutions built with modern frameworks and best practices for your unique needs."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast websites optimized for speed, SEO, and user experience across all devices."
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with scalable architecture that grows with your business."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Beautiful, mobile-first designs that provide seamless experiences on any screen size."
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites built from scratch with modern technologies, responsive design, and intuitive user interfaces.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
    },
    {
      icon: Layers,
      title: "E-Commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and customer analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    },
    {
      icon: Code,
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration between systems and third-party services.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    {
      icon: FileCheck,
      title: "Maintenance & Support",
      description: "Ongoing updates, security patches, and technical support to keep your site running smoothly.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
    },
    {
      icon: Settings,
      title: "CMS Development",
      description: "Content management systems that empower you to update and manage your website effortlessly.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
    },
  ];

  const benefits = [
    "Modern, cutting-edge technology stack",
    "Mobile-first responsive design",
    "SEO-optimized for better rankings",
    "Fast loading times and performance",
    "Cross-browser compatibility",
    "Secure coding practices",
    "Scalable architecture",
    "Clean, maintainable code"
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "<3s", label: "Average Load Time" },
    { number: "24/7", label: "Support Available" }
  ];

  const techFeatures = [
    {
      icon: Code,
      title: "Modern Frameworks",
      description: "React, Angular for dynamic applications",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "SSL, encryption, and protection against common vulnerabilities",
      color: "red"
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "CDN integration, caching, and code optimization",
      color: "orange"
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "AWS, Azure, and Google Cloud hosting solutions",
      color: "green"
    }
  ];

  const technologies = [
    {
      name: "Frontend Development",
      description: "Create stunning user interfaces with the latest frontend technologies and frameworks.",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
      features: ["React", "Angular", "Tailwind CSS"]
    },
    {
      name: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and database management.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      features: ["PHP & Laravel", "Python", "TypeScript", "Database Design"]
    }
  ];

  const useCases = [
    {
      title: "Corporate Websites",
      description: "Professional sites that establish your brand presence",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="48" height="40" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M8 24h48M20 16v-4M32 16v-4M44 16v-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="24" cy="36" r="4" fill="currentColor"/>
          <path d="M32 34h16M32 38h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "E-Commerce",
      description: "Online stores with seamless shopping experiences",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16l4 24h32l4-24H12z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round"/>
          <circle cx="22" cy="48" r="3" fill="currentColor"/>
          <circle cx="42" cy="48" r="3" fill="currentColor"/>
          <path d="M8 12h8l2 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "SaaS Platforms",
      description: "Subscription-based software as a service solutions",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="20" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M12 28h40M28 20v28M20 36h8M36 36h8" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="14" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      title: "Portfolios",
      description: "Showcase your work with stunning portfolio sites",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="18" width="44" height="32" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M18 34l8-8 6 6 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="44" cy="28" r="3" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: "Booking Systems",
      description: "Reservation and appointment scheduling platforms",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="16" width="40" height="36" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M12 26h40M22 12v8M42 12v8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="22" cy="36" r="2" fill="currentColor"/>
          <circle cx="32" cy="36" r="2" fill="currentColor"/>
          <circle cx="42" cy="36" r="2" fill="currentColor"/>
          <circle cx="22" cy="44" r="2" fill="currentColor"/>
          <circle cx="32" cy="44" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: "Dashboards",
      description: "Data visualization and analytics interfaces",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="14" width="44" height="36" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M18 38v-8M26 38v-14M34 38v-10M42 38v-16M46 38v-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const techStack = [
    { 
      name: "React",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="6" fill="currentColor"/>
          <ellipse cx="32" cy="32" rx="24" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="32" cy="32" rx="24" ry="10" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(60 32 32)"/>
          <ellipse cx="32" cy="32" rx="24" ry="10" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(-60 32 32)"/>
        </svg>
      )
    },
    { 
      name: "PHP",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="32" cy="32" rx="28" ry="16" stroke="currentColor" strokeWidth="3" fill="none"/>
          <text x="32" y="38" fontSize="18" fontWeight="bold" textAnchor="middle" fill="currentColor">PHP</text>
        </svg>
      )
    },
    { 
      name: "Node.js",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M24 20l16 24M44 20v24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      name: "TypeScript",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="3" fill="none"/>
          <text x="32" y="40" fontSize="24" fontWeight="bold" textAnchor="middle" fill="currentColor">TS</text>
        </svg>
      )
    },
    { 
      name: "Tailwind CSS",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 16c-6 0-10 3-12 9 3-3 6.5-4 10.5-3 2.3.6 4 2.3 5.8 4.2C39.5 29.5 43 33 50 33c6 0 10-3 12-9-3 3-6.5 4-10.5 3-2.3-.6-4-2.3-5.8-4.2C42.5 19.5 39 16 32 16zM20 33c-6 0-10 3-12 9 3-3 6.5-4 10.5-3 2.3.6 4 2.3 5.8 4.2C27.5 46.5 31 50 38 50c6 0 10-3 12-9-3 3-6.5 4-10.5 3-2.3-.6-4-2.3-5.8-4.2C30.5 36.5 27 33 20 33z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: "JavaScript",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="40" height="40" rx="4" fill="currentColor"/>
          <text x="32" y="42" fontSize="28" fontWeight="bold" textAnchor="middle" fill="white">JS</text>
        </svg>
      )
    },
    { 
      name: "Express.js",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 32h40M52 32l-8-8M52 32l-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 24l8 16 8-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      name: "MongoDB",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 12c-8 0-16 6-16 16v8c0 10 8 16 16 16s16-6 16-16v-8c0-10-8-16-16-16z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
          <path d="M32 12v40M28 52h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden mt-12 sm:mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80" 
            alt="Web Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-indigo-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">Web Development Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Build Your Digital<br />Presence Today
          </h1>
          <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Professional web development services that transform your ideas into powerful, scalable digital solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-600 mb-2">
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
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80" 
                alt="Web Development"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Transform Your Vision Into Reality
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                In today's digital age, your website is often the first impression customers have of your business. We create stunning, high-performance websites and web applications that engage users and drive results.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                From simple landing pages to complex enterprise applications, our team of expert developers uses cutting-edge technologies to build solutions that are fast, secure, and scalable.
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
              Why Choose Our Web Development Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Combining creativity with technical excellence to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
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

      {/* Tech Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Leveraging the latest tools and frameworks for superior results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {techFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const colorClasses = {
                red: 'bg-red-100 text-red-600 border-red-200',
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                orange: 'bg-orange-100 text-orange-600 border-orange-200',
                green: 'bg-green-100 text-green-600 border-green-200'
              };
              
              return (
                <div key={index} className={`p-4 sm:p-6 rounded-xl border-2 ${colorClasses[feature.color]} transition-transform hover:scale-105`}>
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Full-Stack Development
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Complete web solutions from frontend to backend.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {tech.name}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                      {tech.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {tech.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative h-48 sm:h-64 lg:h-auto ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Web Development Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive solutions for all your web development needs.
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
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-600" />
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

      {/* Use Cases */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              What We Build
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              From simple websites to complex web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-purple-400 mb-3 sm:mb-4">{useCase.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Modern frameworks and tools for cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all text-center">
                <div className="text-purple-600 mb-2 sm:mb-3 flex justify-center">{tech.icon}</div>
                <div className="font-semibold text-xs sm:text-sm text-gray-700">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Development Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              A proven approach to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Design", desc: "Creating wireframes and visual mockups" },
              { step: "03", title: "Development", desc: "Building your solution with clean code" },
              { step: "04", title: "Testing", desc: "Rigorous QA and performance testing" },
              { step: "05", title: "Launch", desc: "Deployment and ongoing support" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold mx-auto mb-3 sm:mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-6 sm:top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 px-4">
            Let's discuss your vision and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentDetail;