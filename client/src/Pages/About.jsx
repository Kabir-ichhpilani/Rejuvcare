import React from 'react';
import img1 from "../assets/Frame 6.png";
import img2 from "../assets/cheerful-happy-doctor-with-crossed-hands-white-Photoroom 1.png";
import img3 from "../assets/Group 5.png";
import img4 from "../assets/Group 3.png";
import img5 from "../assets/f739ff8e-6f71-4f58-965d-2a48a3f786b0-Photoroom.png";
import img6 from "../assets/Group 11.png";
import i1 from "../assets/ki1.png";
import i2 from "../assets/ki2.png";
import i3 from "../assets/ki3.png";
import i4 from "../assets/ki4.png";
import i5 from "../assets/ki5.png";
import i6 from "../assets/ki6.png";
import i7 from "../assets/ki7.png";

import { Heart, User2, Shield, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate=useNavigate();
    return (
        <div >
            {/* Hero Section */}
            <div className="w-full bg-[#F8F8FF] px-4 md:px-6 lg:px-8 xl:px-10">
                <div className="max-w-7xl  mx-auto">
                    <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 items-center sm:pb-16 relative">
                        {/* Text Content */}
                        <div className="space-y-6 z-20  pt-8 pr-10 w-full md:text-left sm:text-center xl:w-[750px] lg:max-w-[900px]">
                            <img src={img4} alt="Background shape" className="absolute opacity-50 w-[250px] sm:w-[250px] md:w-[310px] lg:w-[380px] xl:w-[610px] xl:-left-28 xl:top-8 -left-10 top-0" />
                            <p className=" font-urbanist-medium text-lg">About Us</p>
                            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-urbanist-extrabold xl:text-[60px] leading-tight lg:leading-[80px]">
                                Welcome To The <span className="text-[#3d864b]">Revitalizing</span> Side Of Care
                            </h1>
                            <p className="text-gray-700 text-base font-urbanist-regular sm:text-lg md:text-xl lg:text-[22px] leading-relaxed lg:leading-[33px]">
                                At Rejuvcare, we believe in more than just care – we believe in empowering lives. Bringing warmth,
                                dignity, and compassion to<br/> every step of your journey towards independence and vitality.
                            </p>
                            <button

                                className="inline-block cursor-pointer bg-[#3D864B] inset-shadow-sm shadow-[#ADCF5B] text-white px-6 md:px-8 py-3 rounded-lg hover:bg-[#3d8f5d] transition-colors"
                            >
                                Contact Us
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="   sm:block relative w-full h-[400px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[700px]">
                            {/* Background shape */}
                            <div className="absolute -top-6 lg:top-2 left-0 sm:left-6 md:left-12 lg:left-10 xl: w-full md:w-[300px] lg:w-[400px] xl:left-16 pr-10 xl:w-[550px] h-full">
                                <img
                                    src={img1}
                                    alt="Background shape"
                                    className="object-contain absolute right-0 z-20 w-full h-96  sm:h-full"
                                />
                            </div>

                            {/* Main image */}

                        </div>
                    </div>
                </div>
            </div>

            {/* Motto Section */}
            <div className="w-full bg-[#ADCF5B33] pb-16 px-4 md:px-6 lg:px-8 xl:px-16 flex flex-col items-center">
                <div className="max-w-3xl mx-auto py-8 md:py-16 text-center space-y-6 md:space-y-8">
                    <p className="text-lg font-urbanist-medium">Our Motto</p>
                    <h2 className="font-bold text-3xl md:text-4xl font-urbanist-light lg:text-5xl">
                        Genuine Care Knows <span className="text-[#3d864b] font-urbanist-extrabold block mt-2">No Limits</span>
                    </h2>
                    <div className="w-8 h-12 md:w-[34px] md:h-[76.35px] mx-auto">
                        <img src={img5} alt="Infinity symbol" className="w-full h-full" />
                    </div>
                </div>

                {/* New Text Section Below */}
                <div className="lg:w-[830px] text-center space-y-4 md:space-y-6 px-4 md:px-0">
                    <p className="text-gray-700 text-base md:text-xl font-urbanist-regular">
                        At Rejuvcare, the infinity symbol in our logo represents more than just a design—it embodies our philosophy.
                        Infinity signifies continuous care, unending compassion, and the seamless connection between health, wellness, and rejuvenation.
                    </p>
                    <p className="text-gray-700 text-base md:text-xl font-urbanist-regular">
                        We believe in a holistic approach that supports individuals and families throughout their journey,
                        providing care that adapts and evolves to meet your changing needs. Just like the infinity symbol, our
                        commitment to your well-being has no limits.
                    </p>
                    <p className="text-gray-700 text-base md:text-xl font-urbanist-regular">
                        With Rejuvcare, you're not just receiving services; you're becoming part of an enduring relationship built
                        on trust, respect, and renewal. Together, we aim to create a life of endless possibilities, resilience, and vitality.
                    </p>
                </div>
            </div>

            <div className="relative pt-16 pb-20">
                {/* Background Image - Fixed Positioning */}
                <div className="absolute left-0 top-1/2 transform xl:-translate-y-3/9 w-[20%] opacity-70">
                    <img
                        src={img3} // Ensure this image is properly imported
                        alt="Background shape"
                        className="object-contain w-full h-auto "
                    />
                </div>
                {/* Content Section */}
                <div className="relative z-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-urbanist-medium mb-4">Our Values</h2>
                    <p className="text-3xl md:text-4xl font-urbanist-medium">
                        Transforming the way <span className="text-[#47A66E] font-extrabold">We Care</span>
                    </p>
                </div>

                {/* Values Grid */}
                <div className="relative  z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 justify-center items-center mt-10">

                    {/* Personalized Care */}
                    <div className="flex flex-col items-center text-center w-auto lg:w-[280px] max-w-xs mx-auto space-y-4">
                        <div className="w-14 h-16 mb-6">
                            <img alt="hello" src={i1} className="w-full h-full"/>
                        </div>
                        <h3 className="text-xl md:text-2xl  font-urbanist-semibold">Personalized Care Solutions</h3>
                        <p className="text-gray-600 max-w-md mx-auto leading-[120%] font-urbanist-regular">
                            Rejuvcare provides care tailored to your unique needs, ensuring a customized approach that supports your independence and well-being at every stage of life.
                        </p>
                    </div>

                    {/* Compassionate Care */}
                    <div className="flex flex-col items-center text-center w-auto lg:w-[280px] max-w-xs mx-auto space-y-4">
                        <div className="w-14 h-16 mb-6">
                            <img alt="hello" src={i2} className="w-full h-full"/>
                        </div>
                        <h3 className="text-xl md:text-2xl font-urbanist-semibold ">Compassionate and Trusted Care</h3>
                        <p className="text-gray-600 max-w-sm mx-auto leading-[120%] font-urbanist-regular">
                            Our dedicated team delivers care with warmth, empathy, and professionalism, fostering trust and building meaningful connections with those we serve.
                        </p>
                    </div>

                    {/* Holistic Health */}
                    <div className="flex flex-col items-center text-center w-auto lg:w-[280px] max-w-xs mx-auto space-y-4">
                        <div className="w-14 h-16 mb-6">
                            <img alt="hello" src={i3} className="w-full h-full"/>
                        </div>
                        <h3 className="text-xl md:text-2xl font-urbanist-semibold">Holistic Health and Well-Being</h3>
                        <p className="text-gray-600 max-w-sm mx-auto leading-[120%] font-urbanist-regular">
                            We prioritize the whole person, addressing physical, emotional, and mental well-being to help you live a healthier, more fulfilled life.
                        </p>
                    </div>
                </div>
            </div>



            <div className="bg-[#ADCF5B33] z-50 relative pt-4 px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-2/3 lg:w-[700px] xl:pl-18 lg:pl-6 space-y-6">
                    <h1 className=" text-3xl xl:text-5xl  font-urbanist-regular leading-tight">
                        We're Committed To Transforming Care Into A Journey Of{" "}
                        <span className="text-[#3d864b] font-urbanist-extrabold">Rejuvenation</span> And Empowerment.
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-4 pb-16 md:w-[450px]">
                        <div className="border-[#3D864B] border-[1px] w-auto h-auto lg:w-[230px] lg:h-[210px] rounded-lg p-4 shadow-sm">
                            <img src={i4 || "/placeholder.svg"} alt="Personalized Care Icon" className="w-8 h-8 mb-2" />
                            <h3 className="text-[#3d864b] font-urbanist-bold mb-2">Personalized Care, Every Step Of The Way</h3>
                            <p className="text-sm text-gray-600 font-urbanist-regular leading-[120%]">
                                We tailor our services to fit your unique needs, ensuring compassionate, individual-focused care that
                                supports your health and independence.
                            </p>
                        </div>

                        <div className="border-[#3D864B] border-[1px] w-auto h-auto lg:w-[230px] lg:h-[210px] rounded-lg p-4 shadow-sm">
                            <img src={i5 || "/placeholder.svg"} alt="Well-being Icon" className="w-8 h-8 mb-2" />
                            <h3 className="text-[#3d864b] font-urbanist-bold mb-2">Your Well-Being Is Our Priority</h3>
                            <p className="text-sm text-gray-600 font-urbanist-regular leading-[120%]">
                                Our mission is to foster a sense of vitality and purpose, helping you embrace every stage of life with
                                confidence and dignity.
                            </p>
                        </div>

                        <div className="border-[#3D864B] border-[1px] w-auto h-auto lg:w-[230px] lg:h-[210px] rounded-lg p-4 shadow-sm">
                            <img src={i6 || "/placeholder.svg"} alt="Safety Icon" className="w-8 h-8 mb-2" />
                            <h3 className="text-[#3d864b] font-urbanist-bold mb-2">Safe, Trusted, And Reliable</h3>
                            <p className="text-sm text-gray-600 font-urbanist-regular leading-[120%]">
                                We uphold the highest standards of safety, privacy, and professionalism, creating a secure environment for
                                you and your loved ones.
                            </p>
                        </div>

                        <div className="border-[#3D864B] border-[1px] w-auto h-auto lg:w-[230px] lg:h-[210px] rounded-lg p-4 shadow-sm">
                            <img src={i7 || "/placeholder.svg"} alt="Support Icon" className="w-8 h-8 mb-2" />
                            <h3 className="text-[#3d864b] font-urbanist-bold mb-2">Here For You, Always</h3>
                            <p className="text-sm text-gray-600 font-urbanist-regular leading-[120%]">
                                Whether it's adapting to your changing needs or offering consistent support, we're dedicated to being a
                                partner in your journey toward a better quality of life.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center">
                    <div className="relative xl:pr-30 w-100 lg:pt-6 md:h-[650px] lg:h-[750px]">
                        <div className="absolute inset-0">
                            <img
                                src={img2 || "/placeholder.svg"}
                                alt="Healthcare Professional"
                                className="w-full h-full object-cover z-50 rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <img
                    src={img6 || "/placeholder.svg"}
                    alt="Background shape"
                    className="object-contain w-[20%] h-full absolute opacity-50 left-[80%]"
                />
            </div>
            <div className="relative bg-[#F8F8FF] flex justify-center items-center py-16 px-4 text-center">
                {/* Background Image Positioned to Left */}
                <div className="absolute left-0 top-1/2 transform xl:-translate-y-3/13 w-[18%] opacity-70">
                    <img
                        src={img3} // Ensure this image is properly imported
                        alt="Background shape"
                        className="object-contain w-full h-auto"
                    />
                </div>

                {/* Text Content - Ensures it's Above the Background */}
                <div className="relative max-w-3xl z-10">
                    <h1 className="text-3xl font-urbanist-regular md:text-4xl leading-relaxed">
                        At Rejuvcare, we're dedicated to{' '}
                        <span className="inline-block font-urbanist-medium bg-[#3D864B] text-white px-3 py-1 rounded-md">
                empowering lives
            </span>{' '}
                        with compassionate <br />
                        care, fostering health,{' '}
                        <span className="inline-block font-urbanist-medium bg-[#3D864B] text-white px-3 py-1 rounded-md">
                independence,
            </span>
                        <br /> and a brighter tomorrow.
                    </h1>
                </div>
            </div>


        </div>

    );
};

export default About;
