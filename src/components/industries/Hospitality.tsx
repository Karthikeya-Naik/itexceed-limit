import { Hotel, Shield, Cpu, ChartBar, Users, CheckCircle, ArrowLeft, Wifi } from "lucide-react";
import { Link } from "react-router-dom";

const HospitalityIndustry = () => {
  const solutions = [
    {
      icon: Hotel,
      title: "Property Management Systems",
      description: "Comprehensive PMS solutions that streamline operations from reservations to check-out and beyond.",
    },
    {
      icon: Users,
      title: "Guest Experience Platforms",
      description: "Personalized guest journeys with mobile apps, digital concierge, and integrated communication.",
    },
    {
      icon: ChartBar,
      title: "Revenue Management",
      description: "AI-powered pricing optimization and analytics to maximize occupancy and revenue per room.",
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "PCI DSS compliant payment processing and guest data protection with enterprise-grade security.",
    },
  ];

  const benefits = [
    "Enhanced guest satisfaction and loyalty",
    "Increased operational efficiency",
    "Improved revenue management",
    "Streamlined staff workflows",
    "Better data-driven decision making",
    "Seamless integration across systems",
  ];

  const caseStudies = [
    {
      title: "Luxury Resort Chain",
      challenge: "Disconnected systems causing guest service delays and operational inefficiencies",
      solution: "Implemented integrated PMS with mobile check-in and guest communication platform",
      results: "45% faster check-in, 35% increase in guest satisfaction scores",
    },
    {
      title: "Boutique Hotel Group",
      challenge: "Manual revenue management and lack of data insights",
      solution: "Deployed cloud-based revenue management system with real-time analytics dashboard",
      results: "22% increase in RevPAR, 18% improvement in occupancy rates",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-indigo-800 text-white mt-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop"
            alt="Luxury hotel lobby"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <Link
            to="/industries"
            className="flex items-center text-white/90 hover:text-white mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Back to Industries
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 mb-6">
              <div className="bg-white/20 p-3 sm:p-4 rounded-lg mr-0 sm:mr-4">
                <Hotel className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                Hospitality Technology Solutions
              </h1>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 mb-6 sm:mb-8">
              Elevate guest experiences and streamline operations with innovative hospitality technology
            </p>
            <Link to="/contact">
              <button className="bg-white text-purple-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-sm sm:text-base w-full sm:w-auto">
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
                Technology That Transforms Guest Experiences
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                In the hospitality industry, technology should enhance every touchpoint of the guest journey 
                while empowering your team to deliver exceptional service. Our solutions are designed specifically 
                for hotels, resorts, and hospitality groups of all sizes.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                We understand the unique challenges of hospitality operations - from managing reservations 
                and guest communications to optimizing revenue and ensuring seamless integrations. Our team 
                brings deep expertise in hospitality technology and a commitment to supporting your mission 
                of creating memorable guest experiences.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
                    99.8%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">System Uptime</div>
                </div>
                <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=600&fit=crop"
                alt="Hotel reception"
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
              Comprehensive Hospitality IT Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              From front desk to back office, we provide end-to-end technology solutions for modern hospitality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-purple-100 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  {solution.title}
                </h3>
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
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop"
                alt="Hotel technology"
                className="rounded-lg shadow-xl sm:shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Benefits of Modern Hospitality Technology
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Investing in the right hospitality technology delivers measurable improvements 
                in guest satisfaction and operational efficiency
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

      {/* Case Studies - Commented Section */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">
              Real results for hospitality organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{study.title}</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-500 mb-1 sm:mb-2">
                      Challenge
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-500 mb-1 sm:mb-2">
                      Solution
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">{study.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-500 mb-1 sm:mb-2">
                      Results
                    </div>
                    <p className="text-purple-600 font-semibold text-sm sm:text-base">
                      {study.results}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Hospitality Technology?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-purple-100 px-2 sm:px-0">
            Let's discuss how our hospitality-specific solutions can enhance your guest experience 
            and improve your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-purple-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalityIndustry;