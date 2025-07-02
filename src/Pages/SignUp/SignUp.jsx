import React from 'react'
import StayHome from '../../Components/StayHome/StayHome'
import { Link } from 'react-router-dom'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import CustomerVendor from '../../Components/CustomerVendor/CustomerVendor'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SignUp = () => {
  return (
    <>
      <NavigationPage />

      <div className=' font-family-primary max-w-screen-2xl mx-auto min-h-screen p-30 grid gap-5'>
        <h1 className='text-5xl text-zinc-700 font-bold'>Create an Account</h1>
        <h1 className='-mt-2 text-zinc-600 font-medium font-family-secondary'>Already have an account? <Link className='font-semibold text-emerald-500 hover:text-emerald-400 transition-all ' to={"/login"}>Login</Link></h1>

        <div className='grid grid-cols-2 gap-10'>
          <form className=''>
            <div className='  space-y-4'>
              <input className='border border-zinc-200 text-sm px-4 py-4.5 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Username' name='username' />
              <input className='border border-zinc-200 text-sm px-4 py-4.5 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Email' name='email' />
              <input className='border border-zinc-200 text-sm px-4 py-4.5 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Password' name='password' />
              <input className='border border-zinc-200 text-sm px-4 py-4.5 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Confirm password' name='confirmPass' />
              <div className='flex justify-between items-center'>
                <input className='w-1/3 border border-zinc-200 text-sm px-4 py-4.5  rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Security code *' name='securityCode' />




                <div className='bg-emerald-300 py-3 w-30 flex justify-center items-center rounded-lg'>
                  <h1 className=' font-bold text-blue-800 rounded-lg text-2xl'>{Math.floor(1000 + Math.random() * 9000)}</h1>
                </div>
              </div>
              <div className='font-family-secondary'>
                <CustomerVendor />
              </div>

              <div className='flex items-center gap-2 text-sm font-family-secondary mt-10 text-zinc-500 ' >
                <input type="checkbox" className='' name="" id="terms" />
                <label htmlFor="terms" className='cursor-pointer hover:text-emerald-500 duration-500 transition-all'> I agree to terms & Policy.</label>
              </div>

              <div className='mt-12'>
                <button className='px-8 py-4 bg-emerald-500 rounded-lg font-bold text-white hover:bg-emerald-400 duration-500 cursor-pointer active:scale-95 transition-all '>Submit & Register</button>
              </div>

            </div>
          </form>

          <div className=''>
            <div className='p-10 border border-zinc-200  w-7/9 rounded-lg grid gap-5'  >
              <button className='flex items-center bg-blue-500 hover:bg-blue-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer text-white font-bold py-3.5 px-9 gap-4 rounded-lg text-xl active:scale-95 '><FaFacebook className='text-3xl' />Continue with Facebook</button>
              <button className='flex items-center transition-all duration-300 hover:-translate-y-1 border border-zinc-200 cursor-pointer text-zinc-600 font-bold py-3.5 px-9 gap-4 rounded-lg text-xl active:scale-95'><FcGoogle className='text-3xl' />Continue with Google</button>
              <button className='flex items-center bg-black transition-all duration-300 hover:-translate-y-1 cursor-pointer text-white font-bold py-3.5 px-9 gap-4 rounded-lg text-xl active:scale-95'><FaApple className='text-3xl' />Continue with Facebook</button>
            </div>


          </div>
        </div>
      </div>




      <StayHome />
    </>
  )
}

export default SignUp