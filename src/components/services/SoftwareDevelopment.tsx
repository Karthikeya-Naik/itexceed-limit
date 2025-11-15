import React from 'react';
import { Code, Smartphone, Globe, Zap, CheckCircle, Award, ArrowRight, Layers, Cpu, Rocket, Users, TestTube, GitBranch } from "lucide-react";

const SoftwareDevelopmentDetail = () => {
  const features = [
    {
      icon: Rocket,
      title: "Agile Development",
      description: "Iterative development process with regular feedback loops ensuring your vision comes to life."
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Future-proof solutions designed to grow seamlessly with your business expansion."
    },
    {
      icon: TestTube,
      title: "Quality Assurance",
      description: "Rigorous testing protocols ensuring bug-free, reliable software that exceeds expectations."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces crafted with user experience at the forefront of every decision."
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Custom web applications built with modern frameworks for exceptional performance and user experience.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      technologies: ["React", "Vue.js", "Node.js", "Django"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless functionality.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Layers,
      title: "API Development & Integration",
      description: "RESTful and GraphQL APIs with seamless third-party service integrations for enhanced functionality.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      technologies: ["REST", "GraphQL", "Webhooks", "OAuth"]
    },
    {
      icon: Code,
      title: "Legacy System Modernization",
      description: "Transform outdated applications into modern, efficient systems while preserving business logic.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      technologies: ["Microservices", "Cloud Migration", "Refactoring"]
    },
    {
      icon: TestTube,
      title: "Quality Assurance & Testing",
      description: "Comprehensive testing strategies including automated tests, performance testing, and security audits.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      technologies: ["Jest", "Selenium", "Cypress", "JUnit"]
    },
    {
      icon: Cpu,
      title: "Enterprise Software Solutions",
      description: "Complex business applications tailored to your unique workflows and operational requirements.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["CRM", "ERP", "Custom Platforms", "Automation"]
    }
  ];

  const benefits = [
    "Customized solutions aligned with business goals",
    "Reduce operational costs through automation",
    "Improve efficiency with streamlined workflows",
    "Scale seamlessly as your business grows",
    "Gain competitive advantage with innovation",
    "Own your intellectual property",
    "Ongoing support and maintenance included",
    "Integration with existing systems"
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Developers" },
    { number: "15+", label: "Years Experience" }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", color: "blue" },
        { name: "Vue.js", color: "green" },
        { name: "Angular", color: "red" },
        { name: "Next.js", color: "gray" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "cyan" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", color: "green" },
        { name: "Python", color: "blue" },
        { name: "Java", color: "orange" },
        { name: "PHP", color: "purple" },
        { name: ".NET Core", color: "blue" },
        { name: "Ruby on Rails", color: "red" }
      ]
    },
    {
      category: "Mobile",
      technologies: [
        { name: "React Native", color: "blue" },
        { name: "Flutter", color: "cyan" },
        { name: "Swift", color: "orange" },
        { name: "Kotlin", color: "purple" },
        { name: "Ionic", color: "blue" },
        { name: "Xamarin", color: "blue" }
      ]
    },
    {
      category: "Database",
      technologies: [
        { name: "PostgreSQL", color: "blue" },
        { name: "MongoDB", color: "green" },
        { name: "MySQL", color: "orange" },
        { name: "Redis", color: "red" },
        { name: "Firebase", color: "yellow" },
        { name: "DynamoDB", color: "blue" }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery",
      description: "Deep dive into your business needs, goals, and target audience",
      icon: Users
    },
    {
      step: "02",
      title: "Planning",
      description: "Create detailed project roadmap, architecture, and technology stack",
      icon: GitBranch
    },
    {
      step: "03",
      title: "Design",
      description: "Craft intuitive UI/UX designs with user feedback integration",
      icon: Layers
    },
    {
      step: "04",
      title: "Development",
      description: "Agile sprints with regular demos and continuous integration",
      icon: Code
    },
    {
      step: "05",
      title: "Testing",
      description: "Comprehensive QA including automated and manual testing",
      icon: TestTube
    },
    {
      step: "06",
      title: "Deployment",
      description: "Smooth launch with monitoring and immediate support",
      icon: Rocket
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Finance", icon: "💰" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Education", icon: "📚" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Logistics", icon: "🚚" },
    { name: "Entertainment", icon: "🎬" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80" 
            alt="Software Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/60 to-fuchsia-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Code className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Custom Software Development</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Vision<br />Into Powerful Software
          </h1>
          <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-8">
            Custom software solutions that drive innovation, streamline operations, and accelerate your business growth.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Portfolio
            </a>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-violet-600 mb-2">
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
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80" 
                alt="Software Development Team"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Software Built Exactly For Your Needs
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Off-the-shelf software often forces you to adapt your processes to fit the tool. Our custom software development services flip that equation—we build solutions that perfectly match your unique business requirements and workflows.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From initial concept to final deployment and beyond, our experienced development team works closely with you to create software that not only meets your current needs but is architected to evolve with your business.
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
              Our Development Excellence
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Industry-leading practices that ensure exceptional software quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-14 h-14 bg-violet-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Services We Provide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive software development covering web, mobile, and enterprise solutions.
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
                        <IconComponent className="w-6 h-6 text-violet-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {stack.category}
                </h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${tech.color}-500`}></div>
                      <span className="text-sm text-gray-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-violet-100 hover:border-violet-500 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <IconComponent className="w-8 h-8 text-violet-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Delivering innovative software solutions across diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-center">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="text-sm font-semibold">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-fuchsia-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Let's discuss your project and create software that transforms your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Rocket className="w-5 h-5" />
              Start Your Project
            </a>
            {/* <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule Consultation
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentDetail;