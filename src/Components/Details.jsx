

const Details = () => {
    return (
        <div className='w-full flex items-center'>
            <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between py-10 gap-5">
                <div className=" gap-5 flex flex-col md:justify-between h-1/2 md:h-full md:w-1/2">
                    <div className=" text-center md:text-start">
                        <h1 className="text-4xl mx-10 md:mx-0 md:mr-10 lg:mr-28">Reliable, Resourceful, and Ready to Assist</h1>
                        <p className="py-5">
                            Our team of virtual assistants is committed to being the reliable support
                            you can count on, armed with the resources to tackle any task
                        </p>
                    </div>
                    <div className=" flex items-center justify-center sm:items-start md:justify-start">
                        <div className="w-1/4 sm:2/4 text-center md:text-start">
                            <h1 className="text-2xl">6K+</h1>
                            <p className="text-sm font-light">Satisfied Clients</p>
                        </div>
                        <div className="w-1/4 text-center md:text-start">
                            <h1 className="text-2xl">64</h1>
                            <p className="text-sm font-light">VA Experts</p>
                        </div>
                    </div>
                </div>
                {/* LIST */}
                <div className="flex items-center justify-center h-1/2 md:w-1/2">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:flex md:flex-col md:items-start md:gap-3">
                        <div className="p-3 border rounded-3xl text-lg w-auto max-w-max"><p>Innovative Working Activities</p></div>
                        <div className="p-3 border rounded-3xl text-lg w-auto max-w-max"><p>100% Guarantee Issued for Client</p></div>
                        <div className="p-3 border rounded-3xl text-lg w-auto max-w-max"><p>Dedicated Team Member</p></div>
                        <div className="p-3 border rounded-3xl text-lg w-auto max-w-max"><p>Safe & Secure Environment</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details