import React from 'react'
import StayHome from '../../Components/StayHome/StayHome'
import { Link } from 'react-router-dom'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import CustomerVendor from '../../Components/CustomerVendor/CustomerVendor'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
const Login = () => {
  return (
    <>
      <NavigationPage path1={"Pages"} path2={"My Account"}/>

      <div className=' font-family-primary md:w-7xl  mx-auto md:p-30 p-3 grid md:grid-cols-2 gap-10'>
        <div className='md:block hidden'>
          <img className='rounded-lg' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/login-1.png" alt="" />
        </div>


        <div>
          <h1 className='md:text-5xl text-2xl text-zinc-700 font-bold'>Login</h1>
          <h1 className='mt-3 text-zinc-600 md:text-[16px] text-xs font-medium font-family-secondary'>Don't have an account? <Link className='font-semibold text-emerald-500 hover:text-emerald-400 transition-all ' to={"/signup"}>Create here</Link></h1>

          <form className='mt-8'>
            <div className='space-y-4 md:text-sm text-xs'>
              <input className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Email' name='email' />
              <input className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Password' name='password' />

              <div className='flex justify-between items-center'>
                <input className='w-1/3 border border-zinc-200 px-4 md:py-4.5 py-2 rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Security code *' name='securityCode' />

                <div className='bg-[#BCE3C9] md:py-3 py-2 w-36 flex justify-center items-center rounded-lg'>
                  <h1 className='font-bold tracking-[0.15em] text-[#1d8056] rounded-lg md:text-2xl text-sm'>
                    {Math.floor(1000 + Math.random() * 9000)}
                  </h1>
                </div>
              </div>
              <div className=' md:mt-7 mt-3 text-zinc-500  flex items-center justify-between'>
                <div className='flex items-center gap-2 text-sm font-family-secondary' >
                  <input type="checkbox" className='' name="" id="terms" />
                  <label htmlFor="terms" className='cursor-pointer hover:text-emerald-500 duration-500 transition-all'>Remember me</label>
                </div>

                <div>
                  <Link to={""} className='hover:text-zinc-700 duration-300 transition-all hover:underline'>Fotgot password?</Link>
                </div>
              </div>

              <div className='md:mt-8 mt-3 md:block flex justify-center items-center'>
                <button className='px-10 md:w-fit w-full md:py-3 py-2 bg-[#253D4E] rounded-lg font-bold text-white hover:bg-[#29A56C] duration-500 cursor-pointer active:scale-95 transition-all text-lg '>Login</button>
              </div>

            </div>
          </form>
        </div>
      </div>



      <div className='md:mx-0 mx-3'>
        <StayHome />
      </div>
    </>
  )
}

export default Login