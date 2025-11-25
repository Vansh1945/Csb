import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCut, FaPaperPlane, FaCheck,  FaChevronDown } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    'Custom Stitching',
    'Himachali Traditional Dresses',
    'Punjabi Phulkari Suits',
    'Designer Plazo Suits',
    'Bridal Lehengas',
    'Alterations & Fitting',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.serviceType) {
      toast.error("❌ Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        "service-type": formData.serviceType,
        phone: formData.phone,
        createdAt: Timestamp.now()
      });

      toast.success("🎉 Message Sent Successfully! We'll get back to you soon.");
      
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceType: '',
          message: ''
        });
      }, 1000);
      
    } catch (error) {
      console.error("Error sending message: ", error);
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      {/* Form Container */}
      <div className="bg-boutique-light-bg rounded-xl p-6 shadow-lg border border-boutique-accent/20">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-boutique-primary rounded-xl flex items-center justify-center mx-auto mb-3">
            <FaPaperPlane className="text-white text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-boutique-textdark mb-2">
            Contact Us
          </h3>
          <p className="text-boutique-textdark/70 text-sm">
            Get in touch for custom clothing and alterations
          </p>
        </div>

        <form onSubmit={submitForm} className="space-y-4">
          {/* Two Column Layout for Name and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-boutique-textdark mb-1">
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-boutique-primary" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-boutique-accent/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-boutique-primary focus:border-boutique-primary"
                  placeholder="Your name"
                />
                {formData.name && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                    <FaCheck className="text-xs" />
                  </div>
                )}
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-boutique-textdark mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-boutique-primary" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-boutique-accent/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-boutique-primary focus:border-boutique-primary"
                  placeholder="Your phone number"
                />
                {formData.phone && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                    <FaCheck className="text-xs" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-boutique-textdark mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-boutique-primary" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-boutique-accent/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-boutique-primary focus:border-boutique-primary"
                placeholder="Your email"
              />
              {formData.email && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                  <FaCheck className="text-xs" />
                </div>
              )}
            </div>
          </div>

          {/* Service Type Field */}
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-boutique-textdark mb-1">
              Service Type *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCut className="text-boutique-primary" />
              </div>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border border-boutique-accent/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-boutique-primary focus:border-boutique-primary appearance-none cursor-pointer"
              >
                <option value="">Select a service</option>
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-boutique-primary pointer-events-none">
                <FaChevronDown className="text-xs" />
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-boutique-textdark mb-1">
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-boutique-accent/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-boutique-primary focus:border-boutique-primary resize-vertical"
                placeholder="Tell us about your requirements..."
              />
              {formData.message && (
                <div className="absolute right-3 top-2 text-green-500">
                  <FaCheck className="text-xs" />
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-2 px-6 rounded-lg font-medium text-white transition-colors ${
                isSubmitting
                  ? 'bg-boutique-accent cursor-not-allowed'
                  : 'bg-boutique-primary hover:bg-boutique-highlight'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-xs" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>

          {/* Privacy Note */}
          <div className="text-center pt-3 border-t border-boutique-accent/20">
            <p className="text-xs text-boutique-textdark/60">
              We'll contact you within 24 hours
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;