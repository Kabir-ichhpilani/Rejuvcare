import React from 'react';
import { useState } from 'react';
import impimg1 from '../../../assets/Group 53.png'
import impimg2 from '../../../assets/Group 54.png'
import impimg3 from '../../../assets/Group 66.png'
import impimg4 from '../../../assets/Group 67.png'
import { Plus, Minus } from 'lucide-react';
import img1 from '../../../assets/Frame 57.png'
import img2 from '../../../assets/child-with-cerebral-palsy-painting-mental-physical-disorders-sensory-therapy.png'
import img3 from '../../../assets/image78.png'
import icon1 from '../../../assets/ok1.png'
import icon2 from '../../../assets/ok2.png'
import icon3 from '../../../assets/ok3.png'
import icon4 from '../../../assets/ok4.png'
import icon5 from '../../../assets/ok5.png'
import icon6 from '../../../assets/ok6.png'
import icon7 from '../../../assets/ok7.png'
import icon8 from '../../../assets/ok8.png'
import icon9 from '../../../assets/ok9.png'

import {  } from 'lucide-react';
const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-[#E9EFDE] p-6 w-full max-w-[400px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[420px] h-auto rounded-lg mx-auto">
        <img src={icon} className="w-10 h-10 text-[#3D864B] mb-4" />
        <h3 className="text-[24px] lg:text-[28px] xl:text-[34px] max-w-[140px]  font-urbanist-semibold mb-2">
            {title}
        </h3>
        <p className="text-gray-600 font-urbanist-medium text-[14px] lg:text-[18px] xl:text-[20px]">
            {description}
        </p>
    </div>
);

const BenefitItem = ({  icon, title, description }) => (
    <div className="flex items-start space-x-4 mb-6">
        <div className="bg-[#E9EFDE] p-4 w-17 h-17 xl:w-25 xl:h-23 rounded-2xl ">
            <img src={icon} className="lg:w-17 lg:h-12 sm:w-12 sm:h-9  xl:w-23 xl:h-16 text-[#3D864B] " />
        </div>
        <div>
            <h3 className="font-urbanist-semibold md:text-sm lg:text-xl xl:text-2xl mb-1">{title}</h3>
            <p className="text-black font-urbanist-regular md:text-sm lg:text-xl xl:text-2xl">{description}</p>
        </div>
    </div>
);

const Childcare = () => {
    const [openIndex, setOpenIndex] = useState(5);
    const services = [
        {
            icon: icon1,
            title: "Nurturing Environment",
            description: "Creating a safe and supportive space for children."
        },
        {
            icon: icon2,
            title: "Educational Support",
            description: "Encouraging learning and developmental milestones."
        },
        {
            icon: icon3,
            title: "Experienced Caregivers",
            description: "Trained professionals fostering growth and care."
        },
        {
            icon: icon4,
            title: "Tailored Programs",
            description: "Customizable care plans based on needs."
        },
        {
            icon: icon5,
            title: "Safe and Secure",
            description: "Prioritizing safety with thorough background checks."
        },
        {
            icon: icon6,
            title: "Flexible Hours",
            description: "Care schedules that align with family needs."
        }
    ];
    const benefits = [
        {
            icon: icon7,
            title: "Safe and Supportive Environment",
            description: "Creating a secure space where children thrive."
        },
        {
            icon: icon8,
            title: "Growth and Development Focused",
            description: "Tailored care to nurture physical and emotional growth."
        },
        {
            icon: icon9,
            title: "Trusted Caregivers",
            description: "Experienced professionals dedicated to your child’s happiness."
        }
    ];
    const faqs = [
        {
            question: "What age groups do your child care services cover?",
            answer: "We tailor our services to meet the specific needs of each child."
        },
        {
            question: "Do you offer educational activities as part of child care?",
            answer: "Yes, we create flexible, personalized care plans that include educational activities."
        },
        {
            question: "Are your caregivers trained in child safety?",
            answer: "Yes, all caregivers receive training in safety protocols and emergency response."
        },
        {
            question: "Can I request a specific caregiver for my child?",
            answer: "Yes, we allow requests and ensure all caregivers are thoroughly vetted."
        },
        {
            question: "Do you provide care for children with special needs?",
            answer: "Yes, we offer flexible care options tailored to children with special needs."
        },
        {
            question: "Is child care available during evenings or weekends?",
            answer: "Yes, we provide care during evenings and weekends to fit your schedule."
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
                <div className="absolute z-10 max-w-4xl flex justify-center py-30 px-6 lg:px-12 xl:px-20 ">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-urbanist-bold leading-[52px] text-white mb-6">
                            Child Care <br/>Services
                        </h1>

                        <p className="text-lg text-white font-urbanist-regular leading-[23.33px] mb-8 max-w-[540px]">
                            Rejuvcare provides nurturing and reliable child care tailored to support your child’s growth, learning, and well-being, offering parents peace of mind every step of the way.
                        </p>


                        <button

                            className="inline-block cursor-pointer bg-[#3D864B] inset-shadow-sm shadow-[#ADCF5B] text-white px-6 md:px-8 py-3 rounded-lg hover:bg-[#3d8f5d] transition-colors"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-16 px-4 max-w-[1440px] mx-auto">
                <h2 className="text-[36px] font-semibold text-center mb-12">
                    Why Choose Our <span className="text-[#3D864B]">Child Care</span> Services
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
                                Nurturing Young Minds With{' '}
                                <span className="text-[#3D864B]">Care And Support</span>
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
            <div className="flex justify-center w-screen bg-[#E9EFDE] items-center text-center relative">
                {/* Positioned image similar to the screenshot */}
                <img src={impimg4} className="absolute w-60 md:opacity-40 right-2 top-5/8 opacity-0 transform -translate-y-1/2 h-60" />

                <div className="max-w-3xl py-16 px-4">
                    <p className="text-3xl font-urbanist-regular md:text-4xl leading-[49px]">
                        Rejuvcare offers expert child care<br/> services, nurturing growth while lightening {' '}
                        <span className="inline-block font-urbanist-medium bg-[#3D864B] text-white px-3 py-1 rounded-md">parental responsibilities</span>
                        {' '}with tailored care

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
                               Deliver Exceptional {' '}
                                <span className="text-[#3D864B]"> Child Care</span>
                            </h2>

                            <div className="space-y-4 max-w-[660px] xl:w-[620px] font-urbanist-regular text-[15px] lg:text-[21px]">
                                <p className="text-gray-600">
                                    Balancing life and parenting can be overwhelming, especially when children require attentive care to grow and thrive.
                                </p>

                                <p className="text-gray-600">


                                    Rejuvcare offers nurturing child care services designed to meet the unique needs of every child. From managing daily routines to providing emotional and educational support, our services create a safe, supportive environment where children can flourish. Parents can rest assured knowing their children are in loving hands.
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
export default Childcare
