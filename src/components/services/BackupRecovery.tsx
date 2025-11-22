import React from 'react';
import { HardDrive, Clock, Shield, Zap, CheckCircle, Award, ArrowRight, Server, Database, Cloud, AlertTriangle, RotateCcw, FileCheck, Activity, Timer } from "lucide-react";

const BackupRecoveryDetail = () => {
  const features = [
    {
      icon: Clock,
      title: "Rapid Recovery",
      description: "Minimize downtime with automated recovery processes that restore your systems in minutes, not hours."
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Multiple backup layers with encryption ensure your critical business data remains secure and accessible."
    },
    {
      icon: Activity,
      title: "Continuous Monitoring",
      description: "24/7 backup monitoring with automated alerts to ensure your data protection is always operational."
    },
    {
      icon: Cloud,
      title: "Cloud & Hybrid Options",
      description: "Flexible backup solutions combining on-premise and cloud storage for optimal security and accessibility."
    }
  ];

  const threats = [
    {
      icon: AlertTriangle,
      title: "Hardware Failure",
      description: "Protect against server crashes, disk failures, and equipment malfunctions that can destroy data instantly.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      icon: AlertTriangle,
      title: "Cyberattacks",
      description: "Ransomware and malware can encrypt or delete your data. Secure backups are your last line of defense.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
    },
    {
      icon: AlertTriangle,
      title: "Human Error",
      description: "Accidental deletions and misconfigurations account for a significant portion of data loss incidents.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    },
    {
      icon: AlertTriangle,
      title: "Natural Disasters",
      description: "Fires, floods, and other disasters can destroy entire data centers without proper disaster recovery planning.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&h=400&fit=crop"
    }
  ];

  const services = [
    {
      icon: Database,
      title: "Automated Backup Solutions",
      description: "Scheduled, automated backups of servers, databases, and critical files with verification and reporting.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop"
    },
    {
      icon: Cloud,
      title: "Cloud Backup Services",
      description: "Secure off-site cloud backups with geo-redundancy and instant accessibility from anywhere.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
      icon: RotateCcw,
      title: "Disaster Recovery Planning",
      description: "Comprehensive DR strategies with documented procedures and regular testing to ensure business continuity.",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=400&fit=crop"
    },
    {
      icon: Server,
      title: "Bare Metal Recovery",
      description: "Complete system restoration including OS, applications, and data to new or existing hardware.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      icon: FileCheck,
      title: "Backup Testing & Validation",
      description: "Regular restore tests to verify backup integrity and ensure data can be recovered when needed.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      icon: Timer,
      title: "Point-in-Time Recovery",
      description: "Restore data to any specific moment in time, protecting against corruption and accidental changes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    }
  ];

  const benefits = [
    "Minimize downtime and business disruption",
    "Meet compliance and regulatory requirements",
    "Protect against ransomware and cyberattacks",
    "Recover from hardware failures instantly",
    "Safeguard intellectual property and customer data",
    "Maintain business operations during disasters",
    "Reduce recovery time objectives (RTO)",
    "Lower recovery point objectives (RPO)"
  ];

  const stats = [
    { number: "15min", label: "Average Recovery Time" },
    { number: "99.99%", label: "Backup Success Rate" },
    // { number: "1000+", label: "Systems Protected" },
    { number: "24/7", label: "Monitoring & Support" }
  ];

  const backupTypes = [
    {
      name: "Full Backup",
      description: "Complete copy of all data providing the most comprehensive protection and fastest recovery.",
      icon: Database,
      frequency: "Weekly"
    },
    {
      name: "Incremental Backup",
      description: "Only changed data since last backup, optimizing storage space and backup speed.",
      icon: Activity,
      frequency: "Daily"
    },
    {
      name: "Differential Backup",
      description: "All changes since last full backup, balancing recovery speed with storage efficiency.",
      icon: HardDrive,
      frequency: "Daily"
    },
    {
      name: "Continuous Data Protection",
      description: "Real-time backup of every change, enabling recovery to any point in time.",
      icon: Clock,
      frequency: "Real-time"
    }
  ];

  const recoveryLevels = [
    {
      tier: "Bronze",
      rto: "24 hours",
      rpo: "24 hours",
      features: ["Daily backups", "Cloud storage", "Email support"],
      color: "amber"
    },
    {
      tier: "Silver",
      rto: "4 hours",
      rpo: "4 hours",
      features: ["4x daily backups", "Hybrid storage", "Phone support", "Quarterly DR tests"],
      color: "gray"
    },
    {
      tier: "Gold",
      rto: "1 hour",
      rpo: "1 hour",
      features: ["Hourly backups", "Geo-redundant storage", "24/7 support", "Monthly DR tests"],
      color: "yellow"
    },
    {
      tier: "Platinum",
      rto: "15 minutes",
      rpo: "Near-zero",
      features: ["Continuous replication", "Multi-region storage", "Dedicated support", "Automated failover"],
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden mt-12 sm:mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562408590-e32931084e23?w=1600&h=900&fit=crop" 
            alt="Backup & Disaster Recovery"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-teal-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <HardDrive className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">Backup & Disaster Recovery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Never Lose Your<br />Critical Business Data
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Comprehensive backup and disaster recovery solutions that ensure business continuity when the unexpected happens.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Get Protected Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Free DR Assessment
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

      {/* Critical Importance */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Data Loss Threats Are Real
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              60% of businesses that lose their data shut down within 6 months. Don't become a statistic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {threats.map((threat, index) => {
              const IconComponent = threat.icon;
              return (
                <div key={index} className="group">
                  <div className="relative h-40 sm:h-48 overflow-hidden rounded-xl mb-3 sm:mb-4">
                    <img 
                      src={threat.image} 
                      alt={threat.title}
                      className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {threat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {threat.description}
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Your Data Is Your Business
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                In today's digital world, data loss can be catastrophic. Whether it's customer records, financial data, intellectual property, or operational information, losing critical data can halt business operations and damage your reputation permanently.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                Our backup and disaster recovery solutions provide peace of mind with automated, tested, and verified data protection. We don't just back up your data—we ensure you can recover it quickly when you need it most.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop" 
                alt="Disaster Recovery"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Backup Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Enterprise-grade protection with consumer-friendly simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Backup Types */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Backup Strategies We Implement
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              The right backup strategy depends on your recovery requirements and data criticality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {backupTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    {type.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-emerald-100 px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                    <span className="text-xs sm:text-sm font-semibold text-emerald-700">{type.frequency}</span>
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
              Comprehensive Backup & Recovery Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              End-to-end data protection from backup to full disaster recovery.
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

      {/* Recovery Tiers */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Choose Your Protection Level
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Scalable solutions designed to meet your recovery objectives and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {recoveryLevels.map((level, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 border-white/10 hover:border-emerald-500 transition-all">
                <div className={`inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-${level.color}-500/20 text-${level.color}-300 font-bold text-xs sm:text-sm mb-3 sm:mb-4`}>
                  {level.tier}
                </div>
                <div className="mb-4 sm:mb-6">
                  <div className="text-xs sm:text-sm text-gray-400 mb-1">Recovery Time</div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{level.rto}</div>
                  <div className="text-xs sm:text-sm text-gray-400 mb-1">Recovery Point</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{level.rpo}</div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {level.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Seamless deployment with minimal disruption to your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Evaluate your data, systems, and recovery requirements" },
              { step: "02", title: "Design", desc: "Create custom backup and DR strategy aligned with your needs" },
              { step: "03", title: "Deployment", desc: "Implement backup infrastructure with minimal downtime" },
              { step: "04", title: "Testing", desc: "Verify recovery procedures with real-world scenarios" },
              { step: "05", title: "Monitoring", desc: "Continuous oversight with proactive issue resolution" },
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
            Don't Wait for Disaster to Strike
          </h2>
          <p className="text-lg sm:text-xl text-emerald-100 mb-6 sm:mb-8 px-4">
            Protect your business today with enterprise-grade backup and disaster recovery solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Start Free Assessment
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            {/* <a 
              href="#demo"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Schedule Demo
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BackupRecoveryDetail;