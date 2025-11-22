import { Building2, Home, Shield, Cpu, ChartBar, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RealEstateIndustry = () => {
  const solutions = [
    {
      icon: Home,
      title: "Property Management Platforms",
      description: "Advanced software for managing leases, tenants, and property maintenance.",
    },
    {
      icon: Shield,
      title: "Security & Access Control",
      description: "Integrated security solutions that protect properties and residents.",
    },
    {
      icon: Cpu,
      title: "Smart Building Systems",
      description: "IoT-enabled monitoring and automation for energy efficiency and comfort.",
    },
    {
      icon: ChartBar,
      title: "Market Analytics",
      description: "Data insights on market trends, property value, and investment opportunities.",
    },
  ];

  const benefits = [
    "Streamline property operations",
    "Enhance tenant satisfaction",
    "Reduce maintenance costs",
    "Improve security and safety",
    "Leverage market intelligence",
    "Boost ROI for property portfolios",
  ];

  const caseStudies = [
    {
      title: "Urban Apartment Complex",
      challenge: "Inefficient manual property management",
      solution: "Deployed a unified property management system",
      results: "30% reduction in tenant complaints, 20% operational cost savings",
    },
    {
      title: "Commercial Office Park",
      challenge: "High energy costs and poor building monitoring",
      solution: "Implemented smart IoT building controls",
      results: "15% energy cost reduction, improved occupant comfort",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-700 to-purple-900 text-white mt-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            alt="Real estate technology"
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Real Estate IT Solutions</h1>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-purple-200 mb-6 sm:mb-8">
              Innovative technology solutions designed for the evolving needs of real estate businesses and property managers.
            </p>
            <Link to="/contact">
              <button className="bg-white text-purple-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-purple-100 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Schedule a Consultation
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
                Technology Empowering Property Management
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                From tenant management to smart building automation, our solutions enhance operational efficiency and tenant experience.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Tailored for residential and commercial real estate, our offerings integrate seamlessly with existing workflows and systems.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-700 mb-1 sm:mb-2">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-600">System Uptime</div>
                </div>
                <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-700 mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Tenant Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1724482606633-fa74fe4f5de1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Real estate management"
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Key Real Estate Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Comprehensive suite of solutions designed to optimize real estate operations and asset management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-700" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{solution.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property management"
                className="rounded-lg shadow-xl sm:shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Benefits of Real Estate Technology</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Leverage technology to streamline operations and improve tenant and owner experiences.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-base sm:text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Commented */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Real Estate Success Stories</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">Track record of success with leading real estate firms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
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
                    <p className="text-green-600 font-semibold text-sm sm:text-base">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Digitally Transform Your Real Estate Business?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-purple-200 px-2 sm:px-0">
            Partner with us to implement tech solutions customized to your portfolio needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-purple-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-purple-100 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Schedule a Consultation
              </button>
            </Link>
            {/* <button className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto">
              Download Real Estate Guide
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateIndustry;