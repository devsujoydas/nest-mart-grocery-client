import { useState } from "react"
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";



const DailyProducts = ({product}) => {


    const [showImg, setShowImg] = useState(true)

    return (

        <div className="text-left">
            <div className="border border-zinc-200 relative overflow-hidden md:p-4 p-2 lg:p-6 md:rounded-2xl rounded-md  ">

                <div>
                    <span className="bg-pink-600 text-white text-xs px-6 p-1 md:py-2 rounded-br-2xl absolute top-0 left-0 z-10">Save 15%</span>

                    <span className="bg-green-600 text-white text-xs px-6 p-1 md:py-2 rounded-br-2xl absolute top-0 left-0 z-10">Save 35%</span>

                    <span className="bg-orange-400 text-white text-xs px-6 p-1 md:py-2 rounded-br-2xl absolute top-0 left-0 z-10">Best sale</span>

                    <span className="bg-blue-400 text-white text-xs px-6 p-1 md:py-2 rounded-br-2xl absolute top-0 left-0 z-10">Sale</span>
                </div>



                <div className="overflow-hidden flex justify-center items-center  rounded-full relative">

                    <div onMouseEnter={() => setShowImg(false)} onMouseLeave={() => setShowImg(true)}>
                        <img  className="hover:scale-110 transition-all rounded-full duration-500 cursor-pointer" src={`${showImg ? product.img1 : product.img2}`} alt="" />
                    </div>

                </div>

                <div className="flex flex-col mb-1">
                    <a href="#"
                        className="text-gray-400 text-xs text-left hover:text-emerald-400">{product.categories}</a>
                    <a href="#" className="text-left font-bold my-1 leading-none hover:text-emerald-500 transition-colors md:text-[16px] text-sm">{product.title}</a>
                </div>

                <div className="flex text-orange-300 md:text-sm text-xs">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                </div>

                <div className="grid gap-2">

                    <h1 className="md:mt-2 mt-1 text-xs">By <a href="#"
                        className="text-emerald-500 hover:-translate-x-1 hover:-translate-y-1 hover:text-orange-400"><span>{product.by}</span></a>
                    </h1>
                    <h1 className="text-emerald-500 font-semibold md:text-lg text-sm">${product.price}</h1>
                </div>
                <div className=" mt-1"> 

                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="bg-emerald-600 text-xs font-medium text-blue-100 text-center md:p-1 p-0.5 leading-none rounded-full" style={{ width: '45%' }}></div>
                    </div>

                    <p className="text-xs mt-2">Sold: {product.productDetails.sold}/{product.productDetails.quantity}</p>

                    <button
                        className="bg-emerald-500 active:bg-orange-300 hover:bg-orange-300 cursor-pointer active:scale-95 text-white hover:text-white font-semibold w-full md:py-3 py-1.5 rounded-md flex justify-center items-center gap-1 hover:-translate-y-1 duration-500 transition mt-3">
                           <BsCart3/>
                        <h1 className="text-xs">Add To Cart</h1>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default DailyProducts