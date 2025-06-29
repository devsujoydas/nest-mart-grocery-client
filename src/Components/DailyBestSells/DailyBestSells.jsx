import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './DailyBestSell.css'
import { Autoplay, FreeMode } from 'swiper/modules';
import DailyProducts from './DailyProducts';

const DailyBestSells = () => {
  return (
    <div id='nav-for-daily-best-sell' className="max-w-screen-2xl lg:mx-auto m-10">
      <div className="flex flex-col gap-2 lg:flex-row justify-between items-center">
        <h1 className="text-3xl lg:font-semibold font-bold">Daily Best Sells</h1>
        <div className="flex justify-center items-center gap-4">
          <a href="#hello"
            className="text-black hover:-translate-y-1 hover:-translate-x-1 transition-all hover:text-emerald-400">Featured</a>
          <a href="#hello"
            className="text-black hover:-translate-y-1 hover:-translate-x-1 transition-all hover:text-emerald-400">Popular</a>
          <a href="#hello"
            className="text-black hover:-translate-y-1 hover:-translate-x-1 transition-all hover:text-emerald-400">New
            Added</a>
        </div>
      </div>

      <div className='lg:grid flex flex-col grid-cols-4 gap-10 my-10'>

        <div id='bgLeaf' className="bg-cover border rounded-xl p-10 lg:col-span-1 ">
          <h1 className="font-semibold text-5xl my-8 text-black hover:-translate-y-1 transition-all">Bring <br />
            nature into
          </h1>
          <button className="bg-emerald-500 hover:bg-orange-400 hover:px-5 active:scale-95 transition-all  px-4 py-1 rounded-lg text-white font-semibold ">Shop
            Now</button>
        </div>

        <div className='lg:col-span-3 md:mx-10 mx-10'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
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