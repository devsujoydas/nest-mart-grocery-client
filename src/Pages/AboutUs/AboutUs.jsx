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
    const socialBtnStyle = "text-emerald-500 text-3xl cursor-pointer hover:bg-emerald-400 active:scale-95 duration:700 transition-all hover:text-white rounded-full p-1.5"



    return (
        <div className='md:mx-0 mx-4 font-family-secondary'>
            <NavigationPage path1={"Pages"} path2={"About us"} />

            <div className='lg:w-7xl mx-auto md:py-14 py-5 space-y-14 '>
                {/* Welcome to nest */}
                <div className='grid md:grid-cols-2 items-center gap-10 '> 
                    <div className='rounded-lg overflow-hidden'>
                        <img className='' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-1.png" alt="" />
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-5xl font-family-primary font-bold'>Welcome to Nest</h1>
                        <p className='text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum. <br /> <br /> Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>

                        <div className='grid md:grid-cols-3 md:gap-5 justify-center gap-3'>
                            <img className='rounded-md h-full' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png" alt="" />
                            <img className='rounded-md h-full' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-3.png" alt="" />
                            <img className='rounded-md h-full' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-4.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* What We Provide */}
                <div className='space-y-10'>
                    <h1 className='text-5xl font-family-primary font-bold text-center'>What We Provide?</h1>
                    <div className=' grid md:grid-cols-3 gap-5'>
                        {provideData.map((provide, idx) => (<Provide provide={provide} />))}
                    </div>
                </div>

                {/* Our Performance */}
                <div className='space-y-10'>
                    <div className='grid md:grid-cols-2 items-center gap-10'>
                        <div>
                            <img src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-5.png" alt="" />
                        </div>
                        <div className='space-y-4'>
                            <h1 className='text-xl font-bold text-zinc-400 font-family-primary'>Our performance</h1>
                            <h1 className='text-5xl font-bold text-zinc-700 font-family-primary'>Your Partner for e-commerce grocery solution</h1>
                            <p className='text-zinc-600'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                <br /> <br />
                                Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>

                        </div>
                    </div>

                    <div className='grid md:grid-cols-3 gap-10'>
                        <div>
                            <h1 className='font-bold text-3xl font-family-primary'>Who we are</h1>
                            <p className='text-zinc-500 mt-5'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-3xl font-family-primary'>Our history</h1>
                            <p className='text-zinc-500 mt-5'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-3xl font-family-primary'>Our mission</h1>
                            <p className='text-zinc-500 mt-5'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Happy client */}
            <div
                className='max-w-screen-2xl mx-auto bg-center bg-no-repeat h-72 rounded-xl overflow-hidden ' style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/page/about-9.png")` }}>
                <div className=' w-full h-full bg-[#12522f85] flex justify-center items-center '>
                    <div className='grid grid-cols-5 w-full'>
                        <div className='font-bold font-family-primary text-white text-center'>
                            <h1 className='text-7xl'>0+</h1>
                            <p className='text-xl'>Glorious years</p>
                        </div>
                        <div className='font-bold font-family-primary text-white text-center'>
                            <h1 className='text-7xl'>0+</h1>
                            <p className='text-xl'>Happy clients </p>
                        </div>
                        <div className='font-bold font-family-primary text-white text-center'>
                            <h1 className='text-7xl'>0+</h1>
                            <p className='text-xl'>Projects complete </p>
                        </div>
                        <div className='font-bold font-family-primary text-white text-center'>
                            <h1 className='text-7xl'>0+</h1>
                            <p className='text-xl'>Team advisor  </p>
                        </div>
                        <div className='font-bold font-family-primary text-white text-center'>
                            <h1 className='text-7xl'>0+</h1>
                            <p className='text-xl'>Products Sale </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Our Team */}
            <div className='lg:w-7xl mx-auto p-10'>
                <h1 className='text-5xl font-family-primary font-bold text-center'>Our Team</h1>

                <div className='grid grid-cols-3 gap-10 mt-10 '>
                    <div className='col-span-1 '>
                        <h1 className='font-family-primary text-emerald-500 font-bold mb-2'>Our Team</h1>
                        <h1 className=' font-bold text-5xl text-zinc-800 font-family-primary'>Meet Our Expert Team</h1>
                        <p className='mt-8 text-zinc-500'>
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                            <br /><br />
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                        </p>
                        <button className='mt-8 bg-emerald-500 text-white font-bold px-8 py-3 rounded-md hover:bg-yellow-500 transition-all duration-500 active:scale-95 cursor-pointer'>View All Members </button>
                    </div>

                    <div className='col-span-2'>
                        <div className=' grid grid-cols-2 gap-5'>

                            <div className='group'>
                                <img className='rounded-xl' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-6.png" alt="" />

                                <div className='shadow-lg group-hover:-translate-y-2 duration-300 transition-all w-5/6 bg-white rounded-xl py-8 -mt-10 z-10 relative text-center mx-auto'>
                                    <h1 className='text-2xl font-bold font-family-primary'>H. Merinda</h1>
                                    <p className='text-lg text-zinc-500'>CEO & Co-Founder</p>
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

                                <div className='shadow-lg group-hover:-translate-y-2 duration-300 transition-all w-5/6 bg-white rounded-xl py-8 -mt-10 z-10 relative text-center mx-auto'>
                                    <h1 className='text-2xl font-bold font-family-primary'>Dilan Specter</h1>
                                    <p className='text-lg text-zinc-500'>Head Engineer</p>
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

            <div >
                <StayHome />
                <Servicess />
            </div>




        </div>
    )
}

export default AboutUs