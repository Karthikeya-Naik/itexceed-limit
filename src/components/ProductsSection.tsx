// components/Products.tsx
import { Server, Laptop, Wifi, Settings, HardDrive, Smartphone, FileText } from "lucide-react";

const ProductsSection = () => {
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
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            IT Products & Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Discover our comprehensive range of hardware, software, and licensing solutions 
            tailored for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg sm:rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-professional-darkBlue/10 text-professional-darkBlue rounded-lg sm:rounded-xl mb-3 sm:mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {category.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {category.brands}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a href="/products">
            <button className="bg-professional-darkBlue text-primary-foreground px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-professional-darkBlue/90 transition-colors text-sm sm:text-base">
              View All Products
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;