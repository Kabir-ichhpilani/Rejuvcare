import leftcross from "../../assets/services/cross.png"
import eldcross from "../../assets/services/eldcross.png"
import hero from "../../assets/services/hero.png"
import elderly from "../../assets/services/elderlycare.png"
import domestichelp from "../../assets/services/domestichelp.png"
import childcare from "../../assets/services/childcare.png"
import childcross from "../../assets/services/childcross.png"
import tailored from "../../assets/services/tailored.png"
import reliability from "../../assets/services/reliability.png"
import compassion from "../../assets/services/compassion.png"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Services() {
    const navigate=useNavigate();

  return (
    <div className="font-['Urbanist'] w-full bg-[#f8f8f8] overflow-hidden">
      {/* Hero Section */}
      <div className="w-full max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-20 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-24">
        <div className="mt-16 sm:mt-20 lg:mt-40 xl:absolute">
          <p className="text-[24px] sm:text-lg font-urbanist-medium">Our Services </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-urbanist-extrabold lg:text-[66px]  leading-tight">
              Better <span className="text-[#3D864B]">Care</span>
              <br />
              More <span className="text-[#3D864B]  font-urbanist-extrabold">Independence</span>
              <br />
              Endless <span className="text-[#3D864B]  font-urbanist-extrabold">Possibilities</span>
            </h1>
          </div>
          <div className="relative">
            <img
              src={hero || "/placeholder.svg"}
              alt="Care Services"
              className="w-full h-auto rounded-[32px] relative z-10"
            />
            <img src={leftcross || "/placeholder.svg"} alt="" className="absolute -left-[52vw] -bottom-20 z-0 w-full" />
          </div>
        </div>
      </div>

      {/* Elderly Care Section */}
      <div className="bg-[#ADCF5B33] w-full py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Cross Image */}
        <div className="absolute right-[-5vw] top-[15vw] h-full w-1/2 pointer-events-none">
          <img
            src={eldcross || "/placeholder.svg"}
            alt=""
            className="absolute right-0 top-0 opacity-100 w-[70%] object-contain"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={elderly || "/placeholder.svg"} alt="Elderly Care" className="w-full h-auto rounded-[32px]" />
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[45px] 2xl:text-[52px]  font-urbanist-extrabold leading-tight">
                Elderly Care With
                <br />
                <span className="text-[#3D864B]">Compassion</span> And <span className="text-[#3D864B]">Dignity</span>
              </h2>
              <p className="text-[#000000] text-base sm:text-lg md:text-xl lg:text-2xl font-urbanist-regular 2xl:text-[28px]">
                Aging gracefully requires the right care and support. Rejuvcare offers specialized services tailored to
                promote independence, safety, and comfort for elderly individuals.
              </p>
              <p className="text-[#000000] font-urbanist-regular text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-[28px]">
                Our compassionate team provides assistance with daily activities, companionship, and health monitoring,
                ensuring that your loved ones live their golden years with dignity and joy.
              </p>
              <button onClick={()=>{navigate('/services/elderly')}} className="bg-[#3D864B] text-white px-6 sm:px-8 py-2 sm:py-3 font-urbanist  border-r-[3px] border-b-[3px] border-[#ADCF5B] font-urbanist-bold rounded-lg hover:bg-opacity-90 transition-all text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Child Care Section */}
      <div className="w-full py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Cross Image */}
        <div className="absolute left-0 top-0 h-full z-100 w-1/2 pointer-events-none">
          <img
            src={childcross || "/placeholder.svg"}
            alt=""
            className="absolute left-0 top-64 opacity-90 w-[50%] object-contain"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 relative z-[10]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14  items-end justify-between">
            {/* Content Section - Left */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1  bg-[#f8f8f8] mb-24">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[45px] 2xl:text-[54px] font-urbanist-extrabold leading-tight">
                Trusted and Nurturing
                <br />
                <span className="text-[#3D864B]">Child Care</span>
              </h2>
              <p className="text-[#000000] text-base sm:text-lg md:text-xl font-urbanist-regular lg:text-2xl 2xl:text-[28px]">
                Every child deserves care that is as unique as they are. Rejuvcare provides a safe, supportive, and
                nurturing environment for your little ones.
              </p>
              <p className="text-[#000000] text-base sm:text-lg md:text-xl lg:text-2xl font-urbanist-regular 2xl:text-[28px]">
                From assisting with daily routines to providing educational and emotional support, our team is here to
                help children thrive while bringing you peace of mind.
              </p>
              <button onClick={()=>{navigate('/services/elderly')}} className="bg-[#3D864B] text-white px-6 sm:px-8 py-2 sm:py-3 font-urbanist  border-r-[3px] border-b-[3px] border-[#ADCF5B] font-urbanist-bold rounded-lg hover:bg-opacity-90 transition-all text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
                Know More
              </button>
            </div>

            {/* Image Section - Right */}
            <div className="order-1 lg:order-2">
              <img src={childcare || "/placeholder.svg"} alt="Child Care" className="w-full h-auto rounded-[32px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Domestic Help Section */}
      <div className="bg-[#ADCF5B33] w-full py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Cross Image */}
        <div className="absolute right-[-5vw] top-[15vw] h-full w-1/2 pointer-events-none">
          <img
            src={eldcross || "/placeholder.svg"}
            alt=""
            className="absolute right-0 top-0 opacity-100 w-[70%] object-contain"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={domestichelp || "/placeholder.svg"}
                alt="Domestic Help"
                className="w-full h-auto rounded-[32px]"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[45px] 2xl:text-[54px]  leading-tight font-urbanist-extrabold">
                Reliable Domestic Help
          
                <span className="text-[#3D864B] font-urbanist-extrabold">  for a Stress-Free Home</span>
              </h2>
              <p className="text-[#000000] text-base sm:text-lg md:text-xl font-urbanist-regular lg:text-2xl 2xl:text-[28px]">
                Maintaining a well-run home shouldn't be a burden. Rejuvcare's domestic help services take the stress
                out of managing household tasks.
              </p>
              <p className="text-[#000000] text-base sm:text-lg md:text-xl font-urbanist-regular lg:text-2xl 2xl:text-[28px]">
                Our trained staff assists with cleaning, meal preparation, and other essential chores, giving you more
                time to focus on what truly matters.
              </p>
              <button onClick={()=>{navigate('/services/elderly')}} className="bg-[#3D864B] text-white px-6 sm:px-8 py-2 sm:py-3 font-urbanist  border-r-[3px] border-b-[3px] border-[#ADCF5B] font-urbanist-bold rounded-lg hover:bg-opacity-90 transition-all text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Our Care is Made Just for You Section */}
      <div className="w-full py-12 sm:py-16 lg:py-20 relative bg-[#f8f8f8] overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
    <img
      src={childcross || "/placeholder.svg"}
      alt=""
      className="absolute left-0 top-[80vh] opacity-90 w-[25%] sm:w-[22%] md:w-[18%] lg:w-[16%] xl:w-[14%] 2xl:w-[20%] object-contain"
    />

    {/* Section Title */}
    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] 2xl:text-[72px] font-urbanist-medium leading-tight mb-8 sm:mb-12 lg:mb-16">
      Why Our <span className="text-[#3D864B]">Care</span> is Made Just
      <br className="hidden sm:block" />
      for <span className="text-[#3D864B]">You</span>
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-14">
      {/* Card 1 - Care Tailored */}
      <div className="space-y-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16">
          <img
            src={tailored || "/placeholder.svg"}
            alt="Tailored Care"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl sm:text-2xl font-urbanist-semibold md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[40px]">
          Care Tailored Just for
          <br className="hidden sm:block" /> You
        </h3>
        <p className="text-[#101011] font-urbanist-regular max-w-[90%]  text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px]">
          We understand that every individual and family is unique. That's why our services are personalized to meet
          your specific needs and priorities, ensuring a perfect fit every time.
        </p>
      </div>

      {/* Card 2 - Compassion */}
      <div className="space-y-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16">
          <img src={compassion || "/placeholder.svg"} alt="Compassion" className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl font-urbanist-semibold sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[40px]">
          Compassion at the
          <br className="hidden sm:block" /> Core
        </h3>
        <p className="text-[#101011] font-urbanist-regular max-w-[90%] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px]">
          We understand that every individual and family is unique. That's why our services are personalized to meet
          your specific needs and priorities, ensuring a perfect fit every time.
        </p>
      </div>

      {/* Card 3 - Holistic Approach */}
      <div className="space-y-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16">
          <img
            src={compassion || "/placeholder.svg"}
            alt="Holistic Approach"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[40px] font-urbanist-semibold">
          A Holistic Approach to
          <br className="hidden sm:block" /> Well-Being
        </h3>
        <p className="text-[#101011] font-urbanist-regular text-base sm:text-lg max-w-[90%] md:text-xl lg:text-2xl xl:text-[28px]">
          We understand that every individual and family is unique. That's why our services are personalized to meet
          your specific needs and priorities, ensuring a perfect fit every time.
        </p>
      </div>

      {/* Card 4 - Reliability */}
      <div className="space-y-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16">
          <img
            src={reliability || "/placeholder.svg"}
            alt="Reliability"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[40px] font-urbanist-semibold">
          Reliability You Can
          <br className="hidden sm:block" /> Count On
        </h3>
        <p className="text-[#101011] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] max-w-[90%] font-urbanist-regular">
          We understand that every individual and family is unique. That's why our services are personalized to meet
          your specific needs and priorities, ensuring a perfect fit every time.
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

