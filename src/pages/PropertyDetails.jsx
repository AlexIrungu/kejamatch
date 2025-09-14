import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Wifi, 
  Dumbbell,
  Shield,
  Heart,
  Share2,
  Phone,
  Mail,
  ArrowLeft,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import GoogleMaps from '../components/common/GoogleMaps';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Sample property data - in a real app, this would come from an API
  const propertyData = {
    1: {
      id: 1,
      title: '2 Bedroom House for Rent',
      location: 'Kapsoya, Eldoret',
      fullAddress: 'Kapsoya Estate, Pipeline Road, Eldoret, Kenya',
      price: 16000,
      type: 'Rent',
      category: 'houses',
      beds: 2,
      baths: 2,
      sqft: 440,
      parking: 1,
      yearBuilt: 2020,
      coordinates: { lat: 0.5143, lng: 35.2698 },
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
      ],
      features: ['WiFi', 'Parking', 'Security', 'Garden', 'Modern Kitchen', 'Balcony'],
      amenities: ['Swimming Pool', 'Gym', '24/7 Security', 'Playground', 'Shopping Center'],
      description: `This beautiful 2-bedroom house is located in the serene Kapsoya Estate in Eldoret. 
      The property features modern finishes, a spacious living area, and a well-equipped kitchen. 
      Perfect for a small family or young professionals looking for comfort and convenience.
      
      The house comes with ample parking space and is situated in a secure, gated community 
      with 24/7 security. The neighborhood offers easy access to schools, hospitals, and shopping centers.`,
      agent: {
        name: 'Sarah Wanjiku',
        phone: '+254 721 860 371',
        email: 'sarah@kejamatch.com',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
        rating: 4.8,
        properties: 45
      },
      nearbyPlaces: [
        { name: 'Moi University', distance: '2.5 km', type: 'education' },
        { name: 'Eldoret Hospital', distance: '3.2 km', type: 'healthcare' },
        { name: 'Zion Mall', distance: '4.1 km', type: 'shopping' },
        { name: 'Eldoret Sports Club', distance: '1.8 km', type: 'recreation' }
      ]
    }
    // Add more properties as needed
  };

  useEffect(() => {
    const prop = propertyData[id];
    if (prop) {
      setProperty(prop);
    }
  }, [id]);

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `KES ${(price / 1000000).toFixed(1)}M`.replace('.0M', 'M');
    } else if (price >= 1000) {
      return `KES ${(price / 1000).toFixed(0)}K`;
    }
    return `KES ${price.toLocaleString()}`;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Your message has been sent to the agent!');
    setShowContactForm(false);
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const nextImage = () => {
    if (property) {
      setCurrentImageIndex((prev) => 
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (property) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? property.images.length - 1 : prev - 1
      );
    }
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading property details...</p>
        </div>
      </div>
    );
  }

  const mapMarkers = [{
    lat: property.coordinates.lat,
    lng: property.coordinates.lng,
    title: property.title,
    infoWindow: `
      <div class="p-3">
        <h3 class="font-semibold mb-2">${property.title}</h3>
        <p class="text-sm text-gray-600 mb-2">${property.fullAddress}</p>
        <p class="font-bold text-blue-600">${formatPrice(property.price)}</p>
      </div>
    `
  }];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/properties" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Properties
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative h-96 md:h-[500px]">
        <img 
          src={property.images[currentImageIndex]} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Image Navigation */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {property.images.length}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <Heart 
              size={20} 
              className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}
            />
          </button>
          <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Share2 size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Header */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <p className="text-gray-600 flex items-center">
                    <MapPin size={18} className="mr-1" />
                    {property.fullAddress}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">
                    {formatPrice(property.price)}
                    {property.type === 'Rent' && <span className="text-lg text-gray-600">/month</span>}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    property.type === 'Rent' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                  }`}>
                    For {property.type}
                  </span>
                </div>
              </div>

              {/* Property Stats */}
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <Bed size={18} className="mr-1" />
                  <span>{property.beds} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath size={18} className="mr-1" />
                  <span>{property.baths} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square size={18} className="mr-1" />
                  <span>{property.sqft} sqft</span>
                </div>
                <div className="flex items-center">
                  <Car size={18} className="mr-1" />
                  <span>{property.parking} Parking</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-1" />
                  <span>Built {property.yearBuilt}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Description</h2>
              <div className="prose prose-gray max-w-none">
                {property.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Features & Amenities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Amenities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Amenities</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="mb-6">
                <GoogleMaps
                  center={property.coordinates}
                  zoom={15}
                  markers={mapMarkers}
                  height="300px"
                  className="rounded-lg"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Nearby Places</h3>
                <div className="grid grid-cols-2 gap-4">
                  {property.nearbyPlaces.map((place, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{place.name}</span>
                      <span className="text-sm text-gray-500">{place.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Agent</h3>
              
              <div className="flex items-center mb-4">
                <img 
                  src={property.agent.avatar} 
                  alt={property.agent.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{property.agent.name}</h4>
                  <div className="flex items-center">
                    <Star size={14} className="text-yellow-500 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{property.agent.rating} ({property.agent.properties} properties)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href={`tel:${property.agent.phone}`}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </a>
                
                <a 
                  href={`mailto:${property.agent.email}`}
                  className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <Mail size={18} className="mr-2" />
                  Email
                </a>
                
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium">{property.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year Built</span>
                  <span className="font-medium">{property.yearBuilt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Listing Type</span>
                  <span className="font-medium">For {property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per sqft</span>
                  <span className="font-medium">KES {Math.round(property.price / property.sqft)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Send Message to Agent</h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={contactForm.phone}
                onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                required
              ></textarea>
              
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;