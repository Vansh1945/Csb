import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import logo from '../assets/csblogo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleBookAppointment = () => {
    navigate('/contact');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];



  return (
    <nav className={`fixed w-full z-50 bg-white transition-all duration-300 ${
      isScrolled ? 'shadow-lg py-2' : 'backdrop-blur-sm py-4'
    }`}>
      <div className="container-custom">
        {/* Mobile: Logo on left, Menu button on right */}
        <div className="md:hidden flex justify-between items-center">
          <Link to="/" className="flex items-center justify-start ml-4" onClick={closeMenu}>
            <img src={logo} alt="Creative Stitching Boutique Logo" className="w-24 h-12 rounded-lg" />
          </Link>
          <div className="flex-1"></div> {/* Spacer */}
          <div className="flex justify-end mr-4">
            <button
              onClick={toggleMenu}
              className="text-boutique-textdark hover:text-boutique-primary transition-colors duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop: Logo on left, Nav center, Button on right */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 ml-4" onClick={closeMenu}>
            <img src={logo} alt="Creative Stitching Boutique Logo" className="w-24 h-12 rounded-lg ml-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-300 hover:text-boutique-primary ${
                  location.pathname === link.path
                    ? 'text-boutique-primary border-b-2 border-boutique-primary pb-1'
                    : 'text-boutique-textdark'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button
            onClick={handleBookAppointment}
            className="bg-boutique-primary hover:bg-boutique-highlight text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2 mr-4"
          >
            <FaPhone className="text-sm" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block py-2 font-medium transition-colors duration-300 hover:text-boutique-primary ${
                  location.pathname === link.path
                    ? 'text-boutique-primary border-l-4 border-boutique-primary pl-4'
                    : 'text-boutique-textdark'
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
              className="bg-boutique-primary hover:bg-boutique-highlight text-white w-full flex items-center justify-center mr-8 space-x-2 mt-4 px-4 py-2 rounded-lg font-medium transition-colors duration-300"
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
