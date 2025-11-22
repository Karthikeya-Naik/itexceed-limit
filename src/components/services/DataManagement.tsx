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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      icon: HardDrive,
      title: "Data Backup & Recovery",
      description: "Automated backup solutions with rapid recovery capabilities to ensure business continuity and zero data loss.",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=400&fit=crop"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & Analytics",
      description: "Advanced analytics platforms that transform data into strategic insights for informed decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      icon: Zap,
      title: "Big Data Solutions",
      description: "Scalable infrastructure for processing and analyzing massive datasets with distributed computing technologies.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      icon: FolderSync,
      title: "Data Migration Services",
      description: "Seamless transfer of data between systems with zero downtime and complete data integrity validation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      icon: Search,
      title: "Data Quality Management",
      description: "Ensure data accuracy, consistency, and completeness with automated validation and cleansing processes.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
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
    // { number: "1000+", label: "Databases Optimized" },
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
      <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden mt-12 sm:mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&h=900&fit=crop" 
            alt="Data Management"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 to-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Database className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">Data Management Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Turn Your Data Into<br />Your Greatest Asset
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Professional data management solutions that ensure your information is secure, accessible, and driving business value.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Get Data Assessment
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Explore Solutions
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

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Master Your Data Landscape
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                In today's data-driven world, effective data management is the foundation of business success. Our comprehensive data management services help you organize, secure, and leverage your data assets to gain competitive advantages.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                From database design to analytics, backup to migration, we provide end-to-end solutions that ensure your data is always available, accurate, and actionable. Our expert team combines industry best practices with cutting-edge technologies to deliver data management excellence.
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop" 
                alt="Data Analytics"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-indigo-600 text-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl max-w-[180px] sm:max-w-xs">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2">87%</div>
                <div className="text-xs sm:text-sm text-indigo-100">Average improvement in data accessibility</div>
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
              Comprehensive Data Management
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Everything you need to manage, protect, and leverage your data effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
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

      {/* Data Types */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Handle All Types of Data
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              From traditional databases to modern big data, we have expertise across the entire data spectrum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {dataTypes.map((type, index) => {
              const IconComponent = type.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                green: 'bg-green-100 text-green-600 border-green-200',
                purple: 'bg-purple-100 text-purple-600 border-purple-200',
                orange: 'bg-orange-100 text-orange-600 border-orange-200'
              };
              
              return (
                <div key={index} className={`p-4 sm:p-6 rounded-xl border-2 ${colorClasses[type.color]} transition-transform hover:scale-105`}>
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900">
                    {type.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Data Management Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Complete solutions for every aspect of your data lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {solutions.map((service, index) => {
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

      {/* Technologies */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Expertise across leading database platforms, analytics tools, and data processing frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all text-center">
                <div className="font-bold text-gray-900 text-sm sm:text-base mb-1">{tech.name}</div>
                <div className="text-xs sm:text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Our Data Management Approach
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              A systematic methodology that ensures data excellence from strategy to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Assess current data landscape and identify opportunities" },
              { step: "02", title: "Design", desc: "Create data architecture and governance framework" },
              { step: "03", title: "Implementation", desc: "Deploy solutions with minimal business disruption" },
              { step: "04", title: "Optimization", desc: "Fine-tune performance and data quality" },
              { step: "05", title: "Support", desc: "Ongoing monitoring and continuous improvement" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold mx-auto mb-3 sm:mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{item.desc}</p>
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
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-6 sm:mb-8 px-4">
            Let our data experts help you unlock the full potential of your information assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
              Request Data Assessment
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

export default DataManagementDetail;