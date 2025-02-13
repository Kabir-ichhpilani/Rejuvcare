import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.png';
import approachcare from '../assets/approachcare.png';
import elderlycare from '../assets/elderlycare.png';
import childcare from '../assets/childcare.jpg';
import colouredcross from '../assets/colouredcross.png'; // Make sure you have this image
import pci from '../assets/pci.png';
import hipaacomplient from '../assets/hipaacomplient.png';
import hitrust from '../assets/hitrust.png';

export default function Home() {
    const [hoveredItem, setHoveredItem] = useState("Elderly Care");
    const [selectedTab, setSelectedTab] = useState("Personalized Care");

    const tabs = ["Personalized Care", "Trusted Support", "Independence First"];

    const serviceOptions = ["Elderly Care", "Child Care", "Domestic Help Care"];

    return (
        <div className="bg-[#ECF1E5] text-green-900">

            {/* Carousel */}
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                <div><img src={carousel1} alt="Carousel 1" className="w-full" /></div>
                <div><img src={carousel2} alt="Carousel 2" className="w-full" /></div>
                <div><img src={carousel3} alt="Carousel 3" className="w-full" /></div>
                <div><img src={carousel4} alt="Carousel 4" className="w-full" /></div>
            </Carousel>

            {/* Hero Section */}
            <div className="text-center p-4 md:p-8">
                <p className="mt-4 text-3xl md:text-5xl font-urbanist-regular leading-relaxed text-black">
                    Rejuvcare leads in <span className="bg-[#3D864B] text-white px-2 py-1 rounded">holistic wellness</span>,
                    <br />
                    helping you rejuvenate mind, body, and
                    <br />
                    spirit with personalized, <span className="bg-[#3D864B] text-white px-2 py-1 rounded">simplified care</span>.
                </p>
                <div className="flex justify-center mt-4 space-x-4 md:space-x-[49px]">
                    <img src={hipaacomplient} alt="HIPAA Compliant" className="h-[50px] md:h-[93px] w-[100px] md:w-[171px]" />
                    <img src={hitrust} alt="HITRUST Certified" className="h-[25px] md:h-[44px] w-[100px] md:w-[171px] mt-4 md:mt-8" />
                    <img src={pci} alt="PCI Compliant" className="h-[25px] md:h-[46px] w-[100px] md:w-[172px] mt-4 md:mt-10" />
                </div>
            </div>
            {/* Elderly Care Section */}
            <div className="px-4 py-8 md:px-10 md:py-14 flex flex-col md:flex-row items-start md:items-center bg-[#F8F8FF]">
                <div className="md:w-1/2">
                    <h3 className="text-black uppercase text-xl font-montserrat-regular tracking-wide mb-4 md:mb-0 ml-[10vw] sm:ml-[5vw] xl:ml-[4vw]">
                        WHAT WE OFFER
                    </h3>

                    {serviceOptions.map(item => (
    <div
        key={item}
        className="group flex items-center gap-2 mb-4 md:mb-[-2vw] xl:mb-6"
        onMouseEnter={() => setHoveredItem(item)}
        onMouseLeave={() => setHoveredItem("Elderly Care")} // Reset to default
    >
        <img
            className={`transition duration-300 ${hoveredItem === item ? "opacity-100" : "opacity-0"}`}
            src={colouredcross} // Ensure correct path
            alt="cross"
            style={{ width: '40px', height: '40px' }}
        />
        <h2
            className={`text-2xl xl:text-4xl 2xl:text-5xl font-bold transition duration-300 font-montserrat-semibold ${hoveredItem === item ? "text-black" : "text-gray-400"}`}
        >
            {item}
        </h2>
        <span
            className={`text-5xl md:text-8xl text-black transition duration-300 ${hoveredItem === item ? "opacity-100" : "opacity-0"}`}
        >
            →
        </span>
    </div>
))}
                    <button className="mt-4 bg-green-700 text-white px-6 py-3 md:px-8 md:py-4 font-montserrat-semibold rounded-md ml-[10vw] lg:ml-[4vw] xl:ml-[3vw] shadow-md">
                        View All Specialities
                    </button>
                </div>

                <div className="md:w-1/2 mt-8 px-[2vw] sm:px-0 md:mt-0 flex flex-col space-y-4 2xl:ml-[7vw]">
                    <img src={hoveredItem === "Child Care" ? childcare: elderlycare} alt="Elderly Care" className="rounded-xl xl:w-[40vw]" />
                    <p className="text-xl lg:text-[20px] xl:text-[24px] font-montserrat-semibold text-black">
                        Compassionate care for aging loved ones.
                    </p>
                    <span className="text-base xl:text-[22px] lg:text-[18px] font-montserrat-regular text-[#101010]">
                        Our Elderly Care services focus on providing<br /> dignity, comfort, and
                        support, ensuring physical<br /> well-being, emotional balance, and<br />
                        companionship in the golden years. From daily<br /> assistance to health
                        monitoring, we’re here to<br /> make life easier.
                    </span>
                </div>
            </div>
            <div className="bg-[#ADCF5B33] px-4 py-12 md:px-16 lg:px-32">
            {/* Heading */}
            <h2 className="text-3xl md:text-6xl font-montserrat-semibold text-black text-center">Our Approach to Care</h2>

            {/* Tabs */}
            <div className="flex justify-center text-center 2xl:ml-[10vw] mt-6 font-montserrat-regular 2xl:w-[60vw] 2xl:h-[11vh]  bg-white rounded-full p-3">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-6  py-2 text-2xl rounded-full cursor-pointer transition duration-300 ${
                            selectedTab === tab ? "bg-green-700 text-white" : "text-black"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {/* Content Section */}
            <div className="mt-10 flex flex-col md:flex-row items-center">
                {/* Left Content */}
                <div className="md:w-1/2 text-left">
                    <h3 className="text-2xl font-semibold">{selectedTab}</h3>
                    <p className="mt-4 text-gray-600">
                        We craft tailored care that respects your unique needs, preferences, and lifestyle for a truly personalized experience.
                    </p>
                    {/* Features List */}
                    <ul className="mt-6 space-y-3 text-lg font-semibold">
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
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <img src={approachcare} alt="Approach to Care" className="rounded-xl w-full shadow-md" />
                </div>
            </div>
        </div>
            {/* Testimonials Section */}
            <div className="p-6 md:p-12 text-center bg-gray-50">
    <h3 className="text-lg font-semibold text-gray-500">Testimonials</h3>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        Heartfelt Words from Those We Care For
    </h2>
    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Our clients share their experiences of trust, compassion, and the 
        positive difference Rejuvcare has made in their lives. Here's what 
        they have to say.
    </p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-sm">
            <p className="text-lg font-medium text-gray-900 italic">
                “A lifeline of support and kindness.”
            </p>
            <p className="text-gray-600 mt-3">
                After my father’s surgery, the Rejuvcare team was a source 
                of comfort and strength for our family.
            </p>
            <p className="text-gray-600 mt-2">
                Their professionalism and genuine compassion made a challenging 
                time so much easier. Thank you for going above and beyond.
            </p>
            <p className="mt-4 font-semibold text-gray-900">Sarah M.</p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-sm">
            <p className="text-lg font-medium text-gray-900 italic">
                “Care that feels like family.”
            </p>
            <p className="text-gray-600 mt-3">
                Rejuvcare’s team has been nothing short of amazing. Their 
                dedication to helping my mother maintain her independence while 
                ensuring her safety has been remarkable.
            </p>
            <p className="text-gray-600 mt-2">
                They truly treat us like family.
            </p>
            <p className="mt-4 font-semibold text-gray-900">James T.</p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-sm">
            <p className="text-lg font-medium text-gray-900 italic">
                “A service that restores peace of mind.”
            </p>
            <p className="text-gray-600 mt-3">
                When we needed home care for our son with special needs, 
                Rejuvcare stepped in and exceeded all expectations.
            </p>
            <p className="text-gray-600 mt-2">
                Their tailored approach and attention to detail made a world 
                of difference in our lives.
            </p>
            <p className="mt-4 font-semibold text-gray-900">Priya R.</p>
        </div>
    </div>
</div>


        </div>
    );
}