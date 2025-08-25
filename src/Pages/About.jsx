
export const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in mt-14">
  <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">About FabriCity</h1>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            FabriCity was founded with a simple mission: to provide high-quality, fashionable clothing 
            for women at affordable prices. We believe that every woman deserves to feel confident and 
            beautiful in what she wears.
          </p>
          <p className="text-gray-700">
            Our collections are carefully curated to include the latest trends while maintaining 
            timeless pieces that will remain stylish for years to come. We work with skilled designers 
            and manufacturers to ensure the highest quality standards.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-yellow-200 rounded-xl p-6 text-center">
          <div className="text-4xl text-purple-600 mb-4">🎯</div>
          <h3 className="font-semibold text-purple-800 mb-2">Our Mission</h3>
          <p className="text-gray-700 text-sm">
            To empower women through fashion that expresses their unique personality and style.
          </p>
        </div>
        
        <div className="bg-pink-200 rounded-xl p-6 text-center">
          <div className="text-4xl text-pink-600 mb-4">🌟</div>
          <h3 className="font-semibold text-pink-800 mb-2">Quality Promise</h3>
          <p className="text-gray-700 text-sm">
            We carefully select materials and pay attention to every detail in our manufacturing process.
          </p>
        </div>
        
        <div className="bg-indigo-100 rounded-xl p-6 text-center">
          <div className="text-4xl text-indigo-600 mb-4">💚</div>
          <h3 className="font-semibold text-indigo-800 mb-2">Sustainability</h3>
          <p className="text-gray-700 text-sm">
            We're committed to ethical practices and reducing our environmental footprint.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden text-center">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4 underline ">Contact Us</h2>
          <p className="text-gray-700 mb-8">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="text-gray-700">
            <p>Email: akshit.26112002@gmail.com</p>
            <p>Phone: 7082647997</p>
            <p>Address: Ambala, Haryana, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

