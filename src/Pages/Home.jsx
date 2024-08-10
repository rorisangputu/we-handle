import Hero from "../Components/Hero"
import Details from "../Components/Details"
import Info from "../Components/Info"
import Services from "../Components/Services"

const Home = () => {
    return (
        <>
            <Hero />
            <div className="bg-[#FFFFFF]">
                <Details />
                <Info />
                <Services />
            </div>
        </>
    )
}

export default Home