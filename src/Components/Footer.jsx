import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Footer = () => {
    return (
        <div className="w-full bg-[#0d0d0d]">
            <div className="w-[90%] mx-auto p-7">
                {/* Header Section */}
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-between my-5">
                    <h1 className="text-5xl text-white">WeHandle</h1>
                    <div className="mt-5 md:mt-0">
                        <h3 className="text-white mb-3">Stay informed with our newsletter.</h3>
                        <div className="flex border rounded-2xl h-10 items-center overflow-hidden">
                            <input
                                className="bg-transparent text-center font-light text-sm text-white flex-grow px-4 py-1"
                                type="text"
                                placeholder="Type your address"
                            />
                            <button className="p-2">
                                <FaArrowRightLong className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Footer Links */}
                <div className="my-5 flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-5 md:mb-0">
                        <p className="text-white font-light cursor-pointer">Home</p>
                        <p className="text-white font-light cursor-pointer">About</p>
                        <p className="text-white font-light cursor-pointer">Services</p>
                        <p className="text-white font-light cursor-pointer">Contact</p>
                        <p className="text-white font-light cursor-pointer">Blog</p>
                        <p className="text-white font-light cursor-pointer">FAQ</p>
                        <p className="text-white font-light cursor-pointer">Terms</p>
                        <p className="text-white font-light cursor-pointer">Privacy</p>
                        <p className="text-white font-light cursor-pointer">Careers</p>
                        <p className="text-white font-light cursor-pointer">Support</p>
                        <p className="text-white font-light cursor-pointer">Press</p>
                        <p className="text-white font-light cursor-pointer">Sitemap</p>
                    </div>
                    <div className=" flex flex-col justify-end">
                        <div className="flex gap-3 mb-3">
                            <HiOutlineOfficeBuilding className="text-white" />
                            <p className="text-white font-light">Johannesburg, South Africa</p>
                        </div>
                        <div className="flex gap-3 mb-3">
                            <HiOutlineOfficeBuilding className="text-white" />
                            <p className="text-white font-light">+27 11 023 0310</p>
                        </div>
                        <div className="flex gap-3">
                            <HiOutlineOfficeBuilding className="text-white" />
                            <p className="text-white font-light">support@wehandle.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
