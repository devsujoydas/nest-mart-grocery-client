import React from 'react'
import bgOrganic from '/assets/banner/banner-11.png';
const Organic = () => {
    return (
        <div className="bg-cover  rounded-xl md:p-12 p-10 hover:shadow-lg  transition-all h-86 flex flex-col justify-center" style={{ backgroundImage: `url(${bgOrganic})` }}>
            <div>
                <p className='text-zinc-500 text-sm'>Organic</p>
                <h1 className="text-2xl font-family-primary font-bold ">Save 17% <br />on <span className='text-emerald-500'>Organic</span><br />Juice</h1>
            </div>
        </div>
    )
}

export default Organic