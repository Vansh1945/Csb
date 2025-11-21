import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />

      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-boutique-textdark mb-4 drop-shadow-sm">
              Get In <span className="text-boutique-highlight">Touch</span>
            </h2>
            <p className="text-base md:text-lg text-boutique-textdark/80 max-w-2xl mx-auto leading-relaxed">
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
