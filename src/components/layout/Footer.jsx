import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/clearblackbg.svg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-dark to-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Kejamatch Logo" 
                className="h-auto w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in finding the perfect property in Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/properties" className="text-gray-300 hover:text-accent transition-colors">Properties</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-accent transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Support</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-secondary" />
                <span className="text-gray-300">+254 721 860371</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-secondary" />
                <span className="text-gray-300">info@kejamatch.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-secondary" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to get the latest property updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-400"
              />
              <button className="w-full bg-gradient-to-r from-secondary to-accent text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">© 2025 Kejamatch Realtors. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;