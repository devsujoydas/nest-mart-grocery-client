
const PopularProduct = () => {
    return (
        <div
            className="border relative overflow-hidden shadow-xl p-4 lg:p-6 rounded-2xl hover:shadow-2xl hover:-translate-x-1 hover:-translate-y-1 transition ">
            <span
                className="bg-pink-600 text-white text-sm px-4 py-1 rounded-ee-2xl absolute top-0 left-0">Hot</span>
            <div className="overflow-hidden flex justify-center items-center">
                <img className="hover:scale-110 transition-all rounded-full lg:w-full w-56"
                    src="../../../assets/popular product/product-1-1.jpg" alt="" />
            </div>
            <div className="flex flex-col mb-1">
                <a href="#" className="text-gray-400 text-xs hover:text-emerald-400">Coffee</a>
                <a href="#"
                    className="font-semibold my-1 leading-none hover:text-emerald-500 transition-colors">Dandy
                    Blend
                    Coffee Instand Herbal Dadlelion</a>
            </div>
            <div className="flex">
                <h1>ratting</h1>
            </div>
            <h1 className="mt-2 text-xs">By <span><a href="#"
                className="text-emerald-500 hover:-translate-x-1 hover:-translate-y-1 hover:text-orange-400">NestFood</a></span>
            </h1>
            <div className="flex justify-between items-center mt-3">
                <h1 className="text-emerald-500 font-semibold text-xl">$54.85</h1>
                <button className="bg-emerald-100 hover:bg-emerald-500 text-emerald-600 hover:text-white font-semibold px-3 lg:px-6 py-2 rounded-md flex justify-between items-center gap-1 hover:-translate-y-1 transition">
                    <img className="w-4" src="../../../assets/svgs/icon-cart.svg" alt="" />
                    <h1 className="">Add</h1>
                </button>
            </div>
        </div>

    )
}

export default PopularProduct