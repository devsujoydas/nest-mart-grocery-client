import React from 'react'
import Servicess from '../../Components/Servicess/Servicess'
import StayHome from '../../Components/StayHome/StayHome'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'

const OrderTracking = () => {
    return (
        <div>
            <NavigationPage path1={"Orders"} path2={"Tracking"} />
            <div className='h-[50vh] flex justify-center items-center'>

                <div className='w-full'>
                    <div className='text-center
                    '>
                        <h1 className='font-family-primary text-3xl font-bold text-zinc-700'>Order tracking</h1>
                        <p className='mt-2  text-zinc-500'>Tracking your order status</p>
                    </div>

                    <form className='md:mt-8 mt-5 md:w-1/3 md:mx-auto mx-3'>
                        <div className='grid gap-5 md:text-sm text-xs'>
                            <div>
                                <label htmlFor="OrderID" className='text-lg mb-2'>Order ID</label>
                                <input
                                    className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-sm md:rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
                                    type="text"
                                    placeholder='Enter Your Order ID'
                                    name='OrderID'
                                />
                            </div>
                            <div>
                                <label htmlFor="OrderID" className='text-lg mb-2'>Email</label>
                                <input
                                    className='border border-zinc-200 px-4 md:py-4.5 py-2 w-full rounded-sm md:rounded-lg outline-none focus:border-emerald-300 transition-all duration-500'
                                    type="text"
                                    placeholder='Enter Your Email'
                                    name='OrderID'
                                />
                            </div>

                            <button className='px-10 w-full md:py-4 py-2 bg-[#253D4E] rounded-sm md:rounded-lg font-semibold font-family-primary text-white hover:bg-[#29A56C] duration-500 cursor-pointer active:scale-95 transition-all text-lg'>
                                Find
                            </button>
                        </div>

                    </form>
                </div>

            </div>


            <StayHome />
            <Servicess />
        </div>
    )
}

export default OrderTracking