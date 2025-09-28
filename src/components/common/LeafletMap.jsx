import React, { useEffect, useRef } from 'react';

const LeafletMap = ({ 
  center = { lat: -1.2921, lng: 36.8219 }, // Default to Nairobi
  zoom = 13, 
  markers = [], 
  height = '400px',
  className = '' 
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Dynamically load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
        document.head.appendChild(cssLink);
      }

      // Load JS
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (mapRef.current && window.L && !mapInstanceRef.current) {
        // Initialize map
        mapInstanceRef.current = window.L.map(mapRef.current).setView([center.lat, center.lng], zoom);

        // Add OpenStreetMap tiles (free)
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors'
        }).addTo(mapInstanceRef.current);

        // Add markers
        markers.forEach(marker => {
          const mapMarker = window.L.marker([marker.lat, marker.lng]).addTo(mapInstanceRef.current);
          
          if (marker.title || marker.infoWindow) {
            const popupContent = marker.infoWindow || `<b>${marker.title}</b>`;
            mapMarker.bindPopup(popupContent);
          }
        });

        // Fit bounds if multiple markers
        if (markers.length > 1) {
          const group = new window.L.featureGroup(
            markers.map(marker => window.L.marker([marker.lat, marker.lng]))
          );
          mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
        }
      }
    };

    loadLeaflet();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center.lat, center.lng, zoom, markers]);

  // Update map view when center changes
  useEffect(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([center.lat, center.lng], zoom);
    }
  }, [center.lat, center.lng, zoom]);

  return (
    <div 
      ref={mapRef} 
      style={{ height, width: '100%' }} 
      className={`rounded-lg ${className}`}
    />
  );
};

export default LeafletMap;