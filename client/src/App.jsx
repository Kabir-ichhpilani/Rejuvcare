import React from "react"
import Home from './Pages/Home'
import Navbar from '../src/Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'

import { BrowserRouter as Router ,  Routes, Route  } from "react-router-dom"

function App() {


  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer></Footer>
    </Router>
     
    </>
  )
}

export default App
