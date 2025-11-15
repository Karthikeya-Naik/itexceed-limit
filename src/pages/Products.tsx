import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { Server, Laptop, Wifi, Settings, HardDrive, Smartphone } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Laptops & Desktops",
      brands: "Dell Latitude, HP ProBook, Lenovo ThinkPad, Microsoft Surface",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Servers",
      brands: "Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Networking",
      brands: "Cisco, Ubiquiti, Aruba, TP-Link",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Software Licensing",
      brands: "Microsoft, Adobe, VMware, Office365, Antivirus",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Accessories",
      brands: "Monitors, Keyboards, UPS, Printers, Storage",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hardware & Software – All From One Partner
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Laptop className="w-5 h-5" />
                <span>Laptops & Desktops</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5" />
                <span>Servers</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-5 h-5" />
                <span>Networking</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                <span>Software Licensing</span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-5 h-5" />
                <span>Accessories</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                <span>Peripherals</span>
              </div>
            </div>
            <p className="text-muted-foreground mt-8">
              ...and more – tell us your needs!
            </p>
          </div>
        </section>
        {/* Enterprise Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold mb-4 uppercase tracking-wide">
                  Enterprise Solutions
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Bulk Ordering Made Simple
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Equip your entire organization with premium technology. We handle everything from procurement to deployment.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {enterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                <a href="/contact">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Contact Sales Team
                  </button>
                </a>
              </div>

              <div className="flex-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
              alt="Modern laptop for bulk ordering"
              className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
            />
          </div>
            </div>
          </div>
        </section>
        {/* Categories Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Popular Models We Offer
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We source and supply a wide range of modern business hardware and software.
                <br />
                Here are just a few examples – ask us for anything!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-lg mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.brands}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose ITExceed for Your IT Solutions?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-left">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
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