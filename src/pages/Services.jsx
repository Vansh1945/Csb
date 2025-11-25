import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCut, FaUserTie, FaPalette, FaHeart, FaRing, FaStar, FaCheck, FaArrowRight, FaWhatsapp, FaRuler, FaAward, FaClock, FaUsers } from 'react-icons/fa';
import { services, serviceCategories } from '../data/services';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  const getIcon = (iconName) => {
    const icons = {
      FaCut: FaCut,
      FaUserTie: FaUserTie,
      FaPalette: FaPalette,
      FaHeart: FaHeart,
      FaRing: FaRing,
      FaStar: FaStar
    };
    return icons[iconName] || FaStar;
  };

  return (
    <div className="min-h-screen pt-20 bg-boutique-light-bg">
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-br from-boutique-secondary to-boutique-light-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-boutique-textdark mb-6">
              Our <span className="text-boutique-primary">Services</span>
            </h1>
            <p className="text-lg text-boutique-textdark/80 max-w-3xl mx-auto">
              Expert tailoring and custom stitching services that bring your fashion vision to life. 
              From traditional wear to modern designs, we create perfect fits with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-boutique-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-boutique-primary text-white shadow-md'
                    : 'bg-boutique-secondary text-boutique-textdark hover:bg-boutique-accent/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-boutique-textdark mb-4">
              Our Services
            </h2>
            <p className="text-boutique-textdark/70 max-w-2xl mx-auto">
              Discover our complete range of tailoring and stitching services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div
                  key={service.id}
                  className="bg-boutique-light-bg rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="text-xl text-boutique-primary" />
                    </div>
                    <div className="absolute top-3 left-3 bg-boutique-primary text-white text-xs font-semibold px-2 py-1 rounded">
                      {service.rating} ★
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-boutique-textdark mb-1">{service.title}</h3>
                    <p className="text-boutique-primary font-semibold text-sm mb-3">{service.price}</p>
                    <p className="text-boutique-textdark/70 text-sm mb-4 line-clamp-2">{service.description}</p>
                    
                    <div className="space-y-1 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <FaCheck className="text-boutique-highlight text-xs" />
                          <span className="text-boutique-textdark text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="w-full bg-boutique-primary hover:bg-boutique-highlight text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <span>Book Service</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Services Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-boutique-primary text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-boutique-textdark mb-2">No services found</h3>
              <p className="text-boutique-textdark/70">We're adding new services in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Measurement Info */}
      <section className="py-16 bg-boutique-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-boutique-textdark mb-4">
                Custom Measurement Process
              </h2>
              <p className="text-boutique-textdark/70 max-w-2xl mx-auto">
                We ensure perfect fit with precise measurements and attention to detail
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: FaRuler,
                  title: 'Precise Measurements',
                  description: 'We take 15+ body measurements to ensure perfect fit and comfort.'
                },
                {
                  icon: FaUsers,
                  title: 'Personal Consultation',
                  description: 'One-on-one consultation to understand your style preferences.'
                },
                {
                  icon: FaCheck,
                  title: 'Quality Assurance',
                  description: 'Multiple fittings and quality checks throughout the process.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="w-12 h-12 bg-boutique-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="text-xl text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-boutique-textdark mb-2">{item.title}</h3>
                  <p className="text-boutique-textdark/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-boutique-textdark mb-4">
                Why Choose Creative Stitching?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: FaAward,
                  title: '15+ Years Experience',
                  description: 'Expert craftsmanship with years of experience'
                },
                {
                  icon: FaClock,
                  title: 'Timely Delivery',
                  description: 'We ensure on-time delivery for all orders'
                },
                {
                  icon: FaUsers,
                  title: 'Personalized Service',
                  description: 'Custom solutions for every client'
                },
                {
                  icon: FaStar,
                  title: 'Quality Guarantee',
                  description: '100% satisfaction guarantee'
                }
              ].map((item, index) => (
                <div key={index} className="bg-boutique-light-bg rounded-lg p-4 text-center">
                  <div className="w-10 h-10 bg-boutique-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="text-lg text-white" />
                  </div>
                  <h3 className="text-base font-bold text-boutique-textdark mb-2">{item.title}</h3>
                  <p className="text-boutique-textdark/70 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gradient-to-br from-boutique-primary to-boutique-highlight text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our Simple Process
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                From consultation to delivery, we make it easy and enjoyable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'Discuss requirements and design preferences'
                },
                {
                  step: '02',
                  title: 'Measurement',
                  description: 'Precise body measurements for perfect fit'
                },
                {
                  step: '03',
                  title: 'Creation',
                  description: 'Expert crafting with quality materials'
                },
                {
                  step: '04',
                  title: 'Delivery',
                  description: 'Final fitting and outfit delivery'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="opacity-90 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Buttons */}
      <section className="py-16 bg-boutique-light-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-boutique-textdark mb-4">
              Ready to Create Your Perfect Outfit?
            </h2>
            <p className="text-boutique-textdark/70 mb-6">
              Contact us today and let's bring your fashion vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="bg-boutique-primary hover:bg-boutique-highlight text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <span>Book Consultation</span>
                <FaArrowRight className="text-xs" />
              </Link>
              <button
                onClick={() => window.open('https://wa.me/918580458907', '_blank')}
                className="border border-boutique-primary text-boutique-primary hover:bg-boutique-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <FaWhatsapp />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;