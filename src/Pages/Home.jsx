import React, { useContext } from 'react'; 
import { CartContext } from '../CartContext';
import { FaShoppingCart, FaHeart, FaSearch, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Home({searchTerm}) {
  const { addToCart } = useContext(CartContext);
  
  const DisplayCard = [
    { 
      idx: 1, 
      img: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww', 
      title: 'Fashion Wear',
    },
    { 
      idx: 2, 
      img: 'https://mesmora.com/cdn/shop/files/Black_embroidered_Navratri_kedia_with_red_tulip_pant_Traditional_Navratri_Wear_Navratri_Women_Wear.jpg?v=1723179220&width=1100', 
      title: 'Traditional Wear',
    },
    { 
      idx: 3, 
      img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHcG11o8MLDdJzjcnsXHP4U_ORVwcqinHoD9WLqdpjj2J-hnbkn8wTbfvzs4jwaCdJ03J91GBJzMWBo-jQFiQpmGvx4FSAnKi72FCgtsA', 
      title: 'Summer Wear',
    },
    { 
      idx: 4, 
      img: 'https://img.faballey.com/images/Product/XKS03763F/d3.jpg', 
      title: 'Party Wear',
    },
  ];

  const products = [
    {index:1, img:'https://i.pinimg.com/1200x/73/68/5c/73685c07104de99b37a451762c95d1fe.jpg', title:"Summer Dress", description:"Light and comfortable summer dress with floral pattern", price: 499, rating: 4.5},
    {index:2, img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', title:"Elegant Gown", description:"Elegant black gown for special occasions", price: 899, rating: 4.8},
    {index:3, img:'https://images.unsplash.com/photo-1525299374597-911581e1bdef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Colorful Collection", description:"Vibrant collection of women's clothing Colorful", price: 599, rating: 4.3},
    {index:4, img:'https://i.pinimg.com/1200x/0a/f5/25/0af525b61d2a646c79dcf2c353da8d1d.jpg', title:"Casual Outfit", description:"Comfortable casual wear for everyday use", price: 399, rating: 4.2},
    {index:5, img:'https://i.pinimg.com/1200x/5a/8f/7a/5a8f7a9a5c303da00cb9e1b6c932aa45.jpg', title:"Blouse & Jeans", description:"Trendy blouse with classic jeans combination", price: 549, rating: 4.6},
    {index:6, img:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Green Sweater", description:"Warm and stylish green knitted sweater", price: 649, rating: 4.7},
    {index:7, img:'https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Striped Shirt", description:"Classic striped shirt with denim jeans Striped Shirt", price: 449, rating: 4.4},
    {index:8, img:'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Classic Outfit", description:"Timeless classic outfit for formal occasions", price: 799, rating: 4.9},
    {index:9, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Evening Dress", description:"Elegant evening dress for special events", price: 999, rating: 4.8},
    {index:10, img:'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Office Attire", description:"Professional office wear for modern women", price: 699, rating: 4.5},
    {index:11, img:'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Winter Collection", description:"Warm and cozy winter clothing Winter Collection", price: 849, rating: 4.7},
    {index:12, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Casual Friday", description:"Relaxed yet stylish casual wear Casual Friday", price: 499, rating: 4.3},
    {index:13, img:'https://thumbs.dreamstime.com/b/beautiful-fitness-model-girl-posing-wearing-sport-clothes-concept-89091820.jpg', title:"Sporty Look", description:"Comfortable and trendy sportswear Sporty Look", price: 549, rating: 4.6},
    {index:14, img:'https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Weekend Outfit", description:"Perfect outfit for weekend activities Weekend Outfit", price: 449, rating: 4.4},
    {index:15, img:'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Date Night", description:"Romantic outfit for special evenings & Dates", price: 799, rating: 4.9},
    {index:16, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Cocktail Dress", description:"Chic cocktail dress for parties Cocktail Dress", price: 899, rating: 4.7},
    {index:17, img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Beach Wear", description:"Comfortable and stylish beach clothing", price: 399, rating: 4.2},
    {index:18, img:'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Formal Attire", description:"Elegant formal wear for business events", price: 949, rating: 4.8},
    {index:19, img:'https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', title:"Spring Collection", description:"Fresh and vibrant spring outfits Spring Collection", price: 599, rating: 4.5},
    {index:20, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', title:"Autumn Style", description:"Warm and cozy autumn fashion autumn fashion", price: 649, rating: 4.6},
    {index:21, img:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', title:"Summer Vibes", description:"Light and breezy outfits for summer", price: 699, rating: 4.7},
    {index:22, img:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', title:"Boho Chic", description:"Free-spirited bohemian style outfits", price: 1199, rating: 4.8},
    {index:23, img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', title:"Evening Gown", description:"Elegant evening wear for grand events", price: 1799, rating: 4.9},
    {index:24, img:'https://images.unsplash.com/photo-1572470176170-98fa8abcb741?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title:"Classic Saree", description:"Traditional saree with modern touch", price: 999, rating: 4.7},
    {index:25, img:'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', title:"Street Style", description:"Bold and edgy street fashion outfits", price: 899, rating: 4.5},
    {index:26, img:'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', title:"Monochrome Mood", description:"Classic black and white fashion statement", price: 949, rating: 4.7},
    {index:27, img:'https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Weekend Outfit", description:"Perfect outfit for weekend activities Weekend Outfit", price: 449, rating: 4.4},
    {index:28, img:'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', title:"Date Night", description:"Romantic outfit for special evenings & Dates", price: 799, rating: 4.9},
  ];

  const filter = products.filter(product => 
    product.title.toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  return (
    <div className="animate-fade-in w-full overflow-x-hidden">
      {/* Hero Banner */}
      <div className="relative w-full h-74 md:h-176 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-600/50 flex items-center justify-center ">
          <div className="text-center text-white px-4 mt-38 md:mt-65">
            <h1 className="text-xl md:text-6xl font-bold mb-2 md:mb-7 drop-shadow-lg animate-bounce-slow text-cyan-200">FESTIVE & TRENDY OUTFITS</h1>
            <p className="text-base md:text-2xl md:mb-10 mb-6 max-w-2xl mx-auto animate-bounce-slow text-cyan-300">Discover the latest trends in Fashion</p>
            <button className=" text-purple-700  rounded-lg  font-semibold hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 md:mt-10 shadow-lg bg-cyan-200">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className=" px-4  mt-10 md:mt-10 md:py-2 text-center bg-gradient-to-b from-white to-purple-50 w-full">
  <h1 className=" text-3xl md:text-6xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800 mb-4 underline">FabriCity for Women</h1>
        <p className="text-rose-700 text-lg max-w-2xl mx-auto mb-2 mt-6">
          Dress Your Confidence. Style That Speaks Volumes, Crafted for the Modern Woman.
        </p>
      </div>

      {/* Category Cards */}
      <div className="px-4 md:px-8 py-8 bg-white w-full md:mb-18 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-14 md:mt-25 text-center">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {DisplayCard.map((item) => (
            <div key={item.idx} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="h-40 md:h-60 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-center w-full">
                  <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  <button className="mt-2 bg-white/90 text-purple-700 px-4 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Festive Collection Banner */}
<div className="mb-14 px-4 py-12 bg-gradient-to-r from-purple-900 to-pink-700 text-white w-full">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="text-center md:text-left md:w-1/2 mb-6 md:mb-0">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Exclusive Collection</h2>
      <p className="text-lg mb-6">Get ready for the festive season with our exclusive collection</p>
      <button className="bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors duration-300">
        SHOP NOW
      </button>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80" className="h-64 w-full object-contain rounded-xl shadow-lg md:max-w-md"/>
    </div>
  </div>
</div>

      {/* Products Section */}
      <div className="px-4 py-12 bg-purple-100 w-full">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-2 text-center">Our Products</h2>
          <p className="text-gray-900 text-center mb-15">Discover our curated collection of fashion items</p>
          
          {filter.length === 0 ? (
            <div className="text-center py-12">
              <FaSearch className="text-4xl text-purple-400 mx-auto mb-4" />
              <p className="text-purple-700 text-lg">No products found. Try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filter.map((product) => (
                <div key={product.index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                    <img src={product.img} alt={product.title}className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"/>
                    <button className="absolute top-2 right-2 bg-white/80 p-2 rounded-full text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaHeart />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-purple-800 text-sm md:text-base mb-1 truncate">{product.title}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} size={12} />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-pink-500 text-sm md:ml-2 ml-2 md:text-base">₹{product.price}</span>
                      <button 
                        onClick={() => addToCart(product)} className="bg-purple-600 text-white p-2 rounded text-xs md:mr-2 mr-2 md:text-sm hover:bg-purple-700 transition-colors duration-200 flex items-center">
                        <FaShoppingCart className="mr-1 " />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Promotional Sections */}
      <div className="px-4 py-12 bg-white w-full mt-20">
        <div className="max-w-6xl mx-auto">
          {/* First Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-2">
            <div className="w-full md:w-1/3">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80" 
              className="w-full h-80 object-contain  shadow-lg"/>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-purple-800 mb-4 ml-2">Premium Shopping Experience</h3>
              <p className="text-gray-700 mb-4 ml-2">
                Discover the latest trends in women's fashion with our carefully curated collection. 
                We bring you quality clothing that combines style with comfort for the modern woman.
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors duration-200 ml-2">
                Learn More
              </button>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/3">
              <img src="https://media.istockphoto.com/id/1065151526/photo/choosing-a-dress.jpg?s=612x612&w=0&k=20&c=lpgkzKM-MqTrccKMzuwcyUhyCQDy6koOuHCqdlm8Los=" className="w-full h-64 object-contain rounded-xl shadow-lg"/>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-purple-800 mb-4 ml-2">Fashion for Every Occasion</h3>
              <p className="text-gray-700 mb-4 ml-2">
                From casual everyday wear to special occasion outfits, we have everything you need 
                to express your unique style and feel confident in any situation.
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 ml-2">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}