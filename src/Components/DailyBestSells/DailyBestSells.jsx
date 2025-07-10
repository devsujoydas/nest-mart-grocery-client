import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { Autoplay, FreeMode } from 'swiper/modules';
import DailyProducts from './DailyProducts';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './DailyBestSell.css';

const btnStyles = "text-black active:scale-95 hover:-translate-y-1 duration-300 transition-all hover:text-emerald-400 active:text-emerald-500";

const DailyBestSells = () => {
  return (
    <div id='nav-for-daily-best-sell' className="max-w-screen-2xl lg:mx-auto font-family-primary">

      {/* Heading and Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className="my-5 md:my-10 flex justify-between items-center flex-wrap gap-3 lg:gap-8"
      >
        <h1 className="md:text-4xl text-2xl font-bold">Daily Best Sells</h1>
        <div className="flex justify-center items-center font-semibold lg:gap-8 gap-x-4 gap-y-1 flex-wrap md:text-lg text-xs">
          <a href="#" className={btnStyles}>Featured</a>
          <a href="#" className={btnStyles}>Popular</a>
          <a href="#" className={btnStyles}>New added</a>
        </div>
      </motion.div>

      {/* Banner and Product Slider */}
      <div className='lg:grid flex flex-col grid-cols-4 gap-5 md:my-10 my-5'>

        {/* Left Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          id='bgLeaf'
          className="bg-cover rounded-xl p-10 lg:col-span-1 flex justify-between flex-col"
        >
          <h1 className="font-bold text-4xl my-8 text-black hover:-translate-y-1 transition-all">
            Bring nature into your home
          </h1>
          <button className="bg-emerald-500 w-fit hover:bg-orange-400 hover:px-5 active:scale-95 transition-all px-4 py-2 rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer text-sm">
            Shop Now <FaArrowRight className='text-xs' />
          </button>
        </motion.div>

        {/* Product Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className='lg:col-span-3'
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 10 },
              1450: { slidesPerView: 4, spaceBetween: 10 },
            }}
            modules={[Autoplay, FreeMode]}
            className="mySwiper"
          >
            {/* Add as many slides as you want */}
            {[...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <DailyProducts />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </div>
  );
};

export default DailyBestSells;
