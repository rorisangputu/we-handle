

const Clients = () => {
    return (
        <div className="w-full">
            <div className="w-[90%] container mx-auto flex flex-col">
                <div>

                </div>
                <div className="bg-slate-300 rounded-xl h-[50vh] md:h-[30vh] p-5">
                    <div className="flex h-full flex-col md:flex-row">
                        <div className="h-full md:w-1/5 gap-2 p-2 flex flex-row md:flex-col items-center md:items-start">
                            <img
                                src="https://images.unsplash.com/photo-1667053508464-eb11b394df83?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="w-16 h-16 md:w-12 md:h-12 rounded-lg object-cover"
                            />
                            <div className="my-3 text-center md:text-left">
                                <h4 className="text-lg md:text-base">Bima Andara</h4>
                                <p className="text-sm font-light">Property Developer</p>
                            </div>
                        </div>
                        <div className="h-full w-full md:w-3/5 flex justify-center items-center text-center md:text-left">
                            <p className="text-lg md:text-2xl md:mx-10">
                                "I was hesitant to delegate tasks at first, but their virtual assistants proved
                                to be competent and reliable. The attention to detail and proactive approach they bring
                                to every task is impressive."
                            </p>
                        </div>
                        <div className="md:w-1/5 h-full flex items-center md:items-end justify-center md:justify-start gap-2 flex-col md:flex-col-reverse px-3">
                            <h1 className="text-3xl md:text-4xl font-light my-1 md:my-3">95%</h1>
                            <p className="text-center md:text-left">Client satisfaction rate</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Clients