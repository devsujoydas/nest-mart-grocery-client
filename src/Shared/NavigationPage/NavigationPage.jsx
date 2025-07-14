import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiHome } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { div } from 'framer-motion/client';

const NavigationPage = ({ path1, path2 }) => {
  const navigate = useNavigate()

  return (
    <div className="md:mx-10 2xl:mx-0 ">
      <div className='md:py-6 py-3 md:mx-0 mx-3 border-b border-zinc-200'>

        <div className=' max-w-screen-2xl mx-auto flex items-center gap-2 font-family-primary text-xs md:text-sm font-bold'>
          <Link to={"/"} className='flex justify-center items-center gap-1 text-emerald-500 hover:text-emerald-400  active:scale-95 transition-all duration-300 '><FiHome />Home</Link>
          {path1 &&
            <div>
              {path2 ?
                <h1 onClick={() => navigate(-1)} className='cursor-pointer text-zinc-500 flex items-center gap-2'><IoIosArrowForward /> {path1} </h1>
                :
                <h1 className='cursor-pointer text-zinc-500 flex items-center gap-2'><IoIosArrowForward /> {path1} </h1>
              }
            </div>
          }

          {path2 &&
            <h1 className='text-zinc-500 flex items-center gap-2'><IoIosArrowForward /> {path2}</h1>
          }
        </div>

        <h1></h1>
      </div>
    </div>
  )
}

export default NavigationPage