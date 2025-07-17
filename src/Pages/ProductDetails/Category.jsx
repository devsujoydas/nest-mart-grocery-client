import React from 'react'

const Category = () => {
    return (
        <div className='border border-zinc-200 shadow-md  rounded-2xl  p-3 md:p-7'>
            <h1 className='text-2xl font-family-primary font-bold text-zinc-600'>Category</h1>
            <hr className='text-zinc-300 my-3' />
            <div className='grid gap-3'>
                <button className="border cursor-pointer active:scale-95 hover:text-emerald-500 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg   border-zinc-200 px-4 py-2 flex items-center gap-2 text-sm rounded-md">
                    <img className="w-8" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-1.svg" alt="" />
                    <p> Milks and Dairies</p>
                </button>

                <button className="border cursor-pointer active:scale-95 hover:text-emerald-500 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg   border-zinc-200 px-4 py-2 flex items-center gap-2 text-sm rounded-md">
                    <img className="w-8" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-6.svg" alt="" />
                    <p> Wines & Drinks</p>
                </button>

                <button className="border cursor-pointer active:scale-95 hover:text-emerald-500 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg   border-zinc-200 px-4 py-2 flex items-center gap-2 text-sm rounded-md">
                    <img className="w-8" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-2.svg" alt="" />
                    <p> Clothing & beauty</p>
                </button>

                <button className="border cursor-pointer active:scale-95 hover:text-emerald-500 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg   border-zinc-200 px-4 py-2 flex items-center gap-2 text-sm rounded-md">
                    <img className="w-8" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-7.svg" alt="" />
                    <p> Fresh Seafood</p>
                </button>

                <button className="border cursor-pointer active:scale-95 hover:text-emerald-500 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg   border-zinc-200 px-4 py-2 flex items-center gap-2 text-sm rounded-md">
                    <img className="w-8" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-3.svg" alt="" />
                    <p> Pet Foods & Toy</p>
                </button>
            </div>
        </div>
    )
}

export default Category