import React, { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import carousel1 from "../assets/carousel1.png"
import carousel2 from "../assets/carousel2.png"
import carousel3 from "../assets/carousel3.png"
import carousel4 from "../assets/carousel4.png"
import approachcare from "../assets/approachcare.png"
import elderlycare from "../assets/elderlycare.png"
import childcare from "../assets/childcare.jpg"
import colouredcross from "../assets/colouredcross.png"
import pci from "../assets/pci.png"
import hipaacomplient from "../assets/hipaacomplient.png"
import hitrust from "../assets/hitrust.png"

export default function Home() {
  const [hoveredItem, setHoveredItem] = useState("Elderly Care")
  const [selectedTab, setSelectedTab] = useState("Personalized Care")

  const tabs = ["Personalized Care", "Trusted Support", "Independence First"]

  const serviceOptions = ["Elderly Care", "Child Care", "Domestic Help Care"]

  return (
    <div className="bg-[#ECF1E5] text-green-900">
      {/* Carousel */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {[carousel1, carousel2, carousel3, carousel4].map((img, index) => (
          <div key={index}>
            <img src={img || "/placeholder.svg"} alt={`Carousel ${index + 1}`} className="w-full" />
          </div>
        ))}
      </Carousel>

      {/* Hero Section */}
      <div className="text-center p-4 md:p-8">
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-urbanist-regular leading-relaxed text-black">
          Rejuvcare leads in <span className="bg-[#3D864B] text-white px-2 py-1 rounded">holistic wellness</span>,
          <br className="hidden sm:block" />
          helping you rejuvenate mind, body, and
          <br className="hidden sm:block" />
          spirit with personalized, <span className="bg-[#3D864B] text-white px-2 py-1 rounded">simplified care</span>.
        </p>
        <div className="flex justify-center mt-4 space-x-2 sm:space-x-4 md:space-x-[49px]">
          <img
            src={hipaacomplient || "/placeholder.svg"}
            alt="HIPAA Compliant"
            className="h-[30px] sm:h-[50px] md:h-[93px] w-[60px] sm:w-[100px] md:w-[171px]"
          />
          <img
            src={hitrust || "/placeholder.svg"}
            alt="HITRUST Certified"
            className="h-[15px] sm:h-[25px] md:h-[44px] w-[60px] sm:w-[100px] md:w-[171px] mt-2 sm:mt-4 md:mt-8"
          />
          <img
            src={pci || "/placeholder.svg"}
            alt="PCI Compliant"
            className="h-[15px] sm:h-[25px] md:h-[46px] w-[60px] sm:w-[100px] md:w-[172px] mt-2 sm:mt-4 md:mt-10"
          />
        </div>
      </div>

      {/* Elderly Care Section */}
      <div className="px-4 py-8 md:px-10 md:py-14 flex flex-col lg:flex-row items-start lg:items-center bg-[#F8F8FF]">
        <div className="lg:w-1/2">
          <h3 className="text-black uppercase text-lg sm:text-xl font-montserrat-regular tracking-wide mb-4 md:mb-0 ml-4 sm:ml-[5vw] xl:ml-[4vw]">
            WHAT WE OFFER
          </h3>

          {serviceOptions.map((item) => (
            <div
              key={item}
              className="group flex items-center gap-2 mb-4 md:mb-[-2vw] xl:mb-6"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem("Elderly Care")}
            >
              <img
                className={`transition duration-300 ${hoveredItem === item ? "opacity-100" : "opacity-0"}`}
                src={colouredcross || "/placeholder.svg"}
                alt="cross"
                style={{ width: "30px", height: "30px" }}
              />
              <h2
                className={`text-xl sm:text-2xl xl:text-4xl 2xl:text-5xl font-bold transition duration-300 font-montserrat-semibold ${hoveredItem === item ? "text-black" : "text-gray-400"}`}
              >
                {item}
              </h2>
              <span
                className={`text-3xl sm:text-5xl md:text-8xl text-black transition duration-300 ${hoveredItem === item ? "opacity-100" : "opacity-0"}`}
              >
                →
              </span>
            </div>
          ))}
          <button className="mt-4 bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 font-montserrat-semibold rounded-md ml-4 sm:ml-[5vw] lg:ml-[4vw] xl:ml-[3vw] shadow-md text-sm sm:text-base">
            View All Specialities
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 px-[2vw] sm:px-0 md:mt-0 flex flex-col space-y-4 2xl:ml-[7vw]">
          <img
            src={hoveredItem === "Child Care" ? childcare : elderlycare}
            alt="Elderly Care"
            className="rounded-xl w-full xl:w-[40vw]"
          />
          <p className="text-lg sm:text-xl lg:text-[20px] xl:text-[24px] font-montserrat-semibold text-black">
            Compassionate care for aging loved ones.
          </p>
          <span className="text-sm sm:text-base xl:text-[22px] lg:text-[18px] font-montserrat-regular text-[#101010]">
            Our Elderly Care services focus on providing dignity, comfort, and support, ensuring physical well-being,
            emotional balance, and companionship in the golden years. From daily assistance to health monitoring, we're
            here to make life easier.
          </span>
        </div>
      </div>

      <div className="bg-[#ADCF5B33] px-4 py-8 sm:py-12 md:px-16 lg:px-32">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-montserrat-semibold text-black text-center">
          Our Approach to Care
        </h2>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center text-center mt-6 font-montserrat-regular bg-white rounded-full p-2 sm:p-3 max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[70%] mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-3 sm:px-4 md:px-6 py-2 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl rounded-full cursor-pointer transition duration-300 mb-2 sm:mb-0 ${
                selectedTab === tab ? "bg-green-700 text-white" : "text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Content Section */}
        <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left">
            <h3 className="text-xl sm:text-2xl font-semibold">{selectedTab}</h3>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              We craft tailored care that respects your unique needs, preferences, and lifestyle for a truly
              personalized experience.
            </p>
            {/* Features List */}
            <ul className="mt-6 space-y-3 text-base sm:text-lg font-semibold">
              <li className="flex items-center gap-2">
                👐 <span className="hover:underline cursor-pointer">Respecting Preferences</span>
              </li>
              <li className="flex items-center gap-2">
                👥 <span className="hover:underline cursor-pointer">Holistic Support</span>
              </li>
              <li className="flex items-center gap-2">
                🔍 <span className="hover:underline cursor-pointer">Individualized Approach</span>
              </li>
              <li className="flex items-center gap-2">
                ❤️ <span className="hover:underline cursor-pointer">Focused Well-Being</span>
              </li>
            </ul>

            {/* About Link */}
            <div className="mt-6 flex items-center text-black font-medium cursor-pointer hover:underline">
              About Rejuvcare →
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src={approachcare || "/placeholder.svg"}
              alt="Approach to Care"
              className="rounded-xl w-full shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="p-6 md:p-12 text-center bg-white">
        <h3 className="font-semibold text-black text-2xl sm:text-3xl md:text-[40px]">Testimonials</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-[72px] font-bold text-gray-900 mt-2">
          Heartfelt Words from Those
          <br className="hidden sm:block" /> We Care For
        </h2>
        <p className="text-[#000000] text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-[32px] mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
          Our clients share their experiences of trust, compassion, and the positive difference Rejuvcare has made in
          their lives. Here's what they have to say.
        </p>

        <div className="mt-8 flex flex-col lg:flex-row justify-center items-stretch gap-6 sm:gap-8 md:gap-10 ">
      {[
        {
          quote: "A lifeline of support and kindness.",
          content: [
            "After my father's surgery, the Rejuvcare team was a source of comfort and strength for our family.",
            "Their professionalism and genuine compassion made a challenging time so much easier. Thank you for going above and beyond.",
          ],
          author: "Sarah M.",
        },
        {
          quote: "Care that feels like family.",
          content: [
            "Rejuvcare's team has been nothing short of amazing. Their dedication to helping my mother maintain her independence while ensuring her safety has been remarkable.",
            "They truly treat us like family.",
          ],
          author: "James T.",
        },
        {
          quote: "A service that restores peace of mind.",
          content: [
            "When we needed home care for our son with special needs, Rejuvcare stepped in and exceeded all expectations.",
            "Their tailored approach and attention to detail made a world of difference in our lives.",
          ],
          author: "Priya R.",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="border-[3px] border-[#ADCF5B33] p-6 sm:p-8 rounded-[20px] bg-white shadow-sm w-full lg:w-[30%] min-w-[300px] flex flex-col justify-between"
        >
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl 2xl:text-[36px] font-medium text-[#000000] leading-tight">
              "{testimonial.quote}"
            </p>
            <div className="mt-4 space-y-3">
              {testimonial.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[30px] leading-tight"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <p className="mt-6 font-semibold text-gray-900 text-lg sm:text-xl md:text-2xl 2xl:text-[32px]">
            {testimonial.author}
          </p>
        </div>
      ))}
    </div>
      </div>
    </div>
  )
}

