
import StayHome from '../../Components/StayHome/StayHome'
import { Link } from 'react-router-dom'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import { motion } from 'framer-motion'
import Servicess from '../../Components/Servicess/Servicess'


const Login = () => {
  const inputStyle = "border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-lg outline-none focus:border-emerald-300 transition-all duration-500"
  return (
    <>
      <NavigationPage path1={"My Account"} path2={"Login"} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='font-family-primary xl:w-7xl mx-auto lg:p-30 md:px-10 2xl:px-0 md:pt-10 pt-3 px-3 grid lg:grid-cols-2 gap-10'
      >
        <div className='md:block hidden'>
          <img className='rounded-lg' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/login-1.png" alt="" />
        </div>

        <div className='flex justify-center items-center w-full'>
          <div className='w-full'>
            <h1 className='md:text-5xl text-2xl text-zinc-700 font-bold'>Login</h1>
            <h1 className='mt-3 text-zinc-600 md:text-[16px] text-xs font-medium font-family-secondary'>
              Don't have an account?{" "}
              <Link className='font-semibold text-emerald-500 font-family-primary hover:text-emerald-400 transition-all' to={"/signup"}>
                Create here
              </Link>
            </h1>

            <form className='mt-8'>
              <div className='space-y-4 md:text-sm text-xs'>
                <input
                  className={inputStyle}
                  type="email"
                  placeholder='Email'
                  name='email'
                />
                <input
                  className={inputStyle}
                  type="password"
                  placeholder='Password'
                  name='password'
                />

                <div className='flex justify-between items-center'>
                  <input
                    className='w-2/4 md:w-1/3 border border-zinc-200 px-4 md:py-4.5 py-2 rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
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
                      Remember me
                    </label>
                  </div>
                  <div>
                    <Link to={"/forgotPassword"} className='hover:text-zinc-700 duration-300 transition-all hover:underline'>
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <div className='md:mt-8 mt-3 md:block flex justify-center items-center'>
                  <button className='px-10 md:w-fit w-full md:py-3 py-2 bg-[#253D4E] rounded-lg font-bold text-white hover:bg-[#29A56C] duration-500 cursor-pointer active:scale-95 transition-all text-lg'>
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      <StayHome />
      <Servicess />
    </>
  )
}

export default Login
