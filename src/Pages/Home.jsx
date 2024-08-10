import Hero from "../Components/Hero"
import Details from "../Components/Details"
import Info from "../Components/Info"

const Home = () => {
    return (
        <>
            <Hero />
            <div className="bg-slate-50">
                <Details />
                <Info />
            </div>
        </>
    )
}

export default Home