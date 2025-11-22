import React from 'react';
import { Printer, Palette, Image, FileText, CheckCircle, Award, ArrowRight, Package, Sparkles, Camera, Layout, PenTool, Type, Layers } from "lucide-react";

const PrintingDesigningDetail = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Award-winning design team creating visually stunning and impactful branding materials."
    },
    {
      icon: Package,
      title: "Fast Turnaround",
      description: "Quick production times without compromising on quality, meeting your urgent deadlines."
    },
    {
      icon: Palette,
      title: "Custom Solutions",
      description: "Tailored design and printing services perfectly aligned with your brand identity."
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "Premium materials and cutting-edge printing technology for professional results."
    }
  ];

  const printingServices = [
    {
      icon: FileText,
      title: "Business Cards & Stationery",
      description: "Professional business cards, letterheads, envelopes, and corporate stationery that make a lasting impression.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
    },
    {
      icon: Image,
      title: "Banners & Signage",
      description: "Large-format printing for banners, posters, signage, and display materials for events and retail spaces.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    {
      icon: Package,
      title: "Marketing Materials",
      description: "Brochures, flyers, catalogs, and promotional materials designed to drive customer engagement.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
    },
    {
      icon: Layout,
      title: "Packaging Design",
      description: "Custom packaging solutions that protect your products while enhancing brand visibility.",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80"
    },
    {
      icon: Camera,
      title: "Event Materials",
      description: "Complete event collateral including invitations, programs, badges, and promotional displays.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
    },
    {
      icon: Type,
      title: "Vehicle Graphics",
      description: "Eye-catching vehicle wraps and decals that turn your fleet into mobile advertising.",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80"
    }
  ];

  const designServices = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete brand development including logo design, color schemes, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
      icon: Layout,
      title: "Marketing Design",
      description: "Compelling visual content for advertisements, social media, and digital marketing campaigns.",
      image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=800&q=80"
    },
    {
      icon: PenTool,
      title: "Illustration & Graphics",
      description: "Custom illustrations, infographics, and visual elements for unique brand storytelling.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "User-centered design for websites, apps, and digital interfaces that enhance user experience.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
    }
  ];

  const benefits = [
    "Professional design consultation included",
    "High-resolution printing up to 2400 DPI",
    "Eco-friendly printing options available",
    "Same-day and rush services for urgent needs",
    "Custom finishing options (embossing, foiling)",
    "Brand consistency across all materials",
    "Competitive pricing with no hidden fees",
    "Free design revisions until perfect"
  ];

  const stats = [
    { number: "48hrs", label: "Average Turnaround" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  const materials = [
    { name: "Business Cards", finish: "Matte/Glossy/UV" },
    { name: "Brochures", finish: "Tri-fold/Bi-fold" },
    { name: "Flyers", finish: "Full Color" },
    { name: "Posters", finish: "All Sizes" },
    { name: "Banners", finish: "Vinyl/Fabric" },
    { name: "Stickers", finish: "Die-cut/Roll" },
    { name: "Catalogs", finish: "Perfect Bound" },
    { name: "Folders", finish: "Pocket/Tab" },
    { name: "Labels", finish: "Roll/Sheet" },
    { name: "Booklets", finish: "Saddle Stitch" },
    { name: "Signs", finish: "Indoor/Outdoor" },
    { name: "Postcards", finish: "Standard/Large" }
  ];

  const printingOptions = [
    {
      title: "Digital Printing",
      description: "Fast, cost-effective printing for short runs with quick turnaround times",
      features: ["Variable Data Printing", "Photo Quality Output", "Small to Medium Runs"]
    },
    {
      title: "Offset Printing",
      description: "High-quality traditional printing for large volumes with exceptional color accuracy",
      features: ["Large Volume Runs", "Superior Quality", "Cost-Effective for Bulk"]
    },
    {
      title: "Large Format",
      description: "Oversized printing for banners, posters, and display materials",
      features: ["Up to 16ft Wide", "Indoor/Outdoor", "Multiple Substrates"]
    },
    {
      title: "Specialty Printing",
      description: "Premium finishing options to make your materials stand out",
      features: ["Embossing/Debossing", "Foil Stamping", "Spot UV Coating"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden mt-12 sm:mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80" 
            alt="Printing & Designing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Printer className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">Printing & Designing Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Bring Your Brand<br />Vision to Life
          </h1>
          <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Professional graphic design and high-quality printing services that elevate your brand and captivate your audience.
          </p>
        </div>
      </section>

      {/* Stats Section - Commented */}
      {/* <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Creative Design Meets Premium Printing
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Your brand deserves to stand out. Whether you need eye-catching marketing materials, professional business stationery, or large-format displays, our integrated design and printing services deliver exceptional results that make a lasting impression.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                From concept to completion, our creative team and state-of-the-art printing facilities work together to ensure your vision becomes reality. We combine artistic excellence with technical precision to produce materials that not only look stunning but also drive results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80" 
                alt="Design Work"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Professional quality, creative excellence, and exceptional customer service in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Printing Services */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Professional Printing Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              High-quality printing solutions for all your business and marketing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {printingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Services - Commented */}
      {/* <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Creative Design Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Innovative design solutions that capture your brand essence and engage your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {designServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-400" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Printing Options */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Printing Technologies
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Multiple printing methods to meet your specific requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {printingOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-all">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {option.description}
                </p>
                <div className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              What We Print
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive printing capabilities for virtually any material you need.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {materials.map((material, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                <div className="font-semibold text-sm sm:text-base mb-1">{material.name}</div>
                <div className="text-xs sm:text-sm text-gray-400">{material.finish}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Design & Print Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Simple, streamlined workflow from concept to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your needs and creative vision" },
              { step: "02", title: "Design", desc: "Create custom designs with unlimited revisions" },
              { step: "03", title: "Approval", desc: "Review and approve final design proofs" },
              { step: "04", title: "Production", desc: "High-quality printing with premium materials" },
              { step: "05", title: "Delivery", desc: "Fast shipping or convenient pickup options" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold mx-auto mb-3 sm:mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-6 sm:top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 px-4">
            Get a free design consultation and quote for your next printing project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintingDesigningDetail;