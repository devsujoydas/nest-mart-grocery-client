import React, { useContext } from 'react'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { Link, useParams } from 'react-router-dom'
import BlogsCategory from './BlogsCategory'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'

const BlogDetails = () => {

  const { blogsData } = useContext(AuthContext)
  const paramsId = useParams()
  const blog = blogsData.find(blog => blog.path == paramsId.id)
  const { img, img2, type, title, date, views, readtime, content, path } = blog


  return (
    <div className=''>
      <NavigationPage path1={`Blog`} path2={blog.title} />
      <div className='md:max-w-screen-2xl 2xl:mx-auto md:mt-8 mt-5 md:mx-10 mx-3 relative'>

        <div className='grid lg:grid-cols-12 gap-10 md:my-10 my-5'>

          <div className='lg:col-span-9 space-y-3'>

            <p className='text-emerald-500 font-bold text-sm font-family-primary  '>{type}</p>

            <h1 className='md:text-5xl  text-3xl text-zinc-700 font-bold font-family-primary'>{title}</h1>

            
              <div className="flex items-center font-bold font-family-primary gap-3">
                <p className='text-zinc-500 text-sm'>{date}</p>
                <p className='text-zinc-500 text-sm mx-3'>{views}k Views</p>
                <p className='text-zinc-500 text-sm'>{readtime} mins read</p>
              </div>
 
            <div className=' overflow-hidden my-5'>
              <img className='rounded-2xl w-full' src={img} alt="" />
            </div>


            <div className='space-y-3'>
              <p className='text-zinc-700 text-lg font-bold uppercase font-family-primary'>{path}</p>
              <p className='text-zinc-500 text-sm'>{content[0]}</p>
              <img className='rounded-2xl my-10' src={img2} alt="" />
              <p className='text-zinc-500 text-sm'>{content[1]}</p>
            </div>

            {/* Comments */}
            <div className='my-5 md:w-2/3'>
              <h1 className='md:text-4xl  text-3xl text-zinc-700 font-bold font-family-primary'>Leave a Comment</h1>

              <form className='md:mt-8 mt-5 '>
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
                    className='col-span-2 border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-sm md:rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
                    type="text"
                    placeholder='Website '
                    name='website'
                  />

                  <textarea className='col-span-2 border border-zinc-200 px-4 md:py-5 py-2 w-full rounded-sm md:rounded-lg outline-none focus:border-emerald-300 transition-all duration-500' placeholder='Your Comment' name="message" id="" rows={5}></textarea>

                </div>

                <div className='md:mt-5 mt-3 flex items-center w-full'>
                  <button className='px-10 md:w-fit w-full md:py-5 py-2 bg-[#253D4E] rounded-sm md:rounded-lg font-semibold font-family-primary text-white hover:bg-[#29A56C] duration-500 cursor-pointer active:scale-95 transition-all md:text-lg text-sm'>
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='lg:col-span-3  '>
            <BlogsCategory />
          </div>
        </div>
      </div>

      <StayHome />
      <Servicess />
    </div>
  )
}

export default BlogDetails