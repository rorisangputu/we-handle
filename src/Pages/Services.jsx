import { useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaHeadset, FaArrowRight } from "react-icons/fa6";
import { BsFillCalendar2DateFill, BsClipboardDataFill } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
//import { GiTechnologyShare } from "react-icons/gi";

const AccordionItem = ({ title, content, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-lg">
            <button
                className="w-full flex items-center justify-between p-5 bg-blue-200 rounded-t-lg hover:bg-blue-300 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-3">
                    <div className="bg-blue-300 rounded-full p-3 h-12 w-12 flex justify-center items-center">
                        {icon}
                    </div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>
                <FaArrowRight className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""} h-6 w-6`} />
            </button>
            {isOpen && (
                <div className="p-5">
                    <p className="text-sm">{content}</p>
                </div>
            )}
        </div>
    );
};

const Services = () => {
    return (
        <div className="w-full bg-[#EDF1F3]">
            <div className="w-[90%] mx-auto py-10">
                {/* Header */}
                <div className="text-center py-5">
                    <h1 className="text-4xl font-light">Our Comprehensive Services</h1>
                    <p className="mt-4 text-base max-w-3xl mx-auto">
                        Explore our extensive range of services designed to elevate your business operations and drive growth. Our dedicated team is committed to delivering tailored solutions that meet your unique needs.
                    </p>
                </div>

                {/* Accordions */}
                <div className="space-y-5">
                    <AccordionItem
                        title="Social Media Management"
                        content={
                            <>
                                <p className="mb-2">
                                    Elevate your brand’s online presence with our tailored social media management services. We create engaging content, manage your social profiles, and analyze performance metrics to ensure your brand stands out in the digital landscape.
                                </p>
                                <h3 className="text-lg font-semibold">What We Offer:</h3>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Content Creation</li>
                                    <li>Engagement Strategies</li>
                                    <li>Performance Analytics</li>
                                    <li>Ad Campaign Management</li>
                                </ul>
                            </>
                        }
                        icon={<RiInstagramFill className="h-8 w-8 text-blue-600" />}
                    />

                    <AccordionItem
                        title="Customer Support"
                        content={
                            <>
                                <p className="mb-2">
                                    Ensure your customers receive top-notch support with our dedicated team. We handle inquiries, resolve issues promptly, and provide a seamless experience to enhance customer satisfaction and loyalty.
                                </p>
                                <h3 className="text-lg font-semibold">Our Support Includes:</h3>
                                <ul className="list-disc list-inside mt-2">
                                    <li>24/7 Support Availability</li>
                                    <li>Multichannel Communication</li>
                                    <li>Issue Tracking and Resolution</li>
                                    <li>Feedback and Improvement</li>
                                </ul>
                            </>
                        }
                        icon={<FaHeadset className="h-8 w-8 text-blue-600" />}
                    />

                    <AccordionItem
                        title="Calendar Management"
                        content={
                            <>
                                <p className="mb-2">
                                    Simplify your scheduling and stay organized with our calendar management services. We handle appointments, meetings, and reminders to ensure your schedule runs smoothly and efficiently.
                                </p>
                                <h3 className="text-lg font-semibold">Services Offered:</h3>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Appointment Scheduling</li>
                                    <li>Meeting Coordination</li>
                                    <li>Reminder Services</li>
                                    <li>Calendar Integration</li>
                                </ul>
                            </>
                        }
                        icon={<BsFillCalendar2DateFill className="h-8 w-8 text-blue-600" />}
                    />

                    <AccordionItem
                        title="Data Analysis"
                        content={
                            <>
                                <p className="mb-2">
                                    Harness the power of data with our analysis and reporting services. We provide actionable insights, detailed reports, and strategic recommendations to help you make informed business decisions.
                                </p>
                                <h3 className="text-lg font-semibold">Data Solutions:</h3>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Data Collection and Cleaning</li>
                                    <li>Trend Analysis</li>
                                    <li>Custom Reports</li>
                                    <li>Strategic Insights</li>
                                </ul>
                            </>
                        }
                        icon={<BsClipboardDataFill className="h-8 w-8 text-blue-600" />}
                    />

                    <AccordionItem
                        title="Cloud Services"
                        content={
                            <>
                                <p className="mb-2">
                                    Optimize your IT infrastructure with our cloud services. We offer cloud storage, computing solutions, and secure data management to enhance flexibility, scalability, and cost-efficiency.
                                </p>
                                <h3 className="text-lg font-semibold">Our Cloud Offerings:</h3>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Cloud Storage Solutions</li>
                                    <li>Virtual Servers</li>
                                    <li>Data Backup and Recovery</li>
                                    <li>Cloud Security</li>
                                </ul>
                            </>
                        }
                        icon={<AiOutlineCloudServer className="h-8 w-8 text-blue-600" />}
                    />

                    <AccordionItem
                        title="Team Building and Training"
                        content={
                            <>
                                <p className="mb-2">
                                    Enhance your team's skills and cohesion with our training and team-building services. We offer customized workshops, training programs, and activities to foster collaboration and professional growth.
                                </p>
                                <h3 className="text-lg font-semibold">Training and Development:</h3>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Customized Workshops</li>
                                    <li>Leadership Training</li>
                                    <li>Team Building Activities</li>
                                    <li>Skill Development Programs</li>
                                </ul>
                            </>
                        }
                        icon={<IoIosPeople className="h-8 w-8 text-blue-600" />}
                    />

                    <AccordionItem
                        title="Technology Consulting"
                        content={
                            <>
                                <p className="mb-2">
                                    Stay ahead with our technology consulting services. We provide expert advice on the latest technologies, digital transformation strategies, and IT solutions to optimize your business processes.
                                </p>
                                <h3 className="text-lg font-semibold">Consulting Services:</h3>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Technology Assessments</li>
                                    <li>Digital Transformation Planning</li>
                                    <li>IT Solution Recommendations</li>
                                    <li>Innovation Strategy</li>
                                </ul>
                            </>
                        }
                    // icon={<GiTechnologyShare className="h-8 w-8 text-blue-600" />}
                    />

                </div>

                {/* Call to Action */}
                <div className="text-center py-10">
                    <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-light hover:bg-gray-800 transition-colors duration-300">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
