import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Award, ArrowRight, FileCheck, Users, Smartphone, Server, Wifi, ShieldAlert, ShieldCheck, Activity } from "lucide-react";
const CybersecurityDetail = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Proactive Protection",
      description: "Advanced threat detection and prevention systems that stop attacks before they cause damage."
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring with real-time alerts and immediate incident response."
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Ensure adherence to GDPR, ISO 27001, HIPAA, and other regulatory requirements."
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Comprehensive staff training to build a security-aware culture across your organization."
    }
  ];

  const threats = [
    {
      icon: AlertTriangle,
      title: "Ransomware",
      description: "Protect against malicious software that encrypts your data and demands payment for release.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
    },
    {
      icon: ShieldAlert,
      title: "Phishing Attacks",
      description: "Defense against fraudulent emails and messages designed to steal sensitive information.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
    },
    {
      icon: Lock,
      title: "Data Breaches",
      description: "Prevent unauthorized access to confidential business and customer data.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80"
    },
    {
      icon: Activity,
      title: "DDoS Attacks",
      description: "Mitigation strategies against distributed denial-of-service attacks on your infrastructure.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "Security Audits & Assessments",
      description: "Comprehensive evaluation of your security posture with detailed vulnerability analysis and remediation recommendations.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    },
    {
      icon: Eye,
      title: "Threat Detection & Response",
      description: "Advanced monitoring systems with AI-powered threat intelligence to identify and neutralize attacks in real-time.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      icon: Lock,
      title: "Firewall & Network Security",
      description: "Next-generation firewall implementation with intrusion prevention and network segmentation.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
    },
    {
      icon: Server,
      title: "Endpoint Protection",
      description: "Advanced antivirus and anti-malware solutions protecting all devices connected to your network.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80"
    },
    {
      icon: FileCheck,
      title: "Compliance & Governance",
      description: "Ensure your organization meets industry standards and regulatory requirements with comprehensive compliance programs.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
      icon: Users,
      title: "Security Awareness Training",
      description: "Empower your team with knowledge to recognize and respond to security threats effectively.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    }
  ];

  const benefits = [
    "Protect sensitive data from unauthorized access",
    "Prevent costly data breaches and downtime",
    "Maintain customer trust and brand reputation",
    "Ensure regulatory compliance and avoid penalties",
    "Secure remote work environments",
    "24/7 security operations center (SOC)",
    "Incident response and disaster recovery",
    "Regular security updates and patch management"
  ];

  const stats = [
    { number: "99.9%", label: "Threat Prevention Rate" },
    { number: "<15min", label: "Incident Response Time" },
    { number: "500+", label: "Organizations Protected" },
    { number: "24/7", label: "Security Monitoring" }
  ];

  const compliance = [
    {
      title: "GDPR",
      description: "General Data Protection Regulation compliance for EU data handling"
    },
    {
      title: "ISO 27001",
      description: "International standard for information security management systems"
    },
    {
      title: "HIPAA",
      description: "Healthcare Insurance Portability and Accountability Act compliance"
    },
    {
      title: "PCI DSS",
      description: "Payment Card Industry Data Security Standard for payment processing"
    },
    {
      title: "SOC 2",
      description: "Service Organization Control 2 for service providers"
    },
    {
      title: "NIST",
      description: "National Institute of Standards and Technology cybersecurity framework"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80" 
            alt="Cybersecurity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-orange-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Cybersecurity Services</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Protect Your Business<br />From Cyber Threats
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Advanced security solutions that safeguard your data, systems, and reputation against evolving cyber threats.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Talk to Security Expert
            </a>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Today's Cyber Threat Landscape
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cybercriminals are becoming more sophisticated. Is your business prepared?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => {
              const IconComponent = threat.icon;
              return (
                <div key={index} className="group">
                  <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                    <img 
                      src={threat.image} 
                      alt={threat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="w-10 h-10 text-red-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {threat.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {threat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Enterprise-Grade Security for Every Business
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Cybersecurity is no longer optional—it's essential. With cyberattacks increasing in frequency and sophistication, businesses of all sizes need robust protection to safeguard their assets, data, and reputation.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our comprehensive cybersecurity services provide multi-layered defense strategies that protect your organization from internal and external threats. We combine cutting-edge technology with expert human oversight to deliver security solutions that evolve with the threat landscape.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80" 
                alt="Security Operations"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multi-layered defense strategies that protect every aspect of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-red-600" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Cybersecurity Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete security solutions designed to protect your business from every angle.
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
                        <IconComponent className="w-6 h-6 text-red-600" />
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

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compliance & Regulatory Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We help you meet and maintain compliance with industry regulations and standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-red-500 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Security Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A systematic approach to securing your business infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Comprehensive security audit and risk analysis" },
              { step: "02", title: "Strategy", desc: "Custom security roadmap and policy development" },
              { step: "03", title: "Implementation", desc: "Deploy security solutions and controls" },
              { step: "04", title: "Monitoring", desc: "24/7 threat detection and response" },
              { step: "05", title: "Optimization", desc: "Continuous improvement and updates" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-red-600 to-orange-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Don't Wait Until It's Too Late
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a free security assessment and discover vulnerabilities before hackers do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Security Audit
              <ArrowRight className="w-5 h-5" />
            </a>
            {/* <a 
              href="#emergency"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <AlertTriangle className="w-5 h-5" />
              Emergency Response
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityDetail;