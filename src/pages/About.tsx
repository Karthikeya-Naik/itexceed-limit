import CTASection from "@/components/CTASection";
import { Target, Award, Users, TrendingUp, Shield, Cloud, Headphones } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Magic happens when the best performing{" "}
              <span className="text-primary">IT solutions</span> meet the{" "}
              <span className="text-primary">brightest talent.</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-8">
              Empowering businesses to achieve top performance while delivering 
              comprehensive IT solutions that truly work.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Who we are
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Since 2002, ITExceed has been transforming organizations by delivering 
                innovative IT solutions and exceptional service, empowering businesses to thrive 
                in a digital world.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Founded in 2002 with a vision to transform how businesses leverage technology, 
                    ITExceed has grown to become a trusted partner for organizations across 
                    multiple industries.
                  </p>
                  <p>
                    Our journey began with a simple belief: technology should empower businesses, 
                    not complicate them. Over the past two decades, we have served hundreds of 
                    clients, delivering solutions that drive real business outcomes.
                  </p>
                  <p>
                    With over 23 years of combined experience, our team of certified professionals 
                    brings deep expertise in cloud computing, cybersecurity, infrastructure management, 
                    and custom software development.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-accent rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-6xl font-bold text-primary">23+</div>
                    <p className="text-xl font-medium">Years of Excellence</p>
                    <p className="text-sm text-muted-foreground">Since 2002</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <Headphones className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Managed Services</h3>
                  <p className="text-muted-foreground">
                    Through our comprehensive managed IT services, we empower businesses to 
                    achieve operational excellence, providing proactive support and innovative 
                    solutions.
                  </p>
                </div>
              </div>
            
              <div className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Cybersecurity</h3>
                  <p className="text-muted-foreground">
                    With a relentless commitment to security, we offer cutting-edge cybersecurity 
                    solutions that safeguard data, mitigate risks, and ensure robust protection 
                    against evolving threats.
                  </p>
                </div>
              </div>

              <div className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center">
                  <div className="w-20 h-20 bg-accent/30 rounded-full flex items-center justify-center">
                    <Cloud className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Cloud Solutions</h3>
                  <p className="text-muted-foreground">
                    Harnessing the power of modern cloud platforms, we revolutionize business 
                    operations, enabling seamless collaboration, enhanced productivity, and 
                    secure environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                LEADERSHIP
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Meet our team
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Leader 1 */}
              <div className="group">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-muted-foreground">
                      Leading ITExceed with a vision for innovation and excellence
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">John Mitchell</h3>
                <p className="text-primary font-medium mb-2">Chief Executive Officer</p>
                <p className="text-sm text-muted-foreground">
                  20+ years experience in IT strategy and digital transformation
                </p>
              </div>

              {/* Leader 2 */}
              <div className="group">
                <div className="aspect-[3/4] bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-muted-foreground">
                      Driving technical excellence and innovation across all services
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Sarah Chen</h3>
                <p className="text-primary font-medium mb-2">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground">
                  Cloud architecture expert with multiple industry certifications
                </p>
              </div>

              {/* Leader 3 */}
              <div className="group">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-muted-foreground">
                      Ensuring world-class security and compliance for our clients
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Michael Rodriguez</h3>
                <p className="text-primary font-medium mb-2">Chief Security Officer</p>
                <p className="text-sm text-muted-foreground">
                  Cybersecurity specialist with focus on threat prevention
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Your success is our priority. We listen, understand, and deliver 
                  solutions that meet your specific needs.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in everything we do, from service 
                  delivery to technical expertise.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work as partners with our clients, fostering relationships built 
                  on trust and transparency.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay ahead of technology trends to bring you cutting-edge 
                  solutions that drive competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-primary/5 p-10 rounded-2xl border border-primary/20">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage. We strive to be the trusted technology 
                  partner that exceeds expectations at every touchpoint.
                </p>
              </div>

              <div className="bg-accent/50 p-10 rounded-2xl border border-primary/20">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading provider of integrated IT solutions, recognized for our 
                  commitment to excellence, innovation, and customer success. We envision a 
                  future where technology seamlessly enables every business to reach its full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose ITExceed?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">23+</div>
                <p className="text-muted-foreground">Years in Business</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Support Available</p>
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