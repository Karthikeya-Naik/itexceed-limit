import { Building2, Hotel, ShoppingBag, Factory, Home, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const IndustryCard = ({ icon: Icon, title, description, solutions, slug }) => {
  return (
    <Link to={`/industries/${slug}`}>
      <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
        <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-professional-darkBlue" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-1 sm:space-y-2">
          {solutions.slice(0, 3).map((solution, idx) => (
            <li key={idx} className="flex items-start text-xs sm:text-sm text-muted-foreground">
              <span className="text-primary mr-2 mt-0.5">•</span>
              <span className="leading-snug">{solution}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 sm:mt-6 text-professional-darkBlue font-semibold flex items-center text-sm sm:text-base">
          Learn More →
        </div>
      </div>
    </Link>
  );
};

const CTASection = ({ title, description, primaryButtonText, primaryButtonLink }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-professional-darkBlue text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2">{title}</h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">{description}</p>
        <Link
          to={primaryButtonLink}
          className="inline-block bg-white text-professional-darkBlue px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
        >
          {primaryButtonText}
        </Link>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    {
      icon: Hotel,
      title: "Hospitality",
      slug: "hospitality",
      description: "Innovative technology solutions for hotels and resorts",
      solutions: [
        "Property management systems (PMS)",
        "Guest experience platforms",
        "Revenue management systems",
        "Mobile check-in solutions",
        "Integrated booking engines",
      ],
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      slug: "healthcare",
      description: "Secure and compliant IT solutions for healthcare providers",
      solutions: [
        "HIPAA-compliant data management",
        "Electronic health records (EHR) systems",
        "Telemedicine infrastructure",
        "Medical device integration",
        "Healthcare analytics platforms",
      ],
    },
    {
      icon: Building2,
      title: "Finance & Banking",
      slug: "finance-banking",
      description: "Robust security and reliability for financial institutions",
      solutions: [
        "PCI DSS compliance solutions",
        "Secure payment processing",
        "Fraud detection systems",
        "Core banking platforms",
        "Financial data analytics",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      slug: "retail-ecommerce",
      description: "Seamless technology for retail operations",
      solutions: [
        "Point of sale (POS) systems",
        "E-commerce platforms",
        "Inventory management",
        "Customer relationship management",
        "Omnichannel retail solutions",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      slug: "manufacturing",
      description: "Industrial IT solutions for production efficiency",
      solutions: [
        "Industrial IoT implementation",
        "Supply chain management",
        "Production monitoring systems",
        "Quality control automation",
        "Equipment maintenance solutions",
      ],
    },
    {
      icon: Home,
      title: "Real Estate",
      slug: "real-estate",
      description: "Digital solutions for property management",
      solutions: [
        "Property management software",
        "Virtual tour technology",
        "Customer portal systems",
        "Lease management solutions",
        "Building automation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-100 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Industries We Serve
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">
              Specialized IT solutions tailored to the unique needs of your industry. 
              We understand your challenges and deliver results.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {industries.map((industry, index) => (
                <IndustryCard key={index} {...industry} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Industry Expertise That Matters
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Our deep industry knowledge ensures solutions that truly fit your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Regulatory Compliance</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We understand industry-specific regulations and ensure your technology stack remains compliant 
                  with standards like HIPAA, PCI DSS, GDPR, and more.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Proven Track Record</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Years of experience serving clients across diverse industries means we bring best practices 
                  and proven solutions to every engagement.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Scalable Solutions</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Our solutions grow with your business, from startups to enterprises, ensuring your 
                  technology investment delivers long-term value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Discuss Your Industry Needs?"
          description="Let our industry experts show you how we can help transform your business operations"
          primaryButtonText="Book a Consultation"
          primaryButtonLink="/contact"
        />
      </main>
    </div>
  );
};

export default Industries;