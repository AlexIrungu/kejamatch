import { motion } from 'framer-motion';
import { Home, Users, TrendingUp, Building } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Home,
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
      icon: Building,
      title: 'List your own property',
      description: 'Sign up now and sell or rent your own properties',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-accent/20 to-secondary/20">
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center shadow-lg`}>
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;