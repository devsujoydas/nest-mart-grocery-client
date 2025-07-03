import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const NavigationPage = () => {
  return (
    <div className='md:py-6 py-3 md:mx-0 mx-3 border-b border-zinc-200'>
      <div className=' max-w-screen-2xl mx-auto flex items-center gap-2 font-family-primary text-xs md:text-sm'>
        <Link to={"/"} className='flex justify-center items-center gap-1 text-emerald-500 hover:text-emerald-400 font-bold active:scale-95 transition-all duration-300 '><FiHome />Home</Link>
        <h1 className='flex items-center gap-2'><IoIosArrowForward /> Pages <IoIosArrowForward /></h1>
        <h1>My Account</h1>
      </div>
    </div>
  )
}

export default NavigationPage