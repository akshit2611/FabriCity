import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import React, { useContext } from 'react';
import { FaSearch, FaShoppingBag, FaUser, FaHome, FaInfoCircle } from 'react-icons/fa';

export const Header = ({searchTerm, setSearchTerm}) => {
  const { cartItems } = useContext(CartContext);
  
  return (
    <header className="w-full sm:h-18  bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500 shadow-lg py-3 md:py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 animate-fade-in">
      {/* Logo and Search */}
  <div className="flex flex-col md:flex-row items-center gap-3 md:gap-9 w-full md:w-auto">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  drop-shadow-md tracking-wider transition-all duration-300 hover:scale-105 ml-3 text-cyan-200">Modern & Chic </h1>
        </Link>
        
  <div className="flex items-center bg-white/90 rounded shadow-md w-32 h-5 ml-1 md:w-56 md:h-8 lg:w-64 transition-all duration-300 focus-within:ring-2 focus-within:ring-pink-500 focus-within:bg-white">
          <input 
            className="text-sm px-2  rounded-xl border-none outline-none bg-transparent text-indigo-700 font-medium  placeholder-indigo-300" 
            placeholder="Search products..." 
            value={searchTerm || ""} 
            onChange={e => setSearchTerm(e.target.value)} 
          />
          <FaSearch className="text-indigo-500 ml-2" />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-8 md:gap-5 lg:gap-17 lg:mr-4  font-medium text-cyan-300 ">
        <Link to="/" className="flex flex-col items-center transition-all duration-200 hover:text-amber-300 hover:scale-110" >
          <FaHome className="text-lg md:text-3xl" />
          <span className="text-xs md:text-sm mt-1">Home</span>
        </Link>
        
        <Link to="/about" className="flex flex-col items-center transition-all duration-200 hover:text-amber-300 hover:scale-110">
          <FaInfoCircle className="text-lg md:text-3xl" />
          <span className="text-xs md:text-sm mt-1">About</span>
        </Link>
        
        <Link to="/cart" className="flex flex-col items-center transition-all duration-200 hover:text-amber-300 hover:scale-110 relative" >
          <FaShoppingBag className="text-lg md:text-3xl" />
          <span className="text-xs md:text-sm mt-1">Cart</span>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {cartItems.length}
              </span>
          )}
        </Link>
        
        <Link to="/profile" className="flex flex-col items-center transition-all duration-200 hover:text-amber-300 hover:scale-110">
          <FaUser className="text-lg md:text-3xl" />
          <span className="text-xs md:text-sm mt-1">Profile</span>
        </Link>
      </nav>
    </header>
  );
};