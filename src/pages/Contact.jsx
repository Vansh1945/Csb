import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+918219136254'; // Replace with actual phone number
    const message = 'Hi! I would like to get in touch with Creative Stitching Boutique.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-primary-600" />,
      title: 'Phone',
      details: ['+91 82191 36254', '+91 87654 32109'],
      action: () => window.open('tel:+918219136254')
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary-600" />,
      title: 'Email',
      details: ['info@creativestitching.com', 'orders@creativestitching.com'],
      action: () => window.open('mailto:info@creativestitching.com')
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-600" />,
      title: 'Address',
      details: ['123 Fashion Street, Designer Colony', 'Mumbai, Maharashtra 400001'],
      action: () => window.open('https://maps.google.com/?q=123+Fashion+Street+Mumbai')
    },
    {
      icon: <FaClock className="text-2xl text-primary-600" />,
      title: 'Working Hours',
      details: ['Mon - Sat: 10:00 AM - 8:00 PM', 'Sunday: 11:00 AM - 6:00 PM'],
      action: null
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-800 mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Get in touch with us for consultations, 
            inquiries, or to schedule an appointment.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`card text-center group ${info.action ? 'cursor-pointer hover:scale-105' : ''} transition-all duration-300`}
                onClick={info.action}
              >
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-secondary-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-4xl text-primary-600 mx-auto mb-4" />
                    <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-2">
                      Visit Our Boutique
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      123 Fashion Street, Designer Colony<br />
                      Mumbai, Maharashtra 400001
                    </p>
                    <button
                      onClick={() => window.open('https://maps.google.com/?q=123+Fashion+Street+Mumbai')}
                      className="btn-primary text-sm"
                    >
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-heading font-bold text-secondary-800 mb-6">
                  Quick Contact
                </h3>
                
                <div className="space-y-4">
                  {/* WhatsApp */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-secondary-800">WhatsApp</h4>
                      <p className="text-sm text-secondary-600">Chat with us instantly</p>
                    </div>
                  </button>

                  {/* Phone Call */}
                  <button
                    onClick={() => window.open('tel:+918219136254')}
                    className="w-full flex items-center space-x-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-secondary-800">Call Us</h4>
                      <p className="text-sm text-secondary-600">+91 82191 36254</p>
                    </div>
                  </button>

                  {/* Email */}
                  <button
                    onClick={() => window.open('mailto:info@creativestitching.com')}
                    className="w-full flex items-center space-x-4 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-secondary-800">Email Us</h4>
                      <p className="text-sm text-secondary-600">info@creativestitching.com</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-heading font-bold text-secondary-800 mb-6">
                  Follow Us
                </h3>
                
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaFacebook className="text-white text-xl" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <FaInstagram className="text-white text-xl" />
                  </a>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaWhatsapp className="text-white text-xl" />
                  </button>
                </div>
                
                <p className="text-sm text-secondary-600 mt-4">
                  Stay updated with our latest designs and offers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-3">
                How long does custom stitching take?
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed">
                Custom stitching typically takes 1-3 weeks depending on the complexity of the garment. 
                Bridal wear may take 4-6 weeks due to intricate detailing.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-3">
                Do you provide home visits for measurements?
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed">
                Yes, we offer home visit services for measurements within Mumbai city limits. 
                Additional charges may apply based on location.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-3">
                What is your alteration policy?
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed">
                We provide free minor alterations within 7 days of delivery. 
                Major alterations are charged separately based on the work required.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-3">
                Do you work with customer's own fabric?
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed">
                Absolutely! We welcome customers who bring their own fabrics. 
                We'll provide guidance on fabric requirements and care instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today and let's create something beautiful together!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 mx-auto"
          >
            <FaWhatsapp />
            <span>Start Conversation</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
