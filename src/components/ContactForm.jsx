import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCut, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
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
    setIsSubmitting(true);

    try {
      // Save to Firestore to trigger email notification via Cloud Function
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        "service-type": formData.serviceType,
        phone: formData.phone,
        createdAt: Timestamp.now()
      });

      toast.success("Message Sent Successfully!");
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending message: ", error);
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <>
      <ToastContainer />
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary-800 mb-2">
            Get In Touch
          </h3>
          <p className="text-secondary-600">
            Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={submitForm} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-secondary-400" size={16} />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhone className="text-secondary-400" size={16} />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="text-secondary-400" size={16} />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Service Type Field */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-secondary-700 mb-2">
            Service Type *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaCut className="text-secondary-400" size={16} />
            </div>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 appearance-none bg-white"
            >
              <option value="">Select a service</option>
              {serviceTypes.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-vertical"
            placeholder="Tell us about your requirements, preferred timeline, budget, or any specific details..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-accent-500 hover:bg-accent-600 transform hover:-translate-y-1'
          } text-white shadow-lg hover:shadow-xl`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <FaPaperPlane size={16} />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Privacy Note */}
        <p className="text-xs text-secondary-500 text-center">
          By submitting this form, you agree to my privacy policy.
          I'll only use your information to respond to your inquiry.
        </p>
      </form>
    </div>
    </>
  );
};

export default ContactForm;
