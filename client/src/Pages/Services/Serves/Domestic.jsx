import React from 'react';
import { useState } from 'react';
import impimg1 from '../../../assets/Group 53.png'
import impimg2 from '../../../assets/Group 54.png'
import impimg3 from '../../../assets/Group 66.png'
import impimg4 from '../../../assets/Group 67.png'
import { Plus, Minus } from 'lucide-react';
import img1 from '../../../assets/image 2.png'
import img2 from '../../../assets/image 3.png'
import img3 from '../../../assets/image 4.png'
import icon1 from '../../../assets/kk1.png'
import icon2 from '../../../assets/kk2.png'
import icon3 from '../../../assets/kk3.png'
import icon4 from '../../../assets/kk4.png'
import icon5 from '../../../assets/kk5.png'
import icon6 from '../../../assets/kk6.png'
import icon7 from '../../../assets/Kk7.png'
import icon8 from '../../../assets/kk8.png'
import icon9 from '../../../assets/kk9.png'

import {  } from 'lucide-react';
const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-[#E9EFDE] p-6 w-full max-w-[400px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[420px] h-auto rounded-lg mx-auto">
        <img src={icon} className="w-10 h-10 text-[#3D864B] mb-4" />
        <h3 className="text-[24px] lg:text-[28px] xl:text-[34px] max-w-[100px] font-urbanist-semibold mb-2">
            {title}
        </h3>
        <p className="text-gray-600 font-urbanist-medium text-[14px] lg:text-[18px] xl:text-[20px]">
            {description}
        </p>
    </div>
);

const BenefitItem = ({  icon, title, description }) => (
    <div className="flex items-start space-x-4 mb-6">
        <div className="bg-[#E9EFDE] p-4 w-24 h-17 xl:w-30 xl:h-23 rounded-2xl ">
            <img src={icon} className="lg:w-17 lg:h-12 sm:w-12 sm:h-9  xl:w-23 xl:h-18 text-[#3D864B] " />
        </div>
        <div>
            <h3 className="font-urbanist-semibold md:text-sm lg:text-xl xl:text-2xl mb-1">{title}</h3>
            <p className="text-black font-urbanist-regular md:text-sm lg:text-xl xl:text-2xl">{description}</p>
        </div>
    </div>
);


const Domestic = () => {
    const [openIndex, setOpenIndex] = useState(5);
    const services = [
        {
            icon: icon1,
            title: "Reliable Assistance",
            description: "Dependable support for your household tasks."
        },
        {
            icon: icon2,
            title: "Efficient Service",
            description: "Quick and effective completion of household chores."
        },
        {
            icon: icon3,
            title: "Tailored Tasks",
            description: "Custom solutions to meet your household needs."
        },
        {
            icon: icon4,
            title: "Professional Staff",
            description: "Skilled, trained professionals for household help."
        },
        {
            icon: icon5,
            title: "Time-Saving",
            description: "Helping you focus on what matters most."
        },
        {
            icon: icon6,
            title: "Affordable Pricing",
            description: "Quality service at a reasonable cost."
        }
    ];

    const benefits = [
        {
            icon: icon7,
            title: "Effortless Home Management",
            description: "Assistance with daily chores to simplify your life."
        },
        {
            icon: icon8,
            title: "Customized Household Solutions",
            description: "Tailored tasks to suit your home's unique needs."
        },
        {
            icon: icon9,
            title: "Professional and Reliable Help",
            description: "Trained staff ensuring quality and dependability."
        }
    ];
    const faqs = [
        {
            question: "What tasks can your domestic helpers handle?",
            answer: "Our domestic helpers can assist with a wide range of household tasks including cleaning, laundry, organizing, meal preparation, and basic household maintenance. We ensure all tasks are performed to high standards of quality and cleanliness."
        },
        {
            question: "Can I customize the tasks based on my needs?",
            answer: "Yes, we offer fully customizable service plans. You can specify exactly which tasks you need help with and how you'd like them performed. We'll work with you to create a cleaning plan that meets your specific requirements."
        },
        {
            question: "Are your staff members background-checked?",
            answer: "Yes, all our staff members undergo thorough background checks, reference verification, and professional training before joining our team. We prioritize your safety and peace of mind."
        },
        {
            question: "Do you offer one-time or recurring services?",
            answer: "We offer both one-time cleaning services and recurring service plans. You can choose weekly, bi-weekly, or monthly visits based on your needs and schedule."
        },
        {
            question: "Can I adjust the schedule or cancel services if needed?",
            answer: "Yes, we offer flexible scheduling and understand that plans can change. You can adjust or cancel your service with appropriate notice without any penalties."
        },
        {
            question: "What areas of my home can you clean?",
            answer: "We cover all areas, including kitchens, bathrooms, bedrooms, living spaces, and more, ensuring your home is clean and well-maintained."
        }
    ];

    return (

        <div>
            <div className="relative min-h-[600px] w-full overflow-hidden">
                {/* Background Image Container */}
                <div className="absolute inset-0 ">
                    <img
                        src={img1}
                        alt="Caring professional helping senior client"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Overlay */}
                <div className="absolute z-10 max-w-4xl flex justify-center py-30 px-6 lg:px-12 xl:px-20">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-urbanist-bold leading-[52px] text-white mb-6">
                            Domestic Help <br/>Services
                        </h1>

                        <p className="text-lg text-white font-urbanist-regular leading-[23.33px] mb-8 max-w-[540px]">
                            Our dependable domestic help services simplify your daily life, offering assistance with cleaning, meal preparation, and household management, so you can focus on what truly matters.
                        </p>


                        <button

                            className="bg-[#3D864B] text-white px-6 sm:px-8 py-2 sm:py-3 font-urbanist  border-r-[3px] border-b-[3px] border-[#ADCF5B] font-urbanist-regular rounded-lg hover:bg-opacity-90 transition-all text-base sm:text-lg md:text-xl lg:text-xl cursor-pointer"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-16 px-4 max-w-[1440px] mx-auto">
                <h2 className="text-[36px] font-semibold text-center mb-12">
                    Why Choose Our <span className="text-[#3D864B]">Domestic Help</span> Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 md:px-6 lg:px-10 xl:px-16">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
            <div className="py-16 ">
                <div className="max-w-8xl xl:pl-28">
                    <img src={impimg2} className="absolute w-100  opacity-40 -left-[0%] h-100"/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="max-w-[550px] lg:pl-12 xl:pl-0 md:pl-14 px-4">
                            <h2 className="xl:text-5xl lg:text-4xl md:text-2xl lg:leading-normal xl:leading-[70px] font-urbanist-bold mb-8">
                                Reliable Support For A{' '}
                                <span className="text-[#3D864B]">Well-Managed Home</span>
                            </h2>

                            <div className="space-y-6 ">
                                {benefits.map((benefit, index) => (
                                    <BenefitItem
                                        key={index}
                                        icon={benefit.icon}
                                        title={benefit.title}
                                        description={benefit.description}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}

                        <img
                            src={img2}
                            alt="Caregiver assisting senior"
                            className="relative w-auto xl:h-[650px] lg:h-[550px] md:h-[450px] md:pr-10  object-cover rounded-2xl"
                        />
                    </div>


                    {/* Bottom Message */}

                </div>

            </div>
            <div className="flex justify-center  bg-[#E9EFDE] items-center text-center relative">
                {/* Positioned image similar to the screenshot */}
                <img src={impimg4} className="absolute w-60 md:opacity-40 right-2 top-5/8 opacity-0 transform -translate-y-1/2 h-60" />

                <div className="max-w-3xl py-16 px-4">
                    <p className="text-3xl font-urbanist-regular md:text-4xl leading-[49px]">
                        Rejuvcare delivers dependable <br/>domestic help solutions, {' '} <span className="inline-block font-urbanist-medium bg-[#3D864B] text-white px-3 py-1 rounded-md">streamlining</span>
                        {' '} household tasks so you can focus on what matters most.


                    </p>
                </div>
            </div>

            <div className="py-16 px-4 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Image with Background */}
                        <div className="relative sm:pl-4 md:pl-12">
                            {/* Faded Background Image (Correct Positioning) */}
                            <img
                                src={impimg3} // Replace with actual background image
                                alt="Decorative background"
                                className="absolute left-[-120px] top-[70px] lg:w-[70%] h-auto object-contain opacity-0 lg:opacity-100 z-50"
                            />

                            {/* Main Foreground Image */}
                            <img
                                src={img3}
                                alt="Senior receiving compassionate care"
                                className="relative w-auto md:h-[450px] lg:h-[600px] z-50 object-cover rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-[35px] lg:text-[54px]  xl:pb-8 lg:leading-[62px] font-urbanist-bold">
                                Simplify Your  {' '}
                                <span className="text-[#3D864B]"> Home Care</span>
                            </h2>

                            <div className="space-y-4 max-w-[660px] xl:w-[620px] font-urbanist-regular text-[15px] lg:text-[21px]">
                                <p className="text-gray-600">
                                    Keeping a home running smoothly takes time and effort, often leaving you feeling overwhelmed and stretched thin.
                                </p>

                                <p className="text-gray-600">


                                    Rejuvcare’s domestic help services simplify life by taking care of household tasks like cleaning, meal preparation, and organization. Our reliable and professional team ensures your home stays in top shape, giving you the freedom to focus on what truly matters to you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="py-16 px-4 md:px-10 lg:px-24 mx-auto">
                <h2 className="text-[36px] font-urbanist-bold text-center mb-8">
                    <span className="text-[#3D864B]">Still Have Questions?</span>
                </h2>

                <div className="space-y-4 ">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b-2 border-black  last:border-b-0">
                            <button
                                className="w-full py-4 flex justify-between items-center text-left"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className="font-urbanist-medium text-2xl">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-[#3D864B] shrink-0 ml-4" />
                                ) : (
                                    <Plus className="h-5 w-5 text-[#3D864B] shrink-0 ml-4" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-48' : 'max-h-0'
                                }`}
                            >
                                <p className="md:py-1 py-0 text-gray-600   font-urbanist-regular text-xl md:text-2xl">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Domestic
