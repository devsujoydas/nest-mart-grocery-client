import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import './Hero.css';
import { FaRegPaperPlane } from "react-icons/fa6";
import { Autoplay, EffectFade } from 'swiper/modules';

const Hero = () => {
  return (
    <div className='max-w-screen-2xl md:mx-auto mx-3 mt-6 md:mt-0'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <div className="lg:p-20 w-full hero-slide-1 md:p-10 p-7 rounded-3xl overflow-hidden md:mt-8  flex flex-col items-start gap-8 ">
            <h1 className="lg:text-7xl text-3xl font-family-primary font-bold text-black">Dont miss amazing <br /> grocery deals
            </h1>
            <p className="text-[15px] lg:text-3xl text-gray-500 font-family-secondary">Sign Up for Daily newsletter</p>
            <div className="font-family-primary p-1 bg-white flex rounded-full justify-between items-center lg:gap-4 gap-1 md:mt-8 mt-3 overflow-hidden ">
              <div className='lg:ml-5 ml-3 mr-1'>
                <FaRegPaperPlane  className='text-zinc-400 md:text-lg text-sm'/>
              </div>
              <input className="focus:outline-none text-sm lg:text-lg  font-semibold  bg-white text-black  w-4/6" type="email"
                placeholder="Your email address" />
              <div>
                <button id=""
                  className="bg-emerald-500 text-white lg:px-8 px-3 text-sm md:text-lg py-2 lg:py-4 rounded-full font-semibold hover:bg-emerald-400 active:scale-95 transition">Subscribe</button>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide className='w-full '>
          <div className="lg:p-20 w-full hero-slide-2 md:p-10 p-7 rounded-3xl overflow-hidden md:mt-8 flex flex-col items-start gap-8">
            <h1 className="lg:text-7xl text-3xl font-bold text-black font-family-primary">Fresh Vegetables <br /> Big Discounts
            </h1>
            <p className="text-[15px] lg:text-3xl text-gray-500 font-family-secondary">Save upto 50% off on your first order</p>
            <div className="font-family-primary p-1 bg-white flex rounded-full justify-center items-center lg:gap-4 gap-1 md:mt-8 mt-3 overflow-hidden ">
              <div className='lg:ml-5 ml-3 mr-1'>
                <FaRegPaperPlane  className='text-zinc-400 md:text-lg text-sm'/>
              </div>
              <input className="focus:outline-none text-sm lg:text-lg  font-semibold bg-white text-black w-4/6" type="email"
                placeholder="Your email address" />
              <button id="for-categories"
                className="bg-emerald-500 text-white lg:px-8 px-3 text-sm md:text-lg py-2 lg:py-4 rounded-full font-semibold hover:bg-emerald-400 active:scale-95 transition">Subscribe</button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>






    </div>
  )
}

export default Hero