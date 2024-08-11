import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="w-full">
            <div className="w-[90%] mx-auto h-16 flex justify-between items-center">
                <div>
                    <h1 className="font-semibold text-2xl">WeHandle</h1>
                </div>
                <div className="hidden md:flex gap-4 lg:gap-7 text-md font-light">
                    <Link to={'/'}>
                        <div>
                            <p>Home</p>
                        </div>
                    </Link>
                    <div>
                        <Link to={'/about'}>
                            <p>About</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/services'}>
                            <p>Our Services</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/testimonials'}>
                            <p>Testimonials</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/pricing'}>
                            <p>Pricing Plan</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <Link to={'/contact'}>
                        <div className="border border-gray-300 rounded-lg p-2">
                            Get in touch
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
