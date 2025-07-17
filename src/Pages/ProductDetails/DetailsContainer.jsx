import React, { useEffect, useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io"

import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { BsCart3 } from "react-icons/bs";


const DetailsContainer = ({ product }) => {
    const { title, ratings, by, price, prevPrice, discountPercent, productDetails } = product;
    const { Sale, description, type, mfg, life, sku, tags, stock, } = productDetails;

    const [qty, setQty] = useState(1); 
    const handleDecrease = () => { if (qty > 1) setQty(qty - 1) };
    const handleIncrease = () => { setQty(qty + 1) };

    return (
        <div className='font-family-primary flex flex-col justify-between'>

            <div className='space-y-3 md:space-y-6'>
                <p className='text-red-500 px-4 rounded-sm py-1 text-xs md:text-sm font-bold bg-red-100 w-fit
                  '>Sale {Sale}</p>

                <h1 className=' text-2xl md:text-4xl font-bold text-zinc-600'>{title}</h1>

                <div className='flex items-center gap-1'>
                    <div className="flex text-orange-300 text-sm">
                        <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                    </div>
                    <h1 className='md:text-sm text-xs'>({ratings})</h1>
                </div>

                <div className='flex items-center gap-3'>
                    <h1 className='font-bold text-emerald-500 text-4xl md:text-6xl'>${price}</h1>

                    <div className='text-center'>
                        <p className='text-yellow-500 font-semibold md:text-sm text-xs'>{discountPercent} Off</p>
                        <h1 className='font-bold text-zinc-400 text-xl md:text-3xl line-through'>${prevPrice}</h1>
                    </div>
                </div>

                <p className='text-zinc-500 font-medium md:text-[16px] text-sm'>{description}</p>

                <p className='font-semibold md:text-[16px] text-xs'>By <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500  cursor-pointer'>{by}</span></p>

                <div className='flex gap-3 '>
                    <div className="flex items-center gap-1 border w-fit px-4 py-2 md:py-3 rounded-md border-emerald-500 md:text-sm text-xs">
                        <button
                            onClick={handleDecrease}
                            disabled={qty === 1}
                            className={`transition-all duration-300 active:scale-95 cursor-pointer ${qty === 1
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-zinc-700 hover:text-yellow-500"
                                }`}
                        >
                            <TiMinus />
                        </button>
                        <span className="w-10 font-semibold text-lg text-center ">
                            {qty}
                        </span>
                        <button
                            onClick={handleIncrease}
                            className="text-zinc-700 hover:text-yellow-500 transition-all cursor-pointer duration-300 active:scale-95"
                        >
                            <FaPlus />
                        </button>
                    </div>

                    <button className="font-bold flex justify-center items-center gap-2 bg-emerald-600 hover:bg-yellow-400  text-white px-4 md:px-6 text-lg rounded-md cursor-pointer active:scale-95 transition-all duration-300">
                        <BsCart3 />
                        <h1 className="">Add to cart</h1>
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-2 text-xs md:mt-0 mt-5 md:text-sm '>
                <div className='grid gap-2'>
                    <p>Type: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{type}</span></p>
                    <p>MFG: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{mfg}</span></p>
                    <p>LIFE: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{life}</span></p>
                </div>

                <div className='grid gap-2'>
                    <p>SKU: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{sku}</span></p>
                    <p>Stock: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{stock} Items In Stock</span> </p>
                    <p>Tags: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{tags}</span></p>
                </div>
            </div>

        </div>
    )
}

export default DetailsContainer