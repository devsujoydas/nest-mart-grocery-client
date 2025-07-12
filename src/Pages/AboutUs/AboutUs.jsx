import React, { useContext } from 'react'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import Provide from './Provide'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import { motion } from 'framer-motion'

import { FaYoutube, FaInstagram, FaTwitter, FaFacebookF, FaWhatsapp } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"

const AboutUs = () => {
    const { provideData } = useContext(AuthContext)
    const socialBtnStyle = "text-emerald-500 md:text-3xl text-2xl cursor-pointer hover:bg-emerald-400 active:scale-95 duration:700 transition-all hover:text-white rounded-full p-1.5"

    return (
        <div className='font-family-secondary'>
            <NavigationPage path1={"Pages"} path2={"About us"} />

            <div className='max-w-7xl mx-auto md:py-14 py-5 md:space-y-14 space-y-5 '>
                {/* ✅ Welcome to Nest */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='grid md:grid-cols-2 items-center gap-10 md:mx-10 2xl:mx-0 mx-3'
                >
                    <div className='rounded-lg overflow-hidden'>
                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-1.png" alt="" />
                    </div>
                    <div className='md:space-y-5 space-y-3'>
                        <h1 className='md:text-5xl text-3xl font-family-primary font-bold'>Welcome to Nest</h1>
                        <p className='text-zinc-500 md:text-lg text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </p>
                        <div className='grid md:grid-cols-3 md:gap-y-5 justify-center gap-3'>
                            <img className='rounded-md h-full' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png" alt="" />
                            <img className='rounded-md h-full' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-3.png" alt="" />
                            <img className='rounded-md h-full' src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-4.png" alt="" />
                        </div>
                    </div>
                </motion.div>

                {/* ✅ What We Provide */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='md:space-y-10 space-y-5 md:mx-10 2xl:mx-0 mx-3'
                >
                    <h1 className='md:text-5xl text-3xl font-family-primary font-bold text-center'>What We Provide?</h1>
                    <div className='grid md:grid-cols-3 md:gap-5 gap-3'>
                        {provideData.map((provide, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Provide provide={provide} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ✅ Our Performance */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='md:space-y-10 space-y-6 md:mx-10 2xl:mx-0 mx-3'
                >
                    <div className='grid md:grid-cols-2 items-center gap-10'>
                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-5.png" alt="" />
                        <div className='space-y-4'>
                            <h1 className='text-xl font-bold text-zinc-400 font-family-primary'>Our performance</h1>
                            <h1 className='md:text-5xl text-3xl font-bold text-zinc-700 font-family-primary'>Your Partner for e-commerce grocery solution</h1>
                            <p className='text-zinc-600 md:text-lg text-sm'>Ed ut perspiciatis unde omnis iste natus error...</p>
                        </div>
                    </div>
                </motion.div>

                {/* ✅ Our Team */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='md:mx-10 2xl:mx-0 mx-3'
                >
                    <div className='max-w-7xl mx-auto lg:py-10 md:py-0 py-8'>
                        <h1 className='md:text-5xl text-3xl font-family-primary font-bold text-center'>Our Team</h1>

                        <div className='grid md:grid-cols-3 gap-10 mt-5 md:mt-10 '>
                            <div className='col-span-1'>
                                <h1 className='font-family-primary text-emerald-500 font-bold mb-2'>Our Team</h1>
                                <h1 className='font-bold md:text-5xl text-3xl text-zinc-800 font-family-primary'>Meet Our Expert Team</h1>
                                <p className='md:mt-8 mt-5 text-zinc-500'>
                                    Proin ullamcorper pretium orci. Donec necscele...
                                </p>
                                <button className='mt-8 bg-emerald-500 text-white font-bold px-8 py-3 rounded-md hover:bg-yellow-500 transition-all duration-500 active:scale-95 cursor-pointer'>View All Members</button>
                            </div>

                            <div className='col-span-2 grid md:grid-cols-2 gap-5'>
                                {[6, 8].map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        className='group'
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <img className='rounded-xl' src={`https://nest-frontend-v6.vercel.app/assets/imgs/page/about-${img}.png`} alt="" />
                                        <div className='shadow-lg group-hover:-translate-y-2 duration-300 transition-all w-5/6 bg-white rounded-xl md:py-8 py-5 md:-mt-10 -mt-20 z-10 relative text-center mx-auto'>
                                            <h1 className='md:text-2xl text-lg font-bold font-family-primary'>{img === 6 ? "H. Merinda" : "Dilan Specter"}</h1>
                                            <p className='md:text-lg text-sm text-zinc-500'>{img === 6 ? "CEO & Co-Founder" : "Head Engineer"}</p>
                                            <div className="flex justify-center w-full items-center gap-1.5 mt-2">
                                                <FaFacebookF className={socialBtnStyle} />
                                                <FaInstagram className={socialBtnStyle} />
                                                <FaTwitter className={socialBtnStyle} />
                                                <FaYoutube className={socialBtnStyle} />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ✅ Happy client Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:mx-10 2xl:mx-0 mx-3"
            >
                <div className='max-w-screen-2xl mx-auto bg-cover bg-center bg-no-repeat md:h-72 rounded-xl overflow-hidden' style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/page/about-9.png")` }}>
                    <div className='w-full h-full bg-[#12522f85] flex justify-center items-center'>
                        <div className='grid grid-cols-3 gap-5 md:p-0 p-5 md:grid-cols-5 w-full'>
                            {[...Array(5)].map((_, idx) => (
                                <div key={idx} className='font-bold font-family-primary text-white text-center'>
                                    <h1 className='md:text-7xl text-3xl'>0+</h1>
                                    <p className='md:text-xl text-sm'>Data {idx + 1}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ✅ Reusable Components */}
            <StayHome />
            <Servicess />
        </div>
    )
}

export default AboutUs
