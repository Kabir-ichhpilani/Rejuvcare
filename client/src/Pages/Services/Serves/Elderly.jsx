import React from 'react';
import { useState } from 'react';
import impimg1 from '../../../assets/Group 53.png'
import impimg2 from '../../../assets/Group 54.png'
import impimg3 from '../../../assets/Group 66.png'
import impimg4 from '../../../assets/Group 67.png'
import { Plus, Minus } from 'lucide-react';
import img1 from '../../../assets/Frame 55.png'
import img2 from '../../../assets/portrait-african-young-nurse-helping-old-elderly-disable-man-grandfather-walk-using-walker-equipment-bedroom-senior-patient-nursing-home-moving-with-walking-frame-nurse-support.png'
import img3 from '../../../assets/image.png'
import icon1 from '../../../assets/Vector (6).png'
import icon2 from '../../../assets/Vector (7).png'
import icon3 from '../../../assets/Vector (8).png'
import icon4 from '../../../assets/Vector (9).png'
import icon5 from '../../../assets/Vector (10).png'
import icon6 from '../../../assets/Vector (11).png'
import icon7 from '../../../assets/Vector (12).png'
import icon8 from '../../../assets/Vector (13).png'
import icon9 from '../../../assets/Vector (14).png'

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
            <img src={icon} className="lg:w-17 lg:h-12 sm:w-12 sm:h-9  xl:w-23 xl:h-16 text-[#3D864B] " />
        </div>
        <div>
            <h3 className="font-urbanist-semibold md:text-sm lg:text-xl xl:text-2xl mb-1">{title}</h3>
            <p className="text-black font-urbanist-regular md:text-sm lg:text-xl xl:text-2xl">{description}</p>
        </div>
    </div>
);

const Elderly = () => {
    const [openIndex, setOpenIndex] = useState(5);
    const services = [
        {
            icon: icon7,
            title: "Personalized Care",
            description: "Tailored support for each individual's unique needs."
        },
        {
            icon: icon8,
            title: "Companionship",
            description: "Building meaningful relationships with seniors."
        },
        {
            icon: icon1,
            title: "Health Monitoring",
            description: "Regular monitoring to ensure optimal well-being."
        },
        {
            icon: icon2,
            title: "Professional Caregivers",
            description: "Trained, experienced, and compassionate professionals."
        },
        {
            icon: icon3,
            title: "Independence Support",
            description: "Helping seniors maintain dignity and independence."
        },
        {
            icon: icon6,
            title: "Flexible Scheduling",
            description: "Care that adapts to your family's schedule."
        }
    ];
    const benefits = [
        {
            icon: icon1,
            title: "Enhanced Quality of Life",
            description: "Personalized care plans to promote independence and dignity"
        },
        {
            icon: icon6,
            title: "Peace of Mind for Families",
            description: "Professional caregivers ensuring safety and well-being for loved ones"
        },
        {
            icon: icon9,
            title: "Emotional and Mental Well-Being",
            description: "Fostering meaningful connections and reducing loneliness"
        }
    ];
    const faqs = [
        {
            question: "What types of tasks can your caregivers assist with?",
            answer: "Our caregivers can assist with daily living activities, medication reminders, meal preparation, light housekeeping, transportation, and personal care tasks. We tailor our services to meet each client's specific needs."
        },
        {
            question: "Can I customize the care plan for my loved one?",
            answer: "Yes, we create personalized care plans based on individual needs, preferences, and schedules. Our care plans are flexible and can be adjusted as needs change."
        },
        {
            question: "Are your caregivers trained for specialized care?",
            answer: "All our caregivers undergo comprehensive training in elderly care, safety protocols, and emergency response. Many also have specialized training in dementia care, post-surgery recovery, and other specific conditions."
        },
        {
            question: "How do you ensure safety during caregiving?",
            answer: "We maintain strict safety protocols, conduct regular training, perform background checks on all caregivers, and maintain emergency response procedures. We also regularly assess the home environment for potential hazards."
        },
        {
            question: "Can services be scheduled for specific hours or days?",
            answer: "Yes, we offer flexible scheduling options including hourly, daily, or live-in care. We work with families to create a schedule that best meets their needs and preferences."
        },
        {
            question: "What if my loved one's needs change over time?",
            answer: "We regularly reassess care plans to adapt to any changes, ensuring continued support and comfort for your loved one."
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
                        Elderly Care <br/>Services
                    </h1>

                    <p className="text-lg text-white font-urbanist-regular leading-[23.33px] mb-8 max-w-[540px]">
                        Our compassionate elderly care services empower seniors to maintain independence while living with dignity and comfort. We assist with daily tasks, health monitoring, and provide companionship to enrich their lives.
                    </p>


                    <button

                        className="bg-[#3D864B] text-white px-6 sm:px-8 py-2 sm:py-3 font-urbanist  border-r-[3px] border-b-[3px] border-[#ADCF5B] font-urbanist-bold rounded-lg hover:bg-opacity-90 transition-all text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
           <div className="py-16 px-4 max-w-[1440px] mx-auto">
               <h2 className="text-[36px] font-semibold text-center mb-12">
                   Why Choose Our <span className="text-[#3D864B]">Elderly Care</span> Services
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
                   <img src={impimg2} className="absolute w-100  opacity-30 -left-[0%] h-100"/>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                       {/* Left Content */}
                       <div className="max-w-[550px] lg:pl-12 xl:pl-0 md:pl-14 px-4 ">
                           <h2 className="xl:text-5xl lg:text-4xl md:text-2xl lg:leading-normal xl:leading-[70px] font-urbanist-bold mb-8">
                               Empowering Seniors With{' '}
                               <span className="text-[#3D864B]">Compassionate Support</span>
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
                               className=" relative w-auto xl:h-[650px] lg:h-[550px] md:h-[450px] md:pr-10  object-cover rounded-2xl"
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
                       Rejuvcare provides trusted elderly care solutions, promoting independence and<br/> dignity by{' '}
                       <span className="inline-block font-urbanist-medium bg-[#3D864B] text-white px-3 py-1 rounded-md">simplifying tasks</span>
                       {' '}and{' '}
                       <span className="inline-block font-urbanist-medium bg-[#3D864B] mt-2 text-white px-3 py-1 rounded-md">supporting well-being .</span>
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
                               className="absolute left-[-120px] top-[70px] lg:w-[70%] h-auto object-contain opacity-0 lg:opacity-50 z-50"
                           />

                           {/* Main Foreground Image */}
                           <img
                               src={img3}
                               alt="Senior receiving compassionate care"
                               className="relative w-auto md:h-[450px] lg:h-[600px] z-50 object-cover rounded-2xl shadow-lg"
                           />
                       </div>

                       {/* Right Content */}
                       <div className="space-y-2  max-w-[550px]">
                           <h2 className="text-[35px] lg:text-[54px]  xl:pb-8 lg:leading-[62px] font-urbanist-bold">
                               Provide More Compassionate{' '}
                               <span className="text-[#3D864B]">Care</span>
                           </h2>

                           <div className="space-y-4 max-w-[660px] xl:w-[620px] font-urbanist-regular text-[15px] lg:text-[21px]">
                               <p className="text-gray-600 xl:mb-4">
                                   As people age, maintaining independence and dignity becomes
                                   increasingly important. However, daily challenges can often get in
                                   the way of leading a fulfilling life.
                               </p>

                               <p className="text-gray-600">
                                   Rejuvcare provides personalized elderly care services tailored to
                                   individual needs. From assistance with daily tasks to health
                                   monitoring and companionship, we ensure seniors receive the
                                   support they need to live comfortably and confidently. With
                                   Rejuvcare, families can trust their loved ones are in caring, capable
                                   hands.
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
export default Elderly
