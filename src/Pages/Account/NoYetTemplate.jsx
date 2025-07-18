import React from 'react'
import NoYetSVG from './noYetSVG'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";

const NoYetTemplate = ({ text1, text2, address }) => {
    return (
        <div className='border border-zinc-200 rounded-md '>
            <div className='flex justify-center items-center px-5 text-center py-8 md:py-20'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <NoYetSVG />
                    <h1 className='font-family-primary md:text-2xl text-xl font-bold'>{text1}</h1>
                    <p className='text-zinc-500 md:text-[16px] text-xs'>{text2}</p>
                    <div className='mt-2'>
                        {
                            address ?
                                <Link to={"/account/address/create"} className='bg-emerald-500 text-white font-family-primary font-semibold px-4 py-3 text-sm rounded-sm active:scale-95 hover:bg-amber-300 hover:text-black duration-300 transition-all cursor-pointer flex items-center gap-2'> <FaPlus /> {address} </Link>
                                :
                                <Link to={"/products"} className='bg-emerald-500 text-white font-family-primary font-semibold px-4 py-3 text-sm rounded-sm active:scale-95 hover:bg-amber-300 hover:text-black duration-300 transition-all cursor-pointer flex items-center gap-2'><FaPlus /> Start Shopping </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoYetTemplate