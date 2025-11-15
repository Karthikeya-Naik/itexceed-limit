import React from 'react';
import { Headphones, Clock, Users, CheckCircle, Award, TrendingUp, Phone, Mail, MessageSquare, ArrowRight, Shield, Zap } from "lucide-react";

const ITSupportDetail = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support ensures your business never stops, no matter the time zone or hour."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified IT professionals with years of experience handling complex technical challenges."
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Priority ticket system with guaranteed response times for critical issues."
    },
    {
      icon: Shield,
      title: "Proactive Monitoring",
      description: "Continuous system monitoring to identify and resolve issues before they impact your business."
    }
  ];

  const services = [
    {
      title: "Remote Support",
      description: "Quick resolution of technical issues through secure remote access to your systems.",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80"
    },
    {
      title: "On-Site Assistance",
      description: "When remote support isn't enough, our technicians come to your location for hands-on help.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
    },
    {
      title: "Ticket Management",
      description: "Organized tracking system for all support requests with full transparency and updates.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      title: "Hardware Support",
      description: "Diagnosis, repair, and replacement services for all your IT hardware components.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80"
    },
    {
      title: "Software Troubleshooting",
      description: "Expert resolution of software conflicts, crashes, and performance issues.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
    },
    {
      title: "User Training",
      description: "Comprehensive training programs to empower your team with technical knowledge.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    }
  ];

  const benefits = [
    "Minimize downtime and maximize productivity",
    "Reduce IT costs with predictable support plans",
    "Access to enterprise-grade support infrastructure",
    "Scalable solutions that grow with your business",
    "Regular system maintenance and updates",
    "Comprehensive documentation and reporting"
  ];

  const stats = [
    { number: "< 15min", label: "Average Response Time" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "500+", label: "Clients Supported" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80" 
            alt="IT Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-700/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Headphones className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">IT Support & Helpdesk</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Always-On IT Support<br />For Your Business
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Expert technical support when you need it most. Keep your business running smoothly with our comprehensive helpdesk services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
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
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional IT Support That Keeps You Running
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our IT Support & Helpdesk services provide comprehensive technical assistance to keep your business operations running smoothly. We understand that technology issues can disrupt productivity, which is why we offer fast, reliable support whenever you need it.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From troubleshooting software problems to managing hardware issues, our experienced team handles all aspects of IT support. We combine reactive support with proactive monitoring to prevent issues before they impact your business.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="IT Support Team"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Support?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional support with features designed to minimize downtime and maximize your team's productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Support Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our full-spectrum IT support covers every aspect of your technology infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
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
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How Our Support Process Works
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A streamlined process designed to resolve your issues quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Submit Request", 
                desc: "Contact us via phone, email, or portal with your issue details" 
              },
              { 
                step: "02", 
                title: "Initial Assessment", 
                desc: "Our team reviews and prioritizes your request based on urgency" 
              },
              { 
                step: "03", 
                title: "Resolution", 
                desc: "Expert technicians work to resolve your issue remotely or on-site" 
              },
              { 
                step: "04", 
                title: "Follow-up", 
                desc: "We ensure the issue is fully resolved and document the solution" 
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="text-6xl font-bold text-blue-600/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
                {index < 0 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-blue-600/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Exceptional IT Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our expert team handle your IT challenges so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageSquare className="w-5 h-5" />
              Request a Quote
            </a>
            <a 
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSupportDetail;