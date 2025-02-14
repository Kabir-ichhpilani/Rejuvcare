import React from "react"
import Home from './Pages/Home'
import Navbar from '../src/Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import Elderly from './Pages/Services/Serves/Elderly'
import Services from "./Pages/Services/Services"


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
      </Routes>
      <Footer></Footer>
    </Router>
     
    </>
  )
}

export default App
