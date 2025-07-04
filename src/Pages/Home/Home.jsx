
import Hero from '../../Components/Hero/Hero'
import FeaturedCategories from '../../Components/FeaturedCategories/FeaturedCategories'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'
import DailyBestSells from '../../Components/DailyBestSells/DailyBestSells'
import TopSellingContainer from '../../Components/TopSelling/TopSellingContainer'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import Footer from '../../Shared/Footer/Footer'
import DealsOfTheDay from '../../Components/DealsOfTheDay/DealsOfTheDay'

const Home = () => {
    return (
        <>
            <div className="md:mx-10 mx-3">
                <Hero />
                <FeaturedCategories />
                <PopularProducts />
                <DailyBestSells />
                <DealsOfTheDay />
                <TopSellingContainer />
            </div>
            <StayHome />
            <Servicess />
        </>
    )
}

export default Home