import React from "react";

import logo from '../assets/logo.png';
import mail from '../assets/mail.png';
import cross from '../assets/cross.png'
import crossleft from '../assets/crossleft.png'
import { Link } from "react-router-dom";
import hipaa from "../assets/hipaacomplient.png";
import facebook from "../assets/facebook.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
import hitrust from "../assets/hitrust.png";
import pci from "../assets/pci.png";
const Footer = () => {
  return (
    <footer className="bg-[#E9EFDE] text-green-800  pl-24 min-h-[80vh] w-full 2xl:w-[98.9vw] px-16 py-8 flex flex-col md:flex-row justify-between items-start md:items-center text-lg relative overflow-hidden">
      {/* Left Section - Logo and Social */}
      <div className="flex flex-col gap-8 z-10 mt-[-140px]">
        <div className="max-w-[300px]">
          <img src={logo || "/placeholder.svg"} alt="Rejuvcare Logo" className="w-full" />
        </div>

        
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Link to="#" className="w-10 h-10">
            <img src={facebook || "/placeholder.svg"} alt="Facebook" className="w-full h-full" />
          </Link>
          <Link to="#" className="w-10 h-10">
            <img src={insta || "/placeholder.svg"} alt="Instagram" className="w-full h-full" />
          </Link>
          <Link to="#" className="w-10 h-10">
            <img src={twitter || "/placeholder.svg"} alt="Twitter" className="w-full h-full" />
          </Link>
          <Link to="#" className="w-10 h-10">
            <img src={linkedin || "/placeholder.svg"} alt="LinkedIn" className="w-full h-full" />
          </Link>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2 ">
          <h3 className="text-xl font-semibold">For Contact</h3>
          <div className="flex">
          <a href="mailto:care@rejuvcare.co.nz" className="flex  items-center gap-2">
          <img src={mail}></img>
            <span> mail: </span>
            <span>care@rejuvcare.co.nz</span>
          </a>
        </div>
        </div>
      </div>
      <nav className="flex gap-16 text-xl mb-8 xl:ml-20 2xl:ml-42 w-[240vw]  xl:mt-[-38vh] 2xl:mt-[-44vh]">
        <Link to="#" className="hover:text-green-700 font-[28px] font-urbanist-semibold cursor-pointer">
          Home
        </Link>
        <Link to="#" className="hover:text-green-700 font-[28px] font-urbanist-semibold cursor-pointer">
          About Us
        </Link>
        <Link to="#" className="hover:text-green-700 font-[28px] font-urbanist-semibold cursor-pointer">
          Services
        </Link>
        <Link to="#" className="hover:text-green-700 font-[28px] font-urbanist-semibold cursor-pointer">
          Certifications
        </Link>
      </nav>

      {/* Right Section - Certifications */}
      <div className="flex flex-col md:flex-row gap-10 items-center mt-8 md:mt-96 mr-40 xl:mr-56 2xl:mr-72   z-10">
      
        <img src={hipaa || "/placeholder.svg"} alt="HIPAA Compliant" className="h-10" />
        <img src={hitrust || "/placeholder.svg"} alt="HITRUST Certified" className="h-10" />
        <img src={pci || "/placeholder.svg"} alt="PCI Compliant" className="h-10" />
      </div>

      {/* Copyright - Absolute positioned at bottom */}
      <div className="absolute bottom-4 right-44 text-sm font-urbanist-semibold">
        © Copyright 2025 Rejuvcare. All rights reserved
      </div>

      {/* Background Decorative Elements */}

      <div className="absolute right-0 top-0 h-full w-1/2">
        <img src={cross || "/placeholder.svg"} alt="" className="absolute right-0 top-0 opacity-100" />
        <img src={crossleft || "/placeholder.svg"} alt="" className="absolute right-40 bottom-0 opacity-10" />
      </div>
    </footer>
  );
};

export default Footer;
