import CTASection from "@/components/CTASection";
import { Server, Laptop, Wifi, Settings, HardDrive, Smartphone, FileText } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: <Laptop className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Laptops & Desktops",
      brands: "Dell Latitude, HP ProBook, Lenovo ThinkPad, Microsoft Surface",
    },
    {
      icon: <Server className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Servers",
      brands: "Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem",
    },
    {
      icon: <Wifi className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Networking",
      brands: "Cisco, Ubiquiti, Aruba, TP-Link",
    },
    {
      icon: <Settings className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Software Licensing",
      brands: "Microsoft, Adobe, VMware, Office365, Antivirus",
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Microsoft Licensing",
      brands: "Microsoft 365, Windows Server, Azure, Office Suites, Enterprise Agreements",
    },
    {
      icon: <HardDrive className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Accessories",
      brands: "Monitors, Keyboards, UPS, Printers, Storage",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Peripherals",
      brands: "Webcams, Headsets, Docking Stations, Cables",
    },
  ];

  const benefits = [
    {
      title: "Bulk Pricing",
      description: "Best pricing on volume purchases.",
    },
    {
      title: "Expert Configuration",
      description: "Custom setup for fast, secure deployments.",
    },
    {
      title: "Warranty & Support",
      description: "Full manufacturer warranty & 24/7 helpdesk.",
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround & nationwide fulfillment.",
    },
  ];

  const enterpriseFeatures = [
    "Volume discounts for bulk and enterprise purchases",
    "Warranty extension and coverage options",
    "Asset tagging and management",
    "White-glove deployment & installation services",
    "Custom device configuration",
    "Flexible financing available",
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Hardware & Software – All From One Partner
            </h1>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1 sm:gap-2">
                <Laptop className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Laptops & Desktops</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Server className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Servers</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Wifi className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Networking</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Software Licensing</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Microsoft Licensing</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <HardDrive className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Accessories</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Peripherals</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mt-6 sm:mt-8">
              ...and more – tell us your needs!
            </p>
          </div>
        </section>

        {/* Enterprise Solutions Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-professional-darkBlue font-semibold mb-3 sm:mb-4 uppercase tracking-wide text-sm sm:text-base">
                  Enterprise Solutions
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  Bulk Ordering Made Simple
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                  Equip your entire organization with premium technology. We handle everything from procurement to deployment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {enterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-professional-darkBlue rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                <a href="/contact">
                  <button className="bg-professional-darkBlue text-primary-foreground px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base w-full sm:w-auto">
                    Contact Sales Team
                  </button>
                </a>
              </div>

              <div className="flex-1 flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
                  alt="Modern laptop for bulk ordering"
                  className="w-full max-w-sm sm:max-w-md rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Popular Models We Offer
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                We source and supply a wide range of modern business hardware and software.
                <br className="hidden sm:block" />
                Here are just a few examples – ask us for anything!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 text-professional-darkBlue rounded-lg mb-3 sm:mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {category.brands}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose ITExceed for Your IT Solutions?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-left p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Need a Custom Quote?"
          description="Contact us for bulk orders, enterprise pricing, or custom configurations"
          primaryButtonText="Request Quote"
          primaryButtonLink="/contact"
        />
      </main>
    </div>
  );
};

export default Products;