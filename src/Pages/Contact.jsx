import React from 'react';

const Contact = () => {
    return (
        <div className="w-full bg-[#EDF1F3] py-20">
            <div className="w-[90%] mx-auto flex flex-col gap-10">
                <div className="text-center">
                    <h1 className="text-4xl font-light">Get in Touch</h1>
                    <p className="mt-4 text-lg md:text-base">
                        We’d love to hear from you! Whether you have a question about our services or need assistance, our team is ready to help.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex flex-col gap-5 md:w-1/2">
                        <div>
                            <h2 className="text-2xl font-semibold">Contact Information</h2>
                            <p className="mt-2">Email: support@wehandle.com</p>
                            <p>Phone: +123 456 7890</p>
                            <p>Address: 123 Virtual Assistant St, WebCity, 4567</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Business Hours</h2>
                            <p className="mt-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                            <p>Saturday: 10:00 AM - 2:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                    <div className="bg-white p-10 rounded-xl shadow-lg w-full md:w-1/2">
                        <form className="flex flex-col gap-4">
                            <div>
                                <label className="block text-lg font-medium">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 p-2 rounded-lg mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 p-2 rounded-lg mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium">Message</label>
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full border border-gray-300 p-2 rounded-lg mt-1"
                                    rows="4"
                                />
                            </div>
                            <button className="bg-black text-white py-3 rounded-lg font-medium mt-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
