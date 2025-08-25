export const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in mt-14">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Your Profile</h1>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl text-purple-700">👩</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-purple-800">Hitesh </h2>
              <p className="text-gray-600">akshit.26112002@gmail.com</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                defaultValue="Hitesh"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input 
                type="text" 
                defaultValue="Sharma"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                defaultValue="akshit.26112002@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                type="tel" 
                defaultValue="+91 7082647997"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea 
              defaultValue="Ambala, Haryana, India"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
            Save Changes
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-purple-800 mb-4">Order History</h2>
          <p className="text-gray-600 text-center py-8">You haven't placed any orders yet.</p>
        </div>
      </div>
    </div>
  );
}