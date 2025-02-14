
import React from "react"
import contactushero from "../assets/contactushero.png"
import thankyougirl from "../assets/thankyougirl.png"

export default function Contactus() {
  return (
    <div className="w-full font-['Urbanist']">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <img
          src={contactushero || "/placeholder.svg"}
          alt="Healthcare professionals providing care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-20 max-w-[800px]">
          <h1 className="text-5xl md:text-[72px] leading-tight text-white font-['Urbanist-normal'] mb-4">
            Reach Out For Personalized Care Today.
          </h1>
          <p className="text-white text-2xl md:text-[32px] leading-normal font-['Urbanist-regular']">
            Let us assist you with compassionate, professional support for your unique needs.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-5xl md:text-[72px] leading-tight font-['Urbanist-normal'] mb-2">Connect With Our</h2>
            <h2 className="text-5xl md:text-[72px] leading-tight font-['Urbanist-normal'] text-[#3D864B] mb-6">
              Caring Team
            </h2>
            <p className="text-[#101011] mb-8 text-2xl md:text-[32px] leading-normal font-['Urbanist-regular']">
              Let us know how we can support your needs today.
            </p>
            <div className="relative bg-[#E9EFDE] p-6 rounded-lg">
              <p className="text-gray-800 font-urbanist-semibold text-[32px] mb-4">
                Thank you for connecting with Regexcare! A care expert will reach out to you soon.
              </p>
              <img src={thankyougirl || "/placeholder.svg"} alt="Healthcare professional" className="max-w-[300px]" />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#E9EFDE] p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-['Urbanist-regular'] text-[#101011] mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3D864B]"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-lg font-['Urbanist-regular'] text-[#101011] mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3D864B]"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-['Urbanist-regular'] text-[#101011] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3D864B]"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-lg font-['Urbanist-regular'] text-[#101011] mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3D864B]"
                    placeholder="Location"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg  font-['Urbanist-regular'] text-[#101011] mb-2">
                  What Service Are You Interested In?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3D864B]"
                  placeholder="Tell Us About Your Needs"
                />
              </div>

              <button
                type="submit"
                className="w-32 bg-[#3D864B] text-white py-3 px-6 rounded-md hover:bg-[#326E3E] transition-colors font-['Urbanist-regular']"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

