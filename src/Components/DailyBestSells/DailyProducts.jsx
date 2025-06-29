

const DailyProducts = () => {
    return (

        <div className="text-left">
            <div className="border relative overflow-hidden p-4 lg:p-6 rounded-2xl  ">
                <span className="bg-pink-600 text-white text-sm px-4 py-1 rounded-ee-2xl absolute top-0 left-0">Hot</span>

                <div className="overflow-hidden flex justify-center items-center">
                    <img className="hover:scale-110 transition-all rounded-full lg:w-full w-56"
                        src="../../../assets/popular product/product-11-1.jpg" alt="" />
                </div>

                <div className="flex flex-col mb-1">
                    <a href="#"
                        className="text-gray-400 text-xs text-left hover:text-emerald-400">Truffle</a>
                    <a href="#"
                        className="text-left font-semibold my-1 leading-none hover:text-emerald-500 transition-colors">Talenti
                        Gelato Salted Caramel Truffle </a>
                </div>

                <div className="flex">
                    <div className="flex ">
                        <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                        <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                        <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                        <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                        <img className="" src="../../../assets/popular product/black-rating-stars.png" alt="" />
                    </div>
                </div>

                <div className="grid gap-2">

                    <h1 className="mt-2 text-xs">By <a href="#"
                        className="text-emerald-500 hover:-translate-x-1 hover:-translate-y-1 hover:text-orange-400"><span>NestFood</span></a>
                    </h1>
                    <h1 className="text-emerald-500 font-semibold text-xl">$24.49</h1>
                </div>
                <div className=" mt-1">
                    <progress className="progress progress-accent w-full" value="26" max="100"></progress>
                    <p className="text-sm">Sold: 26/100</p>

                    <button
                        className="bg-emerald-500 active:bg-orange-500 active:scale-95 text-white hover:text-white font-semibold w-full py-4 rounded-md flex justify-center items-center gap-1 hover:-translate-y-1 transition mt-4">
                        <div>
                            <img className="w-4 text " src="../../../assets/svgs/icon-cart.svg" alt="" />
                        </div>
                        <h1 className="text-xs">Add To Cart</h1>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default DailyProducts