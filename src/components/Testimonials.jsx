import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials, testimonialStats } from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of cards to show based on screen size
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop
      if (window.innerWidth >= 768) return 2; // Tablet
      return 1; // Mobile
    }
    return 1;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality - infinite loop
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        size={14}
      />
    ));
  };

  const visibleTestimonials = Array.from({ length: cardsToShow }, (_, i) =>
    testimonials[(currentIndex + i) % testimonials.length]
  );

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-boutique-textdark mb-4">
            What Our <span className="text-boutique-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-boutique-textdark/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services and craftsmanship.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden group"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 text-boutique-accent/30">
                  <FaQuoteLeft size={24} />
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  <div className="text-center">
                    {/* Customer Image */}
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-md">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1 mb-3">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-sm text-boutique-textdark/80 leading-relaxed mb-4 italic line-clamp-4">
                      "{testimonial.comment}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="text-center">
                      <h4 className="font-heading font-semibold text-boutique-textdark text-base mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-boutique-textdark/60 text-xs mb-2">
                        {testimonial.location}
                      </p>
                      <span className="inline-block bg-boutique-primary/10 text-boutique-primary px-2 py-1 rounded-full text-xs font-medium">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-boutique-primary/5 to-boutique-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-boutique-secondary transition-colors duration-300 z-20 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <FaChevronLeft className="text-boutique-primary" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-boutique-secondary transition-colors duration-300 z-20 hover:scale-110"
            aria-label="Next testimonials"
          >
            <FaChevronRight className="text-boutique-primary" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: testimonials.length }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex % testimonials.length
                  ? 'bg-boutique-primary scale-125'
                  : 'bg-boutique-accent/50 hover:bg-boutique-accent'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-boutique-primary font-heading mb-2">
              {testimonialStats.averageRating.toFixed(1)}/5
            </div>
            <div className="text-sm text-boutique-textdark/70">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-boutique-primary font-heading mb-2">
              {testimonialStats.totalReviews}+
            </div>
            <div className="text-sm text-boutique-textdark/70">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-boutique-primary font-heading mb-2">
              {testimonialStats.satisfactionRate}%
            </div>
            <div className="text-sm text-boutique-textdark/70">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-boutique-primary font-heading mb-2">
              24hr
            </div>
            <div className="text-sm text-boutique-textdark/70">Quick Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
