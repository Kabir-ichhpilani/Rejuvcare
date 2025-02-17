import React from 'react';
import img1 from "../assets/Frame 6.png";
import img2 from "../assets/cheerful-happy-doctor-with-crossed-hands-white-Photoroom 1.png";
import img3 from "../assets/Group 5.png";
import img4 from "../assets/Group 3.png";
import img5 from "../assets/f739ff8e-6f71-4f58-965d-2a48a3f786b0-Photoroom.png";
import img6 from "../assets/Group 11.png";
import { Heart, User2, Shield, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate=useNavigate();
    return (
        <div >
            {/* Hero Section */}
            <div className="w-full px-4 md:px-6 lg:px-8 xl:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center sm:pb-16 relative">
                        {/* Text Content */}
                        <div className="space-y-6 z-20 pt-8 pr-10 w-full md:text-left sm:text-center xl:w-[750px] lg:max-w-[900px]">
                            <img src={img4} alt="Background shape" className="absolute w-[250px] sm:w-[250px] md:w-[310px] lg:w-[380px] xl:w-[440px] xl:-left-28 xl:top-8 -left-10 top-0" />
                            <p className=" font-urbanist-medium text-lg">About Us</p>
                            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-urbanist-extrabold lg:text-[60px] leading-tight lg:leading-[80px]">
                                Welcome To The <span className="text-[#3d864b]">Revitalizing</span> Side Of Care
                            </h1>
                            <p className="text-gray-700 text-base font-urbanist-regular sm:text-lg md:text-xl lg:text-[22px] leading-relaxed lg:leading-[33px]">
                                At Rejuvcare, we believe in more than just care – we believe in empowering lives. Bringing warmth,
                                dignity, and compassion to<br/> every step of your journey towards independence and vitality.
                            </p>
                            <button
                                onClick={()=>{navigate('/contactus')}}
                                className="inline-block cursor-pointer bg-[#3d864b] shadow-sm shadow-[#adcf5b] text-white px-6 md:px-8 py-3 rounded-lg hover:bg-[#3d8f5d] transition-colors"
                            >
                                Contact Us
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="   sm:block relative w-full h-[400px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[700px]">
                            {/* Background shape */}
                            <div className="absolute -top-6 lg:top-2 left-0 sm:left-6 md:left-12 lg:left-10 xl: w-full md:w-[300px] lg:w-[400px] xl:left-24 pr-10 xl:w-[550px] h-full">
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
            <div className="w-full bg-[#ADCF5B1A] px-4 md:px-6 lg:px-8 xl:px-16">
                <div className="max-w-3xl mx-auto py-12 md:py-16 text-center space-y-6 md:space-y-8">
                    <p className="text-lg font-urbanist-medium">Our Motto</p>
                    <h2 className="font-bold text-3xl md:text-4xl font-urbanist-light lg:text-5xl">
                        Genuine Care Knows <span className="text-[#3d864b] font-urbanist-extrabold block mt-2">No Limits</span>
                    </h2>
                    <div className="w-8 h-12 md:w-10 md:h-16 mx-auto">
                        <img
                            src={img5}
                            alt="Infinity symbol"
                            className="w-full h-full"
                        />
                    </div>
                    <div>

                    </div>
                    <div className="space-y-4 md:space-y-6 lg:w-[700px] lg:pl-12 text-center font-urbanist-regular text-gray-700 text-base md:text-lg">
                        <p>
                            At Rejuvcare, the infinity symbol in our logo represents more than just a design—it embodies our
                            philosophy. Infinity signifies continuous care, unending compassion, and the seamless connection between
                            health, wellness, and rejuvenation.
                        </p>
                        <p>
                            We believe in a holistic approach that supports individuals and families throughout their journey,
                            providing care that adapts and evolves to meet your changing needs. Just like the infinity symbol, our
                            commitment to your well-being has no limits.
                        </p>
                        <p>
                            With Rejuvcare, you're not just receiving services; you're becoming part of an enduring relationship built
                            on trust, respect, and renewal. Together, we aim to create a life of endless possibilities, resilience,
                            and vitality.
                        </p>
                        {/*<img src={img3} alt="Infinity symbol" className="w-[250px] sm:w-[310px] md:w-[350px] -top-0 h-auto absolute" />*/}
                    </div>
                </div>
            </div>
            <div className="relative pt-16 pb-20">
                {/* Background Image - Fixed Positioning */}
                <div className="absolute inset-0 flex justify-start  items-start z-0">
                    <img
                        src={img3} // Make sure this image is properly imported
                        alt="Background shape"
                        className="object-contain w-[15%] h-full opacity-100"
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
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 justify-center items-center mt-10">

                    {/* Personalized Care */}
                    <div className="flex flex-col items-center text-center w-auto lg:w-[280px] max-w-xs mx-auto space-y-4">
                        <div className="w-14 h-16 mb-6">
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#47A66E]">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl  font-urbanist-semibold">Personalized Care Solutions</h3>
                        <p className="text-gray-600 max-w-md mx-auto leading-[120%] font-urbanist-regular">
                            Rejuvcare provides care tailored to your unique needs, ensuring a customized approach that supports your independence and well-being at every stage of life.
                        </p>
                    </div>

                    {/* Compassionate Care */}
                    <div className="flex flex-col items-center text-center w-auto lg:w-[280px] max-w-xs mx-auto space-y-4">
                        <div className="w-14 h-16 mb-6">
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#47A66E]">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-urbanist-semibold ">Compassionate and Trusted Care</h3>
                        <p className="text-gray-600 max-w-sm mx-auto leading-[120%] font-urbanist-regular">
                            Our dedicated team delivers care with warmth, empathy, and professionalism, fostering trust and building meaningful connections with those we serve.
                        </p>
                    </div>

                    {/* Holistic Health */}
                    <div className="flex flex-col items-center text-center w-auto lg:w-[280px] max-w-xs mx-auto space-y-4">
                        <div className="w-14 h-16 mb-6">
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#47A66E]">
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 16v-4m0-4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-urbanist-semibold">Holistic Health and Well-Being</h3>
                        <p className="text-gray-600 max-w-sm mx-auto leading-[120%] font-urbanist-regular">
                            We prioritize the whole person, addressing physical, emotional, and mental well-being to help you live a healthier, more fulfilled life.
                        </p>
                    </div>
                </div>
            </div>



            <div className="bg-[#ADCF5B1A]  pt-8 px-8 flex flex-col md:flex-row items-center justify-between">
t
                <div className="w-full md:w-2/3 lg:w-[550px] space-y-6">
                    <h1 className="text-4xl font-urbanist-regular leading-tight">
                        We're Committed To Transforming Care Into A Journey Of{' '}
                        <span className="text-[#3d864b] font-urbanist-extrabold">Rejuvenation</span> And Empowerment.
                    </h1>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-4 pb-16 md:w-[450px]">
                        <div className="border-[#3D864B] border-1 w-auto h-auto lg:w-[230px] lg:h-[200px] rounded-lg p-4 shadow-sm">
                            <User2 className="w-6 h-6 text-[#3d864b] mb-2" />
                            <h3 className="text-[#3d864b] font-urbanist-bold mb-2">
                                Personalized Care, Every Step Of The Way
                            </h3>
                            <p className="text-sm text-gray-600 font-urbanist-regular leading-[120%]">
                                We tailor our services to fit your unique needs, ensuring compassionate, individual-focused care that supports your health and independence.
                            </p>
                        </div>



                        <div className="border-[#3D864B] border-1 w-auto h-auto lg:w-[230px] lg:h-[200px] rounded-lg p-4 shadow-sm">
                            <Heart className="w-6 h-6 text-[#3d864b] mb-2" />
                            <h3 className="text-[#3d864b] font-urbanist-bold mb-2">
                                Your Well-Being Is Our Priority
                            </h3>
                            <p className="text-sm text-gray-600 font-urbanist-regular leading-[120%]">
                                Our mission is to foster a sense of vitality and purpose, helping you embrace every stage of life with confidence and dignity.
                            </p>
                        </div>

                        <div className="border-[#3D864B] border-1 w-auto h-auto lg:w-[230px] lg:h-[200px] rounded-lg p-4 shadow-sm">
                            <Shield className="w-6 h-6 text-[#3d864b] mb-2" />
                            <h3 className="text-[#3d864b] font-urbanist-bold mb-2">
                                Safe, Trusted, And Reliable
                            </h3>
                            <p className="text-sm text-gray-600 font-urbanist-regular leading-[120%]">
                                We uphold the highest standards of safety, privacy, and professionalism, creating a secure environment for you and your loved ones.
                            </p>
                        </div>

                        <div className="border-[#3D864B] border-1 w-auto h-auto lg:w-[230px] lg:h-[200px] rounded-lg p-4 shadow-sm">
                            <Clock className="w-6 h-6 text-[#3d864b] mb-2" />
                            <h3 className="text-[#3d864b] font-urbanist-bold mb-2">
                                Here For You, Always
                            </h3>
                            <p className="text-sm text-gray-600 font-urbanist-regular leading-[120%]">
                                Whether it's adapting to your changing needs or offering consistent support, we're dedicated to being a partner in your journey toward a better quality of life.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center">
                    <div className="relative w-100 md:h-[500px] lg:h-[700px]">
                        <div className="absolute inset-0">
                            <img
                                src={img2}
                                alt="Healthcare Professional"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                </div>
                <img
                    src={img6} // Make sure this image is properly imported
                    alt="Background shape"
                    className="object-contain w-[15%] h-full absolute opacity-100 left-[85%]"
                />
            </div>
            <div className="flex justify-center items-center py-16 px-4 text-center">
                <div className="absolute right-[80%] ">
                    <img
                        src={img3} // Make sure this image is properly imported
                        alt="Background shape"
                        className="object-contain w-[55%] h-full opacity-100"
                    />
                </div>

                <div className="max-w-3xl">
                    <h1 className="text-3xl font-urbanist-regular md:text-4xl leading-relaxed ">
                        At Rejuvcare, we're dedicated to{' '}
                        <span className="inline-block font-urbanist-medium bg-[#3D864B] text-white px-3 py-1 rounded-md">
            empowering lives
          </span>
                        {' '}with compassionate <br/>care, fostering health,{' '}
                        <span className="inline-block font-urbanist-medium bg-[#3D864B] text-white px-3 py-1 rounded-md">
            independence,
          </span>
                 <br/>       {' '}and a brighter tomorrow.
                    </h1>
                </div>
            </div>

        </div>

    );
};

export default About;
