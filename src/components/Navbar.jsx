import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleBookAppointment = () => {
    const phoneNumber = '+918219136254'; // Replace with actual phone number
    const message = 'Hi! I would like to book an appointment at Creative Stitching Boutique.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-heading">CS</span>
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-secondary-700">
                Creative Stitching
              </h1>
              <p className="text-xs text-secondary-500 -mt-1">Boutique</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                  location.pathname === link.path
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                    : 'text-secondary-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={handleBookAppointment}
              className="btn-primary flex items-center space-x-2"
            >
              <FaPhone className="text-sm" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-secondary-700 hover:text-primary-600 transition-colors duration-300"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block py-2 font-medium transition-colors duration-300 hover:text-primary-600 ${
                  location.pathname === link.path
                    ? 'text-primary-600 border-l-4 border-primary-600 pl-4'
                    : 'text-secondary-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                handleBookAppointment();
                closeMenu();
              }}
              className="btn-primary w-full flex items-center justify-center space-x-2 mt-4"
            >
              <FaPhone className="text-sm" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
