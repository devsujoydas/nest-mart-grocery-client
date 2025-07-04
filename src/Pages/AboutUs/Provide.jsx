import React from 'react'

const Provide = ({provide}) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center border border-zinc-200 rounded-lg px-10 py-12 gap-7 text-center hover:border-emerald-100 hover:shadow-md transition-all duration-500'>

                <img className='w-30' src={provide.img} alt="" />

                <h1 className='text-2xl font-family-primary font-bold'>{provide.title}</h1>

                <p className='text-zinc-500'>{provide.description}</p>

                <button className='text-emerald-500 hover:text-yellow-500 duration-500 transition-all cursor-pointer'>Read More</button>
            </div>
        </>
    )
}

export default Provide