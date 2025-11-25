import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaTimes, FaArrowRight } from 'react-icons/fa';
import { portfolioItems, portfolioCategories } from '../data/portfolio';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [imageLoaded, setImageLoaded] = useState({});

  const allItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-boutique-secondary to-boutique-light-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-boutique-textdark mb-4">
              Our <span className="text-boutique-primary">Portfolio</span>
            </h1>
            <p className="text-base sm:text-lg text-boutique-textdark/80 max-w-2xl mx-auto">
              Discover the artistry and precision behind every stitch. Explore our collection of bespoke creations.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Categories - Smaller */}
      <section className="py-6 bg-white border-b border-boutique-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category.id
                    ? 'bg-boutique-primary text-white border-boutique-primary'
                    : 'bg-white text-boutique-textdark border-boutique-primary/30 hover:bg-boutique-primary hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery - Responsive: 4 on laptop, 2 on tablet, 1 on mobile */}
      <section className="py-12 bg-boutique-light-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {allItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                onClick={() => openModal(item)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-boutique-secondary">
                  <div className={`relative h-48 sm:h-56 overflow-hidden ${!imageLoaded[item.id] ? 'animate-pulse bg-boutique-secondary' : ''}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        imageLoaded[item.id] 
                          ? 'group-hover:scale-105 opacity-100' 
                          : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(item.id)}
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-boutique-textdark/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-sm font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-boutique-accent text-xs font-semibold">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </p>
                    </div>
                    
                    {/* View Icon */}
                    <div className="absolute top-2 right-2 bg-white/90 text-boutique-primary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <FaEye size={14} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="text-sm font-bold text-boutique-textdark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-boutique-primary text-xs font-semibold mb-2">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </p>
                  <p className="text-boutique-textdark/70 text-xs line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {allItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-boutique-primary text-4xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-boutique-textdark mb-2">No projects found</h3>
              <p className="text-boutique-textdark/70 text-sm">We're working on new creations in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-boutique-primary to-boutique-highlight text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Create Your Masterpiece?
            </h2>
            <p className="text-sm md:text-base mb-6 opacity-90">
              Let's collaborate to bring your vision to life with our expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="bg-white text-boutique-primary font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-boutique-secondary transition-all duration-300 text-sm"
              >
                Start Your Project
                <FaArrowRight className="text-xs" />
              </Link>
              <button
                onClick={() => window.open('tel:+918580458907')}
                className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-boutique-primary transition-all duration-300 text-sm"
              >
                Call for Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-64 sm:h-80 bg-boutique-secondary relative overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                <div className="mb-3">
                  <span className="inline-block bg-boutique-primary/10 text-boutique-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-boutique-textdark mb-3">
                  {selectedImage.title}
                </h3>
                
                <p className="text-boutique-textdark/80 text-sm mb-4">
                  {selectedImage.description}
                </p>

                {selectedImage.features && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-boutique-textdark mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {selectedImage.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-boutique-textdark/70 text-xs">
                          <span className="w-1.5 h-1.5 bg-boutique-accent rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    to="/contact"
                    className="flex-1 bg-boutique-primary hover:bg-boutique-highlight text-white text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm"
                  >
                    Book Consultation
                  </Link>
                  <button
                    onClick={closeModal}
                    className="flex-1 border border-boutique-primary text-boutique-primary hover:bg-boutique-primary hover:text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white/90 hover:bg-white text-boutique-primary p-2 rounded-full transition-all duration-300"
            >
              <FaTimes size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;