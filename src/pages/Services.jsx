import React, { useState } from 'react';
import { FaCut, FaUserTie, FaPalette, FaHeart, FaRing, FaStar, FaCheck, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
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

  const handleWhatsAppClick = (serviceName) => {
    const phoneNumber = '+918219136254';
    const message = `Hi! I'm interested in your ${serviceName} service. Could you please provide more details and schedule a consultation?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 bg-boutique-secondary/30">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-boutique-textdark mb-6">
            My <span className="text-boutique-highlight">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-boutique-primary max-w-3xl mx-auto leading-relaxed font-light">
            Discover the art of traditional Himachali and Punjabi dress making. Each piece is crafted with passion,
            preserving cultural heritage while creating beautiful, authentic garments.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-boutique-primary font-serif mb-2">800+</div>
              <div className="text-sm sm:text-base text-boutique-textdark/70 font-medium">Garments Created</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-boutique-primary font-serif mb-2">98%</div>
              <div className="text-sm sm:text-base text-boutique-textdark/70 font-medium">Satisfaction Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-boutique-primary font-serif mb-2">15+</div>
              <div className="text-sm sm:text-base text-boutique-textdark/70 font-medium">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-boutique-primary font-serif mb-2">300+</div>
              <div className="text-sm sm:text-base text-boutique-textdark/70 font-medium">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-boutique-primary text-white shadow-lg transform scale-105'
                    : 'bg-boutique-secondary text-boutique-textdark hover:bg-boutique-accent/20 hover:shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-boutique-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {filteredServices.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg transition-all duration-500 transform overflow-hidden group"
                >
                  {/* Service Image */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="text-2xl sm:text-3xl text-boutique-primary" />
                        </div>
                        <div className="text-white">
                          <h3 className="text-lg sm:text-xl font-serif font-bold">{service.title}</h3>
                          <p className="text-sm sm:text-base font-medium opacity-90">{service.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 sm:p-8">
                    <p className="text-boutique-textdark leading-relaxed mb-6 font-light text-sm sm:text-base">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <FaCheck className="text-boutique-highlight flex-shrink-0 text-sm sm:text-base" />
                          <span className="text-boutique-textdark text-sm sm:text-base font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleWhatsAppClick(service.title)}
                      className="w-full bg-boutique-primary hover:bg-boutique-highlight text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Get Started</span>
                      <FaArrowRight className="text-sm transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-boutique-textdark mb-6">
              My <span className="text-boutique-highlight">Process</span>
            </h2>
            <div className="w-24 h-1 bg-boutique-highlight mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-boutique-primary max-w-3xl mx-auto leading-relaxed font-light">
              From consultation to delivery, every step is taken with care to ensure your satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, preferences, and requirements in detail.'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'I create a custom design plan tailored to your measurements and style.'
              },
              {
                step: '03',
                title: 'Crafting',
                description: 'Each piece is handcrafted with traditional techniques and modern precision.'
              },
              {
                step: '04',
                title: 'Fitting & Delivery',
                description: 'Multiple fittings ensure perfect fit, followed by careful packaging and delivery.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-boutique-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl sm:text-2xl group-hover:bg-boutique-highlight transition-colors duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-boutique-textdark mb-4">
                  {process.title}
                </h3>
                <p className="text-boutique-primary leading-relaxed font-light text-sm sm:text-base">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-boutique-textdark to-boutique-highlight text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Create Your Perfect Traditional Outfit?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
            Let me bring your vision to life with authentic designs that celebrate the beautiful cultural heritage of Himachal Pradesh and Punjab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="/contact"
              className="bg-white text-boutique-textdark hover:bg-boutique-secondary hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-500 font-semibold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg"
            >
              Start Your Custom Order
            </a>
            <button
              onClick={() => handleWhatsAppClick('services')}
              className="border-2 border-white text-white hover:bg-white hover:text-boutique-textdark hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-500 font-semibold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full flex items-center justify-center space-x-2"
            >
              <FaWhatsapp />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
