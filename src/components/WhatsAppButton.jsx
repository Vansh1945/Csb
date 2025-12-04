import React, { useState } from 'react';
import { FaWhatsapp, FaComment, FaTimes } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showChatOptions, setShowChatOptions] = useState(false);

  const chatOptions = [
    {
      text: "Hi! I'd like to know more about your traditional dresses",
      emoji: "👗"
    },
    {
      text: "I need custom stitching services",
      emoji: "✂️"
    },
    {
      text: "Can you help me with alterations?",
      emoji: "🪡"
    },
    {
      text: "I want to discuss bridal lehenga designs",
      emoji: "💍"
    }
  ];

  const handleWhatsAppClick = (customMessage = null) => {
    const phoneNumber = '+918580458907';
    const defaultMessage = 'Hi! I would like to know more about your dress services.';
    const message = customMessage || defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowChatOptions(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Options Panel */}
      {showChatOptions && (
        <div className="absolute bottom-20 right-0 mb-4 animate-scale-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-boutique-accent/20 p-4 w-80">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-boutique-secondary">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-white text-sm" />
                </div>
                <span className="font-semibold text-boutique-textdark">Quick Message</span>
              </div>
              <button
                onClick={() => setShowChatOptions(false)}
                className="text-boutique-textdark/60 hover:text-boutique-primary transition-colors"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>
            
            {/* Chat Options */}
            <div className="space-y-2">
              {chatOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(option.text)}
                  className="w-full text-left p-3 rounded-xl border border-boutique-secondary hover:border-boutique-primary hover:bg-boutique-secondary/50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{option.emoji}</span>
                    <span className="text-sm text-boutique-textdark group-hover:text-boutique-primary flex-1">
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Custom Message */}
            <button
              onClick={() => handleWhatsAppClick()}
              className="w-full mt-3 p-3 rounded-xl bg-boutique-secondary hover:bg-boutique-accent/20 border border-boutique-accent/30 transition-all duration-200 group"
            >
              <div className="flex items-center gap-2 justify-center">
                <FaComment className="text-boutique-primary text-sm" />
                <span className="text-sm font-medium text-boutique-textdark group-hover:text-boutique-primary">
                  Type custom message
                </span>
              </div>
            </button>
          </div>
          
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6">
            <div className="w-4 h-4 bg-white border-r border-b border-boutique-accent/20 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {showTooltip && !showChatOptions && (
        <div className="absolute bottom-20 right-0 mb-4 animate-fade-in">
          <div className="bg-boutique-primary text-white text-sm px-4 py-3 rounded-xl shadow-lg relative">
            <div className="flex items-center gap-2">
              <FaComment className="text-boutique-secondary" />
              <span className="font-medium">Need help? Chat with us!</span>
            </div>
            <div className="absolute -bottom-1 right-6">
              <div className="w-3 h-3 bg-boutique-primary transform rotate-45"></div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative">
        {/* Animated Ring */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        
        {/* Main Button */}
        <button
          onClick={() => setShowChatOptions(!showChatOptions)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group whatsapp-glow"
          aria-label="Contact us on WhatsApp"
        >
          {/* Icon with Animation */}
          {showChatOptions ? (
            <FaTimes size={24} className="transform transition-transform duration-300" />
          ) : (
            <FaWhatsapp size={28} className="transform group-hover:scale-110 transition-transform duration-300" />
          )}
          
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .whatsapp-glow {
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
        }
        .whatsapp-glow:hover {
          box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;