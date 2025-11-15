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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-700 to-purple-900 text-white mt-4">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            alt="Real estate technology"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <Link to="/industries" className="flex items-center text-white/90 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Industries
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-4 rounded-lg mr-4">
                <Building2 className="w-12 h-12" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold">Real Estate IT Solutions</h1>
            </div>
            <p className="text-2xl text-purple-200 mb-8">
              Innovative technology solutions designed for the evolving needs of real estate businesses and property managers.
            </p>
            <Link to="/contact">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
              Schedule a Consultation
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technology Empowering Property Management
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                From tenant management to smart building automation, our solutions enhance operational efficiency and tenant experience.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Tailored for residential and commercial real estate, our offerings integrate seamlessly with existing workflows and systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-700 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-700 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Tenant Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1724482606633-fa74fe4f5de1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Real estate management"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Real Estate Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of solutions designed to optimize real estate operations and asset management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-purple-700" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property management"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of Real Estate Technology</h2>
              <p className="text-lg text-gray-600 mb-8">
                Leverage technology to streamline operations and improve tenant and owner experiences.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Estate Success Stories</h2>
            <p className="text-xl text-gray-600">Track record of success with leading real estate firms</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-2">Challenge</div>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-2">Solution</div>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-2">Results</div>
                    <p className="text-green-600 font-semibold">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Digitally Transform Your Real Estate Business?</h2>
          <p className="text-xl mb-8 text-purple-200">
            Partner with us to implement tech solutions customized to your portfolio needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
              Schedule a Consultation
            </button>
            </Link>
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Real Estate Guide
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateIndustry;
