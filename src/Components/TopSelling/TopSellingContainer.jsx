import TopSelling from "./TopSelling"


const TopSellingContainer = () => {
    return (
        <div className="max-w-screen-2xl md:mx-auto font-family-primary">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 gap-4  lg:mx-4 md:mx-6">


                <TopSelling data={"Top Selling"} />
                <TopSelling data={"Trending Products"} />

                <div className="lg:block hidden">
                    <TopSelling data={"Recently added"} />
                </div>

                <div className="xl:block hidden">
                    <TopSelling data={"Top Rated"} />
                </div>

            </div>
        </div>
    )
}

export default TopSellingContainer