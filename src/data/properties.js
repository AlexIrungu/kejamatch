// Shared property data for the application
export const properties = [
  {
    id: 1,
    title: '2 Bedroom House for Rent',
    location: 'Kapsoya, Eldoret',
    fullAddress: 'Kapsoya Estate, Pipeline Road, Eldoret, Kenya',
    price: 16000,
    beds: 2,
    baths: 2,
    sqft: 440,
    parking: 1,
    yearBuilt: 2020,
    coordinates: { lat: 0.5143, lng: 35.2698 },
    image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    type: 'Rent',
    category: 'houses',
    features: ['WiFi', 'Parking', 'Security', 'Garden', 'Modern Kitchen', 'Balcony'],
    amenities: ['Swimming Pool', 'Gym', '24/7 Security', 'Playground', 'Shopping Center'],
    description: `This beautiful 2-bedroom house is located in the serene Kapsoya Estate in Eldoret. 
    The property features modern finishes, a spacious living area, and a well-equipped kitchen. 
    Perfect for a small family or young professionals looking for comfort and convenience.`,
    agent: {
      name: 'Sarah Wanjiku',
      phone: '+254 721 860 371',
      email: 'sarah@kejamatch.com',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      rating: 4.8,
      properties: 45
    }
  },
  {
    id: 2,
    title: 'Luxury Apartments',
    location: 'Kileleshwa',
    fullAddress: 'Kileleshwa Drive, Nairobi, Kenya',
    price: 68000000,
    beds: 3,
    baths: 2,
    sqft: 4655,
    parking: 2,
    yearBuilt: 2022,
    coordinates: { lat: -1.2696, lng: 36.7809 },
    image: 'https://images.unsplash.com/photo-1565953522043-baea26b83b7e?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    type: 'Rent',
    category: 'apartments',
    features: ['High-Speed WiFi', 'Covered Parking', 'Premium Security', 'Rooftop Garden', 'Designer Kitchen', 'Private Balcony', 'Smart Home Features'],
    amenities: ['Infinity Pool', 'State-of-art Gym', '24/7 Concierge', 'Business Center', 'Spa & Wellness', 'Children\'s Play Area'],
    description: `Experience luxury living in these stunning modern apartments in the heart of Kileleshwa. 
    Featuring contemporary design, premium finishes, and breathtaking city views.`,
    agent: {
      name: 'James Kimani',
      phone: '+254 722 123 456',
      email: 'james@kejamatch.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 4.9,
      properties: 32
    }
  },
  {
    id: 3,
    title: '4 bedroom house for sale in Pinnacle Point Golf Estate',
    location: 'Kilimani',
    fullAddress: 'Pinnacle Point Golf Estate, Kilimani, Nairobi, Kenya',
    price: 2000000,
    beds: 4,
    baths: 3,
    sqft: 400,
    parking: 2,
    yearBuilt: 2021,
    coordinates: { lat: -1.3032, lng: 36.7856 },
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    type: 'Buy',
    category: 'houses',
    features: ['Golf Course View', 'Double Garage', 'Gated Community', 'Landscaped Garden', 'Modern Kitchen', 'Master En-suite', 'Study Room'],
    amenities: ['Golf Course', 'Clubhouse', '24/7 Security', 'Tennis Court', 'Swimming Pool', 'Fitness Center'],
    description: `Magnificent 4-bedroom house situated in the exclusive Pinnacle Point Golf Estate. 
    This elegant home features spacious rooms, high ceilings, and large windows.`,
    agent: {
      name: 'Mary Njeri',
      phone: '+254 723 789 012',
      email: 'mary@kejamatch.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 4.7,
      properties: 28
    }
  },
  {
    id: 4,
    title: '4 bedroom house for sale in Karen',
    location: 'Karen',
    fullAddress: 'Karen Estate, Nairobi, Kenya',
    price: 3000000,
    beds: 5,
    baths: 2,
    sqft: 500,
    parking: 3,
    yearBuilt: 2019,
    coordinates: { lat: -1.3197, lng: 36.6917 },
    image: 'https://plus.unsplash.com/premium_photo-1734545294117-a910817d5961?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0aWVzfGVufDB8fDB8fHww',
    type: 'Buy',
    category: 'houses',
    features: ['Large Compound', 'Triple Garage', 'Servant Quarter', 'Mature Garden', 'Fireplace', 'Walk-in Closets', 'Outdoor Patio'],
    amenities: ['Exclusive Neighborhood', 'Private Schools Nearby', 'Shopping Centers', 'Golf Clubs', 'Country Clubs'],
    description: `Stunning 5-bedroom house in the prestigious Karen Estate, one of Nairobi's most sought-after 
    residential areas. This spacious family home sits on a large plot with mature landscaping.`,
    agent: {
      name: 'Peter Mwangi',
      phone: '+254 724 456 789',
      email: 'peter@kejamatch.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      rating: 4.8,
      properties: 38
    }
  },
  {
    id: 5,
    title: 'Riruta Urban Oasis',
    location: 'Naivasha Road',
    fullAddress: 'Riruta Estate, Naivasha Road, Nairobi, Kenya',
    price: 2700000,
    beds: 3,
    baths: 2,
    sqft: 600,
    parking: 1,
    yearBuilt: 2023,
    coordinates: { lat: -1.2921, lng: 36.7344 },
    image: 'https://images.unsplash.com/photo-1635108199095-f2db38e6632e?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0aWVzfGVufDB8fDB8fHww',
    type: 'Buy',
    category: 'apartments',
    features: ['Modern Design', 'Covered Parking', 'Urban Setting', 'Balcony Views', 'Contemporary Kitchen', 'Built-in Wardrobes'],
    amenities: ['Community Pool', 'Gym Facility', 'Children\'s Area', 'CCTV Security', 'Backup Generator'],
    description: `Modern 3-bedroom apartment in the vibrant Riruta area along Naivasha Road. This contemporary 
    unit offers comfortable living with modern amenities and finishes.`,
    agent: {
      name: 'Grace Wanjiku',
      phone: '+254 725 567 890',
      email: 'grace@kejamatch.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      rating: 4.6,
      properties: 22
    }
  },
  {
    id: 6,
    title: '5 bedroom townhouse',
    location: 'WestLands',
    fullAddress: 'Westlands, Nairobi, Kenya',
    price: 84000000,
    beds: 5,
    baths: 1,
    sqft: 700,
    parking: 2,
    yearBuilt: 2022,
    coordinates: { lat: -1.2676, lng: 36.8108 },
    image: 'https://images.unsplash.com/photo-1723110994499-df46435aa4b3?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZSUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D',
    type: 'Rent',
    category: 'houses',
    features: ['Prime Location', 'Double Parking', 'Modern Finishes', 'Rooftop Terrace', 'Smart Home System', 'High-end Appliances'],
    amenities: ['Business District', 'Shopping Malls', 'Fine Dining', 'Entertainment', 'Public Transport', 'Banking Services'],
    description: `Luxurious 5-bedroom townhouse in the heart of Westlands, Nairobi's premier business and 
    entertainment district. This stunning property offers sophisticated living with premium finishes.`,
    agent: {
      name: 'David Ochieng',
      phone: '+254 726 678 901',
      email: 'david@kejamatch.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      rating: 4.9,
      properties: 41
    }
  }
];

// Utility functions for working with property data
export const formatPrice = (price, type) => {
  if (type === 'Rent') {
    if (price >= 1000000) {
      return `KES ${(price / 1000000).toFixed(1)}M`.replace('.0M', 'M') + '/month';
    } else if (price >= 1000) {
      return `KES ${(price / 1000).toFixed(0)}K/month`;
    }
    return `KES ${price.toLocaleString()}/month`;
  } else {
    if (price >= 1000000) {
      return `KES ${(price / 1000000).toFixed(1)}M`.replace('.0M', 'M');
    } else if (price >= 1000) {
      return `KES ${(price / 1000).toFixed(0)}K`;
    }
    return `KES ${price.toLocaleString()}`;
  }
};

export const getPropertyById = (id) => {
  return properties.find(property => property.id === parseInt(id));
};

export const searchProperties = (query, type = '', category = '', priceRange = [0, 100000000]) => {
  return properties.filter(property => {
    const matchesQuery = !query || 
      property.title.toLowerCase().includes(query.toLowerCase()) ||
      property.location.toLowerCase().includes(query.toLowerCase()) ||
      property.fullAddress.toLowerCase().includes(query.toLowerCase());
    
    const matchesType = !type || property.type === type;
    const matchesCategory = !category || property.category === category;
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    
    return matchesQuery && matchesType && matchesCategory && matchesPrice;
  });
};

// Kenya locations data for search autocomplete
export const kenyanLocations = [
  // Nairobi Areas
  { name: 'Nairobi', coordinates: { lat: -1.2921, lng: 36.8219 } },
  { name: 'Westlands', coordinates: { lat: -1.2676, lng: 36.8108 } },
  { name: 'Karen', coordinates: { lat: -1.3197, lng: 36.6917 } },
  { name: 'Kilimani', coordinates: { lat: -1.3032, lng: 36.7856 } },
  { name: 'Kileleshwa', coordinates: { lat: -1.2696, lng: 36.7809 } },
  { name: 'Lavington', coordinates: { lat: -1.2833, lng: 36.7667 } },
  { name: 'Runda', coordinates: { lat: -1.2167, lng: 36.8167 } },
  { name: 'Muthaiga', coordinates: { lat: -1.2500, lng: 36.8167 } },
  { name: 'Parklands', coordinates: { lat: -1.2500, lng: 36.8500 } },
  { name: 'South B', coordinates: { lat: -1.3167, lng: 36.8333 } },
  { name: 'South C', coordinates: { lat: -1.3333, lng: 36.8333 } },
  { name: 'Donholm', coordinates: { lat: -1.2833, lng: 36.9000 } },
  { name: 'Kasarani', coordinates: { lat: -1.2167, lng: 36.9000 } },
  { name: 'Thika Road', coordinates: { lat: -1.2000, lng: 36.8833 } },
  { name: 'Ngong Road', coordinates: { lat: -1.3167, lng: 36.7667 } },
  { name: 'Langata', coordinates: { lat: -1.3667, lng: 36.7667 } },
  
  // Mombasa Areas
  { name: 'Mombasa', coordinates: { lat: -4.0435, lng: 39.6682 } },
  { name: 'Nyali', coordinates: { lat: -4.0167, lng: 39.7000 } },
  { name: 'Bamburi', coordinates: { lat: -3.9833, lng: 39.7167 } },
  { name: 'Diani', coordinates: { lat: -4.3167, lng: 39.5833 } },
  { name: 'Malindi', coordinates: { lat: -3.2167, lng: 40.1167 } },
  
  // Other Major Towns
  { name: 'Kisumu', coordinates: { lat: -0.1022, lng: 34.7617 } },
  { name: 'Nakuru', coordinates: { lat: -0.3031, lng: 36.0800 } },
  { name: 'Eldoret', coordinates: { lat: 0.5143, lng: 35.2698 } },
  { name: 'Kapsoya, Eldoret', coordinates: { lat: 0.5143, lng: 35.2698 } },
  { name: 'Thika', coordinates: { lat: -1.0333, lng: 37.0833 } },
  { name: 'Machakos', coordinates: { lat: -1.5167, lng: 37.2667 } },
  { name: 'Meru', coordinates: { lat: 0.0500, lng: 37.6500 } },
  { name: 'Embu', coordinates: { lat: -0.5333, lng: 37.4500 } },
  { name: 'Kitale', coordinates: { lat: 1.0167, lng: 35.0000 } },
  { name: 'Garissa', coordinates: { lat: -0.4536, lng: 39.6401 } },
  { name: 'Kakamega', coordinates: { lat: 0.2833, lng: 34.7500 } },
  { name: 'Kericho', coordinates: { lat: -0.3667, lng: 35.2833 } },
  { name: 'Nyeri', coordinates: { lat: -0.4167, lng: 36.9500 } }
];