import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Vendor = ({ vendor }) => {
    return (
        <div className='min-h-98 border border-zinc-200 rounded-xl p-5 font-family-primary'>
            <div>
                <img className='w-38' src={vendor.image} alt="" />
            </div>

            <div className=' mt-5'>
                <div className=''>
                    <p className='text-zinc-400 text-sm'>Since 2012</p>
                    <h1 className='font-family-primary font-bold text-2xl text-zinc-600 hover:text-yellow-500 transition-all cursor-pointer'>{vendor.name} </h1>
                    <div className='flex items-center gap-2'>
                        <div className="flex items-center text-orange-300 text-sm">
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStarHalf />
                        </div>
                        <p className='text-sm  text-zinc-400'>{vendor.rating}</p>
                    </div>
                </div>
                <div>
                    <h1 className='bg-emerald-100 font-bold text-sm
                     text-emerald-500 w-fit mt-5 px-5 py-1 rounded-md'>{vendor.products} products</h1>
                </div>
            </div>


            <div className='mt-5 text-zinc-400 text-sm font-medium'>
                <h1><span className='font-bold'>Address:</span> {vendor.address}</h1>

                <p className='mt-2'><span className='font-bold'>Call Us:</span> {vendor.phone}</p>
            </div>

            <Link to={`/vendors/${vendor.name}`} className="bg-emerald-500 w-fit hover:bg-orange-400 hover:px-5 active:scale-95 transition-all px-4 py-2 text-sm rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer mt-5 duration-500">
                Visit Store <FaArrowRight className='text-xs' />
            </Link>
        </div>
    )
}

export default Vendor