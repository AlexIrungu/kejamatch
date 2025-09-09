import { motion } from 'framer-motion';
import { Search, TrendingUp, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920" 
          alt="Luxury Home" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
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
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Find your ideal home, land, or investment property today
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl max-w-3xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <select className="flex-1 px-4 py-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary">
                <option>Buy</option>
                <option>Rent</option>
                <option>Sell</option>
              </select>
              <input 
                type="text" 
                placeholder="Search property, area or state..." 
                className="flex-[2] px-4 py-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="bg-gradient-to-r from-secondary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Search size={20} />
                Search
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto"
          >
            <div className="text-white">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="text-accent" size={24} />
              </div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Properties Sold</div>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-accent" size={24} />
              </div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-2">
                <Award className="text-accent" size={24} />
              </div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
          </motion.div>
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
  );
};

export default Hero;