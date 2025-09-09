import React from 'react';
import { Search, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      title: '2 Bedroom House for Rent',
      location: 'Kapsoya, Eldoret',
      price: 'KES 16,000',
      beds: 2,
      baths: 2,
      sqft: 440,
      image: '/api/placeholder/400/300',
      type: 'Rent'
    },
    {
      id: 2,
      title: 'Luxury Apartments',
      location: 'Kileleshwa',
      price: 'KES 68,000,000',
      beds: 3,
      baths: 2,
      sqft: 4655,
      image: '/api/placeholder/400/300',
      type: 'Rent'
    },
    {
      id: 3,
      title: '4 bedroom house for sale in Pinnacle Point Golf Estate',
      location: 'Kilimani',
      price: 'KES 2,000,000',
      beds: 4,
      baths: 3,
      sqft: 400,
      image: '/api/placeholder/400/300',
      type: 'Buy'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Mistakes to Avoid When Buying Property in Kenya',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Is It Better to Rent or Buy Property in Kenya? A Practical Guide for 2025',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'A Step-by-Step Guide to Buying Land in Kenya Legally',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: '5 Fast-Growing Real Estate Hotspots in Nairobi (2025 Update)',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section 
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/api/placeholder/1920/600')` }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Discover a place you'll love to live</h1>
          <p className="text-xl mb-8">Browse our curated selection of premium properties available for purchase.</p>
          
          <div className="bg-white rounded-lg p-2 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex gap-2 mb-2 md:mb-0">
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Buy</button>
                <button className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Rent</button>
                <button className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-md">BNBs</button>
              </div>
              <div className="flex-1 flex gap-2">
                <input 
                  type="text" 
                  placeholder="Search property, area or state..."
                  className="flex-1 px-4 py-2 text-gray-700 outline-none"
                />
                <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Discover Our Best Deals</h2>
          <p className="text-center text-gray-600 mb-8">
            Browse our curated selection of premium properties available for purchase. Find your dream home or next investment opportunity today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProperties.map(property => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-sm font-semibold">
                    {property.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft}Sqft</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-900">{property.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-yellow-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-center text-gray-600 mb-12">We make finding your dream home easy</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Find your future home</h3>
              <p className="text-sm text-gray-600">We help you find a new home by offering a smart real estate experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Experienced agents</h3>
              <p className="text-sm text-gray-600">Find an experienced agent who knows your market best</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Buy or rent homes</h3>
              <p className="text-sm text-gray-600">Millions of houses and apartments in your favourite cities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">List your own property</h3>
              <p className="text-sm text-gray-600">Sign up now and sell or rent your own properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Property News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest property news</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {blogPosts.map(post => (
              <div key={post.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-900 transition-colors">
                  {post.title}
                </h3>
                <Link to="/blogs" className="text-orange-500 text-sm font-semibold mt-2 inline-block">
                  READ MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;