import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const laptops = [
    {
      name: "Dell Latitude 5540",
      category: "Business Laptop",
      description: "Premium business laptop with enterprise security",
      specs: [
        "Intel Core i7 13th Gen",
        "16GB DDR4 RAM",
        "512GB NVMe SSD",
        "15.6\" FHD Display",
        "Windows 11 Pro",
      ],
      featured: true,
    },
    {
      name: "HP EliteBook 840 G10",
      category: "Business Laptop",
      description: "Ultra-portable with long battery life",
      specs: [
        "Intel Core i5 13th Gen",
        "16GB RAM",
        "256GB SSD",
        "14\" FHD Touch Display",
        "Windows 11 Pro",
      ],
    },
    {
      name: "Lenovo ThinkPad X1 Carbon",
      category: "Business Laptop",
      description: "Lightweight and durable business ultrabook",
      specs: [
        "Intel Core i7 13th Gen",
        "32GB RAM",
        "1TB SSD",
        "14\" WQXGA Display",
        "Windows 11 Pro",
      ],
      featured: true,
    },
    {
      name: "Microsoft Surface Laptop 5",
      category: "Business Laptop",
      description: "Sleek design with touchscreen capability",
      specs: [
        "Intel Core i5",
        "16GB RAM",
        "512GB SSD",
        "13.5\" PixelSense Display",
        "Windows 11 Pro",
      ],
    },
  ];

  const desktops = [
    {
      name: "Dell OptiPlex 7090",
      category: "Desktop PC",
      description: "Reliable business desktop with powerful performance",
      specs: [
        "Intel Core i7 11th Gen",
        "16GB DDR4 RAM",
        "512GB SSD",
        "Intel UHD Graphics",
        "Windows 11 Pro",
      ],
      featured: true,
    },
    {
      name: "HP ProDesk 600 G9",
      category: "Desktop PC",
      description: "Compact and efficient desktop solution",
      specs: [
        "Intel Core i5 12th Gen",
        "8GB RAM",
        "256GB SSD",
        "Integrated Graphics",
        "Windows 11 Pro",
      ],
    },
    {
      name: "Lenovo ThinkCentre M90a",
      category: "All-in-One",
      description: "Space-saving all-in-one desktop",
      specs: [
        "Intel Core i7",
        "16GB RAM",
        "512GB SSD",
        "23.8\" FHD Display",
        "Windows 11 Pro",
      ],
    },
  ];

  const servers = [
    {
      name: "Dell PowerEdge R750",
      category: "Rack Server",
      description: "Enterprise-grade rack server",
      specs: [
        "Dual Intel Xeon Scalable",
        "128GB ECC RAM",
        "4TB RAID Storage",
        "Dual Power Supply",
        "iDRAC9 Management",
      ],
      featured: true,
    },
    {
      name: "HPE ProLiant DL380 Gen10",
      category: "Rack Server",
      description: "Versatile and reliable server platform",
      specs: [
        "Dual Intel Xeon Gold",
        "64GB ECC RAM",
        "2TB RAID Storage",
        "ILO5 Management",
        "Redundant Cooling",
      ],
    },
  ];

  const networking = [
    {
      name: "Cisco Catalyst 9300",
      category: "Switch",
      description: "Enterprise network switch",
      specs: [
        "48 Ports Gigabit",
        "4x 10G SFP+ Uplinks",
        "Stackable Design",
        "Layer 3 Routing",
        "PoE+ Support",
      ],
      featured: true,
    },
    {
      name: "Ubiquiti UniFi Dream Machine Pro",
      category: "Router/Firewall",
      description: "All-in-one network security appliance",
      specs: [
        "10Gbps Throughput",
        "Built-in Controller",
        "VPN Server",
        "IDS/IPS Features",
        "Cloud Management",
      ],
    },
    {
      name: "Aruba AP-635 WiFi 6E",
      category: "Access Point",
      description: "Next-generation wireless access point",
      specs: [
        "WiFi 6E (802.11ax)",
        "Tri-band Support",
        "Up to 4.8 Gbps",
        "Cloud Managed",
        "PoE Powered",
      ],
    },
  ];

  const accessories = [
    {
      name: "Dell UltraSharp U2723DE",
      category: "Monitor",
      description: "Professional 27-inch QHD monitor",
      specs: [
        "27\" QHD (2560x1440)",
        "IPS Panel",
        "USB-C Connectivity",
        "Height Adjustable",
        "99% sRGB",
      ],
    },
    {
      name: "Logitech MX Keys",
      category: "Keyboard",
      description: "Premium wireless keyboard for professionals",
      specs: [
        "Backlit Keys",
        "Multi-device Support",
        "Rechargeable Battery",
        "Smart Illumination",
        "Wireless/Bluetooth",
      ],
    },
    {
      name: "APC Back-UPS Pro 1500VA",
      category: "UPS",
      description: "Uninterruptible power supply",
      specs: [
        "1500VA / 865W",
        "8 Outlets",
        "LCD Display",
        "Automatic Voltage Regulation",
        "USB Monitoring",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium technology products from leading manufacturers. 
              Bulk orders and enterprise pricing available.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="laptops" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
                <TabsTrigger value="laptops">Laptops</TabsTrigger>
                <TabsTrigger value="desktops">Desktops</TabsTrigger>
                <TabsTrigger value="servers">Servers</TabsTrigger>
                <TabsTrigger value="networking">Networking</TabsTrigger>
                <TabsTrigger value="accessories">Accessories</TabsTrigger>
              </TabsList>

              <TabsContent value="laptops">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {laptops.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="desktops">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {desktops.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="servers">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {servers.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="networking">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {networking.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="accessories">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {accessories.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Buy from ITExceed?
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Volume discounts and enterprise pricing
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🚚</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Quick turnaround on all orders
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">✅</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Warranty Support</h3>
                <p className="text-sm text-muted-foreground">
                  Full manufacturer warranty included
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🛠️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Setup Service</h3>
                <p className="text-sm text-muted-foreground">
                  Optional installation and configuration
                </p>
              </div>
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

      <Footer />
    </div>
  );
};

export default Products;
