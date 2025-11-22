import CTASection from "@/components/CTASection";
import { Target, Award, Users, TrendingUp, Shield, Cloud, Headphones, Network } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Magic happens when the best performing{" "}
              <span className="text-professional-darkBlue">IT solutions</span> meet the{" "}
              <span className="text-professional-darkBlue">brightest talent.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mt-6 sm:mt-8 px-4">
              Empowering businesses to achieve top performance while delivering 
              comprehensive IT solutions that truly work.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Who we are
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto px-4">
                Since 2016, ITExceed has been transforming organizations by delivering 
                innovative IT solutions and exceptional service, empowering businesses to thrive 
                in a digital world.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Our Story</h3>
                <div className="space-y-3 sm:space-y-4 text-muted-foreground text-base sm:text-lg">
                  <p>
                    Founded in 2016 with a vision to transform how businesses leverage technology, 
                    ITExceed has grown to become a trusted partner for organizations across 
                    multiple industries.
                  </p>
                  <p>
                    Our journey began with a simple belief, technology should empower businesses, 
                    not complicate them. Over the past two decades, we have served hundreds of 
                    clients, delivering solutions that drive real business outcomes.
                  </p>
                  <p>
                    With over 9 years of combined experience, our team of certified professionals 
                    brings deep expertise in cloud computing, cybersecurity, infrastructure management, 
                    and custom software development.
                  </p>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="bg-gradient-to-br from-primary/20 to-accent rounded-xl sm:rounded-2xl p-6 sm:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-professional-darkBlue">9+</div>
                    <p className="text-lg sm:text-xl font-medium">Years of Excellence</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Since 2016</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Managed Services */}
              <div className="bg-background rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                    alt="Managed IT Services"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Managed Services</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Through our comprehensive managed IT services, we empower businesses to 
                    achieve operational excellence, providing proactive support and innovative 
                    solutions.
                  </p>
                </div>
              </div>
            
              {/* Network Infrastructure */}
              <div className="bg-background rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-500/30 to-blue-500/10 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
                    alt="Network Infrastructure"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Network Infrastructure</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Building robust, scalable network foundations that ensure seamless connectivity, 
                    optimal performance, and future-ready infrastructure for your business growth.
                  </p>
                </div>
              </div>

              {/* Cloud Solutions */}
              <div className="bg-background rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                    alt="Cloud Solutions"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Cloud Solutions</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Harnessing the power of modern cloud platforms, we revolutionize business 
                    operations, enabling seamless collaboration, enhanced productivity, and 
                    secure environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-background p-4 sm:p-6 lg:p-8 rounded-lg border border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-professional-darkBlue rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Customer Focus</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Your success is our priority. We listen, understand, and deliver 
                  solutions that meet your specific needs.
                </p>
              </div>

              <div className="bg-background p-4 sm:p-6 lg:p-8 rounded-lg border border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-professional-darkBlue rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Excellence</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We maintain the highest standards in everything we do, from service 
                  delivery to technical expertise.
                </p>
              </div>

              <div className="bg-background p-4 sm:p-6 lg:p-8 rounded-lg border border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-professional-darkBlue rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Collaboration</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We work as partners with our clients, fostering relationships built 
                  on trust and transparency.
                </p>
              </div>

              <div className="bg-background p-4 sm:p-6 lg:p-8 rounded-lg border border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-professional-darkBlue rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Innovation</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We stay ahead of technology trends to bring you cutting-edge 
                  solutions that drive competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div className="bg-primary/5 p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-primary/20">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Our Mission</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage. We strive to be the trusted technology 
                  partner that exceeds expectations at every touchpoint.
                </p>
              </div>

              <div className="bg-accent/50 p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-primary/20">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Our Vision</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To be the leading provider of integrated IT solutions, recognized for our 
                  commitment to excellence, innovation, and customer success. We envision a 
                  future where technology seamlessly enables every business to reach its full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose ITExceed?
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-professional-darkBlue mb-2">9+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Years in Business</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-professional-darkBlue mb-2">98%</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-professional-darkBlue mb-2">24/7</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Work Together?"
          description="Let's discuss how ITExceed can help your business exceed its goals"
          primaryButtonText="Get in Touch"
          primaryButtonLink="/contact"
        />
      </main>
    </div>
  );
};

export default About;