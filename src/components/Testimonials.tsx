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
    <section className="pb-20 pt-16 sm:pt-8 md:pt-8 lg:pt-20 bg-gradient-to-b from-gray-900 to-gray-800/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-semibold text-orange-500 mb-2 tracking-wider uppercase">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        <div 
          className="max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main testimonial card */}
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-700 shadow-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300">
            {/* Orange gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/3 pointer-events-none"></div>
            
            <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
              {/* Quote icon */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 text-orange-500/10">
                <Quote className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24" />
              </div>

              {/* Content container */}
              <div className="grid md:grid-cols-[1fr,auto] gap-6 sm:gap-8 items-center">
                {/* Left side - Testimonial content */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 sm:h-6 sm:w-6 fill-orange-500 text-orange-500" 
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                    "{currentTestimonial.content}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-white text-base sm:text-lg">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Navigation controls */}
                <div className="flex md:flex-col gap-3 sm:gap-4 justify-center items-center">
                  <button
                    onClick={goToPrevious}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-orange-400 hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300 shadow-lg hover:scale-110"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-orange-400 hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300 shadow-lg hover:scale-110"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </button>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex gap-2 justify-center mt-6 sm:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 sm:w-12 bg-orange-500' 
                        : 'w-2 bg-orange-500/40 hover:bg-orange-500/60'
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