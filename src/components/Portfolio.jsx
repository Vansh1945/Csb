import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaTimes } from 'react-icons/fa';
import { portfolioItems, portfolioCategories } from '../data/portfolio';

const Portfolio = ({ limit, showTitle = true }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const allItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const filteredItems = limit ? allItems.slice(0, limit) : allItems;

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-light-bg font-poppins">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {(showTitle || !limit) && (
            <div className="text-center mb-16">
                {showTitle && (<>
                    <h2 className="text-4xl md:text-5xl font-bold text-boutique-textdark mb-4 transition-all duration-500 hover:text-boutique-primary">
                    Our <span className="text-boutique-primary transition-colors duration-500 hover:text-boutique-highlight">Portfolio</span>
                    </h2>
                    <p className="text-lg text-boutique-textdark/70 max-w-3xl mx-auto transition-all duration-500 hover:text-boutique-textdark/90">
                    Discover the elegance and craftsmanship of our bespoke creations. Each piece tells a story of passion and precision.
                    </p>
                </>)}

                {/* Category Filter */}
                {!limit && (
                    <div className={`flex flex-wrap justify-center gap-3 ${showTitle ? 'mt-10' : ''}`}>
                    {portfolioCategories.map((category) => (
                        <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-500 ease-out transform hover:scale-105 ${
                            activeCategory === category.id
                            ? 'bg-boutique-primary text-white shadow-md scale-105'
                            : 'bg-white text-boutique-textdark hover:bg-boutique-accent hover:text-white shadow-sm hover:shadow-md'
                        }`}
                        >
                        {category.name}
                        </button>
                    ))}
                    </div>
                )}
            </div>
        )}

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
              onClick={() => openModal(item)}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 50}ms`
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-bold text-white mb-1 transition-all duration-500 group-hover:translate-x-2">{item.title}</h3>
                  <p className="text-boutique-accent font-semibold transition-all duration-500 delay-100 group-hover:translate-x-2">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/80 text-boutique-primary p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-75 group-hover:scale-100 hover:bg-white hover:scale-110">
                  <FaEye size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {limit && (
          <div className="text-center mt-16 transition-all duration-500 hover:scale-105">
            <Link
              to="/portfolio"
              className="bg-boutique-primary hover:bg-boutique-highlight text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
            >
              Explore All Projects
            </Link>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-500 ease-out animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl transform scale-95 hover:scale-100 transition-transform duration-500 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center transition-all duration-500">
              <h3 className="text-3xl font-bold text-boutique-textdark mb-2 transition-colors duration-500 hover:text-boutique-primary">
                {selectedImage.title}
              </h3>
              <p className="text-boutique-primary font-semibold text-lg mb-4 transition-colors duration-500 hover:text-boutique-highlight">{selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}</p>
              <p className="text-boutique-textdark/80 leading-relaxed text-base transition-colors duration-500 hover:text-boutique-textdark">
                {selectedImage.description}
              </p>
              <div className="mt-6 transition-all duration-500 hover:scale-105">
                <Link
                  to="/contact"
                  className="bg-boutique-primary hover:bg-boutique-highlight text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-500 ease-out shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/80 text-boutique-primary p-3 rounded-full hover:bg-white transition-all duration-500 ease-out transform hover:scale-110 hover:rotate-90"
            >
              <FaTimes size={20} className="transition-transform duration-300"/>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;