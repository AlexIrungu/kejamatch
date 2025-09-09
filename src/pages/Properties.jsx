import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, ChevronDown } from 'lucide-react';

const Properties = () => {
  const [priceRange, setPriceRange] = useState([2000, 84000000]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategories, setSelectedCategories] = useState({
    apartments: false,
    houses: false,
    offices: false,
    villas: false
  });

  const properties = [
    {
      id: 1,
      title: '2 Bedroom House for Rent',
      location: 'Kapsoya, Eldoret',
      price: 16000,
      beds: 2,
      baths: 2,
      sqft: 440,
      image: '/api/placeholder/400/300',
      type: 'Rent',
      category: 'houses'
    },
    {
      id: 2,
      title: 'Luxury Apartments',
      location: 'Kileleshwa',
      price: 68000000,
      beds: 3,
      baths: 2,
      sqft: 4655,
      image: '/api/placeholder/400/300',
      type: 'Rent',
      category: 'apartments'
    },
    {
      id: 3,
      title: '4 bedroom house for sale in Pinnacle Point Golf Estate',
      location: 'Kilimani',
      price: 2000000,
      beds: 4,
      baths: 3,
      sqft: 400,
      image: '/api/placeholder/400/300',
      type: 'Buy',
      category: 'houses'
    },
    {
      id: 4,
      title: '4 bedroom house for sale in Karen',
      location: 'Karen',
      price: 3000000,
      beds: 5,
      baths: 2,
      sqft: 500,
      image: '/api/placeholder/400/300',
      type: 'Buy',
      category: 'houses'
    },
    {
      id: 5,
      title: 'Riruta Urban Oasis',
      location: 'Naivasha Road',
      price: 2700000,
      beds: 3,
      baths: 2,
      sqft: 600,
      image: '/api/placeholder/400/300',
      type: 'Buy',
      category: 'apartments'
    },
    {
      id: 6,
      title: '5 bedroom townhouse',
      location: 'WestLands',
      price: 84000000,
      beds: 5,
      baths: 1,
      sqft: 700,
      image: '/api/placeholder/400/300',
      type: 'Rent',
      category: 'houses'
    }
  ];

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `KES ${(price / 1000000).toFixed(1)}M`.replace('.0M', 'M');
    } else if (price >= 1000) {
      return `KES ${(price / 1000).toFixed(0)}K`;
    }
    return `KES ${price}`;
  };

  const filteredProperties = properties.filter(property => {
    const priceMatch = property.price >= priceRange[0] && property.price <= priceRange[1];
    const typeMatch = !selectedType || property.type === selectedType;
    const categoryMatch = !Object.values(selectedCategories).some(v => v) || 
                          selectedCategories[property.category];
    return priceMatch && typeMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/api/placeholder/1920/400')` }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Properties</h1>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-6">Filters</h3>
                
                {/* Property Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="Buy">Buy</option>
                      <option value="Rent">Rent</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <input 
                      type="range" 
                      min="2000" 
                      max="84000000" 
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>KES 2,000</span>
                      <span>KES 84,000,000</span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categories
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2"
                        checked={selectedCategories.apartments}
                        onChange={(e) => setSelectedCategories({
                          ...selectedCategories,
                          apartments: e.target.checked
                        })}
                      />
                      <span>Apartments</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2"
                        checked={selectedCategories.houses}
                        onChange={(e) => setSelectedCategories({
                          ...selectedCategories,
                          houses: e.target.checked
                        })}
                      />
                      <span>Houses</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2"
                        checked={selectedCategories.offices}
                        onChange={(e) => setSelectedCategories({
                          ...selectedCategories,
                          offices: e.target.checked
                        })}
                      />
                      <span>Offices</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2"
                        checked={selectedCategories.villas}
                        onChange={(e) => setSelectedCategories({
                          ...selectedCategories,
                          villas: e.target.checked
                        })}
                      />
                      <span>Villas</span>
                    </label>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input 
                    type="text" 
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  More Filters
                </button>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map(property => (
                  <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
                      <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-sm font-semibold">
                        {property.type}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-xl mb-2">{property.title}</h3>
                      <p className="text-gray-600 mb-4 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.location}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          {property.beds} Beds
                        </span>
                        <span className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          {property.baths} Baths
                        </span>
                        <span className="flex items-center">
                          <Square className="w-4 h-4 mr-1" />
                          {property.sqft}Sqft
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-blue-900">
                        {formatPrice(property.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center mt-8 space-x-2">
                <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;