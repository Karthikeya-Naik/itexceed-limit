import React from 'react';
import { Cpu, Brain, Zap, Bot, CheckCircle, Award, ArrowRight, TrendingUp, Workflow, Target, LineChart, Sparkles, Layers } from "lucide-react";

const AIAutomationDetail = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML models that learn from your data to make intelligent predictions and decisions."
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows to increase efficiency and reduce human error."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Data-driven insights that help forecast trends and make proactive business decisions."
    },
    {
      icon: Zap,
      title: "Real-Time Intelligence",
      description: "Instant data processing and analysis for immediate actionable insights and responses."
    }
  ];

  const services = [
    {
      icon: Bot,
      title: "Intelligent Chatbots & Virtual Assistants",
      description: "AI-powered conversational interfaces that provide 24/7 customer support and automate interactions with natural language processing.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80"
    },
    {
      icon: Workflow,
      title: "Robotic Process Automation (RPA)",
      description: "Automate repetitive business processes with software robots that handle data entry, processing, and system integration.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
    },
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, pattern recognition, and intelligent decision-making systems.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80"
    },
    {
      icon: LineChart,
      title: "AI-Powered Analytics",
      description: "Transform raw data into actionable insights with artificial intelligence and advanced data visualization tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      icon: Target,
      title: "Computer Vision Applications",
      description: "Image and video analysis solutions for quality control, object detection, and visual inspection automation.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80"
    },
    {
      icon: Sparkles,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment detection, and language understanding for content automation and insights.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 70%",
    "Increase productivity and efficiency",
    "Eliminate human errors in repetitive tasks",
    "Make data-driven decisions faster",
    "Scale operations without increasing headcount",
    "Improve customer experience with 24/7 support",
    "Free employees for strategic work",
    "Gain competitive advantage with AI insights"
  ];

  const stats = [
    { number: "70%", label: "Cost Reduction" },
    { number: "10x", label: "Faster Processing" },
    { number: "24/7", label: "Automation Uptime" },
    { number: "100+", label: "AI Models Deployed" }
  ];

  const useCases = [
    {
      icon: Bot,
      title: "Customer Service Automation",
      description: "Intelligent chatbots handling inquiries and support tickets",
      features: ["24/7 Availability", "Multi-language Support", "Seamless Escalation", "CRM Integration"]
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "AI-driven analytics for strategic decision-making",
      features: ["Predictive Forecasting", "Trend Analysis", "Automated Reporting", "Data Visualization"]
    },
    {
      icon: Workflow,
      title: "Workflow Optimization",
      description: "Automated business processes and task management",
      features: ["Document Processing", "Data Entry", "Approval Workflows", "System Integration"]
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "AI-powered inspection and defect detection systems",
      features: ["Visual Inspection", "Pattern Recognition", "Anomaly Detection", "Real-time Alerts"]
    }
  ];

  const technologies = [
    {
      category: "AI Frameworks",
      tools: [
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "Scikit-learn" },
        { name: "Keras" },
        { name: "OpenCV" },
        { name: "Hugging Face" }
      ]
    },
    {
      category: "RPA Platforms",
      tools: [
        { name: "UiPath" },
        { name: "Automation Anywhere" },
        { name: "Blue Prism" },
        { name: "Microsoft Power Automate" },
        { name: "Zapier" },
        { name: "Make (Integromat)" }
      ]
    },
    {
      category: "Cloud AI Services",
      tools: [
        { name: "AWS SageMaker" },
        { name: "Azure AI" },
        { name: "Google Cloud AI" },
        { name: "IBM Watson" },
        { name: "OpenAI API" },
        { name: "Anthropic Claude" }
      ]
    },
    {
      category: "Analytics Tools",
      tools: [
        { name: "Power BI" },
        { name: "Tableau" },
        { name: "Apache Spark" },
        { name: "Databricks" },
        { name: "Snowflake" },
        { name: "Looker" }
      ]
    }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Analyze current processes and identify automation opportunities",
      icon: Target
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Design AI/automation roadmap aligned with business goals",
      icon: Layers
    },
    {
      step: "03",
      title: "Development & Training",
      description: "Build and train AI models or configure automation workflows",
      icon: Brain
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Rigorous testing to ensure accuracy and reliability",
      icon: CheckCircle
    },
    {
      step: "05",
      title: "Deployment",
      description: "Roll out solutions with minimal disruption to operations",
      icon: Zap
    },
    {
      step: "06",
      title: "Optimization & Support",
      description: "Continuous monitoring and improvement of AI systems",
      icon: TrendingUp
    }
  ];

  const industries = [
    { name: "Manufacturing", description: "Quality control and production optimization" },
    { name: "Healthcare", description: "Medical diagnosis and patient care automation" },
    { name: "Finance", description: "Fraud detection and automated trading" },
    { name: "Retail", description: "Personalized recommendations and inventory management" },
    { name: "Logistics", description: "Route optimization and demand forecasting" },
    { name: "Customer Service", description: "Automated support and sentiment analysis" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80" 
            alt="AI & Automation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-pink-900/90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Cpu className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">AI & Automation Services</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Intelligent Automation<br />For Tomorrow's Business
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence and automation to transform operations, reduce costs, and unlock new possibilities.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
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
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80" 
                alt="AI and Automation"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Future of Business is Intelligent Automation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Artificial Intelligence and automation are no longer futuristic concepts—they're essential tools for businesses that want to stay competitive. Our AI and automation solutions help you work smarter, not harder, by automating repetitive tasks and leveraging data to make better decisions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From intelligent chatbots that handle customer inquiries to machine learning models that predict market trends, we implement cutting-edge AI technologies tailored to your specific business challenges and opportunities.
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
              Powerful AI & Automation Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Advanced technologies that transform how your business operates.
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

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how AI and automation solve common business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-all">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
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

      {/* Services We Provide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our AI & Automation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions that bring intelligence and efficiency to your operations.
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

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading AI and automation platforms and frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((stack, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {stack.category}
                </h3>
                <div className="space-y-2">
                  {stack.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span className="text-sm text-gray-700">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Implementation Approach
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A proven methodology for successful AI and automation deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationSteps.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <IconComponent className="w-8 h-8 text-purple-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI and automation solutions tailored for your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let our experts help you harness the power of artificial intelligence and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Brain className="w-5 h-5" />
              Get AI Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationDetail;