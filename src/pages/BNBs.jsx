import React, { useState } from 'react';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Users, 
  Star, 
  Heart, 
  Calendar,
  Clock,
  Wifi,
  Car,
  Coffee,
  Tv,
  Wind,
  Shield,
  Search,
  Filter,
  ChevronDown
} from 'lucide-react';
import GoogleMaps from '../components/common/GoogleMaps';
import BookingForm from '../components/bnbs/BookingForm';

const BNBs = () => {
  const [selectedBnb, setSelectedBnb] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [1000, 10000],
    guests: 1,
    propertyType: '',
    amenities: []
  });
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const bnbListings = [
    {
      id: 1,
      title: 'Cozy Studio in Karen',
      location: 'Karen, Nairobi',
      coordinates: { lat: -1.3194, lng: 36.7085 },
      price: 3500,
      rating: 4.8,
      reviews: 124,
      maxGuests: 2,
      beds: 1,
      baths: 1,
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800'
      ],
      amenities: ['WiFi', 'Kitchen', 'AC', 'Parking', 'Pool'],
      description: 'Beautiful studio apartment in the serene Karen area. Perfect for couples or solo travelers.',
      host: {
        name: 'Grace Mwangi',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
        rating: 4.9,
        verified: true
      },
      instantBook: true
    },
    {
      id: 2,
      title: 'Modern 2BR Apartment - Kilimani',
      location: 'Kilimani, Nairobi',
      coordinates: { lat: -1.2921, lng: 36.7857 },
      price: 6000,
      rating: 4.6,
      reviews: 87,
      maxGuests: 4,
      beds: 2,
      baths: 2,
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=800',
        'https://images.unsplash.com/photo-1574691250077-03a929faece5?w=800'
      ],
      amenities: ['WiFi', 'Kitchen', 'AC', 'Gym', 'Security'],
      description: 'Spacious modern apartment in the heart of Kilimani with great city views.',
      host: {
        name: 'David Ochieng',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        rating: 4.7,
        verified: true
      },
      instantBook: false
    },
    {
      id: 3,
      title: 'Luxury Villa with Pool - Runda',
      location: 'Runda, Nairobi',
      coordinates: { lat: -1.2107, lng: 36.7622 },
      price: 12000,
      rating: 4.9,
      reviews: 156,
      maxGuests: 8,
      beds: 4,
      baths: 3,
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
      ],
      amenities: ['WiFi', 'Kitchen', 'Pool', 'Garden', 'Parking', 'Security'],
      description: 'Stunning luxury villa perfect for families or groups. Private pool and beautiful garden.',
      host: {
        name: 'Sarah Kimani',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        rating: 4.9,
        verified: true
      },
      instantBook: true
    },
    {
      id: 4,
      title: 'Beachfront Cottage - Diani',
      location: 'Diani Beach, Kwale',
      coordinates: { lat: -4.2954, lng: 39.5751 },
      price: 8500,
      rating: 4.7,
      reviews: 203,
      maxGuests: 6,
      beds: 3,
      baths: 2,
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800'
      ],
      amenities: ['WiFi', 'Kitchen', 'Beach Access', 'BBQ', 'Garden'],
      description: 'Wake up to ocean views in this charming beachfront cottage in Diani Beach.',
      host: {
        name: 'Omar Hassan',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        rating: 4.8,
        verified: true
      },
      instantBook: false
    }
  ];

  const amenityIcons = {
    'WiFi': Wifi,
    'Kitchen': Coffee,
    'AC': Wind,
    'Parking': Car,
    'Pool': '🏊',
    'TV': Tv,
    'Security': Shield,
    'Gym': '🏋️',
    'Garden': '🌺',
    'Beach Access': '🏖️',
    'BBQ': '🔥'
  };

  const handleBooking = (bnb) => {
    setSelectedBnb(bnb);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...bookingData, bnb: selectedBnb });
    
    // Calculate total nights and cost
    const checkInDate = new Date(bookingData.checkIn);
    const checkOutDate = new Date(bookingData.checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const totalCost = nights * selectedBnb.price;
    
    alert(`Booking request sent! Total: KES ${totalCost.toLocaleString()} for ${nights} nights`);
    setShowBookingForm(false);
    setBookingData({
      checkIn: '',
      checkOut: '',
      guests: 1,
      name: '',
      email: '',
      phone: '',
      specialRequests: ''
    });
  };

  const calculateTotalCost = () => {
    if (!bookingData.checkIn || !bookingData.checkOut || !selectedBnb) return 0;
    
    const checkInDate = new Date(bookingData.checkIn);
    const checkOutDate = new Date(bookingData.checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    
    return nights > 0 ? nights * selectedBnb.price : 0;
  };

  const mapMarkers = bnbListings.map(bnb => ({
    lat: bnb.coordinates.lat,
    lng: bnb.coordinates.lng,
    title: bnb.title,
    infoWindow: `
      <div class="p-3 max-w-xs">
        <img src="${bnb.images[0]}" alt="${bnb.title}" class="w-full h-24 object-cover rounded mb-2">
        <h3 class="font-semibold text-sm mb-1">${bnb.title}</h3>
        <p class="text-xs text-gray-600 mb-2">${bnb.location}</p>
        <div class="flex justify-between items-center">
          <span class="text-xs">★ ${bnb.rating} (${bnb.reviews})</span>
          <span class="font-bold text-blue-600 text-sm">KES ${bnb.price}/night</span>
        </div>
      </div>
    `,
    onClick: (marker) => {
      const element = document.getElementById(`bnb-${bnb.id}`);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Bed & Breakfasts
          </h1>
          <p className="text-xl md:text-2xl text-orange-400">
            Unique stays and experiences await
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Where do you want to stay?"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="date"
                value={bookingData.checkIn}
                onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Check-in"
              />
              <input
                type="date"
                value={bookingData.checkOut}
                onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Check-out"
              />
              <select
                value={filters.guests}
                onChange={(e) => setFilters({...filters, guests: parseInt(e.target.value)})}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
                <option value={5}>5+ Guests</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Listings */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {bnbListings.length} stays found
              </h2>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter size={16} />
                Filters
              </button>
            </div>

            {bnbListings.map((bnb) => (
              <div 
                key={bnb.id}
                id={`bnb-${bnb.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img 
                      src={bnb.images[0]} 
                      alt={bnb.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Heart size={16} className="text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{bnb.title}</h3>
                        <p className="text-gray-600 flex items-center mb-2">
                          <MapPin size={14} className="mr-1" />
                          {bnb.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">KES {bnb.price.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {bnb.maxGuests} guests
                      </span>
                      <span className="flex items-center">
                        <Bed size={14} className="mr-1" />
                        {bnb.beds} beds
                      </span>
                      <span className="flex items-center">
                        <Bath size={14} className="mr-1" />
                        {bnb.baths} baths
                      </span>
                      <div className="flex items-center">
                        <Star size={14} className="text-yellow-500 fill-current mr-1" />
                        <span>{bnb.rating} ({bnb.reviews})</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {bnb.amenities.slice(0, 4).map((amenity, index) => {
                        const IconComponent = amenityIcons[amenity];
                        return (
                          <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs">
                            {typeof IconComponent === 'string' ? (
                              <span className="mr-1">{IconComponent}</span>
                            ) : IconComponent && (
                              <IconComponent size={12} className="mr-1" />
                            )}
                            {amenity}
                          </div>
                        );
                      })}
                      {bnb.amenities.length > 4 && (
                        <span className="text-xs text-gray-500">+{bnb.amenities.length - 4} more</span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{bnb.description}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src={bnb.host.avatar} 
                          alt={bnb.host.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <div>
                          <p className="text-sm font-medium">{bnb.host.name}</p>
                          {bnb.host.verified && (
                            <p className="text-xs text-green-600">✓ Verified Host</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                          View Details
                        </button>
                        <button 
                          onClick={() => handleBooking(bnb)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            bnb.instantBook
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : 'bg-orange-500 text-white hover:bg-orange-600'
                          }`}
                        >
                          {bnb.instantBook ? 'Book Now' : 'Request Booking'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Map View</h3>
              <GoogleMaps
                center={{ lat: -1.2921, lng: 36.8219 }}
                zoom={11}
                markers={mapMarkers}
                height="600px"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingForm && selectedBnb && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{selectedBnb.title}</h3>
                  <p className="text-gray-600">{selectedBnb.location}</p>
                  <div className="flex items-center mt-2">
                    <Star size={16} className="text-yellow-500 fill-current mr-1" />
                    <span className="text-sm">{selectedBnb.rating} ({selectedBnb.reviews} reviews)</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* Dates and Guests */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                    <input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                    <input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    >
                      {[...Array(selectedBnb.maxGuests)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guest Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                  <textarea
                    value={bookingData.specialRequests}
                    onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Any special requests or requirements..."
                  />
                </div>

                {/* Booking Summary */}
                {bookingData.checkIn && bookingData.checkOut && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Booking Summary</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Rate per night:</span>
                        <span>KES {selectedBnb.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Nights:</span>
                        <span>{Math.ceil((new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24))}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Guests:</span>
                        <span>{bookingData.guests}</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>KES {calculateTotalCost().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 px-4 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                      selectedBnb.instantBook
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    {selectedBnb.instantBook ? 'Confirm Booking' : 'Send Request'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BNBs;