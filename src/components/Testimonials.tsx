import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "ITExceed transformed our IT infrastructure completely. Their proactive approach and 24/7 support have been game-changing for our operations. We've seen a 40% reduction in downtime.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Global Finance Group",
      content: "The cybersecurity solutions provided by ITExceed have given us peace of mind. Their team is knowledgeable, responsive, and truly understands the financial sector's compliance requirements.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "HealthFirst Medical",
      content: "Migrating to the cloud seemed daunting, but ITExceed made it seamless. Their expertise in healthcare IT and HIPAA compliance was invaluable. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "HealthFirst Medical",
      content: "Migrating to the cloud seemed daunting, but ITExceed made it seamless. Their expertise in healthcare IT and HIPAA compliance was invaluable. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "HealthFirst Medical",
      content: "Migrating to the cloud seemed daunting, but ITExceed made it seamless. Their expertise in healthcare IT and HIPAA compliance was invaluable. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-shadow relative h-full">
                  <div className="absolute top-8 right-8 text-primary/10">
                    <Quote className="h-12 w-12" />
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-foreground leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-primary text-primary-foreground hover:bg-primary/90" />
          <CarouselNext className="hidden md:flex -right-12 bg-primary text-primary-foreground hover:bg-primary/90" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
