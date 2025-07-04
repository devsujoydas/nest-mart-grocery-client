import React from 'react'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import StayHome from '../../Components/StayHome/StayHome'
import { Link } from 'react-router-dom'

const Errorpage = () => {
    return (
        <div>
            <Header />


            <div className='flex justify-center items-center p-30'>
                <div className='flex flex-col items-center gap-5'>
                    <img className='h-30' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/page-404.png" alt="" />
                    <h1 className='md:text-7xl font-bold font-family-primary'>Page Not Found</h1>
                    <p className='font-family-secondary text-zinc-400 font-medium text-center'>The link you clicked may be broken or the page may have been removed. <br />
                        visit the <Link className='text-emerald-500 font-family-primary hover:text-yellow-400 transition-all'>Homepage</Link> or <Link className='text-emerald-500 font-family-primary hover:text-yellow-400 transition-all'>Contact </Link>  us about the problem</p>

                    <button className='px-8 py-3 cursor-pointer  bg-emerald-500 hover:bg-yellow-400 text-sm text-white hover:text-black font-family-primary font-bold rounded-md active:scale-95   duration-300 transition-all'>Back to Home</button>
                </div>
            </div>



            <StayHome />
            <Footer />
        </div>
    )
}

export default Errorpage