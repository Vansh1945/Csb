import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';

const images = [image1, image2, image3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Trigger fade-in animation
    setIsVisible(true);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Dark Overlay with fade effect */}
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}></div>
      
      <div className="relative z-10 text-center max-w-4xl text-white">
        {/* Main Title with fade-in up animation */}
        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to Our Boutique
          </h1>
        </div>

        {/* Description with fade-in up animation */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Discover elegance, style, and timeless fashion pieces crafted for the discerning individual.
          </p>
        </div>

        {/* CTA Button with scale and fade animation */}
        <div className={`transition-all duration-700 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
        }`}>
          <Link
            to="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book an Appointment
          </Link>
        </div>

        {/* Scroll Indicator with bounce animation */}
        <div className={`mt-16 transition-all duration-700 delay-800 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm">Explore More</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth background transition overlay */}
      <div 
        className="absolute inset-0 bg-white opacity-0 transition-opacity duration-1000"
        style={{ 
          opacity: currentImageIndex % 2 === 0 ? 0 : 0,
          animation: 'fadeOut 1s ease-in-out'
        }}
      ></div>
    </section>
  );
};

export default Hero;