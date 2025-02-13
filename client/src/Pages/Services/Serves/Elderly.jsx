import React from 'react';
import { Users, Heart, HeartPulse, UserCheck, Award, Calendar,Smile,Brain } from 'lucide-react';
import img1 from '../../../assets/Frame 55.png'
import img2 from '../../../assets/portrait-african-young-nurse-helping-old-elderly-disable-man-grandfather-walk-using-walker-equipment-bedroom-senior-patient-nursing-home-moving-with-walking-frame-nurse-support.png'
const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-[#E9EFDE] p-6 w-[300px]  rounded-lg">
        <Icon className="w-8 h-8 text-emerald-600 mb-4" />
        <h3 className="text-2xl font-urbanist-bold mb-2">{title}</h3>
        <p className="text-gray-600 font-urbanist-medium text-sm">{description}</p>
    </div>
);

const BenefitItem = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4 mb-6">
        <div className="bg-green-50 p-2 rounded-full">
            <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
);

const Elderly = () => {
    const services = [
        {
            icon: Users,
            title: "Personalized Care",
            description: "Tailored support for each individual's unique needs."
        },
        {
            icon: Heart,
            title: "Companionship",
            description: "Building meaningful relationships with seniors."
        },
        {
            icon: HeartPulse,
            title: "Health Monitoring",
            description: "Regular monitoring to ensure optimal well-being."
        },
        {
            icon: UserCheck,
            title: "Professional Caregivers",
            description: "Trained, experienced, and compassionate professionals."
        },
        {
            icon: Award,
            title: "Independence Support",
            description: "Helping seniors maintain dignity and independence."
        },
        {
            icon: Calendar,
            title: "Flexible Scheduling",
            description: "Care that adapts to your family's schedule."
        }
    ];
    const benefits = [
        {
            icon: Heart,
            title: "Enhanced Quality of Life",
            description: "Personalized care plans to promote independence and dignity"
        },
        {
            icon: Smile,
            title: "Peace of Mind for Families",
            description: "Professional caregivers ensuring safety and well-being for loved ones"
        },
        {
            icon: Brain,
            title: "Emotional and Mental Well-Being",
            description: "Fostering meaningful connections and reducing loneliness"
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
            <div className="absolute z-10 max-w-4xl flex justify-center py-30   px-24">
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-urbanist-bold leading-[52px] text-white mb-6">
                        Elderly Care <br/>Services
                    </h1>

                    <p className="text-lg text-white font-urbanist-regular leading-[33.33px] mb-8 max-w-[540px]">
                        Our compassionate elderly care services empower seniors to maintain independence while living with dignity and comfort. We assist with daily tasks, health monitoring, and provide companionship to enrich their lives.
                    </p>

                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition-colors duration-200">
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
           <div className="py-16 px-4 max-w-7xl mx-auto">
               <h2 className="text-3xl font-semibold text-center mb-12">
                   Why Choose Our <span className="text-emerald-600">Elderly Care</span> Services
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-0 md:px-12 lg:px-4 xl:px-28">
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
           <div className="py-16 px-4">
               <div className="max-w-7xl mx-auto">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                       {/* Left Content */}
                       <div>
                           <h2 className="text-4xl font-bold mb-8">
                               Empowering Seniors With{' '}
                               <span className="text-emerald-600">Compassionate Support</span>
                           </h2>

                           <div className="space-y-6">
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
                       <div className="rounded-2xl overflow-hidden ">
                           <img
                               src={img2}
                               alt="Caregiver assisting senior"
                               className="w-[550px] h-[500px] object-cover"
                           />
                       </div>
                   </div>

                   {/* Bottom Message */}
                   <div className="mt-16 text-center max-w-3xl mx-auto bg-green-50 p-8 rounded-lg">
                       <p className="text-xl">
                           Our service provides trusted elderly care solutions, promoting independence and dignity by{' '}
                           <span className="bg-emerald-600 text-white px-2 py-1 rounded">simplifying tasks</span>
                           {' '}and{' '}
                           <span className="bg-emerald-600 text-white px-2 py-1 rounded">supporting well-being</span>.
                       </p>
                   </div>
               </div>
           </div>
       </div>
    )
}
export default Elderly
