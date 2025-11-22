import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  const handleEmergencyCall = () => {
    // This would trigger the phone call
    window.location.href = 'tel:+919121740296';
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
              Get in touch with our team. We're here to help with all your IT needs.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-4 sm:space-y-6">
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg sm:text-xl">Get In Touch</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Reach out to us through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-professional-darkBlue mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-xs sm:text-sm">Address</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          16 Devalls Close<br />
                          London, England, E6 5PL
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-professional-darkBlue mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-xs sm:text-sm">Phone</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">+44 20 1234 5678</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">+44 20 8765 4321</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-professional-darkBlue mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-xs sm:text-sm">Email</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">sales@itexceed.com</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">support@itexceed.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-professional-darkBlue mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-xs sm:text-sm">Business Hours</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Monday - Friday: 9AM - 6PM</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">24/7 Emergency Support Available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-professional-darkBlue text-primary-foreground">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg sm:text-xl">Emergency Support</CardTitle>
                    <CardDescription className="text-primary-foreground/80 text-xs sm:text-sm">
                      Need immediate assistance?
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 sm:mb-4 text-xs sm:text-sm">Our emergency support line is available 24/7 for critical issues.</p>
                    <Button variant="secondary" className="w-full text-xs sm:text-sm" onClick={handleEmergencyCall}>
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Call Emergency Line
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg sm:text-xl">Send Us a Message</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-xs sm:text-sm font-medium">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            required
                            className="text-sm"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@company.com"
                            required
                            className="text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-xs sm:text-sm font-medium">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Acme Inc."
                            className="text-sm"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-xs sm:text-sm font-medium">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+44 20 1234 5678"
                            className="text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs sm:text-sm font-medium">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project or requirements..."
                          rows={4}
                          required
                          className="text-sm resize-vertical min-h-[120px]"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full text-sm sm:text-base">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;