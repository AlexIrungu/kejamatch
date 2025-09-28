import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, ArrowRight, TrendingUp, Award, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

// Import components
import EnhancedSearch from '../components/home/EnhancedSearch';
import PropertyCard from '../components/properties/PropertyCard';

// Import data
import { properties, formatPrice } from '../data/properties';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchMetadata, setSearchMetadata] = useState(null);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Featured properties for display
  const featuredProperties = properties.slice(0, 3);

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Mistakes to Avoid When Buying Property in Kenya',
      excerpt: 'Discover the common pitfalls that buyers encounter and how to avoid them in your property journey.',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2dzfGVufDB8fDB8fHww',
      readTime: '5 min read',
      category: 'Buying Guide'
    },
    {
      id: 2,
      title: 'Is It Better to Rent or Buy Property in Kenya? A Practical Guide for 2025',
      excerpt: 'A comprehensive analysis of the rent vs buy decision in today\'s Kenyan real estate market.',
      image: 'https://images.unsplash.com/photo-1657638338091-82589734018d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJsb2dzfGVufDB8fDB8fHww',
      readTime: '8 min read',
      category: 'Investment'
    },
    {
      id: 3,
      title: 'A Step-by-Step Guide to Buying Land in Kenya Legally',
      excerpt: 'Everything you need to know about the legal process of land acquisition in Kenya.',
      image: 'https://images.unsplash.com/photo-1640441710596-d0b5e22edaac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJsb2dzfGVufDB8fDB8fHww',
      readTime: '12 min read',
      category: 'Legal'
    },
    {
      id: 4,
      title: '5 Fast-Growing Real Estate Hotspots in Nairobi (2025 Update)',
      excerpt: 'Discover emerging areas in Nairobi that present excellent investment opportunities.',
      image: 'https://plus.unsplash.com/premium_photo-1674513559454-35ca6435079f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGJsb2dzfGVufDB8fDB8fHww',
      readTime: '7 min read',
      category: 'Market Analysis'
    }
  ];

  

  // Handle search results
  const handleSearchResults = (results, metadata) => {
    setSearchResults(results);
    setSearchMetadata(metadata);
    setShowSearchResults(results.length > 0 || metadata.query);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Search */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1628133287836-40bd5453bed1?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D" 
            alt="Luxury Home" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-20">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Turn Your Property <br />
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Aspirations Into Reality
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Find your ideal home, land, or investment property today with Kenya's most trusted real estate platform
            </motion.p>

            {/* Enhanced Search Bar */}
            <EnhancedSearch
              onSearchResults={handleSearchResults}
              showResults={true}
              className="max-w-4xl mx-auto"
            />

         
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-30"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Search Results Section */}
      <AnimatePresence>
        {showSearchResults && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="py-16 bg-gradient-to-b from-gray-50 to-white border-t"
          >
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  Search Results
                  {searchMetadata?.query && (
                    <span className="text-secondary ml-2">for "{searchMetadata.query}"</span>
                  )}
                </h2>
                <p className="text-gray-600">
                  Found {searchResults.length} {searchResults.length === 1 ? 'property' : 'properties'}
                  {searchMetadata?.location && (
                    <span> in {searchMetadata.location.name}</span>
                  )}
                </p>
              </div>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <PropertyCard property={property} />
                    </motion.div>
                  ))}
                </div>
              ) : searchMetadata?.query ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search criteria or browse our featured properties below.</p>
                  <button 
                    onClick={() => setShowSearchResults(false)}
                    className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    Browse Featured Properties
                  </button>
                </div>
              ) : null}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Featured Properties */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-lg">We make finding your dream home easy</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Find your future home',
                description: 'We help you find a new home by offering a smart real estate experience',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Users,
                title: 'Experienced agents',
                description: 'Find an experienced agent who knows your market best',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: TrendingUp,
                title: 'Buy or rent homes',
                description: 'Millions of houses and apartments in your favourite cities',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Award,
                title: 'List your own property',
                description: 'Sign up now and sell or rent your own properties',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Property News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-primary mb-2">Latest Property News</h2>
              <p className="text-gray-600">Stay updated with the latest trends and insights in Kenyan real estate</p>
            </div>
            <Link 
              to="/blogs"
              className="hidden md:flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold transition-colors"
            >
              View All Articles
              <ArrowRight size={20} />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-secondary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blogs/${post.id}`}
                    className="text-secondary text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    READ MORE
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:hidden"
          >
            <Link 
              to="/blogs"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold transition-colors"
            >
              View All Articles
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied customers who have found their perfect home through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/properties"
                className="bg-gradient-to-r from-secondary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Browse Properties
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Contact an Agent
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;