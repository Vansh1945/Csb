import React, { useEffect, useState } from 'react';
import { FaUsers, FaLightbulb, FaRocket, FaBullseye, FaHeart, FaAward, FaStar } from 'react-icons/fa';
import about from '../assets/about.png';
import founder from '../assets/ceo.png';

// Custom hook for count-up animation
const useCountUp = (end, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }
  }, [startOnView]);

  const startAnimation = () => {
    if (hasStarted) return;
    setHasStarted(true);
  };

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return { count, startAnimation };
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Count-up animations for stats
  const projectsCount = useCountUp(200, 1800, isVisible);
  const clientsCount = useCountUp(50, 1200, isVisible);
  const experienceCount = useCountUp(15, 1000, isVisible);
  const satisfactionCount = useCountUp(99, 1500, isVisible);

  const teamMembers = [
    {
      name: 'Jyoti',
      role: 'CEO & Founder',
      image: founder,
      bio: `Creative Stitching Boutique is very close to my heart.
With the art, hard work and experience I have learned throughout my life,
This boutique has been created.
Every customer is like family to me,
And I prepare every outfit with the same care and perfection
Like for yourself.

I believe right fitting and right design
Gives women a different confidence,
And it is in this spirit that I create every piece.
I try to give handcrafted perfection.`
    }
  ];

  const principles = [
    {
      icon: <FaHeart className="text-3xl text-boutique-primary" />,
      title: 'Craftsmanship',
      description: 'Every stitch tells a story of dedication and attention to detail in creating beautiful, lasting garments.'
    },
    {
      icon: <FaUsers className="text-3xl text-boutique-primary" />,
      title: 'Client-Centric',
      description: 'Our clients are our priority. We listen carefully to create outfits that reflect their unique personality and style.'
    },
    {
      icon: <FaAward className="text-3xl text-boutique-primary" />,
      title: 'Excellence',
      description: 'We are committed to delivering premium quality stitching with perfect finishing and comfortable fabrics.'
    },
    {
      icon: <FaStar className="text-3xl text-boutique-primary" />,
      title: 'Perfection',
      description: 'Every outfit is treated as a work of art, where design, comfort and finishing come together perfectly.'
    }
  ];

  const stats = [
    { number: `${projectsCount.count}+`, label: 'Outfits Created' },
    { number: `${clientsCount.count}+`, label: 'Happy Clients' },
    { number: `${experienceCount.count}+`, label: 'Years Experience' },
    { number: `${satisfactionCount.count}%`, label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-boutique-light-bg">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-boutique-secondary to-boutique-light-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-boutique-textdark mb-6">
              About <span className="text-boutique-primary">Creative Stitching</span>
            </h1>
            <p className="text-lg text-boutique-textdark/80 max-w-3xl mx-auto">
              Where traditional craftsmanship meets modern elegance. We create beautiful, perfectly fitted outfits 
              that celebrate your unique style and personality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/contact"
                className="bg-boutique-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-boutique-highlight text-sm"
              >
                Book Consultation
              </a>
              <a
                href="/portfolio"
                className="border border-boutique-primary text-boutique-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-boutique-primary hover:text-white text-sm"
              >
                View Our Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Count-up Animation */}
      <section className="py-12 bg-boutique-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boutique Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={about}
                  alt="Creative Stitching Boutique craftsmanship"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 bg-boutique-accent/20 rounded-xl -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-boutique-textdark">
                Our Boutique Story
              </h2>
              <div className="space-y-4 text-boutique-textdark/80">
                <p>
                  Creative Stitching Boutique began in a small room with a single sewing machine and a big dream. 
                  The vision was simple yet powerful: every woman deserves to wear outfits with perfect fitting, 
                  beautiful finishing, and premium quality.
                </p>
                <p>
                  Through years of hard work, creativity, and dedication, Creative Stitching Boutique has become 
                  a name synonymous with love, artistry, and finesse in every design.
                </p>
                <p className="font-semibold text-boutique-primary">
                  Today, Creative Stitching Boutique is more than just a boutique—it's a promise that every woman 
                  deserves to look beautiful, and perfect stitching enhances that beauty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-boutique-light-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Statement */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-boutique-secondary/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-boutique-accent/10 rounded-full flex items-center justify-center">
                  <FaBullseye className="text-xl text-boutique-accent" />
                </div>
                <h2 className="text-2xl font-bold text-boutique-textdark">Our Mission</h2>
              </div>
              <p className="text-boutique-textdark/80 mb-6 text-sm">
                "To provide every woman with perfectly stitched, premium quality outfits that reflect her identity and personality."
              </p>
              <div className="space-y-2">
                {[
                  "High-quality stitching",
                  "Custom fitting & measurements", 
                  "Designer-level finishing",
                  "Comfortable & elegant outfits",
                  "100% customer satisfaction"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-boutique-primary rounded-full"></div>
                    <span className="text-boutique-textdark/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vision Statement */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-boutique-secondary/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-boutique-primary/10 rounded-full flex items-center justify-center">
                  <FaLightbulb className="text-xl text-boutique-primary" />
                </div>
                <h2 className="text-2xl font-bold text-boutique-textdark">Our Vision</h2>
              </div>
              <p className="text-boutique-textdark/80 mb-6 text-sm">
                "To become one of India's most trusted and preferred boutique brands—where hand-stitched perfection becomes an identity."
              </p>
              <div className="space-y-3">
                {[
                  "Develop the boutique into a premium designer brand",
                  "Create the perfect blend of traditional and modern fashion", 
                  "Promote local crafts for women empowerment",
                  "Always prioritize quality and trust above everything"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <FaRocket className="text-boutique-primary mt-0.5 flex-shrink-0 text-sm" />
                    <span className="text-boutique-textdark/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="py-16 bg-boutique-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-boutique-textdark mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-boutique-textdark/70 max-w-2xl mx-auto">
              The core values that drive our craftsmanship, shape our culture, and define our relationships with clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-lg border border-boutique-secondary/10">
                <div className="flex justify-center items-center h-12 w-12 mx-auto mb-4 bg-boutique-accent/10 rounded-full">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-bold text-boutique-textdark mb-3 text-center">
                  {principle.title}
                </h3>
                <p className="text-boutique-textdark/80 text-center text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Quote Section */}
      <section className="py-16 bg-gradient-to-r from-boutique-primary/10 to-boutique-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-boutique-secondary/20">
              <FaHeart className="text-2xl text-boutique-primary mx-auto mb-4" />
              <blockquote className="text-xl font-light text-boutique-textdark leading-relaxed mb-6 italic text-center">
                "Sewing is not just work for me—it's an art. In every outfit, I put the same care and perfection that I would want for myself."
              </blockquote>
              <div className="border-t border-boutique-secondary/30 pt-4 text-center">
                <p className="text-lg font-semibold text-boutique-primary">— Jyoti</p>
                <p className="text-boutique-textdark/70 text-sm">Founder & CEO, Creative Stitching Boutique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      {/* <section className="py-16 bg-boutique-light-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-boutique-textdark mb-4">
              Meet Our Founder
            </h2>
            <p className="text-boutique-textdark/70 max-w-2xl mx-auto">
              The visionary behind Creative Stitching Boutique, driving our mission and values forward.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-boutique-secondary/10">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-boutique-textdark mb-2">
                      {member.name}
                    </h3>
                    <p className="text-boutique-accent font-semibold text-base mb-4">
                      {member.role}
                    </p>
                    <p className="text-boutique-textdark/80 leading-relaxed text-sm whitespace-pre-line">
                      {member.bio}
                    </p>
                    <div className="mt-6 flex justify-center space-x-4">
                      {[
                        { number: '15+', label: 'Years Experience' },
                        { number: '200+', label: 'Outfits Created' },
                        { number: '50+', label: 'Happy Clients' }
                      ].map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-lg font-bold text-boutique-primary">
                            {stat.number}
                          </div>
                          <div className="text-xs text-boutique-textdark/70">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-boutique-primary to-boutique-highlight text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create Your Perfect Outfit?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Let's work together to create something beautiful that reflects your unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="bg-white text-boutique-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                Book Consultation
              </a>
              <a
                href="/portfolio"
                className="border border-white text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-boutique-primary text-sm"
              >
                View Collection
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;