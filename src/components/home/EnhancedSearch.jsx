import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, X, Loader2, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { kenyanLocations, searchProperties } from '../../data/properties';

const EnhancedSearch = ({ onSearchResults, showResults = false, className = "" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('Buy');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Debounce function
  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('recentSearches');
    if (stored) {
      setRecentSearches(JSON.parse(stored));
    }
  }, []);

  // Filter locations based on search query
  useEffect(() => {
    if (searchQuery.trim() && searchQuery.length > 1) {
      const filtered = kenyanLocations.filter(location =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6); // Limit to 6 suggestions
      
      setFilteredLocations(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredLocations([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  // Handle search execution with debouncing
  useEffect(() => {
    if (debouncedSearchQuery && showResults && onSearchResults) {
      setIsSearching(true);
      const results = searchProperties(debouncedSearchQuery, propertyType);
      setTimeout(() => {
        onSearchResults(results, {
          query: debouncedSearchQuery,
          type: propertyType,
          location: selectedLocation
        });
        setIsSearching(false);
      }, 300);
    }
  }, [debouncedSearchQuery, propertyType, selectedLocation, showResults, onSearchResults]);

  // Save search to recent searches
  const saveRecentSearch = (query, location) => {
    const searchItem = {
      query: query || location?.name || '',
      location: location,
      timestamp: Date.now()
    };

    const updated = [searchItem, ...recentSearches.filter(item => 
      item.query !== searchItem.query
    )].slice(0, 5); // Keep only 5 recent searches

    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  // Handle location selection
  const handleLocationSelect = (location) => {
    setSearchQuery(location.name);
    setSelectedLocation(location);
    setShowSuggestions(false);
    saveRecentSearch(location.name, location);
  };

  // Handle recent search selection
  const handleRecentSearchSelect = (recentSearch) => {
    setSearchQuery(recentSearch.query);
    setSelectedLocation(recentSearch.location);
    setShowSuggestions(false);
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    
    if (!searchQuery.trim()) return;

    saveRecentSearch(searchQuery, selectedLocation);
    
    if (showResults && onSearchResults) {
      // If on home page, trigger search results
      setIsSearching(true);
      const results = searchProperties(searchQuery, propertyType);
      setTimeout(() => {
        onSearchResults(results, {
          query: searchQuery,
          type: propertyType,
          location: selectedLocation
        });
        setIsSearching(false);
      }, 300);
    } else {
      // Navigate to properties page with search params
      const params = new URLSearchParams({
        search: searchQuery,
        type: propertyType.toLowerCase()
      });
      if (selectedLocation) {
        params.set('location', selectedLocation.name);
      }
      navigate(`/properties?${params.toString()}`);
    }
  };

  // Clear search
  const handleClear = () => {
    setSearchQuery('');
    setSelectedLocation(null);
    setShowSuggestions(false);
    if (showResults && onSearchResults) {
      onSearchResults([], { query: '', type: propertyType, location: null });
    }
  };

  // Show suggestions when input is focused
  const handleInputFocus = () => {
    if (searchQuery.trim()) {
      setShowSuggestions(filteredLocations.length > 0);
    } else if (recentSearches.length > 0) {
      setShowSuggestions(true);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Popular locations for when there's no search query
  const popularLocations = [
    { name: 'Nairobi', coordinates: { lat: -1.2921, lng: 36.8219 } },
    { name: 'Westlands', coordinates: { lat: -1.2676, lng: 36.8108 } },
    { name: 'Karen', coordinates: { lat: -1.3197, lng: 36.6917 } },
    { name: 'Kilimani', coordinates: { lat: -1.3032, lng: 36.7856 } },
  ];

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl"
      >
        <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4">
          {/* Property Type Selector */}
          <div className="flex gap-2">
            {['Buy', 'Rent', 'BNBs'].map((type) => (
              <motion.button
                key={type}
                type="button"
                onClick={() => setPropertyType(type)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  propertyType === type
                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </motion.button>
            ))}
          </div>

          {/* Search Input with Autocomplete */}
          <div className="flex-1 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search property, area or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleInputFocus}
                className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all duration-300"
              />
              
              {/* Clear button */}
              {searchQuery && (
                <motion.button
                  type="button"
                  onClick={handleClear}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={18} />
                </motion.button>
              )}

              {/* Location icon */}
              <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            {/* Autocomplete Suggestions */}
            <AnimatePresence>
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto"
                >
                  {/* Location suggestions when searching */}
                  {searchQuery.trim() && filteredLocations.length > 0 && (
                    <div>
                      <div className="px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-50 border-b">
                        Locations
                      </div>
                      {filteredLocations.map((location, index) => (
                        <motion.button
                          key={`location-${location.name}`}
                          type="button"
                          onClick={() => handleLocationSelect(location)}
                          whileHover={{ backgroundColor: '#f3f4f6' }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                        >
                          <MapPin size={16} className="text-secondary flex-shrink-0" />
                          <span className="text-gray-800 font-medium">{location.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Recent searches when no query */}
                  {!searchQuery.trim() && recentSearches.length > 0 && (
                    <div>
                      <div className="px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-50 border-b flex items-center gap-2">
                        <TrendingUp size={14} />
                        Recent Searches
                      </div>
                      {recentSearches.map((recentSearch, index) => (
                        <motion.button
                          key={`recent-${index}`}
                          type="button"
                          onClick={() => handleRecentSearchSelect(recentSearch)}
                          whileHover={{ backgroundColor: '#f3f4f6' }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                        >
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin size={14} className="text-gray-500" />
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-medium">{recentSearch.query}</span>
                            {recentSearch.location && (
                              <div className="text-xs text-gray-500">{recentSearch.location.name}</div>
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Popular locations when no query and no recent searches */}
                  {!searchQuery.trim() && recentSearches.length === 0 && (
                    <div>
                      <div className="px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-50 border-b">
                        Popular Locations
                      </div>
                      {popularLocations.map((location, index) => (
                        <motion.button
                          key={`popular-${location.name}`}
                          type="button"
                          onClick={() => handleLocationSelect(location)}
                          whileHover={{ backgroundColor: '#f3f4f6' }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                        >
                          <TrendingUp size={16} className="text-secondary flex-shrink-0" />
                          <span className="text-gray-800 font-medium">{location.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Button */}
          <motion.button
            type="submit"
            disabled={isSearching}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-secondary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
          >
            {isSearching ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Search size={20} />
            )}
            {isSearching ? 'Searching...' : 'Search'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EnhancedSearch;