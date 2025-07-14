import { useContext, useState } from 'react'
import { motion } from "framer-motion";

import { SlMagnifier } from "react-icons/sl";
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineGridView } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io"
import { FaArrowRight } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


import { AuthContext } from '../../AuthProvider/AuthProvider'
import PopularProduct from '../../Components/PopularProducts/PopularProduct'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import Servicess from '../../Components/Servicess/Servicess'
import StayHome from '../../Components/StayHome/StayHome'


const VendorShop = () => {

    const { products } = useContext(AuthContext)
    const [show, setShow] = useState("");
    const [sort, setSort] = useState("");
    const socialBtnStyle = "text-white text-3xl cursor-pointer hover:bg-emerald-400 active:scale-95 transition-all bg-emerald-500 rounded-full p-1.5";


    return (
        <div>
            <NavigationPage path1={"Vendor"} path2={"Nest Mart"} />


            <div className='max-w-screen-2xl 2xl:mx-auto  md:mx-10 mx-3 my-5 md:my-10'>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-family-primary font-bold md:text-7xl text-3xl text-zinc-700'>Nature Food Store</h1>
                    <div className='flex items-center justify-between gap-5 border border-zinc-200 px-5 md:py-2 py-1 rounded-full md:w-1/2 mt-5 md:mt-10 shadow-xl'>
                        <input type="text" className="py-2 pl-2 w-full outline-none
                        " placeholder=" Search for items..." />
                        <div className=" text-xl text-zinc-300">
                            <SlMagnifier />
                        </div>
                    </div>
                </div>
 

                <div className='flex md:flex-row flex-col-reverse gap-8 mt-5 md:mt-20'>

                    <div className='md:w-96 w-full col-span-1 relative'>

                        <div className='bg-[#D1E8F2] border border-zinc-300 rounded-xl p-8 sticky top-0'>
                            <div>
                                <img className='w-38' src="https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-1.png" alt="" />
                            </div>

                            <div className='mt-10'>
                                <p className='text-zinc-400 text-sm'>Since 2012</p>
                                <h1 className='font-family-primary font-bold text-2xl text-zinc-700 py-2'>Nest Food.,Ltd </h1>
                                <div className='flex items-center gap-2'>
                                    <div className="flex items-center text-orange-300 text-sm">
                                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf />
                                    </div>
                                    <p className='text-sm text-zinc-400'>(4.5)</p>
                                </div>
                            </div>

                            <h1 className='text-sm mt-5 text-zinc-600'>Got a smooth, buttery spread in your fridge? Chances are good that it's Good Chef. This brand made Lionto's list of the most popular grocery brands across the country.</h1>


                            <div className='mt-5'>
                                <h1 className='font-family-primary font-bold'>Follow Us</h1>

                                <div className="flex items-center gap-1.5 mt-2">
                                    <a href="https://web.facebook.com/devsujoydas" target="_blank" rel="noopener noreferrer" aria-label="Facebook" >
                                        <FaFacebookF className={socialBtnStyle} />
                                    </a>

                                    <a href="https://api.whatsapp.com/send/?phone=%2B8801303436299&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" >
                                        <FaWhatsapp className={socialBtnStyle} />
                                    </a>

                                    <a href="https://www.youtube.com/@devsujoydas" target="_blank" rel="noopener noreferrer" aria-label="YouTube" >
                                        <FaYoutube className={socialBtnStyle} />
                                    </a>

                                    <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram" >
                                        <FaInstagram className={socialBtnStyle} />
                                    </a>
                                </div>
                            </div>

                            <div className='mt-5 text-zinc-500 text-sm '>
                                <h1><span className='font-bold'>Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</h1>
                                <p className='mt-2'><span className='font-bold'>Call Us:</span> +880 1303-436299</p>
                            </div>

                            <button className="bg-emerald-500 w-fit hover:bg-orange-400 hover:px-5 active:scale-95 transition-all px-4 py-2 text-sm rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer mt-5 duration-500">
                                Contact Seller <FaArrowRight className='text-xs' />
                            </button>
                        </div>
                    </div>

                    <div className='w-full col-span-4'>
                        <div className='md:my-5 flex md:flex-row flex-col justify-between items-center'>
                            {/* Recips Articles */}
                            <div className='md:my-0 my-2'>
                                <h1 className='font-family-primary'>We found <span className='font-bold text-emerald-500'>700</span> vendors now</h1>
                            </div>
                            {/* Filtering Section */}
                            <div className='flex items-center md:mb-0 mb-5 md:mt-0 mt-2 gap-2'>
                                <div className='flex  items-center  justify-center text-zinc-500 border border-zinc-200 rounded-md p-2 md:p-3  bg-white  transition'>
                                    <MdOutlineGridView className="text-xl text-emerald-600" />
                                    <select
                                        value={show}
                                        onChange={(e) => setShow(e.target.value)}
                                        className="bg-white text-sm font-semibold px-3  rounded-md  outline-none transition duration-200 cursor-pointer"
                                    >
                                        <option value="10">Show: 10</option>
                                        <option value="20">Show: 20</option>
                                        <option value="50">Show: 50</option>
                                    </select>
                                </div>

                                <div className='flex  items-center  justify-center text-zinc-500 border border-zinc-200 rounded-md p-2 md:p-3  bg-white  transition'>
                                    <TbArrowsSort className="text-xl text-emerald-600" />
                                    <select
                                        value={sort}
                                        onChange={(e) => setSort(e.target.value)}
                                        className="bg-white text-sm font-semibold px-3  rounded-md  outline-none transition duration-200 cursor-pointer"
                                    >
                                        <option value="10">Sort: Featured</option>
                                        <option value="20">Sort: Newest</option>
                                        <option value="50">Sort: Most comments</option>
                                        <option value="50">Sort: Release Date</option>
                                    </select>
                                </div>
                            </div>
                        </div>



                        <div className="grid grid-cols-2 md:mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5 gap-3">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.01 }}
                                >
                                    <PopularProduct product={product} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

 
            </div>

            <StayHome />
            <Servicess />
        </div>
    )
}

export default VendorShop