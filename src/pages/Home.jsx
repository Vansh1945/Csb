import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services limit={3} />
      <Portfolio limit={4} />
    </div>
  );
};

export default Home;
