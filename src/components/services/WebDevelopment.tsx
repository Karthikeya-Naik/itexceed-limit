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
      icon: Cloud,
      title: "Web Applications",
      description: "Powerful web apps with complex functionality, real-time features, and seamless user experiences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      icon: Layers,
      title: "E-Commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and customer analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    },
    {
      icon: Settings,
      title: "CMS Development",
      description: "Content management systems that empower you to update and manage your website effortlessly.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
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
    }
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
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "<3s", label: "Average Load Time" },
    { number: "24/7", label: "Support Available" }
  ];

  const techFeatures = [
    {
      icon: Code,
      title: "Modern Frameworks",
      description: "React, Vue, Angular, and Next.js for dynamic applications",
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
      features: ["React & Next.js", "Vue & Nuxt.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and database management.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      features: ["Node.js & Express", "Python & Django", "PHP & Laravel", "Database Design"]
    }
  ];

  const useCases = [
    {
      title: "Corporate Websites",
      description: "Professional sites that establish your brand presence",
      icon: "🏢"
    },
    {
      title: "E-Commerce",
      description: "Online stores with seamless shopping experiences",
      icon: "🛒"
    },
    {
      title: "SaaS Platforms",
      description: "Subscription-based software as a service solutions",
      icon: "💻"
    },
    {
      title: "Portfolios",
      description: "Showcase your work with stunning portfolio sites",
      icon: "🎨"
    },
    {
      title: "Booking Systems",
      description: "Reservation and appointment scheduling platforms",
      icon: "📅"
    },
    {
      title: "Dashboards",
      description: "Data visualization and analytics interfaces",
      icon: "📊"
    }
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Next.js", icon: "⬛" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "MongoDB", icon: "🍃" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80" 
            alt="Web Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-indigo-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Code className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Web Development Services</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Build Your Digital<br />Presence Today
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Professional web development services that transform your ideas into powerful, scalable digital solutions.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Free Consultation
            </a>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80" 
                alt="Web Development"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Your Vision Into Reality
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's digital age, your website is often the first impression customers have of your business. We create stunning, high-performance websites and web applications that engage users and drive results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From simple landing pages to complex enterprise applications, our team of expert developers uses cutting-edge technologies to build solutions that are fast, secure, and scalable.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Our Web Development Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Combining creativity with technical excellence to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leveraging the latest tools and frameworks for superior results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const colorClasses = {
                red: 'bg-red-100 text-red-600 border-red-200',
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                orange: 'bg-orange-100 text-orange-600 border-orange-200',
                green: 'bg-green-100 text-green-600 border-green-200'
              };
              
              return (
                <div key={index} className={`p-6 rounded-xl border-2 ${colorClasses[feature.color]} transition-transform hover:scale-105`}>
                  <IconComponent className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Full-Stack Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete web solutions from frontend to backend.
            </p>
          </div>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {tech.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {tech.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {tech.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your web development needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From simple websites to complex web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern frameworks and tools for cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-semibold text-sm text-gray-700">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven approach to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Design", desc: "Creating wireframes and visual mockups" },
              { step: "03", title: "Development", desc: "Building your solution with clean code" },
              { step: "04", title: "Testing", desc: "Rigorous QA and performance testing" },
              { step: "05", title: "Launch", desc: "Deployment and ongoing support" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss your vision and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Code className="w-5 h-5" />
              Get Started Now
            </a>
            {/* <a 
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Portfolio
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentDetail;