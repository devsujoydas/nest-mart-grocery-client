import React, { useContext, useState } from 'react'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import { MdOutlineGridView } from "react-icons/md";
import { TbArrowsSort } from "react-icons/tb";
import Blog from './Blog'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { motion } from "framer-motion";

const Blogs = () => {
  const [show, setShow] = useState("");
  const [sort, setSort] = useState("");
  const { blogsData } = useContext(AuthContext)

  return (
    <div>
      <div className='md:max-w-screen-2xl 2xl:mx-auto mt-8 md:mx-10 mx-3'>

        {/* Blog & News Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='md:px-20 md:p-0 px-5 pt-5 pb-3 md:pt-16 md:pb-10 rounded-xl bg-center bg-cover flex flex-col justify-center md:items-baseline items-center'
          style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/blog/header-bg.png")` }}
        >
          <h1 className='md:text-5xl text-3xl text-zinc-700 font-bold font-family-primary'>Blog & News</h1>
          <div className='-mt-2'>
            <NavigationPage path1={"Blog & News"} />
          </div>
        </motion.div>

        {/* Recipy & Filtering */}
        <div>
          <div className='md:my-10 my-5 flex md:flex-row flex-col justify-between items-center'>

            {/* Recips Articles */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='flex items-center gap-5'
            >
              <img className='md:w-10 w-5' src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-1.svg" alt="" />
              <h1 className='md:text-4xl text-2xl font-bold font-family-primary'>Recips Articles</h1>
            </motion.div>

            {/* Filtering Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='flex items-center md:flex-row flex-col md:mt-0 mt-2 gap-2'
            >
              <div className='flex items-center justify-center text-zinc-500 border border-zinc-200 rounded-md p-2 md:p-3 bg-white transition'>
                <MdOutlineGridView className="text-xl text-emerald-600" />
                <select
                  value={show}
                  onChange={(e) => setShow(e.target.value)}
                  className="bg-white text-sm font-semibold px-3 rounded-md outline-none transition duration-200 cursor-pointer"
                >
                  <option value="10">Show: 10</option>
                  <option value="20">Show: 20</option>
                  <option value="50">Show: 50</option>
                </select>
              </div>

              <div className='flex items-center justify-center text-zinc-500 border border-zinc-200 rounded-md p-2 md:p-3 bg-white transition'>
                <TbArrowsSort className="text-xl text-emerald-600" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-white text-sm font-semibold px-3 rounded-md outline-none transition duration-200 cursor-pointer"
                >
                  <option value="10">Sort: Featured</option>
                  <option value="20">Sort: Newest</option>
                  <option value="50">Sort: Most comments</option>
                  <option value="60">Sort: Release Date</option>
                </select>
              </div>
            </motion.div>
          </div>

          {/* Blog Cards */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {blogsData.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Blog blog={blog} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <StayHome />
      <Servicess />
    </div>
  )
}

export default Blogs
