import {
  Stethoscope,
  Shield,
  Cpu,
  ChartBar,
  Users,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const Healthcare = () => {
  const solutions = [
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description:
        "Ensure full compliance with healthcare regulations and protect patient data with our comprehensive security solutions.",
    },
    {
      icon: Cpu,
      title: "EHR Systems",
      description:
        "Modern electronic health record systems that streamline patient care and improve clinical outcomes.",
    },
    {
      icon: ChartBar,
      title: "Healthcare Analytics",
      description:
        "Data-driven insights to improve patient outcomes, optimize operations, and reduce costs.",
    },
    {
      icon: Users,
      title: "Telemedicine",
      description:
        "Enable remote patient care with secure, HIPAA-compliant telemedicine platforms.",
    },
  ];

  const benefits = [
    "Enhanced patient care and safety",
    "Reduced operational costs",
    "Improved compliance and security",
    "Streamlined workflows",
    "Better data management",
    "Increased staff productivity",
  ];

  const caseStudies = [
    {
      title: "Regional Hospital Network",
      challenge: "Legacy EHR system causing delays and errors",
      solution: "Implemented modern cloud-based EHR with seamless integration",
      results: "40% reduction in administrative time, 99.9% uptime",
    },
    {
      title: "Medical Practice Group",
      challenge: "HIPAA compliance concerns and data security risks",
      solution:
        "Complete security audit and implementation of compliant infrastructure",
      results: "Full HIPAA compliance, zero security incidents in 2 years",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-professional-darkBlue/90 to-professional-darkBlue/90 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop"
            alt="Healthcare technology"
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
                <Stethoscope className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                Healthcare IT Solutions
              </h1>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8">
              Transform patient care with secure, compliant, and innovative
              healthcare technology solutions
            </p>
            <Link to="/contact">
              <button className="bg-white text-professional-darkBlue px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-4 sm:mb-6">
                Healthcare Technology That Puts Patients First
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                In healthcare, technology must enhance patient care while
                maintaining the highest standards of security and compliance.
                Our solutions are designed specifically for healthcare
                providers, from small practices to large hospital systems.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                We understand the unique challenges of healthcare IT - from
                regulatory compliance to interoperability, data security to
                clinical workflows. Our team brings deep expertise in healthcare
                technology and a commitment to supporting your mission of
                exceptional patient care.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gray-800/60 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700 mb-1 sm:mb-2">
                    99.9%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">System Uptime</div>
                </div>
                <div className="bg-gray-800/60 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700 mb-1 sm:mb-2">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">HIPAA Compliant</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop"
                alt="Healthcare professionals"
                className="rounded-lg shadow-xl sm:shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-3 sm:mb-4">
              Comprehensive Healthcare IT Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-2 sm:px-0">
              From compliance to care delivery, we provide end-to-end technology
              solutions for modern healthcare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-professional-darkBlue" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-200">
                  {solution.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Medical technology"
                className="rounded-lg shadow-xl sm:shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-4 sm:mb-6">
                Benefits of Modern Healthcare IT
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                Investing in the right healthcare technology delivers measurable
                improvements across your organization
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-base sm:text-lg text-gray-400">{benefit}</span>
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
              Real results for healthcare organizations
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
                    <p className="text-professional-darkBlue font-semibold text-sm sm:text-base">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-professional-darkBlue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Healthcare IT?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100 px-2 sm:px-0">
            Let's discuss how our healthcare-specific solutions can support your
            organization's goals
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-professional-darkBlue px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Schedule Consultation
              </button>
            </Link>
            {/* <button className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto">
              Download Healthcare Guide
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;