import DailyBestSells from "../DailyBestSells/DailyBestSells"
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import PopularProducts from "../PopularProducts/PopularProducts"
import Servicess from "../Servicess/Servicess"
import StayHome from "../StayHome/StayHome"
import TopSellingContainer from "../TopSelling/TopSellingContainer"

const Root = () => {
  return (
    <div>
      <Header />
      <div className="md:mx-20">
        <Hero />
        <FeaturedCategories />
        <PopularProducts />
        <DailyBestSells />
        <TopSellingContainer />
        <StayHome />
        <Servicess />
        <Footer />
      </div>
    </div>
  )
}

export default Root