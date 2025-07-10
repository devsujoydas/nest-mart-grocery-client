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
      <NavigationPage path1={"Pages"} path2={"My Account"}/>

      <div className=' font-family-primary md:w-7xl mx-auto  md:p-30 p-3 grid gap-5'>
        <h1 className='md:text-5xl text-2xl text-zinc-700 font-bold'>Create an Account</h1>
        <h1 className='-mt-2 text-zinc-600 md:text-[16px] text-xs font-medium font-family-secondary'>Already have an account? <Link className='font-semibold text-emerald-500 hover:text-emerald-400 transition-all ' to={"/login"}>Login</Link></h1>

        <div className='grid md:grid-cols-2 gap-10'>
          <form className=''>
            <div className='  space-y-4 md:text-sm text-xs'>
              <input className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Username' name='username' />
              <input className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Email' name='email' />
              <input className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Password' name='password' />
              <input className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Confirm password' name='confirmPass' />
              <div className='flex justify-between items-center'>
                <input className='w-1/3 border border-zinc-200 px-4 md:py-4.5 py-2 rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' type="text" placeholder='Security code *' name='securityCode' />
                
                <div className='bg-[#BCE3C9] md:py-3 py-2 w-36 flex justify-center items-center rounded-lg'>
                  <h1 className='font-bold tracking-[0.15em] text-[#1d8056] rounded-lg md:text-2xl text-sm'>
                    {Math.floor(1000 + Math.random() * 9000)}
                  </h1>
                </div>

              </div>
              <div className='font-family-secondary'>
                <CustomerVendor />
              </div>

              <div className='flex items-center gap-2 text-sm font-family-secondary md:mt-7 mt-3 text-zinc-500 ' >
                <input type="checkbox" className='' name="" id="terms" />
                <label htmlFor="terms" className='cursor-pointer hover:text-emerald-500 duration-500 transition-all'> I agree to terms & Policy.</label>
              </div>

              <div className='md:mt-8 mt-3 md:block flex justify-center items-center'>
                <button className='px-8 md:w-fit w-full md:py-4 py-3 bg-emerald-500 rounded-lg font-bold text-white hover:bg-emerald-400 duration-500 cursor-pointer active:scale-95 transition-all '>Submit & Register</button>
              </div>
            </div>

            <div className='text-xs mt-8'>
              <h1>Note:Your personal data will be used to support your experience throughout this website, to manage access  to your account, and for other purposes described in our privacy policy
              </h1>
            </div>
          </form>

          <div className='md:p-10 p-3 h-fit border border-zinc-200  md:w-8/9 md:rounded-lg rounded-md flex flex-col md:gap-5 gap-3'>

            <button className='flex items-center bg-blue-500 hover:bg-blue-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer text-white font-bold md:py-3.5 py-2 md:px-4 px-4 gap-4 rounded-sm md:rounded-lg md:text-xl active:scale-95 '><FaFacebook className='md:text-3xl text-xl' />Continue with Facebook</button>

            <button className='flex items-center transition-all duration-300 hover:-translate-y-1 border border-zinc-200 cursor-pointer text-zinc-600 font-bold md:py-3.5 py-2 md:px-4 px-4 gap-4 rounded-sm md:rounded-lg md:text-xl active:scale-95'><FcGoogle className='md:text-3xl text-xl' />Continue with Google</button>

            <button className='flex items-center bg-black transition-all duration-300 hover:-translate-y-1 cursor-pointer text-white font-bold md:py-3.5 py-2 md:px-4 px-4 gap-4 rounded-sm md:rounded-lg md:text-xl active:scale-95'><FaApple className='md:text-3xl text-xl' />Continue with Apple</button>
          </div>

        </div>
      </div>


      <div className='md:mx-0 mx-3'>
        <StayHome />
      </div>

    </>
  )
}

export default SignUp