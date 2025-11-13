import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Target, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground">
              ITExceed - Exceeding the limits of what's possible in technology
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a vision to transform how businesses leverage technology, 
                    ITExceed has grown to become a trusted partner for organizations across 
                    multiple industries.
                  </p>
                  <p>
                    Our journey began with a simple belief: technology should empower businesses, 
                    not complicate them. Today, we serve over 500 clients worldwide, delivering 
                    solutions that drive real business outcomes.
                  </p>
                  <p>
                    With over 15 years of combined experience, our team of certified professionals 
                    brings deep expertise in cloud computing, cybersecurity, infrastructure management, 
                    and custom software development.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-accent rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-6xl font-bold text-primary">15+</div>
                    <p className="text-xl font-medium">Years of Excellence</p>
                  </div>
                </div>
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
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Satisfied Clients</p>
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

            <div className="bg-background p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-center">Our Certifications & Partnerships</h3>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                <div className="text-center">
                  <p className="font-semibold">Microsoft Gold Partner</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">AWS Advanced Partner</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Cisco Select Partner</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">ISO 27001 Certified</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Cyber Essentials Plus</p>
                </div>
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

      <Footer />
    </div>
  );
};

export default About;
