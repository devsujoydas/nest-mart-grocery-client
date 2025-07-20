 
import { Link } from 'react-router-dom';
import Organic from '../../Components/CategorySide/Organic' 

import TrandingProductsTemplate from '../../Components/TopSelling/TrandingProductsTemplate';

const BlogsCategory = () => {
    const categories = [
        {
            name: 'Milks and Dairies',
            icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-1.svg'
        },
        {
            name: 'Wines & Drinks',
            icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-2.svg'
        },
        {
            name: 'Clothing & beauty',
            icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-3.svg'
        },
        {
            name: 'Pet Toy',
            icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-4.svg'
        },
        {
            name: 'Fresh Fruit',
            icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-5.svg'
        },
        {
            name: 'Wines & Drinks',
            icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-6.svg'
        },
        {
            name: 'Fresh Seafood',
            icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-7.svg'
        },
        {
            name: 'Fast food',
            icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-8.svg'
        },
        {
            name: 'Vegetables',
            icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-9.svg'
        },
        {
            name: 'Bread and Juice',
            icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-10.svg'
        },
    ]

    return (
        <div className='space-y-5 sticky top-[2vh]'>

            <div className='border border-zinc-200 shadow-md  rounded-2xl  p-3 md:p-7'>
                <h1 className='text-2xl font-family-primary font-bold text-zinc-600'>Category</h1>
                <hr className='text-zinc-300 my-3' />
                <div className='grid gap-3'>

                    {categories.map((category, index) => (
                        <Link to={`/products`} className='w-full'>
                            <button key={index} className="border w-full cursor-pointer active:scale-95 hover:text-emerald-500 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg   border-zinc-200 px-4 py-2 flex items-center gap-2 text-sm rounded-md">
                            <img className="w-8" src={category.icon} alt="" />
                            <p>{category.name}</p>
                        </button>
                        </Link>
                    ))}
                </div>
            </div>



            <TrandingProductsTemplate />
            <Organic />
        </div>
    )
}

export default BlogsCategory