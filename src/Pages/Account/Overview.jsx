
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Overview = () => {
    return (
        <div className='grid gap-5'>
            <div className='border border-zinc-200 rounded-lg flex items-center p-5 md:p-8 gap-5 md:flex-row flex-col'>
                <div className='w-24 rounded-full overflow-hidden'>
                    <img src="/default.jpg" alt="" />
                </div>
                <div className='text-center w-full'>
                    <h1 className='md:text-3xl text-xl text-zinc-600'>Welcome back, <span className='text-emerald-600 font-family-primary font-bold'>Sujoy Das</span>!</h1>
                    <p className='text-zinc-600 mt-2 md:text-[16px] text-xs'>Manage your account, view orders, and update your preferences from your personal dashboard.</p>
                </div>
            </div>


            <div className='grid lg:grid-cols-3 gap-5'>
                <div className='flex flex-col items-center justify-between gap-1.5 md:gap-3 p-5 xl:p-8 rounded-md border border-zinc-200'>
                    <h1 className='font-bold font-family-primary text-xl xl:text-left text-center'>View Orders</h1>
                    <p className='text-zinc-500 text-sm text-center'>Track your recent orders and order history </p>
                    <Link to={"/account/orders"} className="bg-emerald-500 w-fit hover:bg-yellow-400 hover:px-5 active:scale-95 transition-all px-4 py-2 rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer text-sm font-family-primary">
                        View Orders <FaArrowRight className='text-xs' />
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-between gap-1.5 md:gap-3 p-5 xl:p-8 rounded-md border border-zinc-200'>
                    <h1 className='font-bold font-family-primary text-xl xl:text-left text-center'>Manage Addresses</h1>
                    <p className='text-zinc-500 text-sm text-center'>Update your shipping and billing addresses </p>
                    <Link to={"/account/address"} className="bg-emerald-500 w-fit hover:bg-yellow-400 hover:px-5 active:scale-95 transition-all px-4 py-2 rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer text-sm font-family-primary">
                        Manage Address <FaArrowRight className='text-xs' />
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-between gap-1.5 md:gap-3 p-5 xl:p-8 rounded-md border border-zinc-200'>
                    <h1 className='font-bold font-family-primary text-xl xl:text-left text-center'>Account Settings</h1>
                    <p className='text-zinc-500 text-sm text-center'>Update your shipping and billing addresses </p>
                    <Link to={"/account/accountSettings"} className="bg-emerald-500 w-fit hover:bg-yellow-400 hover:px-5 active:scale-95 transition-all px-4 py-2 rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer text-sm font-family-primary">
                        Edit Account <FaArrowRight className='text-xs' />
                    </Link>
                </div>
            </div>


            <div className='border flex items-center justify-between p-5 md:p-8 border-zinc-200 rounded-lg md:flex-row flex-col gap-3'>
                <div>
                    <h1 className='text-zinc-700 font-bold text-xl font-family-primary md:text-left text-center'>Ready to start shopping?</h1>
                    <p className='text-zinc-500 mt-2 md:text-[16px] text-xs md:text-left text-center'>You haven't placed any orders yet. Browse our products and find something you love!</p>
                </div>
                <div>
                    <Link to={"/products"} className="bg-emerald-500 w-fit hover:bg-yellow-400 active:scale-95 transition-all px-6 py-3 rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer text-sm duration-300 font-family-primary">
                        Browse Product <FaArrowRight className='text-xs' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Overview