import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-800 mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Ready to create your perfect outfit? Contact us today and let's bring your vision to life.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
