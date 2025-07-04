import React from 'react'

const Provide = ({provide}) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center border border-zinc-200 rounded-lg px-10 md:py-12 py-5 md:gap-5 gap-2 text-center hover:border-emerald-100 hover:shadow-lg transition-all duration-500'>

                <img className='md:w-30' src={provide.img} alt="" />

                <h1 className='md:text-2xl text-lg  font-family-primary font-bold'>{provide.title}</h1>

                <p className='text-zinc-500 md:text-lg text-sm'>{provide.description}</p>

                <button className='text-emerald-500 hover:text-yellow-500 duration-500 transition-all cursor-pointer md:text-lg text-sm'>Read More</button>
            </div>
        </>
    )
}

export default Provide