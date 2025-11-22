import React from 'react';
import { Globe, Server, Shield, Activity, HardDrive, CheckCircle, Award, ArrowRight, Cpu, Database, Cloud, Lock, RefreshCw, AlertCircle } from "lucide-react";

const ServerManagementDetail = () => {
  const features = [
    {
      icon: Activity,
      title: "Proactive Monitoring",
      description: "24/7 server health monitoring with automated alerts for potential issues before they impact operations."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Multi-layered security protocols including patching, hardening, and intrusion detection systems."
    },
    {
      icon: RefreshCw,
      title: "Automated Backups",
      description: "Scheduled backups with rapid recovery capabilities ensuring your data is always protected."
    },
    {
      icon: Cpu,
      title: "Performance Tuning",
      description: "Continuous optimization to maximize server performance and resource utilization."
    }
  ];

  const services = [
    {
      icon: Server,
      title: "Server Installation & Configuration",
      description: "Professional setup of physical and virtual servers with optimal configurations tailored to your workload requirements.",
      image: "https://plus.unsplash.com/premium_photo-1683134018612-560033455e43?q=80&w=1170"
    },
    {
      icon: Database,
      title: "Windows/Linux Server Management",
      description: "Expert administration of both Windows Server and Linux distributions with 24/7 support and maintenance.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80"
    },
    {
      icon: Cloud,
      title: "Virtualization Solutions",
      description: "VMware, Hyper-V, and KVM virtualization implementation for efficient resource utilization and flexibility.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      icon: Activity,
      title: "Server Monitoring & Maintenance",
      description: "Comprehensive monitoring of server health, performance metrics, and proactive maintenance to prevent downtime.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      icon: HardDrive,
      title: "Disaster Recovery Planning",
      description: "Strategic backup and recovery solutions ensuring rapid restoration of critical systems during emergencies.",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80"
    },
    {
      icon: Lock,
      title: "Security & Patch Management",
      description: "Regular security updates, patch deployment, and vulnerability assessments to protect against threats.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    }
  ];

  const benefits = [
    "Maximize server uptime and reliability",
    "Reduce operational costs through automation",
    "Ensure data security and compliance",
    "Scale infrastructure as business grows",
    "Expert support for complex issues",
    "Predictable monthly costs",
    "Faster incident response and resolution",
    "Peace of mind with professional management"
  ];

  const stats = [
    { number: "99.99%", label: "Server Uptime" },
    { number: "<30min", label: "Incident Response" },
    { number: "24/7", label: "Monitoring & Support" }
  ];

  const serverTypes = [
    {
      icon: Server,
      title: "Physical Servers",
      description: "Dedicated bare-metal servers for high-performance workloads",
      features: ["Dell PowerEdge", "HP ProLiant", "Cisco UCS", "Custom Builds"]
    },
    {
      icon: Cloud,
      title: "Virtual Servers",
      description: "Flexible virtualized environments for optimal resource usage",
      features: ["VMware vSphere", "Microsoft Hyper-V", "Proxmox", "KVM"]
    },
    {
      icon: Database,
      title: "Database Servers",
      description: "Optimized servers for database applications and workloads",
      features: ["SQL Server", "MySQL/MariaDB", "PostgreSQL", "Oracle DB"]
    },
    {
      icon: Globe,
      title: "Web Servers",
      description: "High-performance servers for hosting web applications",
      features: ["Apache", "Nginx", "IIS", "Load Balancing"]
    }
  ];

  const platforms = [
    {
      name: "Windows Server",
      description: "Enterprise-grade Windows Server administration with Active Directory, Exchange, and SQL Server expertise.",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80",
      versions: ["2016", "2019", "2022"]
    },
    {
      name: "Linux Distributions",
      description: "Expert management of major Linux distributions for stability, security, and performance optimization.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
      versions: ["Ubuntu", "CentOS", "Red Hat", "Debian"]
    }
  ];

  const monitoring = [
    { metric: "CPU Usage", icon: Cpu, threshold: "< 80%" },
    { metric: "Memory Utilization", icon: Database, threshold: "< 85%" },
    { metric: "Disk Space", icon: HardDrive, threshold: "> 15% free" },
    { metric: "Network Traffic", icon: Activity, threshold: "< 80% capacity" },
    { metric: "Temperature", icon: AlertCircle, threshold: "< 70°C" },
    { metric: "Services Status", icon: Server, threshold: "100% uptime" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden mt-12 sm:mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://plus.unsplash.com/premium_photo-1683134018612-560033455e43?q=80&w=1170" 
            alt="Server Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Server className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">Server Management Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Reliable Server Management<br />For Peak Performance
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Expert server administration, monitoring, and maintenance ensuring your infrastructure runs smoothly 24/7.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Get Server Assessment
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Talk to Expert
            </a>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-700 mb-2">
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
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Professional Server Management You Can Trust
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Your servers are the foundation of your IT infrastructure. Proper server management ensures optimal performance, security, and reliability for all your critical business applications and services.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Our comprehensive server management services take the complexity out of server administration. From initial setup and configuration to ongoing monitoring and maintenance, we handle all aspects of server management so you can focus on your business goals.
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
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" 
                alt="Server Infrastructure"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-slate-800 text-white p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">24/7</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-300">Active Monitoring</div>
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
              Comprehensive Server Management
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Everything you need to keep your servers running at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-slate-700 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
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

      {/* Server Types */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              All Server Types Covered
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We manage physical, virtual, and cloud servers across all platforms and configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {serverTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-slate-600 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-1">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
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

      {/* Platform Expertise */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Platform Expertise
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Deep knowledge of both Windows and Linux server environments.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {platform.name}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                      {platform.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {platform.versions.map((version, idx) => (
                        <div key={idx} className="bg-slate-100 px-3 py-1 sm:px-4 sm:py-2 rounded-lg">
                          <span className="font-semibold text-slate-700 text-sm sm:text-base">{version}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative h-48 sm:h-64 lg:h-auto ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <img 
                      src={platform.image} 
                      alt={platform.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-gray-900/30"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Metrics */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What We Monitor
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive monitoring of critical server metrics to ensure optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {monitoring.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {item.metric}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Threshold: <span className="font-semibold text-green-600">{item.threshold}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Server Management Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Complete lifecycle management from installation to ongoing optimization.
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
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-700" />
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

      {/* Management Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Our Management Approach
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              A systematic approach to server management ensuring reliability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Setup", desc: "Professional installation and configuration" },
              { step: "02", title: "Monitor", desc: "24/7 health and performance tracking" },
              { step: "03", title: "Maintain", desc: "Regular updates and preventive maintenance" },
              { step: "04", title: "Optimize", desc: "Performance tuning and resource allocation" },
              { step: "05", title: "Support", desc: "Expert assistance whenever you need it" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-slate-600 to-gray-700 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold mx-auto mb-3 sm:mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-6 sm:top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-slate-600 to-gray-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Let Us Manage Your Servers
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Focus on your business while we ensure your servers run smoothly and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Server className="w-4 h-4 sm:w-5 sm:h-5" />
              Get Started Today
            </a>
            {/* <a 
              href="#pricing"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              View Pricing Plans
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServerManagementDetail;