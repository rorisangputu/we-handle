

const Services = () => {
    return (
        <div className="w-full py-5">
            <div className="w-[97%] bg-[#EDF1F3] mx-auto rounded-xl py-3">
                <div className="w-[90%] lg:container mx-auto py-5 md:py-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-4xl font-light">Uncover Our Virtual Assistant Services</h1>
                        <p className="mt-4 text-base">Supercharge your productivity with our virtual assistant services, providing the
                            boost you need for professional success.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 py-7 md:py-10">
                        <div
                            className="bg-cover bg-center w-full h-[25vh] md:w-1/2 md:h-auto rounded-lg"

                        >
                            <div
                                className="h-full w-full relative flex flex-col justify-end bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661780207595-e88bafd3df2e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                                }}
                            >
                                {/* Dark overlay using ::before pseudo-element */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

                                {/* Content */}
                                <div className="relative p-4 text-white z-10">
                                    <h3 className="text-xl font-semibold">Jessica Kumono</h3>
                                    <p className="text-base">Professional Virtual Assistant</p>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-5">
                            <div className="flex gap-3 bg-white p-3 rounded-3xl items-center justify-evenly">
                                <div className="bg-blue-200 rounded-full p-3 h-12 w-12">
                                    {/* ig */}
                                </div>
                                <div>
                                    <h1>Social Media Management</h1>
                                    <p className="text-sm">We handle content, engagementm and analytics, for your social media</p>
                                </div>
                                <div>
                                    <p className="text-2xl">+</p>
                                </div>
                            </div>
                            <div className="flex gap-3 bg-white p-3 rounded-3xl items-center justify-evenly">
                                <div className="bg-blue-200 rounded-full p-3 h-12 w-12">
                                    {/* ig */}
                                </div>
                                <div>
                                    <h1>Social Media Management</h1>
                                    <p className="text-sm">We handle content, engagementm and analytics, for your social media</p>
                                </div>
                                <div>
                                    <p className="text-2xl">+</p>
                                </div>
                            </div>
                            <div className="flex gap-3 bg-white p-3 rounded-3xl items-center justify-evenly">
                                <div className="bg-blue-200 rounded-full p-3 h-12 w-12">
                                    {/* ig */}
                                </div>
                                <div>
                                    <h1>Social Media Management</h1>
                                    <p className="text-sm">We handle content, engagementm and analytics, for your social media</p>
                                </div>
                                <div>
                                    <p className="text-2xl">+</p>
                                </div>
                            </div>
                            <div className="flex gap-3 bg-white p-3 rounded-3xl items-center justify-evenly">
                                <div className="bg-blue-200 rounded-full p-3 h-12 w-12">
                                    {/* ig */}
                                </div>
                                <div>
                                    <h1>Social Media Management</h1>
                                    <p className="text-sm">We handle content, engagementm and analytics, for your social media</p>
                                </div>
                                <div>
                                    <p className="text-2xl">+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services