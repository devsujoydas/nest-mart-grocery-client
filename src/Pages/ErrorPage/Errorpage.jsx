
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import StayHome from '../../Components/StayHome/StayHome'
import { Link, useNavigate } from 'react-router-dom'
import Servicess from '../../Components/Servicess/Servicess'

const Errorpage = () => {
    const navigate = useNavigate()


    return (
        <div>
            <Header />

            <div className='flex justify-center items-center lg:p-30 pt-20  px-3 md:h-fit h-[50vh]'>
                <div className='flex flex-col items-center gap-3 md:gap-5'>
                    <img className='md:h-30 h-20' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/page-404.png" alt="" />
                    <h1 className='lg:text-7xl md:text-5xl font-bold font-family-primary'>Page Not Found</h1>
                    <p className='font-family-secondary text-zinc-400 font-medium text-center md:text-[16px] text-xs'>The link you clicked may be broken or the page may have been removed. <br className='md:block hidden' />
                        visit the <Link className='text-emerald-500 font-family-primary hover:text-yellow-400 transition-all'>Homepage</Link> or <Link className='text-emerald-500 font-family-primary hover:text-yellow-400 transition-all'>Contact </Link>  us about the problem</p>

                    <button onClick={() => navigate("/")} className='md:px-8 px-4 md:py-3 py-2 cursor-pointer  bg-emerald-500 hover:bg-yellow-400 text-sm text-white hover:text-black font-family-primary font-bold rounded-md active:scale-95   duration-300 transition-all'>Back to Home</button>
                </div>
            </div>


            <StayHome />
            <Servicess />
            <Footer />
        </div>
    )
}

export default Errorpage