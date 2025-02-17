import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useNavigate , Link } from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Certifications", path: "/certifications" },
  ];

  return (
    <nav className="w-full  bg-white shadow-sm py-4 px-6 md:px-10 xl:px-26">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="w-40 sm:w-48">
          <img src={logo || "/placeholder.svg"} alt="Rejuvcare - Healing from within" className="md:h-[70px] md:w-[120px] lg:h-auto lg:w-full h-auto w-full " />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden  md:flex items-center gap-4 lg:gap-12 xl:gap-16 [@media(min-width:750px)_and_(max-width:800px)]:w-[25rem]   2xl:mr-[150px]">
        {navItems.map((item, index) => (
  <Link
    key={index}
    to={item.path}
    className="font-urbanist text-[#101010] text-[18px] lg:text-[20px] font-urbanist-medium transition-colors cursor-pointer"
  >
    {item.name}
  </Link>
))}
        </div>

        {/* Contact Button (Desktop) */}
        <a
          href="/contactus"
          className="hidden md:flex w-[160px] h-[50px] items-center justify-center gap-[10px] bg-[#3D864B] text-white text-lg font-urbanist rounded-[8px] border-r-[4px] border-b-[5px] border-[#ADCF5B] px-[24px] py-[22px] hover:bg-[#3d6f44] transition-all"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#101010] text-3xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-white py-6 shadow-md">
        {navItems.map((item, index) => (
  <Link
    key={index}
    to={item.path}
    onClick={()=>{setMenuOpen(false)}}
    className="font-urbanist text-[#101010] text-lg  font-urbanist-medium transition-colors cursor-pointer"
  >
    {item.name}
  </Link>
))}

          <a
            href="/contact"
            className="w-[160px] h-[50px] flex items-center justify-center gap-[10px] bg-[#3D864B] text-white text-lg font-urbanist rounded-[8px] border-r-[4px] border-b-[5px] border-[#ADCF5B] px-[24px] py-[22px] hover:bg-[#3d6f44] transition-all"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
