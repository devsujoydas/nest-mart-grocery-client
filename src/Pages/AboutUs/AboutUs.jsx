import React, { useContext } from 'react'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import Provide from './Provide'
import { AuthContext } from '../../AuthProvider/AuthProvider'

import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import StayHome from '../../Components/StayHome/StayHome';
import Servicess from '../../Components/Servicess/Servicess';

const AboutUs = () => {

    const { provideData, setProvideData } = useContext(AuthContext)
    const socialBtnStyle = "text-emerald-500 md:text-3xl text-2xl cursor-pointer hover:bg-emerald-400 active:scale-95 duration:700 transition-all hover:text-white rounded-full p-1.5"



    return (
        <div className='font-family-secondary'>
            <NavigationPage path1={"Pages"} path2={"About us"} />

            <div className='max-w-7xl mx-auto md:py-14 py-5 md:space-y-14 space-y-5 '>
                {/* Welcome to nest */}
                <div className='grid md:grid-cols-2 items-center gap-10  md:mx-10 2xl:mx-0 mx-3 '>
                    <div className='rounded-lg overflow-hidden'>
                        <img className='' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-1.png" alt="" />
                    </div>
                    <div className='md:space-y-5 space-y-3'>
                        <h1 className='md:text-5xl text-3xl font-family-primary font-bold'>Welcome to Nest</h1>
                        <p className='text-zinc-500 md:text-lg text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  <br /> <br className='md:flex hidden' /> Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. </p>

                        <div className='grid md:grid-cols-3 md:gap-y-5 justify-center gap-3'>
                            <img className='rounded-md h-full' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png" alt="" />
                            <img className='rounded-md h-full' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-3.png" alt="" />
                            <img className='rounded-md h-full' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-4.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* What We Provide */}
                <div className='md:space-y-10 space-y-5 md:mx-10 2xl:mx-0 mx-3'>
                    <h1 className='md:text-5xl text-3xl font-family-primary font-bold text-center'>What We Provide?</h1>
                    <div className=' grid md:grid-cols-3 md:gap-5 gap-3'>
                        {provideData.map((provide, idx) => (<Provide provide={provide} />))}
                    </div>
                </div>

                {/* Our Performance */}
                <div className='md:space-y-10 space-y-6 md:mx-10 2xl:mx-0 mx-3'>
                    <div className='grid md:grid-cols-2 items-center gap-10'>
                        <div>
                            <img className='' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-5.png" alt="" />
                        </div>
                        <div className='space-y-4'>
                            <h1 className='text-xl font-bold text-zinc-400 font-family-primary'>Our performance</h1>
                            <h1 className='md:text-5xl text-3xl font-bold text-zinc-700 font-family-primary'>Your Partner for e-commerce grocery solution</h1>
                            <p className='text-zinc-600 md:text-lg text-sm'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                <br /> <br />
                                Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-3 gap-3 md:gap-10'>
                        <div>
                            <h1 className='font-bold text-2xl md:text-3xl font-family-primary'>Who we are</h1>
                            <p className='text-zinc-500 md:mt-5 mt-2 md:text-lg text-sm'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl md:text-3xl font-family-primary'>Our history</h1>
                            <p className='text-zinc-500 md:mt-5 mt-2 md:text-lg text-sm'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl md:text-3xl font-family-primary'>Our mission</h1>
                            <p className='text-zinc-500 md:mt-5 mt-2 md:text-lg text-sm'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Happy client */}

            <div className="md:mx-10 2xl:mx-0 mx-3">
                <div
                    className='max-w-screen-2xl mx-auto bg-cover  bg-center  bg-no-repeat md:h-72 rounded-xl overflow-hidden ' style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/page/about-9.png")` }}>
                    <div className=' w-full h-full bg-[#12522f85] flex justify-center items-center '>
                        <div className='grid grid-cols-3 gap-5 md:p-0 p-5 md:grid-cols-5 w-full'>
                            <div className='font-bold font-family-primary text-white text-center'>
                                <h1 className='md:text-7xl text-3xl'>0+</h1>
                                <p className='md:text-xl text-sm'>Glorious years</p>
                            </div>
                            <div className='font-bold font-family-primary text-white text-center'>
                                <h1 className='md:text-7xl text-3xl'>0+</h1>
                                <p className='md:text-xl text-sm'>Happy clients </p>
                            </div>
                            <div className='font-bold font-family-primary text-white text-center'>
                                <h1 className='md:text-7xl text-3xl'>0+</h1>
                                <p className='md:text-xl text-sm'>Projects complete </p>
                            </div>
                            <div className='font-bold font-family-primary text-white text-center'>
                                <h1 className='md:text-7xl text-3xl'>0+</h1>
                                <p className='md:text-xl text-sm'>Team advisor  </p>
                            </div>
                            <div className='font-bold font-family-primary text-white text-center'>
                                <h1 className='md:text-7xl text-3xl'>0+</h1>
                                <p className='md:text-xl text-sm'>Products Sale </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Team */}
            <div className='md:mx-10 2xl:mx-0 mx-3'>

                <div className='max-w-7xl mx-auto lg:py-10 md:py-0 py-8'>
                    <h1 className='md:text-5xl text-3xl font-family-primary font-bold text-center'>Our Team</h1>

                    <div className='grid md:grid-cols-3 gap-10 mt-5 md:mt-10 '>
                        <div className='col-span-1 '>
                            <h1 className='font-family-primary text-emerald-500 font-bold mb-2'>Our Team</h1>
                            <h1 className=' font-bold md:text-5xl text-3xl text-zinc-800 font-family-primary'>Meet Our Expert Team</h1>
                            <p className='md:mt-8 mt-5 text-zinc-500'>
                                Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                                <br /><br />
                                Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                            </p>
                            <button className='mt-8 bg-emerald-500 text-white font-bold px-8 py-3 rounded-md hover:bg-yellow-500 transition-all duration-500 active:scale-95 cursor-pointer'>View All Members </button>
                        </div>

                        <div className='col-span-2'>
                            <div className=' grid md:grid-cols-2 gap-5'>

                                <div className='group'>
                                    <img className='rounded-xl' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-6.png" alt="" />

                                    <div className='shadow-lg group-hover:-translate-y-2 duration-300 transition-all w-5/6 bg-white rounded-xl md:py-8 py-5 md:-mt-10 -mt-20 z-10 relative text-center mx-auto'>
                                        <h1 className='md:text-2xl text-lg font-bold font-family-primary'>H. Merinda</h1>
                                        <p className='md:text-lg text-sm text-zinc-500'>CEO & Co-Founder</p>
                                        <div className="flex justify-center w-full items-center gap-1.5 mt-2">
                                            <FaFacebookF className={socialBtnStyle} />
                                            <FaInstagram className={socialBtnStyle} />
                                            <FaTwitter className={socialBtnStyle} />
                                            <FaYoutube className={socialBtnStyle} />
                                        </div>
                                    </div>
                                </div>
                                <div className='group'>
                                    <img className='rounded-xl' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-8.png" alt="" />

                                    <div className='shadow-lg group-hover:-translate-y-2 duration-300 transition-all w-5/6 bg-white rounded-xl md:py-8 py-5 md:-mt-10 -mt-20 z-10 relative text-center mx-auto'>
                                        <h1 className='md:text-2xl text-lg font-bold font-family-primary'>Dilan Specter</h1>
                                        <p className='md:text-lg text-sm text-zinc-500'>Head Engineer</p>
                                        <div className="flex justify-center w-full items-center gap-1.5 mt-2">
                                            <FaFacebookF className={socialBtnStyle} />
                                            <FaInstagram className={socialBtnStyle} />
                                            <FaTwitter className={socialBtnStyle} />
                                            <FaYoutube className={socialBtnStyle} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div >
                <StayHome />
                <Servicess />
            </div>




        </div>
    )
}

export default AboutUs