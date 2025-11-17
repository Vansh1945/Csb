import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+918219136254'; // Replace with actual phone number
    const message = 'Hi! I would like to know more about your traditional dress services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 whatsapp-pulse"
        aria-label="Contact me on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-secondary-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chat with me on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-secondary-800"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
