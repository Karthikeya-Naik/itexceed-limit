import React from 'react';
import { Cloud, Zap, Shield, DollarSign, Globe, Server, TrendingUp, ArrowRight, CheckCircle, Award, Layers, Lock, Database, Cpu } from "lucide-react";

const CloudSolutionsDetail = () => {
  const features = [
    {
      icon: Zap,
      title: "Scalability",
      description: "Instantly scale resources up or down based on your business demands without hardware constraints."
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Pay only for what you use with optimized cloud infrastructure that reduces operational costs."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Enterprise-grade security with encryption, compliance, and advanced threat protection."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy applications worldwide with low latency and high availability across regions."
    }
  ];

  const platforms = [
    {
      name: "Amazon Web Services (AWS)",
      description: "Comprehensive cloud platform with robust services for computing, storage, and AI/ML capabilities.",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80",
      features: ["EC2 & Lambda", "S3 Storage", "RDS & DynamoDB", "CloudFront CDN"]
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise-focused cloud platform with seamless integration for Microsoft ecosystem and hybrid solutions.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
      features: ["Virtual Machines", "Azure AD", "Cosmos DB", "Azure DevOps"]
    },
    {
      name: "Google Cloud Platform",
      description: "Innovative cloud infrastructure with powerful data analytics, machine learning, and Kubernetes services.",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
      features: ["Compute Engine", "BigQuery", "Cloud AI", "Kubernetes Engine"]
    }
  ];

  const services = [
    {
      icon: Server,
      title: "Cloud Migration",
      description: "Seamless transition of your applications and data to the cloud with minimal downtime and risk.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    {
      icon: Layers,
      title: "Multi-Cloud Strategy",
      description: "Optimize costs and performance by leveraging multiple cloud providers for different workloads.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      icon: Lock,
      title: "Cloud Security",
      description: "Comprehensive security implementation including IAM, encryption, and compliance management.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Cloud-native database solutions with automatic backups, replication, and disaster recovery.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
    },
    {
      icon: Cpu,
      title: "Cloud Architecture",
      description: "Design and implementation of scalable, resilient cloud infrastructure tailored to your needs.",
      image: "https://images.unsplash.com/photo-1558494403-7f5a6d8b6c23?w=800&q=80"
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Continuous monitoring and optimization to reduce cloud spending while maintaining performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    }
  ];

  const benefits = [
    "Reduce IT infrastructure costs by up to 40%",
    "99.99% uptime with automatic failover",
    "Instant provisioning of resources in minutes",
    "Automatic software updates and patches",
    "Global content delivery for faster performance",
    "Disaster recovery and business continuity built-in",
    "Flexible pricing models (pay-as-you-go, reserved, spot)",
    "Access to cutting-edge technologies (AI, ML, IoT)"
  ];

  const stats = [
    { number: "1000+", label: "Cloud Migrations" },
    { number: "40%", label: "Average Cost Savings" },
    { number: "99.99%", label: "Uptime SLA" },
    { number: "50+", label: "Cloud Certifications" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" 
            alt="Cloud Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Cloud className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Cloud Solutions</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Business<br />With Cloud Technology
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Leverage the power of cloud computing to scale faster, reduce costs, and innovate without limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Cloud Journey
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
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
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" 
                alt="Cloud Infrastructure"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Unlock the Full Potential of Cloud Computing
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Cloud solutions are no longer optional—they're essential for businesses that want to stay competitive. Our cloud services help you modernize your infrastructure, improve agility, and drive innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're looking to migrate existing workloads, build new cloud-native applications, or optimize your current cloud environment, our certified experts guide you through every step of your cloud transformation journey.
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
              Why Move to the Cloud?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Cloud computing offers transformative benefits that traditional infrastructure simply cannot match.
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

      {/* Cloud Platforms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're certified partners with all major cloud providers, giving you the flexibility to choose the right platform for your needs.
            </p>
          </div>

          <div className="space-y-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {platform.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {platform.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {platform.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <img 
                      src={platform.image} 
                      alt={platform.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end cloud solutions covering every aspect of your cloud journey.
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

      {/* Migration Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Migration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures smooth, secure, and successful cloud adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Evaluate current infrastructure and define cloud strategy" },
              { step: "02", title: "Planning", desc: "Design architecture and create detailed migration plan" },
              { step: "03", title: "Migration", desc: "Execute phased migration with minimal downtime" },
              { step: "04", title: "Optimization", desc: "Fine-tune performance and optimize costs" },
              { step: "05", title: "Management", desc: "Ongoing monitoring, support, and continuous improvement" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Cloud Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let our cloud experts help you design and implement a solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Schedule Cloud Assessment
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutionsDetail;