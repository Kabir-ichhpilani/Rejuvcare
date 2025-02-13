import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import cross from "../assets/cross.png";
import hipaa from "../assets/hipaacomplient.png";
import hitrust from "../assets/hitrust.png";
import pci from "../assets/pci.png";

const Footer = () => {
  return (
    <footer className="bg-[#ECF1E5] text-green-800 p-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-start space-y-4">
        <div className="flex items-center space-x-2">
          <img src={cross} alt="Logo" className="w-10" />
          <div>
            <h1 className="text-2xl font-bold">REJUvCARE</h1>
            <p className="text-sm">HEALING FROM WITHIN</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <FaFacebookF className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
          <FaXTwitter className="text-xl cursor-pointer" />
          <FaLinkedinIn className="text-xl cursor-pointer" />
        </div>
        <div>
          <p className="text-sm font-semibold">For Contact</p>
          <p className="text-sm">✉ mail: care@rejuvcare.co.nz</p>
        </div>
      </div>

      <nav className="flex space-x-6 text-lg font-medium">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/about" className="hover:text-green-600">About Us</Link>
        <Link to="/services" className="hover:text-green-600">Services</Link>
        <Link to="/certifications" className="hover:text-green-600">Certifications</Link>
      </nav>

      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-4">
          <img src={hipaa} alt="HIPAA Compliant" className="w-10" />
          <img src={hitrust} alt="HITRUST Certified" className="w-10" />
          <img src={pci} alt="PCI Compliant" className="w-10" />
        </div>
        <p className="text-xs">© Copyright 2025 Rejuvcare. <span className="font-semibold">All rights reserved</span></p>
      </div>
    </footer>
  );
};

export default Footer;
