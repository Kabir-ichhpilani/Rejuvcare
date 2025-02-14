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
    <footer className="bg-[#E9EFDE] text-green-800   min-h-[80vh] relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8">
      <div className="relative z-10 flex flex-col lg:flex-row justify-start lg:space-x-22 items-start max-w-[1220px] lg:mt-10 mx-auto "> 
        <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-auto mb-8 lg:mb-0">
          {/* Logo */}
          <div className="max-w-[200px] sm:max-w-[250px] lg:max-w-[300px]">
            <img src={logo || "/placeholder.svg"} alt="Rejuvcare Logo" className="w-full" />
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4">
            {[
              { icon: facebook, alt: "Facebook" },
              { icon: insta, alt: "Instagram" },
              { icon: twitter, alt: "Twitter" },
              { icon: linkedin, alt: "LinkedIn" },
            ].map((social) => (
              <Link key={social.alt} to="#" className="w-8 h-8 sm:w-10 sm:h-10 transition-transform hover:scale-110">
                <img src={social.icon || "/placeholder.svg"} alt={social.alt} className="w-full h-full" />
              </Link>
            ))}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold">For Contact</h3>
            <a
              href="mailto:care@rejuvcare.co.nz"
              className="flex items-center gap-2 text-sm sm:text-base hover:text-green-700"
            >
              <img src={mail || "/placeholder.svg"} alt="Email" className="w-5 h-5" />
              <span>mail:</span>
              <span>care@rejuvcare.co.nz</span>
            </a>
          </div>
        </div>

        {/* Navigation - Center */}
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 cursor-pointer text-base sm:text-lg lg:text-[28px] mb-8 lg:mb-0 mt-6">
  {[
    { title: "Home",
     link: "/" 
    },

    { title: "About Us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Certificates", link: "/" },
  ].map((item) => (
    <Link key={item.title} to={item.link} className="hover:text-green-700 text-[22px] xl:text-[28px] font-urbanist-semibold cursor-pointer transition-colors">
      {item.title}
    </Link>
  ))}
</nav>

        {/* Right Section - Certifications */}
 
      </div>
      <div className=" lg:absolute xl:lg:bottom-14 left-4 lg:left-auto  lg:right-16 flex flex-col sm:flex-row gap-6 sm:gap-10 mb-16 items-start lg:items-center">
          {[
            { src: hipaa, alt: "HIPAA Compliant" },
            { src: hitrust, alt: "HITRUST Certified" },
            { src: pci, alt: "PCI Compliant" },
          ].map((cert) => (
            <img key={cert.alt} src={cert.src || "/placeholder.svg"} alt={cert.alt} className="h-8 sm:h-10" />
          ))}
        </div>

      {/* Copyright - Responsive positioning */}
      <div className="absolute lg:bottom-14 left-4 sm:left-auto sm:right-4 lg:right-16 text-xs sm:text-sm font-urbanist-semibold">
        © Copyright 2025 Rejuvcare. All rights reserved
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        <img src={cross || "/placeholder.svg"} alt="" className="absolute right-0 top-0 opacity-100 w-full max-w-md" />
        <img
          src={crossleft || "/placeholder.svg"}
          alt=""
          className="absolute right-10 sm:right-20 lg:right-40 bottom-0 opacity-10 w-full max-w-md"
        />
      </div>
    </footer>
  )
}

export default Footer

