import { ShoppingBag, CreditCard, BarChart, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RetailEcommerceIndustry = () => {
  const solutions = [
    {
      icon: ShoppingBag,
      title: "Point of Sale Systems",
      description: "Integrated POS solutions for seamless checkout experience.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment Processing",
      description: "Fast, reliable, and PCI-compliant payment gateways.",
    },
    {
      icon: BarChart,
      title: "Sales Analytics",
      description: "Real-time insights to optimize inventory and marketing.",
    },
    {
      icon: Users,
      title: "Customer Loyalty Platforms",
      description: "Retain customers with personalized rewards and campaigns.",
    },
  ];

  const benefits = [
    "Increase online and in-store sales",
    "Streamline inventory management",
    "Enhance customer engagement",
    "Boost marketing ROI",
    "Improve operational efficiency",
    "Ensure secure transactions",
    "Enable omnichannel retailing",
  ];

  const caseStudies = [
    {
      title: "Global Retail Chain",
      challenge: "Outdated POS causing slow transactions and errors",
      solution: "Deployed modern cloud-based POS with mobile integration",
      results: "30% faster checkout times, 20% sales growth",
    },
    {
      title: "E-commerce Startup",
      challenge: "Low customer retention and limited insights",
      solution: "Implemented customer loyalty and analytics platforms",
      results: "40% increase in repeat customers, 25% revenue growth",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-green-800 text-white mt-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop"
            alt="Retail E-commerce technology"
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
                <ShoppingBag className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Retail & E-commerce Solutions</h1>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-green-100 mb-6 sm:mb-8">
              Empower your retail business with scalable and secure e-commerce technology tailored for omni-channel success.
            </p>
            <Link to="/contact">
              <button className="bg-white text-green-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base w-full sm:w-auto">
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Retail Technology That Drives Growth</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Retail and e-commerce businesses require agile technology to respond to changing customer demands. Our solutions integrate all sales channels and provide rich customer insights.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                From large retail chains to online startups, we deliver tailored platforms that enhance customer experience and operational efficiency.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">99.99%</div>
                  <div className="text-xs sm:text-sm text-gray-600">System Uptime</div>
                </div>
                <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600">PCI Compliant</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop"
                alt="Retail store technology"
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Comprehensive Retail IT Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              From point of sale to analytics, our technology suite enhances every retail touchpoint.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
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
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=600&fit=crop"
                alt="Retail management"
                className="rounded-lg shadow-xl sm:shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Benefits of Retail & E-commerce IT</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Investing in the right technology delivers measurable improvements in customer satisfaction, sales, and operational efficiency.
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Retail Success Stories</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">Real results for retail enterprises and startups</p>
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Grow Your Retail Business?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100 px-2 sm:px-0">
            Let's partner to build scalable retail technology that drives your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-green-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Schedule Consultation
              </button>
            </Link>
            {/* <button className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto">
              Download Retail Guide
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailEcommerceIndustry;