import React from "react"
import Home from './Pages/Home'
import Navbar from '../src/Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import Elderly from './Pages/Services/Serves/Elderly'
import Services from "./Pages/Services/Services"
import Childcare from "./Pages/Services/Serves/Childcare.jsx";
import Domestic  from "./Pages/Services/Serves/Domestic.jsx";
import ContactUs from "./Components/Contactus.jsx"


import { BrowserRouter as Router ,  Routes, Route  } from "react-router-dom"

function App() {


  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services/elderly" element={<Elderly/>} />
        <Route path="/services/childcare" element={<Childcare/>} />
        <Route path="/services/domestic" element={<Domestic/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
      <Footer></Footer>
    </Router>
     
    </>
  )
}

export default App
