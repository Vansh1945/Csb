import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebook, FaInstagram, FaChevronDown } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918580458907';
    const message = 'Hi! I would like to get in touch with Creative Stitching Boutique.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: 'How long does custom stitching take?',
      answer: 'Custom stitching typically takes 1-3 weeks depending on the complexity of the garment. Bridal wear may take 4-6 weeks due to intricate detailing.'
    },
    {
      question: 'Do you provide home visits for measurements?',
      answer: 'Yes, we offer home visit services for measurements within Mumbai city limits. Additional charges may apply based on location.'
    },
    {
      question: 'What is your alteration policy?',
      answer: 'We provide free minor alterations within 7 days of delivery. Major alterations are charged separately based on the work required.'
    },
    {
      question: 'Do you work with customer\'s own fabric?',
      answer: 'Absolutely! We welcome customers who bring their own fabrics. We\'ll provide guidance on fabric requirements and care instructions.'
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-boutique-primary" />,
      title: 'Phone',
      details: ['+91 8580458907'],
      action: () => window.open('tel:+918580458907')
    },
    {
      icon: <FaEnvelope className="text-2xl text-boutique-primary" />,
      title: 'Email',
      details: ['jiwanjyoti712@gmail.com'],
      action: () => window.open('mailto:jiwanjyoti712@gmail.com')
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-boutique-primary" />,
      title: 'Address',
      details: ['Urban Phase 1, Jalandhar, Punjab'],
      action: () => window.open('https://maps.google.com')
    },
    {
      icon: <FaClock className="text-2xl text-boutique-primary" />,
      title: 'Hours',
      details: ['Mon-Sat: 10AM-8PM'],
      action: null
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-boutique-secondary via-boutique-accent/20 to-boutique-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="container-custom text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-boutique-textdark mb-6 leading-tight">
              Get in <span className="bg-gradient-to-r from-boutique-primary to-boutique-highlight bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl sm:text-2xl text-boutique-textdark/80 max-w-3xl mx-auto leading-relaxed font-light">
              Let's create something beautiful together. Reach out for consultations and custom designs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-500 p-8 border border-gray-100 hover:border-boutique-primary/20 ${info.action ? 'cursor-pointer hover:scale-105 hover:-translate-y-2' : ''}`}
                onClick={info.action}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-boutique-secondary to-boutique-accent/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {React.cloneElement(info.icon, { className: "text-3xl text-boutique-primary drop-shadow-sm" })}
                </div>
                <h3 className="text-xl font-heading font-bold text-boutique-textdark mb-4 group-hover:text-boutique-primary transition-colors">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-boutique-textdark/70 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Actions */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
                <ContactForm />
           
            </div>

            {/* Quick Actions & Map */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Map Section */}
              <div className="bg-gradient-to-br from-boutique-secondary to-boutique-accent/20 rounded-3xl shadow-xl overflow-hidden border border-boutique-secondary/20">
                <div className="h-72 flex items-center justify-center p-8">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-5xl text-boutique-primary mx-auto mb-6 drop-shadow-lg animate-pulse" />
                    <h3 className="text-2xl font-heading font-bold text-boutique-textdark mb-4">
                      Visit Our Boutique
                    </h3>
                    <p className="text-boutique-textdark/70 mb-6 text-lg leading-relaxed">
                      351 Urban Phase 1<br />
                      Jalandhar, Punjab 144005
                    </p>
                    <button
                      onClick={() => window.open('https://maps.google.com')}
                      className="bg-gradient-to-r from-boutique-primary to-boutique-highlight hover:from-boutique-highlight hover:to-boutique-primary text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                    >
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-heading font-bold text-boutique-textdark mb-8 text-center">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center space-x-4 p-5 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl transition-all duration-300 group hover:shadow-lg hover:scale-102"
                  >
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-boutique-textdark">WhatsApp</h4>
                      <p className="text-sm text-boutique-textdark/70">Instant chat</p>
                    </div>
                  </button>

                  <button
                    onClick={() => window.open('tel:+918580458907')}
                    className="w-full flex items-center space-x-4 p-5 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-300 group hover:shadow-lg hover:scale-102"
                  >
                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-boutique-textdark">Call Us</h4>
                      <p className="text-sm text-boutique-textdark/70">+91 8580458907</p>
                    </div>
                  </button>

                  <button
                    onClick={() => window.open('mailto:jiwanjyoti712@gmail.com')}
                    className="w-full flex items-center space-x-4 p-5 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl transition-all duration-300 group hover:shadow-lg hover:scale-102"
                  >
                    <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-boutique-textdark">Email Us</h4>
                      <p className="text-sm text-boutique-textdark/70">jiwanjyoti712@gmail.com</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-heading font-bold text-boutique-textdark mb-6 text-center">
                  Follow Us
                </h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-1"
                  >
                    <FaFacebook className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-1"
                  >
                    <FaInstagram className="text-white text-2xl" />
                  </a>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-1"
                  >
                    <FaWhatsapp className="text-white text-2xl" />
                  </button>
                </div>
                <p className="text-sm text-boutique-textdark/70 mt-6 text-center">
                  Stay updated with our latest designs and offers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-boutique-textdark mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-boutique-primary to-boutique-highlight bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-boutique-textdark/70 max-w-2xl mx-auto font-light">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-8 focus:outline-none focus:ring-2 focus:ring-boutique-primary/50 hover:bg-gray-50/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-semibold text-boutique-textdark pr-4">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                      <FaChevronDown className="text-boutique-primary text-xl flex-shrink-0" />
                    </div>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8">
                    <p className="text-boutique-textdark/70 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-boutique-primary via-boutique-highlight to-boutique-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto opacity-90 font-light">
              Contact us today and let's create something beautiful together!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-boutique-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center space-x-3 mx-auto text-lg"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Start Conversation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
