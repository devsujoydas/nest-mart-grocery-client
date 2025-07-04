import React, { useContext, useState } from 'react'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineGridView } from "react-icons/md";
import { TbArrowsSort } from "react-icons/tb";
import Blog from './Blog'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const Blogs = () => {

  const [show, setShow] = useState("");
  const [sort, setSort] = useState("");

  const { blogsData } = useContext(AuthContext)



  return (
    <div>


      <div className='md:max-w-screen-2xl mx-auto mt-8'>

        {/* Blog & News Heading */}
        <div
          className='px-20 pt-16 pb-10 rounded-xl bg-center bg-cover flex flex-col justify-center' style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/blog/header-bg.png")` }}>
          <h1 className='text-5xl text-zinc-700 font-bold font-family-primary'>Blog & News</h1>
          <div className='-mt-2'>
            <NavigationPage path1={"Blog & News"} />
          </div>
        </div>

        {/* Recipy & Filtering */}
        <div>
          <div className='my-10 flex md:flex-row flex-col justify-between items-center'>
            {/* Recips Articles */}
            <div className='flex items-center gap-5'>
              <img className='w-10' src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-1.svg" alt="" />
              <h1 className='text-4xl font-bold font-family-primary'>Recips Articles</h1>
            </div>
            {/* Filtering Section */}
            <div className='flex items-center gap-2'>
              <div className='flex  items-center  justify-center text-zinc-500 border border-zinc-200 rounded-md p-3  bg-white  transition'>
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

              <div className='flex  items-center  justify-center text-zinc-500 border border-zinc-200 rounded-md p-3  bg-white  transition'>
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

          <div className='grid md:grid-cols-4 gap-5'>
            {blogsData.map((blog, idx) => <Blog blog={blog} key={idx} />)}
          </div>


        </div>







      </div>


      <StayHome />
      <Servicess />
    </div>
  )
}

export default Blogs