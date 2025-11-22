import { Building2, Shield, Lock, TrendingUp, Globe, CheckCircle, ArrowLeft, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const FinanceBankingIndustry = () => {
  const solutions = [
    {
      icon: Shield,
      title: "PCI DSS Compliance",
      description: "Comprehensive security solutions that meet Payment Card Industry Data Security Standards and protect sensitive financial data.",
    },
    {
      icon: Lock,
      title: "Secure Payment Processing",
      description: "Enterprise-grade payment processing systems with multi-layer security, fraud prevention, and real-time transaction monitoring.",
    },
    {
      icon: TrendingUp,
      title: "Financial Analytics",
      description: "Advanced analytics and business intelligence tools that provide actionable insights for better decision-making.",
    },
    {
      icon: Globe,
      title: "Core Banking Systems",
      description: "Modern, scalable banking platforms that support digital transformation and omnichannel customer experiences.",
    },
  ];

  const benefits = [
    "Enhanced security and fraud prevention",
    "Regulatory compliance assurance",
    "Reduced operational costs",
    "Improved customer experience",
    "Real-time transaction processing",
    "Scalable infrastructure for growth",
  ];

  const caseStudies = [
    {
      title: "Regional Credit Union",
      challenge: "Outdated core banking system limiting digital capabilities",
      solution: "Migrated to cloud-based core banking platform with mobile-first design",
      results: "300% increase in mobile banking adoption, 45% reduction in branch traffic",
    },
    {
      title: "Payment Processing Company",
      challenge: "Security vulnerabilities and compliance gaps",
      solution: "Implemented comprehensive PCI DSS compliant infrastructure with AI fraud detection",
      results: "99.99% transaction success rate, 60% reduction in fraudulent transactions",
    },
  ];

  const securityFeatures = [
    "Multi-factor authentication",
    "End-to-end encryption",
    "Real-time threat detection",
    "Automated compliance monitoring",
    "Secure API integrations",
    "Data loss prevention",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-700 text-white mt-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop"
            alt="Finance and banking technology"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <Link to="/industries" className="flex items-center text-white/90 hover:text-white mb-6 sm:mb-8 transition-colors text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Back to Industries
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 mb-6">
              <div className="bg-white/20 p-3 sm:p-4 rounded-lg mr-0 sm:mr-4">
                <Building2 className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                Finance & Banking Solutions
              </h1>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-emerald-100 mb-6 sm:mb-8">
              Secure, compliant, and innovative technology solutions that power the future of financial services
            </p>
            <Link to="/contact">
              <button className="bg-white text-emerald-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Request a Demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Building Trust Through Technology
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                In the financial services industry, security, reliability, and compliance are non-negotiable. Our solutions are built from the ground up with these principles at their core, enabling you to serve your customers with confidence.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                From traditional banks to fintech startups, we provide the technology infrastructure that supports secure transactions, meets regulatory requirements, and delivers exceptional customer experiences across all channels.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">99.99%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Transaction Success</div>
                </div>
                <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Security Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
                alt="Financial professionals"
                className="rounded-lg shadow-xl sm:shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Complete Financial Technology Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              From payment processing to core banking, we deliver secure and scalable solutions for modern financial institutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-emerald-100 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{solution.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=600&fit=crop"
                alt="Cybersecurity"
                className="rounded-lg shadow-xl sm:shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Our security-first approach ensures your financial data and transactions are protected with the latest security technologies and best practices.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Transform Your Financial Services
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Modern financial technology that drives growth, reduces risk, and enhances customer satisfaction
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-base sm:text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop"
                alt="Digital banking"
                className="rounded-lg shadow-xl sm:shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <CreditCard className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 opacity-90" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Regulatory Compliance Made Simple
              </h2>
              <p className="text-lg sm:text-xl text-emerald-100 mb-6">
                Stay compliant with PCI DSS, SOX, GLBA, and other financial regulations with our automated compliance monitoring and reporting tools.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">PCI DSS</div>
                  <div className="text-xs sm:text-sm text-emerald-100">Level 1 Certified</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">SOC 2</div>
                  <div className="text-xs sm:text-sm text-emerald-100">Type II Compliant</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">ISO 27001</div>
                  <div className="text-xs sm:text-sm text-emerald-100">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Commented Section */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Proven Results for Financial Institutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">
              Real success stories from our banking and finance clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{study.title}</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-500 mb-1 sm:mb-2">Challenge</div>
                    <p className="text-gray-700 text-sm sm:text-base">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-500 mb-1 sm:mb-2">Solution</div>
                    <p className="text-gray-700 text-sm sm:text-base">{study.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-500 mb-1 sm:mb-2">Results</div>
                    <p className="text-emerald-600 font-semibold text-sm sm:text-base">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Modernize Your Financial Technology?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-emerald-100 px-2 sm:px-0">
            Let's discuss how our solutions can help you stay competitive, compliant, and customer-focused
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-emerald-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Schedule Consultation
              </button>
            </Link>
            {/* <button className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto">
              View Security Whitepaper
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceBankingIndustry;