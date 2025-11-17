import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials, testimonialStats } from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
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
        size={16}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-800 mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our services and craftsmanship.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary-200">
              <FaQuoteLeft size={40} />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="text-center mb-8">
                {/* Customer Image */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-secondary-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="text-center">
                  <h4 className="font-heading font-semibold text-secondary-800 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-secondary-500 text-sm mb-2">
                    {testimonials[currentIndex].location}
                  </p>
                  <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonials[currentIndex].service}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-primary-50 transition-colors duration-300 z-20"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-primary-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-primary-50 transition-colors duration-300 z-20"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-primary-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 scale-125'
                    : 'bg-primary-200 hover:bg-primary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 font-heading mb-2">
              {testimonialStats.averageRating.toFixed(1)}/5
            </div>
            <div className="text-sm text-secondary-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 font-heading mb-2">
              {testimonialStats.totalReviews}+
            </div>
            <div className="text-sm text-secondary-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 font-heading mb-2">
              {testimonialStats.satisfactionRate}%
            </div>
            <div className="text-sm text-secondary-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 font-heading mb-2">
              24hr
            </div>
            <div className="text-sm text-secondary-600">Quick Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
