
const Blog = ({blog} ) => {
 
    return (
        <div>
            <div className='rounded-2xl overflow-hidden cursor-pointer'>
                <img src={blog.img} alt="" />
            </div>

            <div className='mt-5 text-center font-family-primary space-y-2'>
                <p className='text-zinc-500  font-bold'>{blog.type}</p>
                <h1 className='text-2xl font-bold cursor-pointer hover:text-emerald-500 transition-all duration-500d text-zinc-800'>The Intermediate Guide to Healthy Food</h1>

                <div className='flex items-center justify-center gap-5 text-sm'>
                    <h1>{blog.date}</h1>
                    <h1>{blog.views}k Views</h1>
                    <h1>{blog.readtime } mins read</h1>
                </div>

            </div>


        </div>
    )
}

export default Blog