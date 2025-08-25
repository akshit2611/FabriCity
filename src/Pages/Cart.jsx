import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { FaTrash, FaShoppingBag } from 'react-icons/fa';

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0), 0).toFixed(2);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in mt-14">
      <h1 className='text-3xl font-bold text-center text-purple-700 mb-2'>
        Your Shopping Cart
      </h1>
      
      <div className="flex items-center justify-center mb-8">
        <FaShoppingBag className="text-pink-500 mr-2" />
        <span className="text-gray-600">({cartItems.length} items)</span>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl text-purple-300 mb-4">🛒</div>
          <p className='text-xl text-purple-700 mb-4'>Your cart is empty!</p>
          <p className='text-gray-600'>Visit our homepage to discover amazing fashion items.</p>
            <Link to="/" className="inline-block mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200" >
              Continue Shopping
            </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex items-center border-b border-gray-100 py-4 last:border-b-0">
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-lg">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="ml-4 flex-grow">
                  <h2 className='font-semibold text-purple-800 text-lg'>{item.title}</h2>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-pink-500 font-bold mt-1">₹{item.price}</p>
                </div>
                
                <button 
                  onClick={() => removeFromCart(idx)}
                  className="ml-4 text-red-500 hover:text-red-700 transition-colors duration-200 p-2"
                  aria-label="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Subtotal:</span>
              <span className="font-bold text-purple-800">₹{calculateTotal()}</span>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Shipping:</span>
              <span className="font-bold text-purple-800">₹0</span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">GST Tax:</span>
              <span className="font-bold text-purple-800">₹49.99</span>
            </div>
            
            <div className="flex justify-between items-center mb-6 text-lg">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-pink-500">₹{(parseFloat(calculateTotal()) + 4.99).toFixed(2)}</span>
            </div>
            
            <button className="w-full h-10 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}