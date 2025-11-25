import React, { useEffect, useState } from 'react';
import { FaCut, FaUserTie, FaRing, FaPalette, FaHeart, FaStar, FaArrowRight, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = ({ limit }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const iconMap = {
    FaCut: <FaCut className="text-3xl text-boutique-primary" />,
    FaUserTie: <FaUserTie className="text-3xl text-boutique-primary" />,
    FaPalette: <FaPalette className="text-3xl text-boutique-primary" />,
    FaRing: <FaRing className="text-3xl text-boutique-primary" />,
    FaHeart: <FaHeart className="text-3xl text-boutique-primary" />,
    FaStar: <FaStar className="text-3xl text-boutique-primary" />
  };

  const servicesToDisplay = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 md:mb-20 lg:mb-24 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-boutique-secondary text-boutique-primary px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-500 hover:scale-105">
            <FaStar className="text-boutique-accent transition-transform duration-500 hover:rotate-180" />
            Premium Tailoring Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-boutique-textdark mb-4 md:mb-6 transition-all duration-700">
            Our <span className="text-boutique-primary transition-colors duration-500 hover:text-boutique-highlight">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-boutique-textdark/80 max-w-3xl mx-auto font-inter leading-relaxed transition-all duration-700 delay-200">
            We provide a wide range of tailoring services, from custom designs to alterations, ensuring a perfect fit for every occasion.
            Experience the art of bespoke craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
          {servicesToDisplay.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-boutique-secondary/50 hover:shadow-2xl transition-all duration-500 ease-out flex flex-col h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${hoveredCard === service.id ? 'transform -translate-y-2 border-boutique-primary/30 shadow-xl' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon Section */}
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 bg-boutique-secondary rounded-2xl flex items-center justify-center transition-all duration-500 ease-out ${
                  hoveredCard === service.id ? 'bg-boutique-primary transform scale-110 rotate-6' : 'hover:scale-105'
                }`}>
                  <div className={`transition-all duration-500 ${
                    hoveredCard === service.id ? 'text-white transform scale-110' : 'hover:scale-110'
                  }`}>
                    {iconMap[service.icon]}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="text-center flex-grow">
                <h3 className="text-xl sm:text-2xl font-poppins font-bold text-boutique-textdark mb-4 transition-all duration-300 hover:text-boutique-primary">
                  {service.title}
                </h3>
                <p className="font-inter text-boutique-textdark/70 mb-6 leading-relaxed text-base sm:text-lg transition-all duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center gap-3 text-boutique-textdark/80 text-sm sm:text-base transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="w-5 h-5 bg-boutique-accent/20 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-boutique-accent/30">
                        <FaCheck className="text-boutique-accent text-xs transition-transform duration-300 hover:scale-125" />
                      </div>
                      <span className="transition-all duration-300 hover:text-boutique-textdark">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-2xl sm:text-3xl text-boutique-primary font-poppins font-bold mb-6 md:mb-8 transition-all duration-300 hover:scale-105">
                  {service.price}
                  {service.duration && (
                    <span className="text-sm sm:text-base font-inter text-boutique-textdark/60 block mt-1 transition-all duration-300 hover:text-boutique-textdark/80">
                      {service.duration}
                    </span>
                  )}
                </div>
              </div>
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className={`w-full text-center py-3 px-6 rounded-xl transition-all duration-500 ease-out font-inter font-semibold text-lg border-2 flex items-center justify-center gap-2 group ${
                  hoveredCard === service.id 
                    ? 'bg-boutique-primary border-boutique-primary text-white transform scale-105 shadow-lg' 
                    : 'bg-transparent border-boutique-primary text-boutique-primary hover:bg-boutique-primary hover:text-white hover:scale-105'
                }`}
              >
                Book Now
                <FaArrowRight className={`transition-all duration-500 ${
                  hoveredCard === service.id ? 'translate-x-2 scale-110' : 'group-hover:translate-x-2 group-hover:scale-110'
                }`} />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-700 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {limit ? (
            // Limited view - Show View All button
            <div className="space-y-6">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 bg-boutique-primary hover:bg-boutique-highlight text-white py-4 px-8 rounded-xl transition-all duration-500 ease-out font-poppins font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                View All Services
                <FaArrowRight className="transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110" />
              </Link>
              <p className="text-boutique-textdark/60 font-inter text-sm transition-all duration-500 hover:text-boutique-textdark/80">
                Discover our complete range of premium tailoring services
              </p>
            </div>
          ) : (
            // Full view - Show multiple CTAs
            <div className="space-y-8">
              <div className="bg-boutique-secondary rounded-2xl p-8 md:p-12 max-w-4xl mx-auto transition-all duration-700 ease-out hover:shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-boutique-textdark mb-4 transition-all duration-500 hover:text-boutique-primary">
                  Ready to Create Something Extraordinary?
                </h3>
                <p className="text-boutique-textdark/70 font-inter text-lg mb-8 max-w-2xl mx-auto transition-all duration-500">
                  Let's discuss your vision and bring your perfect garment to life with our expert tailoring services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-boutique-primary hover:bg-boutique-highlight text-white py-4 px-8 rounded-xl transition-all duration-500 ease-out font-poppins font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                  >
                    Get a Custom Quote
                  </Link>
                  <Link
                    to="/portfolio"
                    className="border-2 border-boutique-primary text-boutique-primary hover:bg-boutique-primary hover:text-white py-4 px-8 rounded-xl transition-all duration-500 ease-out font-poppins font-semibold text-lg text-center transform hover:scale-105"
                  >
                    View Our Portfolio
                  </Link>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pt-8">
                {[
                  { number: '500+', text: 'Happy Clients' },
                  { number: '1000+', text: 'Garments Made' },
                  { number: '5+', text: 'Years Experience' },
                  { number: '99%', text: 'Satisfaction Rate' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="text-center transition-all duration-500 ease-out hover:transform hover:scale-110"
                  >
                    <div className="text-2xl font-bold text-boutique-primary mb-2 transition-all duration-500 hover:text-boutique-highlight">
                      {item.number}
                    </div>
                    <div className="text-sm text-boutique-textdark/70 transition-all duration-500 hover:text-boutique-textdark">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;