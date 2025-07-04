
const Blog = ({blog} ) => {
 
    return (
        <div className="group border border-zinc-200 rounded-2xl p-3 hover:border-emerald-300 duration-500 transition-all">
            <div className='rounded-2xl overflow-hidden cursor-pointer'>
                <img className="group-hover:scale-105 duration-700 transition-all" src={blog.img} alt="" />
            </div>

            <div className='md:mt-5 mt-3 text-center font-family-primary space-y-1 md:space-y-2'>
                <p className='text-zinc-500 text-xs md:text-[16px] font-bold'>{blog.type}</p>
                <h1 className='md:text-2xl text-lg font-bold cursor-pointer hover:text-emerald-500 transition-all duration-500 text-zinc-800'>{blog.titile}</h1>

                <div className='flex items-center justify-center gap-3 lg:gap-5 md:text-sm text-xs'>
                    <h1>{blog.date}</h1>
                    <h1>{blog.views}k Views</h1>
                    <h1>{blog.readtime } mins read</h1>
                </div>

            </div>


        </div>
    )
}

export default Blog