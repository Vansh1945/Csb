import React, { useEffect, useState } from 'react';
import { FaCut, FaUserTie, FaRing, FaPalette, FaHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const iconMap = {
    FaCut: <FaCut className="text-3xl text-boutique-primary transition-transform duration-300 group-hover:scale-110" />,
    FaUserTie: <FaUserTie className="text-3xl text-boutique-primary transition-transform duration-300 group-hover:scale-110" />,
    FaPalette: <FaPalette className="text-3xl text-boutique-primary transition-transform duration-300 group-hover:scale-110" />,
    FaRing: <FaRing className="text-3xl text-boutique-primary transition-transform duration-300 group-hover:scale-110" />,
    FaHeart: <FaHeart className="text-3xl text-boutique-primary transition-transform duration-300 group-hover:scale-110" />,
    FaStar: <FaStar className="text-3xl text-boutique-primary transition-transform duration-300 group-hover:scale-110" />
  };

  const handleBookService = (serviceName) => {
    const phoneNumber = '+918219136254'; // Replace with actual phone number
    const message = `Hi! I'm interested in your ${serviceName} service. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-boutique-textdark mb-4">
            Our <span className="text-boutique-primary">Services</span>
          </h2>
          <p className="text-lg text-boutique-textdark/70 max-w-2xl mx-auto">
            From custom stitching to bridal wear, we offer a complete range of
            tailoring services to meet all your fashion needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-gray-50 rounded-2xl p-6 shadow-lg group transition-all duration-500 border border-gray-100 min-h-[400px] flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-boutique-accent transition-all duration-300 shadow-md group-hover:shadow-lg">
                  {iconMap[service.icon]}
                </div>
              </div>

              {/* Content */}
              <div className="text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-boutique-textdark mb-3 group-hover:text-boutique-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-boutique-textdark/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-white text-boutique-primary text-xs px-3 py-1 rounded-full border border-boutique-primary/20 hover:bg-boutique-primary hover:text-white transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-boutique-accent font-semibold mb-4">
                    {service.price}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleBookService(service.title)}
                  className="w-full bg-boutique-primary hover:bg-boutique-highlight text-white py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-boutique-textdark mb-4">
            Need Something Custom?
          </h3>
          <p className="text-boutique-textdark/70 mb-6 max-w-2xl mx-auto">
            We specialize in creating unique, custom garments tailored to your specific needs.
            Contact us to discuss your requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-boutique-primary hover:bg-boutique-highlight text-white py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
            >
              Get Custom Quote
            </Link>
            <Link
              to="/services"
              className="border border-boutique-primary text-boutique-primary hover:bg-boutique-primary hover:text-white py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
