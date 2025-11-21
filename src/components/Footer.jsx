import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918219136254'; // Replace with actual phone number
    const message = 'Hi! I have a question about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-heading">JJ</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Jiwan Jyoti</h3>
                <p className="text-sm text-gray-300 -mt-1">Traditional Dresses</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for traditional Himachali & Punjabi dresses, custom stitching, and alterations. 
              Creating beautiful cultural garments with precision and care since 2009.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <FaWhatsapp size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm">
                  My Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">My Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Custom Stitching</li>
              <li>Himachali Traditional Dresses</li>
              <li>Punjabi Phulkari Suits</li>
              <li>Designer Plazo Suits</li>
              <li>Bridal Lehengas</li>
              <li>Alterations & Fitting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" size={16} />
                <p className="text-gray-300 text-sm">
                  123 Fashion Street, Designer Colony,<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400 flex-shrink-0" size={16} />
                <a href="tel:+918219136254" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm">
                  +91 82191 36254
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0" size={16} />
                <a href="mailto:jiwanjyoti.dresses@gmail.com" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm">
                  jiwanjyoti.dresses@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-primary-400 mt-1 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jiwan Jyoti Traditional Dresses. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-primary-400 transition-colors duration-300 bg-transparent border-none cursor-pointer">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-primary-400 transition-colors duration-300 bg-transparent border-none cursor-pointer">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
