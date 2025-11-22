import React from 'react';
import { Mail, Users, Video, MessageSquare, CheckCircle, Award, ArrowRight, Calendar, FileText, Shield, Cloud, Zap, Share2 } from "lucide-react";

const EmailCollaborationDetail = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced threat protection with encryption, anti-spam, and anti-phishing security measures."
    },
    {
      icon: Cloud,
      title: "Cloud-Based Access",
      description: "Access email and collaboration tools from anywhere on any device with seamless sync."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time document collaboration, team chat, and video conferencing in one platform."
    },
    {
      icon: Zap,
      title: "Productivity Tools",
      description: "Integrated calendar, tasks, and file storage to streamline your workflow."
    }
  ];

  const services = [
    {
      icon: Mail,
      title: "Microsoft 365 Deployment",
      description: "Complete Microsoft 365 setup including Exchange Online, Teams, SharePoint, and OneDrive with enterprise configuration.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop"
    },
    {
      icon: Cloud,
      title: "Email Migration Services",
      description: "Seamless migration from legacy systems to modern cloud platforms with zero data loss and minimal downtime.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Collaboration Tools Setup",
      description: "Deploy and configure Microsoft Teams, Slack, Zoom, and other collaboration platforms for optimal productivity.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      icon: Shield,
      title: "Email Security Solutions",
      description: "Advanced email protection including spam filtering, malware detection, and data loss prevention policies.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    },
    {
      icon: Video,
      title: "Video Conferencing Setup",
      description: "Professional video conferencing solutions with screen sharing, recording, and virtual backgrounds.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop"
    },
    {
      icon: FileText,
      title: "Training & Support",
      description: "Comprehensive user training programs and ongoing technical support to maximize platform adoption.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
    }
  ];

  const benefits = [
    "Professional email addresses with custom domain",
    "99.9% uptime SLA with enterprise reliability",
    "Unlimited storage for emails and files",
    "Advanced security and compliance features",
    "Real-time collaboration on documents",
    "Mobile access on iOS and Android devices",
    "Integrated calendar and scheduling",
    "24/7 technical support and monitoring"
  ];

  const stats = [
    { number: "50TB+", label: "Data Migrated" },
    { number: "99.9%", label: "Email Uptime" },
    // { number: "5,000+", label: "Users Supported" },
    { number: "<24hrs", label: "Migration Time" }
  ];

  const microsoft365Features = [
    {
      icon: Mail,
      name: "Exchange Online",
      description: "Professional email with 50GB mailbox and advanced calendaring",
      features: ["Custom Domain", "Mobile Sync", "Shared Mailboxes", "Email Archiving"]
    },
    {
      icon: Users,
      name: "Microsoft Teams",
      description: "Chat, meetings, calling, and collaboration in one platform",
      features: ["Team Channels", "Video Meetings", "File Sharing", "App Integration"]
    },
    {
      icon: FileText,
      name: "SharePoint Online",
      description: "Document management and intranet sites for your organization",
      features: ["Document Libraries", "Workflows", "Team Sites", "Version Control"]
    },
    {
      icon: Cloud,
      name: "OneDrive for Business",
      description: "1TB personal cloud storage with file sync across devices",
      features: ["File Sync", "External Sharing", "Offline Access", "Auto Backup"]
    }
  ];

  const collaborationTools = [
    {
      name: "Microsoft 365",
      description: "Complete productivity suite with email, Office apps, and collaboration tools",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop",
      apps: ["Outlook", "Teams", "Word", "Excel", "PowerPoint", "SharePoint"]
    },
    {
      name: "Google Workspace",
      description: "Cloud-based productivity tools including Gmail, Drive, and Meet",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
      apps: ["Gmail", "Drive", "Meet", "Docs", "Sheets", "Calendar"]
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "AI-powered detection of phishing, malware, and zero-day threats"
    },
    {
      icon: Mail,
      title: "Email Encryption",
      description: "End-to-end encryption for sensitive communications"
    },
    {
      icon: FileText,
      title: "Data Loss Prevention",
      description: "Prevent accidental sharing of sensitive information"
    },
    {
      icon: CheckCircle,
      title: "Compliance Management",
      description: "Meet GDPR, HIPAA, and other regulatory requirements"
    }
  ];

  const migrationSteps = [
    { step: "01", title: "Assessment", desc: "Analyze current email infrastructure and data volume" },
    { step: "02", title: "Planning", desc: "Create detailed migration strategy and timeline" },
    { step: "03", title: "Preparation", desc: "Set up target environment and configure settings" },
    { step: "04", title: "Migration", desc: "Transfer emails, calendars, and contacts seamlessly" },
    { step: "05", title: "Validation", desc: "Verify data integrity and test all functionality" },
    { step: "06", title: "Support", desc: "Provide training and post-migration assistance" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden mt-12 sm:mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1600&h=900&fit=crop" 
            alt="Email & Collaboration"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 to-orange-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">Email & Collaboration Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Modern Communication<br />For Modern Business
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Professional email and collaboration solutions that keep your team connected, productive, and secure.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Schedule Demo
            </a>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-600 mb-2">
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
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Empower Your Team With Modern Collaboration
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                In today's remote and hybrid work environment, effective communication and collaboration tools are essential for business success. Our email and collaboration services provide enterprise-grade solutions that enable your team to work together seamlessly, regardless of location.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                From professional email hosting to real-time collaboration platforms, we deploy and manage the tools your organization needs to stay connected, productive, and competitive.
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
            
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop" 
                alt="Team Collaboration"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-amber-600 text-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">100%</div>
                </div>
                <div className="text-xs sm:text-sm text-amber-100">Team Productivity</div>
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
              Complete Collaboration Suite
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Everything your team needs to communicate and collaborate effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-amber-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
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

      {/* Microsoft 365 Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Microsoft 365 Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive productivity suite for enterprise collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {microsoft365Features.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-amber-500 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-1">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Platforms */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leading Collaboration Platforms
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              We deploy and support the industry's most trusted collaboration tools.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {collaborationTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {tool.name}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                      {tool.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {tool.apps.map((app, idx) => (
                        <div key={idx} className="bg-amber-100 px-3 py-1 sm:px-4 sm:py-2 rounded-lg">
                          <span className="font-semibold text-amber-700 text-xs sm:text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative h-48 sm:h-56 lg:h-auto ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <img 
                      src={tool.image} 
                      alt={tool.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Email Security
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Advanced protection keeping your communications safe and compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
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

      {/* Services We Provide */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Email & Collaboration Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              End-to-end solutions for modern workplace communication.
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
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-600" />
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

      {/* Migration Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Seamless Email Migration
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Our proven migration process ensures zero data loss and minimal disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {migrationSteps.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10">
                <div className="bg-gradient-to-br from-amber-600 to-orange-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-lg sm:text-xl text-amber-100 mb-6 sm:mb-8 px-4">
            Let us help you deploy professional email and collaboration tools that empower your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Get Started Now
            </a>
            {/* <a 
              href="#migration"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Plan Migration
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailCollaborationDetail;