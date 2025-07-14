import { div } from 'framer-motion/client'
import React, { useState } from 'react'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineGridView } from "react-icons/md";
import Vendor from './Vendor';
import StayHome from '../../Components/StayHome/StayHome';
import Servicess from '../../Components/Servicess/Servicess';
import { SlMagnifier } from "react-icons/sl";


const Vendors = () => {
    const [show, setShow] = useState("");
    const [sort, setSort] = useState("");

    return (
        <div>
            <NavigationPage path1={"Vendors "} />


            <div className='max-w-screen-2xl 2xl:mx-auto  md:mx-10 mx-3 my-20'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-family-primary font-bold md:text-7xl text-3xl text-zinc-700'>Vendors List</h1>

                    <div className='flex items-center justify-between gap-5 border border-zinc-200 px-5 py-2 rounded-full w-1/2 mt-10 shadow-xl'>
                        <input type="text" className="py-2 pl-2 w-full outline-none
                        " placeholder=" Search for Vendor..." />
                        <div className=" text-xl text-zinc-300">
                            <SlMagnifier />
                        </div>
                    </div>
                </div>


                {/* Sorting and filter */}
                <div className='md:my-10 my-5 flex md:flex-row flex-col justify-between items-center'>
                    {/* Recips Articles */}
                    <div className=''>
                        <h1 className='font-family-primary'>We found <span className='font-bold text-emerald-500'>700</span> vendors now</h1>
                    </div>
                    {/* Filtering Section */}
                    <div className='flex items-center md:flex-row flex-col md:mt-0 mt-2 gap-2'>
                        <div className='flex  items-center  justify-center text-zinc-500 border border-zinc-200 rounded-md p-2 md:p-3  bg-white  transition'>
                            <MdOutlineGridView className="text-xl text-emerald-600" />
                            <select
                                value={show}
                                onChange={(e) => setShow(e.target.value)}
                                className="bg-white text-sm font-semibold px-3  rounded-md  outline-none transition duration-200 cursor-pointer"
                            >
                                <option value="10">Show: 10</option>
                                <option value="20">Show: 20</option>
                                <option value="50">Show: 50</option>
                            </select>
                        </div>

                        <div className='flex  items-center  justify-center text-zinc-500 border border-zinc-200 rounded-md p-2 md:p-3  bg-white  transition'>
                            <TbArrowsSort className="text-xl text-emerald-600" />
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="bg-white text-sm font-semibold px-3  rounded-md  outline-none transition duration-200 cursor-pointer"
                            >
                                <option value="10">Sort: Featured</option>
                                <option value="20">Sort: Newest</option>
                                <option value="50">Sort: Most comments</option>
                                <option value="50">Sort: Release Date</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Vendor Sections */}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5   '>
                    <Vendor />
                    <Vendor />
                    <Vendor />
                    <Vendor />
                    <Vendor />
                    <Vendor />
                    <Vendor />
                    <Vendor />
                    <Vendor />
                    <Vendor />
                </div>
            </div>



            <StayHome />
            <Servicess />
        </div>
    )
}

export default Vendors