import React from 'react';
import { FaCut, FaUserTie, FaRing, FaPalette, FaHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  const iconMap = {
    FaCut: <FaCut className="text-3xl text-primary-600" />,
    FaUserTie: <FaUserTie className="text-3xl text-primary-600" />,
    FaPalette: <FaPalette className="text-3xl text-primary-600" />,
    FaRing: <FaRing className="text-3xl text-primary-600" />,
    FaHeart: <FaHeart className="text-3xl text-primary-600" />,
    FaStar: <FaStar className="text-3xl text-primary-600" />
  };

  const handleBookService = (serviceName) => {
    const phoneNumber = '+918219136254'; // Replace with actual phone number
    const message = `Hi! I'm interested in your ${serviceName} service. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="section-padding bg-background-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-800 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            From custom stitching to bridal wear, we offer a complete range of 
            tailoring services to meet all your fashion needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                  {iconMap[service.icon]}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="text-accent-600 font-semibold mb-4">
                  {service.price}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleBookService(service.title)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-heading font-bold text-secondary-800 mb-4">
            Need Something Custom?
          </h3>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
            We specialize in creating unique, custom garments tailored to your specific needs. 
            Contact us to discuss your requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get Custom Quote
            </Link>
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
