import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaClock } from 'react-icons/fa';
import logo from '../assets/csblogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918580458907'; // Replace with actual phone number
    const message = 'Hi! I have a question about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-white text-boutique-textdark shadow-lg">
      <div className="container-custom pt-16 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="CSB Logo" className="w-16 h-16 object-contain rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-boutique-primary">Creative Stitching Boutique</h3>
                <p className="text-sm text-boutique-textdark/70 -mt-1">Traditional Dresses</p>
              </div>
            </div>
            <p className="text-boutique-textdark/80 text-sm leading-relaxed">
              Your trusted partner for traditional Himachali & Punjabi dresses, custom stitching, and alterations.
              Creating beautiful cultural garments with precision and care since 2002.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-boutique-textdark/60 hover:text-boutique-highlight transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-boutique-textdark/60 hover:text-boutique-highlight transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="text-boutique-textdark/60 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
              >
                <FaWhatsapp size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-heading font-semibold text-boutique-primary border-b border-boutique-primary/20 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-boutique-textdark/80 hover:text-boutique-highlight transition-colors duration-300 text-base font-medium transform hover:translate-x-2 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-boutique-textdark/80 hover:text-boutique-highlight transition-colors duration-300 text-base font-medium transform hover:translate-x-2 inline-block">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-boutique-textdark/80 hover:text-boutique-highlight transition-colors duration-300 text-base font-medium transform hover:translate-x-2 inline-block">
                  My Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-boutique-textdark/80 hover:text-boutique-highlight transition-colors duration-300 text-base font-medium transform hover:translate-x-2 inline-block">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-boutique-primary">My Services</h4>
            <ul className="space-y-2 text-sm text-boutique-textdark/80">
              <li className="hover:text-boutique-highlight transition-colors duration-300">Custom Stitching</li>
              <li className="hover:text-boutique-highlight transition-colors duration-300">Himachali Traditional Dresses</li>
              <li className="hover:text-boutique-highlight transition-colors duration-300">Punjabi Phulkari Suits</li>
              <li className="hover:text-boutique-highlight transition-colors duration-300">Designer Plazo Suits</li>
              <li className="hover:text-boutique-highlight transition-colors duration-300">Bridal Lehengas</li>
              <li className="hover:text-boutique-highlight transition-colors duration-300">Alterations & Fitting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-heading font-semibold text-boutique-primary border-b border-boutique-primary/20 pb-2">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-boutique-highlight mt-1 flex-shrink-0" size={18} />
                <p className="text-boutique-textdark/80 text-base leading-relaxed">
                  351 Urban Phase 1,<br />
                  Jalandhar, Punjab 144005
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-boutique-highlight flex-shrink-0" size={18} />
                <a href="tel:+918580458907" className="text-boutique-textdark/80 hover:text-boutique-highlight transition-colors duration-300 text-base font-medium">
                  +91 8580458907
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-boutique-highlight flex-shrink-0" size={18} />
                <a href="mailto:jiwanjyoti.dresses@gmail.com" className="text-boutique-textdark/80 hover:text-boutique-highlight transition-colors duration-300 text-base font-medium">
                  jiwanjyoti712@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-4">
                <FaClock className="text-boutique-highlight mt-1 flex-shrink-0" size={18} />
                <div className="text-boutique-textdark/80 text-base leading-relaxed">
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-boutique-primary/20 mt-4 pt-4 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-boutique-textdark/70 text-base font-medium">
              © {currentYear} Jiwan Jyoti Traditional Dresses. All rights reserved.
            </p>
            <div className="flex space-x-8 text-base">
              <button className="text-boutique-textdark/70 hover:text-boutique-highlight transition-colors duration-300 bg-transparent border-none cursor-pointer font-medium">
                Privacy Policy
              </button>
              <button className="text-boutique-textdark/70 hover:text-boutique-highlight transition-colors duration-300 bg-transparent border-none cursor-pointer font-medium">
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
