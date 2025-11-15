const OurPeople = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-primary mb-3 tracking-wider uppercase">
              WORK AND JOY
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our people
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At ITExceed, we believe our people are our greatest asset. Our team of passionate IT professionals brings together diverse expertise, innovative thinking, and a shared commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From cybersecurity specialists to cloud architects, from help desk heroes to strategic consultants - every member of our team is dedicated to delivering exceptional IT solutions and driving your business forward.
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Row */}
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop"
                  alt="IT professionals working"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Middle Row */}
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=400&fit=crop"
                  alt="Team meeting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
                  alt="IT consultant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;