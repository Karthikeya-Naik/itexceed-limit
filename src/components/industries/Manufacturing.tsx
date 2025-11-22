import { Factory, Shield, Cpu, ChartBar, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ManufacturingIndustry = () => {
  const solutions = [
    {
      icon: Factory,
      title: "Smart Factory Systems",
      description: "IoT-powered automation for real-time process optimization.",
    },
    {
      icon: Shield,
      title: "Industrial Cybersecurity",
      description: "Protect operational technology and networks with advanced security solutions.",
    },
    {
      icon: Cpu,
      title: "Manufacturing Analytics",
      description: "Leverage big data to improve production efficiency and quality.",
    },
    {
      icon: Users,
      title: "Workforce Management",
      description: "Streamlined scheduling and compliance with labor regulations.",
    },
  ];

  const benefits = [
    "Increase production throughput",
    "Improve product quality",
    "Reduce downtime and waste",
    "Enhance supply chain visibility",
    "Ensure regulatory compliance",
    "Strengthen cybersecurity posture",
  ];

  const caseStudies = [
    {
      title: "Global Automotive Supplier",
      challenge: "Manual processes causing delays and defects",
      solution: "Implemented IoT sensors and predictive analytics",
      results: "15% increase in output, 30% reduction in defects",
    },
    {
      title: "Electronics Manufacturer",
      challenge: "Cyberattack risk to production lines",
      solution: "Deployed layered security and network segmentation",
      results: "Zero downtime from cyber incidents in 3 years",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-700 to-gray-900 text-white mt-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Manufacturing technology"
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
                <Factory className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Manufacturing Technology Solutions</h1>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8">
              Drive industrial innovation and operational excellence with smart manufacturing IT solutions.
            </p>
            <Link to="/contact">
              <button className="bg-white text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto">
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Industrial IT for the Future of Manufacturing</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Our manufacturing solutions integrate cutting-edge technology to optimize production, reduce costs, and ensure safety and compliance.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Partner with us to modernize your manufacturing processes and build resilience against evolving challenges.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mb-1 sm:mb-2">99.95%</div>
                  <div className="text-xs sm:text-sm text-gray-600">System Uptime</div>
                </div>
                <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mb-1 sm:mb-2">Zero</div>
                  <div className="text-xs sm:text-sm text-gray-600">Safety Incidents</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Industrial manufacturing"
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Comprehensive Manufacturing IT Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Solutions tailored to optimize workflows, improve quality, and secure manufacturing infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
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
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Manufacturing technology"
                className="rounded-lg shadow-xl sm:shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Benefits of Manufacturing IT</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Improve the efficiency, quality, and safety of your manufacturing processes through technology.
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
          </div>
        </div>
      </section>

      {/* Case Studies Section - Commented */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Manufacturing Success Stories</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">Real results for manufacturing companies</p>
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
                    <p className="text-green-600 font-semibold text-sm sm:text-base">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Modernize Your Manufacturing IT?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300 px-2 sm:px-0">
            Let's discuss how our manufacturing tech solutions can transform your operations and boost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Schedule a Consultation
              </button>
            </Link>
            {/* <button className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto">
              Download Manufacturing Guide
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingIndustry;