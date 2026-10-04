import { useState } from 'react'
import { Routes ,Route} from 'react-router-dom'
import Header from './components/header.jsx'
import Collections from './components/collections.jsx'
import Men from './components/men.jsx'
import Women from './components/women.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Home from './components/home.jsx'


function App() {
  return (
    <div className='sm:mx-30 sm:my-10'>
    <Header  />
    <div className="hidden sm:block bg-[#e9ecef] h-px mt-12.5 mb-12.5"></div>
    
   
  
     <Routes>
      <Route path="/" element={<Home />} />
   
      <Route path="/collections" element={<Collections />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
   
     
    </div>
  )
}

export default App
