import React from 'react';
import { FaHeart, FaGem, FaStar } from 'react-icons/fa';

const About = () => {
  // Values data
  const values = [
    {
      icon: <FaHeart className="text-3xl text-boutique-primary" />,
      title: 'Quality Craftsmanship',
      description: 'Every stitch is made with precision and care, ensuring each garment meets the highest standards of quality and durability.'
    },
    {
      icon: <FaGem className="text-3xl text-boutique-primary" />,
      title: 'Cultural Heritage',
      description: 'I preserve and celebrate the rich traditions of Himachal Pradesh and Punjab through authentic designs and traditional craftsmanship.'
    },
    {
      icon: <FaStar className="text-3xl text-boutique-primary" />,
      title: 'Personal Touch',
      description: 'Every garment receives my personal attention ensuring perfect fit and finish that reflects your individual style and cultural pride.'
    }
  ];

  // Stats data
  const stats = [
    { number: '800+', label: 'Garments Created' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '15+', label: 'Years Experience' },
    { number: '300+', label: 'Happy Customers' }
  ];

  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-boutique-secondary to-boutique-accent overflow-hidden">
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 py-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-boutique-textdark mb-8">
              About <span className="text-boutique-highlight">Jiwan Jyoti</span>
            </h1>
            <p className="text-xl md:text-2xl text-boutique-primary max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Preserving the timeless art of traditional Himachali and Punjabi dress making while creating beautiful,
              authentic garments that celebrate the rich cultural heritage of these beautiful regions.
            </p>
          </div>

          <div className="relative px-8 py-8">
            <img
              src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Jiwan Jyoti's traditional dress making workspace"
              className="w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-boutique-textdark mb-6">
                  My Journey
                </h2>
                <div className="w-24 h-1 bg-boutique-highlight mb-8"></div>
              </div>
              <div className="space-y-6 text-boutique-primary leading-relaxed text-lg">
                <p className="font-light">
                  With over 15 years of experience in traditional dress making, I have dedicated my craft to preserving and celebrating the beautiful cultural heritage of Himachal Pradesh and Punjab through authentic clothing designs.
                </p>
                <p className="font-light">
                  My journey began with a deep love for the intricate patterns, vibrant colors, and timeless elegance of Himachali and Punjabi traditional wear. I specialize in creating stunning phulkari suits, elegant plazo sets, and magnificent lehengas that honor these cultural roots.
                </p>
                <p className="font-light">
                  Every piece I create tells a story - your story - woven with threads of tradition, crafted with modern techniques, and finished with the care that only comes from genuine passion for this beautiful art form.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 p-8 bg-boutique-secondary rounded-3xl shadow-lg">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-boutique-highlight font-serif mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm text-boutique-textdark font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-boutique-secondary to-boutique-accent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-boutique-textdark mb-6">
              My Mission & Values
            </h2>
            <div className="w-24 h-1 bg-boutique-highlight mx-auto mb-8"></div>
            <p className="text-xl text-boutique-primary max-w-3xl mx-auto leading-relaxed font-light">
              The principles that guide my work and commitment to preserving cultural traditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-500 group">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-boutique-secondary to-boutique-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-boutique-textdark mb-6 text-center">
                  {value.title}
                </h3>
                <p className="text-boutique-textdark leading-relaxed text-base text-center font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-boutique-textdark mb-6">
              My Specializations
            </h2>
            <div className="w-24 h-1 bg-boutique-highlight mx-auto mb-8"></div>
            <p className="text-xl text-boutique-primary max-w-3xl mx-auto leading-relaxed font-light">
              Traditional designs that celebrate the beauty of Himachali and Punjabi culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center hover:transform hover:scale-105 transition-all duration-500">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Phulkari Suits"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-boutique-textdark mb-3 group-hover:text-boutique-highlight transition-colors duration-300">
                Phulkari Suits
              </h3>
              <p className="text-boutique-highlight font-medium mb-4 text-lg group-hover:text-boutique-primary transition-colors duration-300">Traditional Punjabi Embroidery</p>
              <p className="text-boutique-textdark leading-relaxed text-base font-light max-w-xs mx-auto">
                Authentic phulkari work with intricate floral patterns that showcase the rich heritage of Punjab.
              </p>
            </div>

            <div className="group text-center hover:transform hover:scale-105 transition-all duration-500">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Himachali Traditional Dresses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-boutique-textdark mb-3 group-hover:text-boutique-highlight transition-colors duration-300">
                Himachali Dresses
              </h3>
              <p className="text-boutique-highlight font-medium mb-4 text-lg group-hover:text-boutique-primary transition-colors duration-300">Mountain Heritage</p>
              <p className="text-boutique-textdark leading-relaxed text-base font-light max-w-xs mx-auto">
                Traditional Himachali outfits including Choli, Ghagra, and Dupatta with authentic cultural patterns.
              </p>
            </div>

            <div className="group text-center hover:transform hover:scale-105 transition-all duration-500">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Designer Lehengas"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-boutique-textdark mb-3 group-hover:text-boutique-highlight transition-colors duration-300">
                Designer Lehengas
              </h3>
              <p className="text-boutique-highlight font-medium mb-4 text-lg group-hover:text-boutique-primary transition-colors duration-300">Bridal & Festive Wear</p>
              <p className="text-boutique-textdark leading-relaxed text-base font-light max-w-xs mx-auto">
                Exquisite lehengas perfect for weddings and special occasions with traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-boutique-textdark to-boutique-highlight text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8">
            Ready to Create Your Perfect Traditional Outfit?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
            Let me bring your vision to life with authentic designs that celebrate the beautiful cultural heritage of Himachal Pradesh and Punjab.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-white text-boutique-textdark hover:bg-boutique-secondary hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-500 font-semibold text-lg px-12 py-4 rounded-full shadow-lg"
            >
              Start Your Custom Order
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-boutique-textdark hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-500 font-semibold text-lg px-12 py-4 rounded-full"
            >
              View My Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;