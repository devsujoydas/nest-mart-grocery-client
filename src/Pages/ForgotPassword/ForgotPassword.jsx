import React from 'react'
import { Link } from 'react-router-dom'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'

const ForgotPassword = () => {
  return (
    <>
      <NavigationPage path1={"My Account"} path2={"Forgot Password"} />

      
      <div className='font-family-primary md:w-7xl mx-auto md:p-30 p-3 flex justify-center items-center'>

        <div className='w-fit'>
          <div>
            <img className='mb-5' src="https://wp.alithemes.com/html/nest/demo/assets/imgs/page/forgot_password.svg" alt="" />
          </div>

          <h1 className='md:text-5xl text-2xl text-zinc-700 font-bold'>Forgot your password?</h1>
          <p className='mt-5 text-zinc-500 md:text-[16px] text-xs font-medium font-family-secondary'>
            Not to worry, we got you! Let’s get you a new password. Please enter your <br />  email address or your Username.
          </p>

          <form className='mt-8'>
            <div className='space-y-4 md:text-sm text-xs'>
              <input
                className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
                type="text"
                placeholder='Username or Email'
                name='email'
              />


              <div className='flex justify-between items-center'>
                <input
                  className='w-1/3 border border-zinc-200 px-4 md:py-4.5 py-2 rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
                  type="text"
                  placeholder='Security code *'
                  name='securityCode'
                />

                <div className='bg-[#BCE3C9] md:py-3 py-2 w-36 flex justify-center items-center rounded-lg'>
                  <h1 className='font-bold tracking-[0.15em] text-[#1d8056] rounded-lg md:text-2xl text-sm'>
                    {Math.floor(1000 + Math.random() * 9000)}
                  </h1>
                </div>
              </div>

              <div className='md:mt-7 mt-3 text-zinc-500 flex items-center justify-between'>
                <div className='flex items-center gap-2 text-sm font-family-secondary'>
                  <input type="checkbox" name="remember" id="terms" />
                  <label htmlFor="terms" className='cursor-pointer hover:text-emerald-500 duration-500 transition-all'>
                    I agree to terms & Policy.
                  </label>
                </div>
                <div>
                  <Link to={"/"} className='hover:text-zinc-700 duration-300 transition-all hover:underline'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className='md:mt-8 mt-3 md:block flex justify-center items-center'>
                <button className='px-10 md:w-fit w-full md:py-3 py-2 bg-[#253D4E] rounded-lg font-bold text-white hover:bg-[#29A56C] duration-500 cursor-pointer active:scale-95 transition-all text-lg'>
                  Reset password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>


    </>
  )
}

export default ForgotPassword