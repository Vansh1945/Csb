import React from 'react';
import { FaHeart, FaGem, FaStar, FaAward } from 'react-icons/fa';

const About = () => {
  // Values data
  const values = [
    {
      icon: <FaHeart className="text-3xl text-primary-600" />,
      title: 'Quality Craftsmanship',
      description: 'Every stitch is made with precision and care, ensuring each garment meets the highest standards of quality and durability.'
    },
    {
      icon: <FaGem className="text-3xl text-primary-600" />,
      title: 'Cultural Heritage',
      description: 'I preserve and celebrate the rich traditions of Himachal Pradesh and Punjab through authentic designs and traditional craftsmanship.'
    },
    {
      icon: <FaStar className="text-3xl text-primary-600" />,
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-800 mb-6">
              About <span className="text-gradient">Jiwan Jyoti</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Preserving the timeless art of traditional Himachali and Punjabi dress making while creating beautiful, 
              authentic garments that celebrate the rich cultural heritage of these beautiful regions.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Jiwan Jyoti's traditional dress making workspace"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  With over 15 years of experience in traditional dress making, I have dedicated my craft to preserving and celebrating the beautiful cultural heritage of Himachal Pradesh and Punjab through authentic clothing designs.
                </p>
                <p>
                  My journey began with a deep love for the intricate patterns, vibrant colors, and timeless elegance of Himachali and Punjabi traditional wear. I specialize in creating stunning phulkari suits, elegant plazo sets, and magnificent lehengas that honor these cultural roots.
                </p>
                <p>
                  Every piece I create tells a story - your story - woven with threads of tradition, crafted with modern techniques, and finished with the care that only comes from genuine passion for this beautiful art form.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 font-heading mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-secondary-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              My Mission & Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide my work and commitment to preserving cultural traditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              My Specializations
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Traditional designs that celebrate the beauty of Himachali and Punjabi culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Phulkari Suits"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-2">
                Phulkari Suits
              </h3>
              <p className="text-primary-600 font-medium mb-4">Traditional Punjabi Embroidery</p>
              <p className="text-secondary-600 leading-relaxed text-sm">
                Authentic phulkari work with intricate floral patterns that showcase the rich heritage of Punjab.
              </p>
            </div>

            <div className="card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Himachali Traditional Dresses"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-2">
                Himachali Dresses
              </h3>
              <p className="text-primary-600 font-medium mb-4">Mountain Heritage</p>
              <p className="text-secondary-600 leading-relaxed text-sm">
                Traditional Himachali outfits including Choli, Ghagra, and Dupatta with authentic cultural patterns.
              </p>
            </div>

            <div className="card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Designer Lehengas"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-2">
                Designer Lehengas
              </h3>
              <p className="text-primary-600 font-medium mb-4">Bridal & Festive Wear</p>
              <p className="text-secondary-600 leading-relaxed text-sm">
                Exquisite lehengas perfect for weddings and special occasions with traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Journey Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              My Journey & Expertise
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              From learning traditional techniques to creating modern masterpieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaAward className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-800 mb-2">Traditional Training</h3>
                  <p className="text-secondary-600 text-sm">
                    Learned traditional stitching and embroidery techniques from master craftswomen in Punjab and Himachal Pradesh.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaGem className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-800 mb-2">Cultural Preservation</h3>
                  <p className="text-secondary-600 text-sm">
                    Dedicated to preserving authentic patterns, colors, and techniques that represent true cultural heritage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaHeart className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-800 mb-2">Personal Care</h3>
                  <p className="text-secondary-600 text-sm">
                    Every garment receives my personal attention from design consultation to final fitting and delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Traditional dress making process"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Create Your Perfect Traditional Outfit?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let me bring your vision to life with authentic designs that celebrate the beautiful cultural heritage of Himachal Pradesh and Punjab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100 hover:transform hover:scale-105 transition-all duration-300"
            >
              Start Your Custom Order
            </a>
            <a
              href="/services"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 hover:transform hover:scale-105 transition-all duration-300"
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
