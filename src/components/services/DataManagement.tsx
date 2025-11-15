import React from 'react';
import { Database, TrendingUp, Shield, Zap, CheckCircle, Award, ArrowRight, BarChart3, FolderSync, HardDrive, LineChart, PieChart, Search } from "lucide-react";

const DataManagementDetail = () => {
  const features = [
    {
      icon: Database,
      title: "Data Architecture",
      description: "Design and implement scalable database solutions that grow with your business needs."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade encryption and access controls to protect your sensitive information."
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization."
    },
    {
      icon: FolderSync,
      title: "Data Integration",
      description: "Seamlessly connect disparate data sources for unified business intelligence."
    }
  ];

  const solutions = [
    {
      icon: Database,
      title: "Database Design & Optimization",
      description: "Expert database architecture, performance tuning, and query optimization for maximum efficiency and reliability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      icon: HardDrive,
      title: "Data Backup & Recovery",
      description: "Automated backup solutions with rapid recovery capabilities to ensure business continuity and zero data loss.",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & Analytics",
      description: "Advanced analytics platforms that transform data into strategic insights for informed decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      icon: Zap,
      title: "Big Data Solutions",
      description: "Scalable infrastructure for processing and analyzing massive datasets with distributed computing technologies.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    {
      icon: FolderSync,
      title: "Data Migration Services",
      description: "Seamless transfer of data between systems with zero downtime and complete data integrity validation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      icon: Search,
      title: "Data Quality Management",
      description: "Ensure data accuracy, consistency, and completeness with automated validation and cleansing processes.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    }
  ];

  const benefits = [
    "Make data-driven decisions with confidence",
    "Reduce data redundancy and storage costs",
    "Improve data accuracy and reliability",
    "Ensure compliance with data regulations",
    "Accelerate reporting and analytics processes",
    "Enhance data security and privacy",
    "Enable real-time data access across organization",
    "Scale infrastructure as data volumes grow"
  ];

  const stats = [
    { number: "10PB+", label: "Data Managed" },
    { number: "99.99%", label: "Data Availability" },
    { number: "1000+", label: "Databases Optimized" },
    { number: "<1hr", label: "Recovery Time" }
  ];

  const dataTypes = [
    {
      icon: Database,
      title: "Structured Data",
      description: "Relational databases (MySQL, PostgreSQL, SQL Server, Oracle)",
      color: "blue"
    },
    {
      icon: FolderSync,
      title: "Semi-Structured Data",
      description: "JSON, XML, logs, and API data formats",
      color: "green"
    },
    {
      icon: HardDrive,
      title: "Unstructured Data",
      description: "Documents, images, videos, and multimedia content",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Time-Series Data",
      description: "IoT sensors, metrics, and real-time event streams",
      color: "orange"
    }
  ];

  const technologies = [
    { name: "MySQL", category: "Relational DB" },
    { name: "PostgreSQL", category: "Relational DB" },
    { name: "MongoDB", category: "NoSQL" },
    { name: "Redis", category: "Cache" },
    { name: "Elasticsearch", category: "Search" },
    { name: "Apache Spark", category: "Big Data" },
    { name: "Tableau", category: "Analytics" },
    { name: "Power BI", category: "Analytics" },
    { name: "Snowflake", category: "Data Warehouse" },
    { name: "AWS Redshift", category: "Data Warehouse" },
    { name: "Apache Kafka", category: "Streaming" },
    { name: "Databricks", category: "Analytics Platform" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80" 
            alt="Data Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 to-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Database className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Data Management Services</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Turn Your Data Into<br />Your Greatest Asset
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Professional data management solutions that ensure your information is secure, accessible, and driving business value.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Data Assessment
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Solutions
            </a>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-2">
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
                Master Your Data Landscape
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's data-driven world, effective data management is the foundation of business success. Our comprehensive data management services help you organize, secure, and leverage your data assets to gain competitive advantages.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From database design to analytics, backup to migration, we provide end-to-end solutions that ensure your data is always available, accurate, and actionable. Our expert team combines industry best practices with cutting-edge technologies to deliver data management excellence.
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
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                alt="Data Analytics"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-8 rounded-xl shadow-2xl max-w-xs">
                <div className="text-5xl font-bold mb-2">87%</div>
                <div className="text-sm text-indigo-100">Average improvement in data accessibility</div>
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
              Comprehensive Data Management
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage, protect, and leverage your data effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-14 h-14 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Data Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We Handle All Types of Data
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From traditional databases to modern big data, we have expertise across the entire data spectrum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataTypes.map((type, index) => {
              const IconComponent = type.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                green: 'bg-green-100 text-green-600 border-green-200',
                purple: 'bg-purple-100 text-purple-600 border-purple-200',
                orange: 'bg-orange-100 text-orange-600 border-orange-200'
              };
              
              return (
                <div key={index} className={`p-6 rounded-xl border-2 ${colorClasses[type.color]} transition-transform hover:scale-105`}>
                  <IconComponent className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Data Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete solutions for every aspect of your data lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((service, index) => {
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
                        <IconComponent className="w-6 h-6 text-indigo-600" />
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

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertise across leading database platforms, analytics tools, and data processing frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all text-center">
                <div className="font-bold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Data Management Approach
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A systematic methodology that ensures data excellence from strategy to execution.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Assess current data landscape and identify opportunities" },
              { step: "02", title: "Design", desc: "Create data architecture and governance framework" },
              { step: "03", title: "Implementation", desc: "Deploy solutions with minimal business disruption" },
              { step: "04", title: "Optimization", desc: "Fine-tune performance and data quality" },
              { step: "05", title: "Support", desc: "Ongoing monitoring and continuous improvement" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let our data experts help you unlock the full potential of your information assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <BarChart3 className="w-5 h-5" />
              Request Data Assessment
            </a>
            {/* <a 
              href="#demo"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule Demo
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataManagementDetail;