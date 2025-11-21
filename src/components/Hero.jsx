import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center max-w-4xl text-white">
        <h2 className="text-lg md:text-xl font-light mb-4 tracking-wide uppercase">
          Timeless Elegance Awaits
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to Our Boutique
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          Discover elegance, style, and timeless fashion pieces crafted for the discerning individual.
        </p>
        <button className="bg-boutique-highlight hover:bg-boutique-accent text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
