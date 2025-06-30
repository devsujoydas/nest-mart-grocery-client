import { BsCart3 } from "react-icons/bs";

import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";


const PopularProduct = () => {
    return (
        <div
            className="border border-zinc-100 hover:border-emerald-200 relative overflow-hidden shadow-xl p-4 lg:p-6 rounded-2xl hover:shadow-2xl transition ">
            
            <span className="bg-pink-500  text-white text-xs px-4 py-2 rounded-br-2xl absolute top-0 left-0">Hot</span>

            <span className="bg-blue-500  text-white text-xs px-4 py-2 rounded-br-2xl absolute top-0 left-0">Sale</span>

            <div className="overflow-hidden flex justify-center items-center">
                <img className="hover:scale-110 duration-500 cursor-pointer transition-all rounded-full lg:w-full w-56"
                    src="../../../assets/popular product/product-1-1.jpg" alt="" />
            </div>

            <div className="flex flex-col mb-1">
                <a href="#" className="text-gray-400 text-xs hover:text-emerald-400">Coffee</a>
                <a href="#"
                    className="font-semibold my-1 leading-none hover:text-emerald-500 transition-colors">Dandy
                    Blend
                    Coffee Instand Herbal Dadlelion</a>
            </div>
            <div className="flex text-orange-300 text-sm">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
            </div>
            <h1 className="mt-2 text-xs">By <span><a href="#"
                className="text-emerald-500 hover:-translate-x-1 hover:-translate-y-1 hover:text-orange-400">NestFood</a></span>
            </h1>
            <div className="flex justify-between items-center mt-3">
                <h1 className="text-emerald-500 font-bold text-xl">$54.85</h1>
                <button className="bg-emerald-100 hover:bg-emerald-500 text-emerald-600 hover:text-white font-semibold px-3 lg:px-6 py-2 rounded-md flex justify-between items-center gap-1 hover:-translate-y-1 transition duration-500 text-sm cursor-pointer">
                    <BsCart3/>
                    <h1 className="">Add</h1>
                </button>
            </div>
        </div>

    )
}

export default PopularProduct