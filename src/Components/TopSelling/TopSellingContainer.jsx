import TopSelling from "./TopSelling"


const TopSellingContainer = () => {
    return (
        <div className="max-w-screen-2xl lg:mx-auto mx-10">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4  xl:gap-4  lg:mx-4 mx-6">
                <TopSelling />
                <TopSelling />
                <TopSelling />
                <TopSelling />
            </div>
        </div>
    )
}

export default TopSellingContainer