import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="pb-20 pt-8 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        <div 
          className="max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main testimonial card with glassmorphism */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-900/60 rounded-3xl border border-white/40 dark:border-slate-700/40 shadow-2xl overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
            
            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Quote icon */}
              <div className="absolute top-8 right-8 text-primary/10">
                <Quote className="h-20 w-20 md:h-24 md:w-24" />
              </div>

              {/* Content container */}
              <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
                {/* Left side - Testimonial content */}
                <div className="space-y-6">
                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-6 w-6 fill-professional-darkBlue text-professional-darkBlue drop-shadow-sm" 
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-foreground text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                    "{currentTestimonial.content}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-professional-darkBlue to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-muted-foreground">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Navigation controls */}
                <div className="flex md:flex-col gap-4 justify-center items-center">
                  <button
                    onClick={goToPrevious}
                    className="w-14 h-14 rounded-full backdrop-blur-md bg-primary/20 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/30 transition-all duration-300 shadow-lg hover:scale-110"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="w-14 h-14 rounded-full backdrop-blur-md bg-primary/20 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/30 transition-all duration-300 shadow-lg hover:scale-110"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex gap-2 justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-12 bg-professional-darkBlue' 
                        : 'w-2 bg-professional-darkBlue/40 hover:bg-professional-darkBlue/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;