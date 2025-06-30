import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './DailyBestSell.css'
import { Autoplay, FreeMode } from 'swiper/modules';
import DailyProducts from './DailyProducts';

const DailyBestSells = () => {

  const btnStyles = "text-black active:scale-95 hover:-translate-y-1 duration-300 transition-all hover:text-emerald-400"


  return (
    <div id='nav-for-daily-best-sell' className="max-w-screen-2xl lg:mx-auto  font-family-primary">

      <div className=" my-10 flex justify-between litems-center  flex-wrap gap-3 lg:gap-8">
        <h1 className="text-4xl font-bold">Popular Product</h1>
        <div className="flex gap-2 justify-center items-center font-semibold  lg:gap-6">
          <a href="#" className={btnStyles}>Featured</a>
          <a href="#" className={btnStyles}>Popular</a>
          <a href="#" className={btnStyles}>New added</a>
        </div>
      </div>

      <div className='lg:grid flex flex-col grid-cols-4 gap-5 my-10'>

        <div id='bgLeaf' className="bg-cover rounded-xl p-10 lg:col-span-1 flex justify-between flex-col">
          <h1 className="font-bold text-4xl my-8 text-black hover:-translate-y-1 transition-all">Bring nature into your home </h1>
          <button className="bg-emerald-500 w-fit hover:bg-orange-400 hover:px-5 active:scale-95 transition-all px-4 py-2 rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer text-sm">Shop Now <FaArrowRight className='text-xs' /></button>
          <div></div>
        </div>

        <div className='lg:col-span-3 '>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{ delay: 1500, disableOnInteraction: false, }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10, },
              768: { slidesPerView: 2, spaceBetween: 10, },
              1024: { slidesPerView: 3, spaceBetween: 10, },
              1026: { slidesPerView: 3, spaceBetween: 10, },
              1450: { slidesPerView: 4, spaceBetween: 10, },
            }}
            modules={[Autoplay, FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide> <DailyProducts /> </SwiperSlide>
            <SwiperSlide> <DailyProducts /> </SwiperSlide>
            <SwiperSlide> <DailyProducts /> </SwiperSlide>
            <SwiperSlide> <DailyProducts /> </SwiperSlide>
            <SwiperSlide> <DailyProducts /> </SwiperSlide>
            <SwiperSlide> <DailyProducts /> </SwiperSlide>

          </Swiper>
        </div>

      </div>
    </div >
  )
}

export default DailyBestSells