import Hero from "../Components/Hero"
import Details from "../Components/Details"
import Info from "../Components/Info"
import Services from "../Components/Services"
import PricingPlan from "../Components/PricingPlan"
import Clients from "../Components/Clients"
import Consult from "../Components/Consult"


const Home = () => {
    return (
        <>
            <Hero />
            <div className="bg-[#FFFFFF] py-4">
                <Details />
                <Info />
                <Services />
                <PricingPlan />
                <Clients />
            </div>
            <Consult />

        </>
    )
}

export default Home