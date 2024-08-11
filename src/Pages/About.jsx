// About.jsx
const About = () => {
    return (
        <div className="bg-[#FDF6E6] w-full">
            <div className="w-[90%] mx-auto py-10">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl font-light">About WeHandle</h1>
                        <p className="mt-4 text-xl">
                            At WeHandle, we believe in providing top-notch virtual assistance services tailored to meet your unique needs. Our team of experienced professionals is committed to delivering results that exceed your expectations.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1596496050271-21826a7687b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                            alt="About WeHandle"
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </div>
                </div>

                {/* Our Mission Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-light text-center">Our Mission</h2>
                    <p className="mt-5 text-lg text-center">
                        Our mission is to empower businesses and individuals by providing seamless virtual assistance services that enhance productivity, efficiency, and success.
                    </p>
                </div>

                {/* Core Values Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-light text-center">Core Values</h2>
                    <div className="flex flex-col md:flex-row gap-10 mt-10">
                        <div className="flex-1 text-center">
                            <h3 className="text-xl font-semibold">Integrity</h3>
                            <p className="mt-2 text-sm">
                                We uphold the highest standards of integrity in all our actions, ensuring transparency and honesty with our clients.
                            </p>
                        </div>
                        <div className="flex-1 text-center">
                            <h3 className="text-xl font-semibold">Excellence</h3>
                            <p className="mt-2 text-sm">
                                We strive for excellence in everything we do, delivering exceptional services that meet and exceed our clients' expectations.
                            </p>
                        </div>
                        <div className="flex-1 text-center">
                            <h3 className="text-xl font-semibold">Collaboration</h3>
                            <p className="mt-2 text-sm">
                                We believe in the power of collaboration, working closely with our clients to achieve shared goals and success.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-light text-center">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
                        <div className="text-center">
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="Team Member"
                                className="object-cover w-32 h-32 mx-auto rounded-full"
                            />
                            <h3 className="mt-5 text-xl font-semibold">Sarah Lee</h3>
                            <p className="text-sm">Chief Executive Officer</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://images.unsplash.com/photo-1502767089025-6572583495f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="Team Member"
                                className="object-cover w-32 h-32 mx-auto rounded-full"
                            />
                            <h3 className="mt-5 text-xl font-semibold">James Brown</h3>
                            <p className="text-sm">Chief Operating Officer</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="Team Member"
                                className="object-cover w-32 h-32 mx-auto rounded-full"
                            />
                            <h3 className="mt-5 text-xl font-semibold">Emily Davis</h3>
                            <p className="text-sm">Chief Financial Officer</p>
                        </div>
                    </div>
                </div>

                {/* History Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-light text-center">Our History</h2>
                    <p className="mt-5 text-lg text-center">
                        Founded in 2015, WeHandle started as a small team of virtual assistants dedicated to helping entrepreneurs manage their daily tasks. Over the years, we have grown into a trusted partner for businesses worldwide, offering a wide range of services to support various industries.
                    </p>
                </div>

                {/* Testimonials Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-light text-center">What Our Clients Say</h2>
                    <div className="flex flex-col md:flex-row gap-10 mt-10">
                        <div className="bg-slate-200 p-5 rounded-lg">
                            <p className="text-lg">"WeHandle has transformed the way I run my business. Their team is reliable, efficient, and always goes above and beyond to deliver exceptional service."</p>
                            <p className="mt-3 text-right text-sm">- John Doe, Entrepreneur</p>
                        </div>
                        <div className="bg-slate-200 p-5 rounded-lg">
                            <p className="text-lg">"I couldn't be happier with the support I've received from WeHandle. They truly understand my needs and have become an invaluable part of my team."</p>
                            <p className="mt-3 text-right text-sm">- Jane Smith, Small Business Owner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
