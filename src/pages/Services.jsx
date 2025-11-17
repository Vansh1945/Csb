import React, { useState } from 'react';
import { FaCut, FaUserTie, FaRing, FaPalette, FaHeart, FaStar, FaCheck, FaPhone } from 'react-icons/fa';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const services = [
    {
      id: 1,
      category: 'Custom Stitching',
      title: 'Custom Tailored Suits',
      description: 'Perfectly fitted suits made to your exact measurements and style preferences.',
      features: ['Premium fabrics', 'Perfect fit guarantee', 'Multiple fittings', 'Style consultation'],
      price: '₹8,000 - ₹25,000',
      duration: '2-3 weeks',
      icon: <FaUserTie className="text-3xl text-primary-600" />
    },
    {
      id: 2,
      category: 'Custom Stitching',
      title: 'Custom Dresses',
      description: 'Beautiful custom dresses for any occasion, designed just for you.',
      features: ['Custom design', 'Quality materials', 'Perfect fit', 'Color matching'],
      price: '₹3,000 - ₹15,000',
      duration: '1-2 weeks',
      icon: <FaPalette className="text-3xl text-primary-600" />
    },
    {
      id: 3,
      category: 'Alterations',
      title: 'Hemming & Adjustments',
      description: 'Professional hemming and basic alterations for the perfect fit.',
      features: ['Quick turnaround', 'Precise measurements', 'Quality stitching', 'Affordable pricing'],
      price: '₹200 - ₹800',
      duration: '1-3 days',
      icon: <FaCut className="text-3xl text-primary-600" />
    },
    {
      id: 4,
      category: 'Alterations',
      title: 'Resizing & Repairs',
      description: 'Expert resizing and repair services to give your garments new life.',
      features: ['Size adjustments', 'Damage repairs', 'Zipper replacement', 'Button fixing'],
      price: '₹300 - ₹1,500',
      duration: '2-5 days',
      icon: <FaHeart className="text-3xl text-primary-600" />
    },
    {
      id: 5,
      category: 'Bridal Wear',
      title: 'Bridal Lehengas',
      description: 'Stunning bridal lehengas with intricate embroidery and premium fabrics.',
      features: ['Heavy embroidery', 'Premium silk', 'Custom colors', 'Matching accessories'],
      price: '₹25,000 - ₹80,000',
      duration: '4-6 weeks',
      icon: <FaRing className="text-3xl text-primary-600" />
    },
    {
      id: 6,
      category: 'Bridal Wear',
      title: 'Bridal Sarees',
      description: 'Elegant bridal sarees with beautiful embellishments and perfect draping.',
      features: ['Silk fabrics', 'Gold work', 'Custom blouse', 'Draping service'],
      price: '₹15,000 - ₹50,000',
      duration: '3-4 weeks',
      icon: <FaStar className="text-3xl text-primary-600" />
    },
    {
      id: 7,
      category: 'Designer Wear',
      title: 'Party Dresses',
      description: 'Glamorous party dresses that make you stand out at any celebration.',
      features: ['Trendy designs', 'Quality fabrics', 'Perfect fit', 'Style consultation'],
      price: '₹4,000 - ₹20,000',
      duration: '1-2 weeks',
      icon: <FaPalette className="text-3xl text-primary-600" />
    },
    {
      id: 8,
      category: 'Designer Wear',
      title: 'Ethnic Wear',
      description: 'Traditional ethnic wear with modern touches for special occasions.',
      features: ['Traditional designs', 'Modern cuts', 'Quality fabrics', 'Custom embroidery'],
      price: '₹3,500 - ₹18,000',
      duration: '2-3 weeks',
      icon: <FaHeart className="text-3xl text-primary-600" />
    },
    {
      id: 9,
      category: 'Embroidery',
      title: 'Hand Embroidery',
      description: 'Exquisite hand embroidery work to enhance your garments.',
      features: ['Hand stitched', 'Custom patterns', 'Premium threads', 'Artistic designs'],
      price: '₹500 - ₹5,000',
      duration: '1-2 weeks',
      icon: <FaStar className="text-3xl text-primary-600" />
    },
    {
      id: 10,
      category: 'Embroidery',
      title: 'Machine Embroidery',
      description: 'Precise machine embroidery for consistent and detailed patterns.',
      features: ['Consistent quality', 'Complex patterns', 'Quick turnaround', 'Affordable pricing'],
      price: '₹300 - ₹2,000',
      duration: '3-7 days',
      icon: <FaCut className="text-3xl text-primary-600" />
    }
  ];

  const categories = ['All', 'Custom Stitching', 'Alterations', 'Bridal Wear', 'Designer Wear', 'Embroidery'];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleBookService = (serviceName) => {
    const phoneNumber = '+919876543210'; // Replace with actual phone number
    const message = `Hi! I'm interested in your ${serviceName} service. Could you please provide more details and schedule a consultation?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-800 mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed mb-8">
            From custom stitching to bridal wear, we offer comprehensive tailoring services 
            with exceptional quality and attention to detail.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 font-heading">500+</div>
              <div className="text-sm text-secondary-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 font-heading">24hr</div>
              <div className="text-sm text-secondary-600">Quick Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 font-heading">98%</div>
              <div className="text-sm text-secondary-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 font-heading">8+</div>
              <div className="text-sm text-secondary-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-8">
              Choose Your Service
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="card group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="text-center mb-6">
                  <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-700 mb-3 text-sm">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-secondary-600">
                        <FaCheck className="text-green-500 mr-2 flex-shrink-0" size={12} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Duration */}
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-secondary-500">Price Range:</span>
                    <span className="font-semibold text-accent-600">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Duration:</span>
                    <span className="font-semibold text-secondary-700">{service.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleBookService(service.title)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FaPhone size={14} />
                  <span>Book Consultation</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              From consultation to final delivery, we ensure a smooth and professional experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-2">
                Consultation
              </h3>
              <p className="text-secondary-600 text-sm">
                Discuss your requirements, style preferences, and get expert advice.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-2">
                Measurements
              </h3>
              <p className="text-secondary-600 text-sm">
                Precise measurements taken to ensure the perfect fit for your garment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-2">
                Creation
              </h3>
              <p className="text-secondary-600 text-sm">
                Expert craftsmanship brings your vision to life with attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-2">
                Delivery
              </h3>
              <p className="text-secondary-600 text-sm">
                Final fitting and delivery of your perfectly crafted garment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const phoneNumber = '+919876543210';
                const message = 'Hi! I would like to schedule a consultation for your services.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule Consultation
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Contact Info
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
