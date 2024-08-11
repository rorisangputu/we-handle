

const Hero = () => {
    return (
        <div className="w-full bg-[#FDF6E6] m-0">
            <div className="w-[90%] mx-auto h-[90%] md:h-[60vh] flex items-center">
                <div className="flex flex-col items-center h-full justify-center text-center py-7 gap-5 md:gap-3 md:text-start md:items-start md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-light">Virtual Assistant Services at Your Fingertips!</h1>
                    <p className="py-5 text-xl md:text-base">Our virtual assistants are highly skilled professionals who can handle all your
                        administrative, technical, and creative needs.
                    </p>
                    <div>
                        <button className="bg-black text-white  px-6 py-2 rounded-lg text-sm font-light">
                            Request a consult
                        </button>
                    </div>
                </div>
                <div className="hidden md:block w-1/2 h-full ">
                    <div className="h-full w-full p-10">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661299426906-303374213351?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero