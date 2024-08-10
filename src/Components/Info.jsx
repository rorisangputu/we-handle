

const Info = () => {
    return (
        <div className='w-full'>
            <div className='w-[90%] md:container mx-auto flex flex-col justify-between py-20 gap-10'>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col gap-3 text-center  mx-5 md:text-start md:mx-0 h-1/2 md:w-1/2">
                        <h1 className="text-4xl lg:mr-28">How We Can Make Your Business Grow</h1>
                        <p className="md:mr-10">
                            Discover the simplicity and effectivensess of our vitual assistance workflow,
                            designed to make your tasks seamless and stress-free.
                        </p>
                    </div>
                    <div className="h-1/2 md:w-1/2">
                        <div className="bg-slate-200 rounded-xl p-3 md:ml-20 mx-auto">
                            <p>"They have a knack for understanding my preferences and delivering exceptional results. I can't manage my tasks without them."</p>
                            <div className="flex items-center mt-3 gap-3">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Brian Johnson"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold">Brian Johnson</h3>
                                    <p className="text-sm text-gray-600">Entrepreneur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-200 p-3 rounded-xl h-[15vh] md:h-[20vh] flex flex-col justify-between">
                        <p className="font-semibold">Step 1</p>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-light">Defining Your Dream Assistant</h2>
                            <p className="text-sm">Tell us about your dream assistant -- what skills, traits, and abilities do you envision?</p>
                        </div>
                    </div>
                    <div className="bg-slate-200 p-3 rounded-xl h-[15vh] md:h-[20vh] flex flex-col justify-between">
                        <p className="font-semibold">Step 2</p>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-light">Meet and approve your assistant</h2>
                            <p className="text-sm lg:mr-20">We handle your content, engagements, and analytics for
                                social media
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-200 p-3 rounded-xl h-[15vh] md:h-[20vh] flex flex-col justify-between">
                        <p className="font-semibold">Step 3</p>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-light">Launch and track with precision</h2>
                            <p className="text-sm mr-0 lg:mr-20">We handle your content, engagements, and analytics for
                                social media </p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Info