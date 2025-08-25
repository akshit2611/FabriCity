import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
  <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white py-4 px-4 mt-12">
      <div className="max-w-6xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:items-start items-center md:text-left text-center">
          <div className="hidden md:flex flex-col items-start justify-center">
            <h3 className="text-xl font-bold mb-1 underline">FabriCity</h3>
            <p className="text-purple-200">
              Fashion that empowers the modern woman to express her unique style.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start justify-center ">
            <h4 className="font-semibold  underline">Quick Links</h4>
            <ul className="flex flex-row space-x-4 justify-center md:justify-start">
              <li><Link to="/" className="text-cyan-400 underline hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-cyan-400 underline hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link to="/cart" className="text-cyan-400 underline hover:text-white transition-colors duration-200">Cart</Link></li>
              <li><Link to="/profile" className="text-cyan-400 underline hover:text-white transition-colors duration-200">Profile</Link></li>
            </ul>
          </div>
          

          <div className="flex flex-col items-center md:items-start justify-center w-full">
            <h4 className="font-semibold mb-2 underline">Connect With Us</h4>
            <div className="flex flex-row space-x-4 mb-2 justify-center md:justify-start">
              <a href="#" className="text-blue-600 hover:text-white transition-colors duration-200">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-rose-500 hover:text-white transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-white transition-colors duration-200">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-rose-400 hover:text-white transition-colors duration-200">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-500 pt-6 text-center text-purple-300">
          <p>© 2025 FabriCity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}