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
      answer: 'Custom stitching typically takes 1-3 weeks depending on the complexity of the garment. Bridal wear may take 4-6 weeks due to intricate detailing and multiple fittings.'
    },
    {
      question: 'Do you provide home visits for measurements?',
      answer: 'Yes, we offer complimentary home visit services for measurements within Jalandhar city limits. For areas outside the city, nominal charges may apply based on distance.'
    },
    {
      question: 'What is your alteration policy?',
      answer: 'We provide free minor alterations within 7 days of delivery. Major alterations are charged separately based on the work required. We ensure perfect fit and customer satisfaction.'
    },
    {
      question: 'Do you work with customer\'s own fabric?',
      answer: 'Absolutely! We welcome customers who bring their own fabrics. We provide expert guidance on fabric requirements, pattern selection, and care instructions to ensure the best results.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, UPI payments, credit/debit cards, and bank transfers. For custom orders, we require a 50% advance with the balance due upon completion.'
    },
    {
      question: 'Do you offer emergency stitching services?',
      answer: 'Yes, we provide emergency stitching services for urgent occasions with express turnaround times. Additional charges may apply for expedited services.'
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      details: ['+91 8580458907'],
      subtitle: 'Call us directly',
      action: () => window.open('tel:+918580458907')
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      details: ['jiwanjyoti712@gmail.com'],
      subtitle: 'Send us an email',
      action: () => window.open('mailto:jiwanjyoti712@gmail.com')
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Address',
      details: ['Urban Phase 1', 'Jalandhar, Punjab'],
      subtitle: 'Visit our boutique',
      action: () => window.open('https://maps.google.com/maps?q=Urban+Phase+1+Jalandhar+Punjab')
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Working Hours',
      details: ['Mon - Sat: 10:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      subtitle: 'We\'re here for you',
      action: null
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-boutique-light-bg">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-boutique-secondary to-boutique-light-bg border-b border-boutique-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-boutique-textdark mb-6">
              Contact <span className="text-boutique-primary">Us</span>
            </h1>
            <p className="text-lg text-boutique-textdark/80 max-w-3xl mx-auto">
              Let's create something beautiful together. Reach out for consultations, custom designs, 
              and expert tailoring services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                onClick={handleWhatsAppClick}
                className="bg-boutique-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-boutique-highlight text-sm flex items-center gap-2"
              >
                <FaWhatsapp className="text-base" />
                Chat on WhatsApp
              </button>
              <button
                onClick={() => window.open('tel:+918580458907')}
                className="border border-boutique-primary text-boutique-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-boutique-primary hover:text-white text-sm"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-12 bg-white border-b border-boutique-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-boutique-light-bg rounded-xl p-6 border border-boutique-secondary/10 hover:border-0 transition-all duration-300 ${
                  info.action ? 'cursor-pointer hover:shadow-lg' : ''
                }`}
                onClick={info.action}
              >
                <div className="w-12 h-12 bg-boutique-accent/10 rounded-full flex items-center justify-center mb-4">
                  <div className="text-boutique-primary">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-boutique-textdark mb-2">
                  {info.title}
                </h3>
                <p className="text-boutique-textdark/70 text-sm mb-4">
                  {info.subtitle}
                </p>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-boutique-textdark font-medium text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="py-16 bg-boutique-light-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 border border-boutique-secondary/10">
                <h2 className="text-3xl font-bold text-boutique-textdark mb-6 text-center">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar with Additional Info */}
            <div className="space-y-6">
              {/* Boutique Address */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-boutique-secondary/10">
                <div className="text-center">
                  <div className="w-12 h-12 bg-boutique-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMapMarkerAlt className="text-xl text-boutique-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-boutique-textdark mb-3">
                    Boutique Address
                  </h3>
                  <p className="text-boutique-textdark/70 mb-4 text-sm leading-relaxed">
                    Urban Phase 1<br />
                    Jalandhar, Punjab 144005<br />
                    India
                  </p>
                  <button
                    onClick={() => window.open('https://maps.google.com/maps?q=Urban+Phase+1+Jalandhar+Punjab')}
                    className="w-full bg-boutique-primary text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-boutique-highlight text-sm"
                  >
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-boutique-secondary/10">
                <h3 className="text-lg font-bold text-boutique-textdark mb-4 text-center">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-white text-lg" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-boutique-textdark text-sm">WhatsApp</h4>
                      <p className="text-xs text-boutique-textdark/70">Quick response</p>
                    </div>
                  </button>

                  <button
                    onClick={() => window.open('tel:+918580458907')}
                    className="w-full flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-boutique-primary rounded-full flex items-center justify-center">
                      <FaPhone className="text-white text-lg" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-boutique-textdark text-sm">Call Now</h4>
                      <p className="text-xs text-boutique-textdark/70">Direct call</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-boutique-secondary/10">
                <h3 className="text-lg font-bold text-boutique-textdark mb-4 text-center">
                  Follow Us
                </h3>
                <div className="flex justify-center gap-4 mb-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-boutique-primary rounded-full flex items-center justify-center hover:bg-boutique-highlight transition-all duration-300"
                  >
                    <FaFacebook className="text-white text-lg" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-boutique-primary to-boutique-accent rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300"
                  >
                    <FaInstagram className="text-white text-lg" />
                  </a>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300"
                  >
                    <FaWhatsapp className="text-white text-lg" />
                  </button>
                </div>
                <p className="text-center text-boutique-textdark/70 text-sm">
                  See our latest designs and creations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-b border-boutique-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-boutique-textdark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-boutique-textdark/70 max-w-2xl mx-auto text-sm">
              Find quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-boutique-light-bg rounded-lg border border-boutique-secondary/10 hover:border-boutique-accent transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-boutique-textdark pr-4 text-sm">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                      <FaChevronDown className="text-boutique-primary text-xs" />
                    </div>
                  </div>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4">
                    <div className="h-px bg-boutique-accent/30 mb-3"></div>
                    <p className="text-boutique-textdark/70 text-sm">
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
      <section className="py-16 bg-gradient-to-r from-boutique-primary to-boutique-highlight text-white border-b border-boutique-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create Your Perfect Outfit?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contact us today for a free consultation and let's bring your fashion vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-boutique-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-boutique-secondary flex items-center justify-center gap-2 text-sm"
              >
                <FaWhatsapp />
                <span>Start on WhatsApp</span>
              </button>
              <button
                onClick={() => window.open('tel:+918580458907')}
                className="border border-white text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-boutique-primary text-sm"
              >
                Call for Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;