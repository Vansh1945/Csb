import React from 'react';
import { FaPhone, FaArrowRight } from 'react-icons/fa';

const Hero = () => {

  const handleBookAppointment = () => {
    const phoneNumber = '+918219136254'; // Replace with actual phone number
    const message = 'Hi! I would like to book an appointment with Jiwan Jyoti for traditional dress stitching.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Beautiful Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Traditional Himachali and Punjabi dresses"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 via-white/80 to-accent-50/90"></div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full opacity-60 animate-bounce-gentle shadow-2xl transform hover:scale-110 transition-transform duration-300"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-accent-200 to-accent-400 rounded-full opacity-60 animate-bounce-gentle animation-delay-400 shadow-xl transform hover:scale-110 transition-transform duration-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full opacity-40 animate-bounce-gentle animation-delay-200 shadow-lg transform hover:scale-110 transition-transform duration-300"></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-accent-300 to-accent-500 rounded-full opacity-30 animate-pulse shadow-xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-50 animate-bounce animation-delay-600 shadow-lg"></div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/10 to-transparent animate-pulse"></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-secondary-800 mb-6 animate-fade-in">
            Jiwan Jyoti
            <span className="text-gradient block">Traditional Dresses</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Celebrating the rich cultural heritage of Himachal Pradesh and Punjab through authentic traditional dresses. 
            I create beautiful custom garments with traditional craftsmanship and modern precision.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up animation-delay-200">
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <span className="text-sm font-medium text-secondary-700">🏔️ Himachali Dresses</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <span className="text-sm font-medium text-secondary-700">🌾 Punjabi Phulkari</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <span className="text-sm font-medium text-secondary-700">👗 Designer Plazo</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <span className="text-sm font-medium text-secondary-700">💍 Bridal Lehengas</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            <button
              onClick={handleBookAppointment}
              className="btn-primary flex items-center space-x-2 text-lg px-8 py-4 hover:transform hover:scale-105 transition-all duration-300"
            >
              <FaPhone className="text-sm" />
              <span>Book Consultation</span>
            </button>
            <button
              onClick={scrollToServices}
              className="btn-outline flex items-center space-x-2 text-lg px-8 py-4 hover:transform hover:scale-105 transition-all duration-300"
            >
              <span>View My Services</span>
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 font-heading">300+</div>
              <div className="text-sm text-secondary-600 mt-1">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 font-heading">15+</div>
              <div className="text-sm text-secondary-600 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 font-heading">800+</div>
              <div className="text-sm text-secondary-600 mt-1">Dresses Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 font-heading">100%</div>
              <div className="text-sm text-secondary-600 mt-1">Cultural Authenticity</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
