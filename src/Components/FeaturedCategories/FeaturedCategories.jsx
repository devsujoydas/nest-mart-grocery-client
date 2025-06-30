
import './FeaturedCategories.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode'; 

import { Autoplay, FreeMode } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";


const FeaturedCategories = () => {

    const [categories, setCategory] = useState()
    const bgColors = [
        'bg-orange-100',
        'bg-green-100',
        'bg-blue-100',
        'bg-yellow-100',
        'bg-purple-100',
        'bg-pink-100',
        'bg-red-100',
        'bg-teal-100',
        'bg-indigo-100',
        'bg-gray-100',
    ];


    useEffect(() => {
        fetch("./categories.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])


    return (
        <div className='max-w-screen-2xl md:mx-auto'>
            <section id="feature-categories" className="scroll-smooth font-family-primary">

                <div className=" my-10 flex justify-between litems-center  flex-wrap gap-3 lg:gap-8">
                    <h1 className="text-4xl font-bold">Featured Categories</h1>

                    <div className="flex  justify-center items-center font-semibold lg:gap-8 gap-x-4 gap-y-1 flex-wrap">
                        <a href="#" className="text-black active:scale-95 hover:-translate-y-1 duration-300 transition-all hover:text-emerald-400">Cake & Milk</a>
                        <a href="#" className="text-black active:scale-95 hover:-translate-y-1 duration-300 transition-all hover:text-emerald-400">Coffes & Teas</a>
                        <a href="#" className="text-black  active:scale-95hover:-translate-y-1 duration-300 transition-all hover:text-emerald-400">Pet Foods</a>
                        <a href="#" className="text-black active:scale-95 hover:-translate-y-1 duration-300 transition-all hover:text-emerald-400">Vegitables</a>
                    </div>
                </div>


                {/* Categories Slider */}
                <div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={12}
                        autoplay={{ delay: 1000, disableOnInteraction: false, }}
                        breakpoints={{
                            640: { slidesPerView: 3, spaceBetween: 0, },
                            768: { slidesPerView: 4, spaceBetween: 1, },
                            1024: { slidesPerView: 5, spaceBetween: 10, },
                            1026: { slidesPerView: 7, spaceBetween: 10, },
                            1450: { slidesPerView: 9, spaceBetween: 10, },
                        }}
                        modules={[Autoplay, FreeMode]}
                        className="mySwiper"
                    >
                        {categories?.map((category, idx) => (
                            <SwiperSlide key={idx}>
                                <div id="card" className={`hover:shadow-xl w-full border border-transparent hover:border-emerald-300 transition-all text-black p-4 rounded-lg flex justify-center items-center flex-col ${bgColors[idx % bgColors.length]}`}>
                                    <img id='categoriesImg' className="block  cursor-pointer group-hover:scale-110 duration-500 transition" src={category.imgUrl} alt="" />
                                    <a href="#" className="font-semibold text-lg hover:text-emerald-400"> {category.name} </a>
                                    <h1 className="text-gray-500 text-sm">{category.quantity} items</h1>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Shop Now */}
                <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3 gap-4">
                    <div className="bg-cover bgOnion  rounded-xl p-12 hover:shadow-lg  transition-all ">
                        <h1 className="font-bold text-2xl my-8 text-black hover:-translate-y-1 transition-all  ">Everyday Fresh & <br /> Clean with Our <br /> Products</h1>
                        <button className="bg-emerald-500 hover:bg-orange-400 hover:px-5 active:scale-95 transition-all px-4 py-2 rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer text-sm">Shop Now <FaArrowRight className='text-xs' /></button>
                    </div>
                    <div className="bg-cover bgStroberry  rounded-xl p-12 hover:shadow-lg transition-all">
                        <h1 className="font-bold text-2xl my-8 text-black hover:-translate-y-1 transition-all">Make your Breakfast <br /> Healthy and Easy </h1>
                        <button className="bg-emerald-500 hover:bg-orange-400 hover:px-5 active:scale-95 transition-all px-4 py-2 rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer text-sm">Shop Now <FaArrowRight className='text-xs' /></button>
                    </div>
                    <div className=" bg-cover bgVegetable rounded-xl p-12  
                        hover:shadow-lg transition-all">
                        <h1 className="font-bold text-2xl my-8 text-black hover:-translate-y-1 transition-all">The best Organic <br /> Products Online</h1>
                        <button className="bg-emerald-500 hover:bg-orange-400 hover:px-5 active:scale-95 transition-all px-4 py-2 rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer text-sm">Shop Now <FaArrowRight className='text-xs' /></button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default FeaturedCategories