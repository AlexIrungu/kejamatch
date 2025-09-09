import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 text-lg">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 text-lg">Year Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">79%</div>
              <div className="text-gray-600 text-lg">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional real estate services that exceed client expectations while building sustainable communities and creating lasting value for all stakeholders through innovation, integrity, and excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be East Africa's most trusted and innovative real estate company, transforming how people buy, sell, and invest in property while contributing to sustainable urban development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Kejamatch, your trusted partner in finding the perfect home. Whether you're searching for a cozy rental, looking to buy your dream property, or ready to sell, Kejamatch is here to simplify your journey. Our platform connects you with tailored housing solutions, offering a seamless experience for renters, buyers, and sellers alike.
                </p>
                <p>
                  At Kejamatch, we understand that a home is more than just a place—it's where memories are made. That's why we're dedicated to providing personalized, user-friendly tools and resources to match you with properties that fit your lifestyle and budget. With a focus on transparency, reliability, and efficiency, we empower you to make informed decisions every step of the way.
                </p>
                <p>
                  Backed by a passionate team and cutting-edge technology, Kejamatch is committed to transforming the housing market. Let us help you find not just a house, but a place to call home.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Got questions?</h2>
            <p className="text-xl text-gray-600">We've got answers</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What services does Kjamatch Properties offer? —
              </h3>
              <p className="text-gray-600">
                We offer residential, commercial, and investment property sales, as well as property management, land sourcing, and real estate consultancy services.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I get started with buying a property?
              </h3>
              <p className="text-gray-600">
                Simply browse our properties online, contact our agents for viewings, or visit our offices. We'll guide you through the entire process from property search to ownership transfer.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer financing assistance?
              </h3>
              <p className="text-gray-600">
                Yes, we work with various financial institutions to help our clients secure mortgage financing. Our team can connect you with the right lenders for your needs.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What areas do you serve in Kenya?
              </h3>
              <p className="text-gray-600">
                We primarily serve Nairobi and its surrounding areas, including Kiambu, Machakos, and Kajiado counties. We're expanding to other major towns across Kenya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;