import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import carousel1 from "../assets/carousel1.png"
import carousel2 from "../assets/carousel2.png"
import carousel3 from "../assets/carousel3.png"
import carousel4 from "../assets/carousel4.png"
import approachcare from "../assets/personalizedcare.png"
import trustedsupport from "../assets/trustedsupport.png"
import independence from "../assets/independence.png"
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import t1 from '../assets/t1.png'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'
import t4 from '../assets/t4.png'
import o1 from '../assets/o1.png'
import o2 from '../assets/o2.png'
import o3 from '../assets/o3.png'
import o4 from '../assets/o4.png'
const tabsData = {
    "Personalized Care": {
      title: "Personalized Care",
      description:
        "We craft tailored care that respects your unique needs, preferences, and lifestyle for a truly personalized experience.",
      image: approachcare,
      features: [
        { icon: p1, text: "Respecting Preferences" },
        { icon: p2, text: "Holistic Support" },
        { icon: p3, text: "Individualized Approach" },
        { icon: p4, text: "Focused Well-Being" },
      ],
    },
    "Trusted Support": {
      title: "Trusted Support",
      description:
        "Your safety and comfort are our priorities. Our compassionate caregivers are handpicked to feel like family.",
      image: trustedsupport,
      features: [
        { icon: t1, text: "Experienced Caregivers" },
        { icon: t2, text: "Compassionate Approach" },
        { icon: t3, text: "Family-Like Care" },
        { icon: t4, text: "Reliable Assistance" },
      ],
    },
    "Independence First": {
      title: "Independence First",
      description: "We empower you to maintain your independence and dignity, living life on your own terms.",
      image: independence,
      features: [
        { icon: o1, text: "Empowering Lives" },
        { icon: o2, text: "Dignified Assistance" },
        { icon: o3, text: "Encouraging Freedom" },
        { icon: o4, text: "Respectful Support" },
      ],
    },
  }

import elderlycare from "../assets/elderlycare.png"
import childcare from "../assets/childcare.jpg"
import colouredcross from "../assets/colouredcross.png"
import pci from "../assets/pci.png"
import hipaacomplient from "../assets/hipaacomplient.png"
import hitrust from "../assets/hitrust.png"

export default function Home() {
  const navigate=useNavigate();
  const [hoveredItem, setHoveredItem] = useState("Elderly Care")
  const tabs = Object.keys(tabsData)
  const [selectedTab, setSelectedTab] = useState("Personalized Care")
  const [servicelines, setServiceLines] = useState("Eldery Care")



  const serviceOptions = ["Elderly Care", "Child Care", "Domestic Help Care"]
  const serviceContent = {
    "Elderly Care":"Our Elderly Care services focus on providing dignity, comfort, and support, ensuring physical well-being, emotional balance, and companionship in the golden years. From daily assistance to health monitoring, we’re here to make life easier.",
    "Child Care":"Our Child Care services are tailored to nurture young minds and bodies. Whether it’s educational support, daycare, or emotional development, we ensure your children are safe, happy, and thriving in our care.",
    "Domestic Help Care":"Our Domestic Help Care services ensure that your home remains well-maintained, clean, and organized. From housekeeping to essential chores, we provide trusted and professional assistance to make daily living stress-free.",
  };
  

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
        <div className="flex  justify-center mt-4 space-x-2 sm:space-x-4 md:space-x-[49px] xl:h-[93px] ">
          <img
            src={hipaacomplient || "/placeholder.svg"}
            alt="HIPAA Compliant"
            className="h-[30px] sm:h-[50px] md:h-[73px] w-[60px] sm:w-[100px] md:w-[151px]"
          />
          <img
            src={hitrust || "/placeholder.svg"}
            alt="HITRUST Certified"
            className="h-[15px] sm:h-[25px] md:h-[34px] w-[60px] sm:w-[100px] md:w-[151px] mt-2 sm:mt-4 md:mt-8"
          />
          <img
            src={pci || "/placeholder.svg"}
            alt="PCI Compliant"
            className="h-[15px] sm:h-[25px] md:h-[36px] w-[60px] sm:w-[100px] md:w-[142px] mt-2 sm:mt-4 md:mt-10"
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
              className="group flex items-center gap-2 mb-4 md:mb-[-5vw] xl:mb-6"
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
          <button onClick={()=>{navigate('/services')}} className="mt-4 bg-green-700 border-[1.5px] border-[#ADCF5B] text-white px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 font-montserrat-semibold rounded-md ml-4 sm:ml-[5vw] lg:ml-[4vw] xl:ml-[3vw] shadow-md text-sm sm:text-base">
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
          {hoveredItem && (
         
          <span className="text-sm sm:text-base xl:text-[22px] lg:text-[18px] font-montserrat-regular text-[#101010]">
            {serviceContent[hoveredItem]}
          </span>
        )}
        
       
        </div>
      </div>

      <div className="bg-[#ADCF5B33] px-4 py-8 sm:py-12 md:px-16 lg:px-32">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-montserrat-semibold text-black text-center">
        Our Approach to Care
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center text-center mt-6 font-montserrat-regular bg-white rounded-full p-2 sm:p-3 max-w-full sm:max-w-[90%] md:max-w-[90%] lg:max-w-[80vw] xl:max-w-[70%] mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-3 sm:px-4 md:px-6 py-2 text-sm sm:text-base md:text-lg cursor-pointer lg:text-xl 2xl:text-2xl rounded-full  transition duration-300 mb-2 sm:mb-0 ${
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
          <h3 className="text-xl sm:text-[48px] font-montserrat-medium cursor-pointer text-[#101011]">{tabsData[selectedTab].title}</h3>
          <p className="mt-4 text-[#000000]  text-sm sm:text-[28px]">{tabsData[selectedTab].description}</p>

          {/* Features List */}
          <ul className="mt-14 leading-[2] text-base  sm:text-lg font-semibold">
            {tabsData[selectedTab].features.map((feature, index) => (
              <li key={index} className="flex items-center underline  gap-2 text-[#000000] font-montserrat-semibold ">
                <img src={feature.icon || "/placeholder.svg"} alt="" className="w-6 h-6" />
                <span className="hover:underline cursor-pointer text-[28px]">{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* About Link */}
          <div  onClick={()=>{navigate('/about')}} className="mt-6 flex items-center text-[#101011] font-medium text-[26px] cursor-pointer font-urbanist-semibold hover:underline">
            About Rejuvcare →
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            src={tabsData[selectedTab].image || "/placeholder.svg"}
            alt={`${selectedTab} Illustration`}
            className="rounded-xl w-full shadow-md"
          />
        </div>
      </div>
    </div>

      {/* Testimonials Section */}
      <div className="p-6 md:p-12 text-center bg-white">
        <h3 className="font-semibold text-black text-2xl sm:text-3xl font-montserrat-semibold md:text-[40px]">Testimonials</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat-semibold 2xl:text-[72px]   text-gray-900 mt-2">
          Heartfelt Words from Those
          <br className="hidden sm:block" /> We Care For
        </h2>
        <p className="text-[#000000] text-base sm:text-lg font-montserrat-regular md:text-xl lg:text-2xl xl:text-[32px] mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] mx-auto">
          Our clients share their experiences of trust, compassion, and the positive difference Rejuvcare has made in
          their lives. Here's what<br/> they have to say.
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
          className="border-[3px] border-[#ADCF5B33] p-6 sm:py-8 sm:px-4 rounded-[20px] bg-white shadow-sm w-full lg:w-[547px] lg:h-[679px] min-w-[300px] flex flex-col justify-between"
        >
          <div className="text-justify">
            <p className="text-xl sm:text-2xl X md:text-3xl xl:text-[40px] font-montserrat-medium text-[#000000] leading-tight">
              "{testimonial.quote}"
            </p>
            <div className="mt-4 space-y-3">
              {testimonial.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[#000000] font-montserrat-regular text-sm sm:text-base md:text-lg lg:text-[32px] leading-tight"
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

