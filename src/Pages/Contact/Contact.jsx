import React from 'react'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import MapEmbed from './MapEmbed'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <NavigationPage path1={"Contact"} />

            <div className='space-y-10 rounded-lg max-w-screen-2xl mx-3 md:mx-10 2xl:mx-auto md:my-10 my-5'>
                <MapEmbed />

                <div>
                    <div className='text-center
                    '>
                        <h1 className='font-family-primary text-3xl font-bold text-zinc-700'>Drop Us a Line</h1>
                        <p className='mt-2 text-sm text-zinc-500 font-medium'>Contact Us For Any Questions</p>
                    </div>

                    <div>
                        <form className='md:mt-8 mt-5 md:w-2/3 mx-auto'>
                            <div className='grid grid-cols-2 gap-5 md:text-sm text-xs'>
                                <input
                                    className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-sm md:rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
                                    type="text"
                                    placeholder='Your Name'
                                    name='name'
                                />
                                <input
                                    className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-sm md:rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
                                    type="email"
                                    placeholder='Your Email'
                                    name='email'
                                />
                                <input
                                    className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-sm md:rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
                                    type="text"
                                    placeholder='Your Address'
                                    name='address'
                                />
                                <input
                                    className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-sm md:rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
                                    type="text"
                                    placeholder='Your Phone'
                                    name='phone'
                                />
                                <input
                                    className='col-span-2 border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-sm md:rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
                                    type="text"
                                    placeholder='Subject '
                                    name='subject'
                                />

                                <textarea className='col-span-2 border border-zinc-200 px-4 md:py-5 py-2 w-full rounded-sm md:rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' placeholder='Your Message' name="message" id="" rows={5}></textarea>

                            </div>


                            <div className='md:mt-5 mt-3 flex justify-center items-center w-full'>
                                <button className='px-10 md:w-fit w-full md:py-5 py-2 bg-[#253D4E] rounded-sm md:rounded-lg font-semibold font-family-primary text-white hover:bg-[#29A56C] duration-500 cursor-pointer active:scale-95 transition-all text-lg'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>






                </div>
            </div>

            <StayHome />
            <Servicess />
        </div>
    )
}

export default Contact