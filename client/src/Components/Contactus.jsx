
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
          <h1 className="text-5xl md:text-[55px] leading-tight text-white font-urbanist-extrabold mb-4">
            Reach Out For Personalized Care Today.
          </h1>
          <p className="text-white text-xl md:text-[20px] leading-normal font-urbanist-regular">
            Let us assist you with compassionate, professional support for your unique needs.
          </p>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col  space-y-2 sm:space-y-6">
          <h2 className="text-4xl md:text-[52px] leading-tight font-urbanist-extrabold">
            Connect With Our
          </h2>
          <h2 className="text-4xl md:text-[52px] leading-tight font-urbanist-extrabold text-[#3D864B]">
            Caring Team
          </h2>
          <p className="text-[#101011] text-2xl md:text-[25px] leading-normal font-urbanist-regular">
            Let us know how we can support your needs <br/> today.
          </p>
          <div className="flex flex-col xl:flex-row items-center bg-[#E9EFDE] p-10 relative min-h-[30vh] mt-32 rounded-lg shadow-md overflow-visible text-center xl:text-left">
  <div className="flex-1">
    <p className="text-gray-800 font-urbanist-semibold text-xl md:text-2xl max-w-full xl:max-w-[70%]">
      Thank you for connecting <br /> with Rejuvcare! A care <br /> expert will reach out to <br /> you soon.
    </p>
  </div>
  <div className="mt-6 xl:mt-0 xl:absolute xl:right-[-10px] sm:right-[-50px] bottom-0">
    <img
      src={thankyougirl || "/placeholder.svg"}
      alt="Healthcare professional"
      className="w-62 md:w-52 lg:w-60 xl:w-62"
    />
  </div>
</div>

        </div>
        {/* Right Column - Form */}
        <div className="md:w-1/2 bg-[#E9EFDE]  p-10 rounded-lg lg:h-[105vh] xl:h-[85vh] shadow-md">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-urbanist-bold text-[#101011] mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border bg-white border-gray-300 font-urbanist-regular focus:ring-2 focus:ring-[#3D864B]" placeholder="Full Name" />
              </div>
              <div>
                <label className="block text-lg font-urbanist-bold text-[#101011] mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-md font-urbanist-regular border bg-white border-gray-300 focus:ring-2 focus:ring-[#3D864B]" placeholder="Email Address" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-urbanist-bold text-[#101011] mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-md border bg-white font-urbanist-regular border-gray-300 focus:ring-2 focus:ring-[#3D864B]" placeholder="Phone Number" />
              </div>
              <div>
                <label className="block text-lg font-urbanist-bold text-[#101011] mb-2">Location</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border bg-white font-urbanist-regular border-gray-300 focus:ring-2 focus:ring-[#3D864B]" placeholder="Location" />
              </div>
            </div>

            <div>
              <label className="block text-lg font-urbanist-bold text-[#101011] mb-2">What Service Are You Interested In?</label>
              <textarea rows={8} className="w-full px-4 py-3 rounded-md border bg-white font-urbanist-regular border-gray-300 focus:ring-2 focus:ring-[#3D864B]" placeholder="Tell Us About Your Needs" />
            </div>

            <button type="submit" className="w-[152px] bg-[#3D864B] border-r-[3px] border-b-[3px] border-[#ADCF5B]  text-white py-3 px-6 rounded-md hover:bg-[#326E3E] transition-colors font-urbanist-regular">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

