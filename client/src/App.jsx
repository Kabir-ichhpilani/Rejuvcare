import React from "react"
import Home from './Pages/Home'
import Navbar from '../src/Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router ,  Routes, Route  } from "react-router-dom"

function App() {


  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </Router>
     
    </>
  )
}

export default App
