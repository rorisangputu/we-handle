import { FaCheckCircle } from "react-icons/fa";


const PricingPlan = () => {
    return (
        <div className="w-full py-10">
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col items-center justify-center text-center my-7">
                    <h1 className="text-4xl font-light">Uncover Our Virtual Assistant Services</h1>
                    <p className="mt-4 text-base">Supercharge your productivity with our virtual assistant services, providing the
                        boost you need for professional success.
                    </p>
                </div>
                <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:items-center lg:grid-cols-3 mt-20">
                    <div className="border rounded-xl border-spacing-1 p-5 flex flex-col items-center ">
                        <div className="rounded-xl bg-slate-200 py-2 w-[60%] text-center">
                            <p className="font-light">Entrepreneur Plan</p>
                        </div>
                        <div className="my-5 text-center">
                            <h1 className="text-3xl font-bold my-3">$149/month</h1>
                            <p>Billed monthly, cancel anytime</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">24 working hours/week</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light ">Dedicated assistant</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light ">1 User included</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light ">Responding up to 20 inquires</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light ">Managing up to 10 events/month</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="p-2 px-5 border rounded-lg">Subscribe now</button>
                        </div>
                    </div>
                    <div className="bg-[#FDF6E6] rounded-xl border-spacing-1 p-5 flex flex-col items-center">
                        <div className="rounded-xl bg-white py-2 w-[60%] sm:w-[80%] md:w-[60%] text-center">
                            <p className="font-light">Small Business Plan</p>
                        </div>
                        <div className="my-5 text-center">
                            <h1 className="text-3xl font-bold my-3">$500/month</h1>
                            <p>Billed monthly, cancel anytime</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">24 working hours/week</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">Dedicated assistant</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">1 User included</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">Responding up to 20 inquires</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">Managing up to 10 events/month</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="p-2 px-5 bg-black text-white rounded-lg">Subscribe now</button>
                        </div>
                    </div>
                    <div className="border rounded-xl border-spacing-1 p-5 flex flex-col items-center">
                        <div className="rounded-xl bg-slate-200 py-2 w-[60%] text-center">
                            <p className="font-light">Enterprise Plan</p>
                        </div>
                        <div className="my-5 text-center">
                            <h1 className="text-3xl font-bold my-3">$800/month</h1>
                            <p>Billed monthly, cancel anytime</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">24 working hours/week</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">Dedicated assistant</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">1 User included</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">Responding up to 20 inquires</p>
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <span><FaCheckCircle className="h-5 w-5" /></span>
                                <p className="font-light">Managing up to 10 events/month</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="p-2 px-5 border rounded-lg">Subscribe now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPlan