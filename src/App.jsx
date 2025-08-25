import { useState } from 'react'
import { Header } from './components/Header'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { About } from './Pages/About'
import { Profile } from './Pages/Profile'
import { Cart } from './Pages/Cart'
import { Home } from './Pages/Home'
import { Footer } from './components/Footer'


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
        // <BrowserRouter basename="/Fabricity">

    <div className="min-h-screen flex flex-col">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <main className="flex-grow">
      
        {/* <Home searchTerm={searchTerm}/> */}
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<Home searchTerm={searchTerm}/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
    // </BrowserRouter>
  );
}

export default App