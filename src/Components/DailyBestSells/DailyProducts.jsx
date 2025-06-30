import { useState } from "react"
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";



const DailyProducts = () => {


    const [showImg, setShowImg] = useState(true)

    return (

        <div className="text-left">
            <div className="border border-zinc-300 relative overflow-hidden p-4 lg:p-6 rounded-2xl  ">

                <div>
                    <span className="bg-pink-600 text-white text-xs px-6 py-2 rounded-br-2xl absolute top-0 left-0 z-10">Save 15%</span>

                    <span className="bg-green-600 text-white text-xs px-6 py-2 rounded-br-2xl absolute top-0 left-0 z-10">Save 35%</span>

                    <span className="bg-orange-400 text-white text-xs px-6 py-2 rounded-br-2xl absolute top-0 left-0 z-10">Best sale</span>

                    <span className="bg-blue-400 text-white text-xs px-6 py-2 rounded-br-2xl absolute top-0 left-0 z-10">Sale</span>
                </div>



                <div className="overflow-hidden flex justify-center items-center  rounded-full relative">

                    <div onMouseEnter={() => setShowImg(false)} onMouseLeave={() => setShowImg(true)}>
                        <img  className="hover:scale-110 transition-all rounded-full duration-500 cursor-pointer" src={`${showImg ? "../../../assets/popular product/product-11-1.jpg" : "../../../assets/popular product/product-12-1.jpg"}`} alt="" />
                    </div>

                </div>

                <div className="flex flex-col mb-1 md:mt-0 -mt-5 ">
                    <a href="#"
                        className="text-gray-400 text-xs text-left hover:text-emerald-400">Truffle</a>
                    <a href="#" className="text-left font-bold my-1 leading-none hover:text-emerald-500 transition-colors text-[16px]">Talenti
                        Gelato Salted Caramel Truffle </a>
                </div>

                <div className="flex text-orange-300 text-sm">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                </div>

                <div className="grid gap-2">

                    <h1 className="mt-2 text-xs">By <a href="#"
                        className="text-emerald-500 hover:-translate-x-1 hover:-translate-y-1 hover:text-orange-400"><span>NestFood</span></a>
                    </h1>
                    <h1 className="text-emerald-500 font-semibold text-lg">$24.49</h1>
                </div>
                <div className=" mt-1"> 

                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="bg-emerald-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{ width: '45%' }}></div>
                    </div>

                    <p className="text-xs mt-2">Sold: 26/100</p>

                    <button
                        className="bg-emerald-500 active:bg-orange-300 hover:bg-orange-300 cursor-pointer active:scale-95 text-white hover:text-white font-semibold w-full py-3 rounded-md flex justify-center items-center gap-1 hover:-translate-y-1 transition mt-3">
                           <BsCart3/>
                        <h1 className="text-xs">Add To Cart</h1>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default DailyProducts