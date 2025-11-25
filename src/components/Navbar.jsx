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
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-white py-4'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="flex md:hidden justify-between items-center w-full">
          <Link 
            to="/" 
            className="flex items-center flex-shrink-0" 
            onClick={closeMenu}
          >
            <img 
              src={logo} 
              alt="Creative Stitching Boutique Logo" 
              className="w-20 h-10 md:w-24 md:h-12 rounded-lg" 
            />
          </Link>
          
          <button
            onClick={toggleMenu}
            className="text-boutique-textdark hover:text-boutique-primary transition-colors duration-300 p-2 rounded-lg hover:bg-boutique-accent/20"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center w-full">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center flex-shrink-0"
            onClick={closeMenu}
          >
            <img 
              src={logo} 
              alt="Creative Stitching Boutique Logo" 
              className="w-24 h-12 lg:w-28 lg:h-14 rounded-lg" 
            />
          </Link>

          {/* Navigation Links - Centered */}
          <div className="flex items-center justify-center space-x-6 lg:space-x-8 mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-sm lg:text-base transition-all duration-300 hover:text-boutique-primary whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-boutique-primary border-b-2 border-boutique-primary pb-1'
                    : 'text-boutique-textdark hover:scale-105'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleBookAppointment}
              className="bg-boutique-primary hover:bg-boutique-highlight text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 lg:space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm lg:text-base"
            >
              <FaPhone className="text-xs lg:text-sm" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}>
          <div className="bg-white rounded-lg shadow-lg border border-boutique-accent/20">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block py-3 px-6 font-medium transition-all duration-300 hover:bg-boutique-accent/20 rounded-lg mx-2 ${
                    location.pathname === link.path
                      ? 'text-boutique-primary bg-boutique-accent/30 border-l-4 border-boutique-primary'
                      : 'text-boutique-textdark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="px-4 pt-2 pb-2">
                <button
                  onClick={() => {
                    handleBookAppointment();
                    closeMenu();
                  }}
                  className="bg-boutique-primary hover:bg-boutique-highlight text-white w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                >
                  <FaPhone className="text-xs" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;