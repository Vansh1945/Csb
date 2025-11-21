import React, { useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';
import { portfolioItems, portfolioCategories } from '../data/portfolio';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="section-padding bg-white font-heading relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-boutique-textdark mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-boutique-textdark/70 max-w-2xl mx-auto mb-8">
            Explore our collection of beautifully crafted garments that showcase
            our expertise and attention to detail.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-boutique-primary text-white shadow-lg'
                    : 'bg-boutique-accent text-boutique-textdark hover:bg-boutique-secondary hover:text-boutique-primary'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200 mb-2">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                  <button
                    onClick={() => openModal(item)}
                    className="flex items-center space-x-2 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <FaEye size={12} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-heading font-bold text-boutique-textdark mb-4">
            Ready to Create Your Dream Outfit?
          </h3>
          <p className="text-boutique-textdark/70 mb-6 max-w-2xl mx-auto">
            Let us bring your vision to life with our expert craftsmanship and attention to detail.
          </p>
          <button
            onClick={() => {
              const phoneNumber = '+919876543210';
              const message = 'Hi! I would like to discuss creating a custom outfit.';
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-boutique-primary hover:bg-boutique-highlight text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-heading font-bold text-boutique-textdark mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-boutique-highlight font-medium mb-3">{selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}</p>
              <p className="text-boutique-textdark/80 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
