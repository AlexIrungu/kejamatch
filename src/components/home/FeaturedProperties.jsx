import { motion } from 'framer-motion';
import PropertyCard from '../properties/PropertyCard';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: '2 Bedroom House for Rent',
      location: 'Kapsoya, Eldoret',
      price: 16000,
      type: 'rent',
      beds: 2,
      baths: 2,
      sqft: 440,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800'
    },
    {
      id: 2,
      title: 'Luxury Apartments',
      location: 'Kilieleshwa',
      price: 68000000,
      type: 'buy',
      beds: 3,
      baths: 2,
      sqft: 4655,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'
    },
    {
      id: 3,
      title: '4 Bedroom House for Sale',
      location: 'Karen',
      price: 3000000,
      type: 'buy',
      beds: 5,
      baths: 2,
      sqft: 600,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
    }
  ];

  return (
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
            Discover Our Best Deals
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse our curated selection of premium properties available for purchase. 
            Find your dream home or next investment opportunity today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-secondary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            View All Properties
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;