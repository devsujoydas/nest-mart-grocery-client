
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const StoreCard = ({ store }) => {
    return (
        <div className='border border-zinc-200 rounded-xl p-3 md:p-5 font-family-primary flex flex-col justify-between gap-1 md:gap-2'>
            <div>
                <img className='md:w-38 w-20' src={store?.image} alt="" />
            </div>

            <div className=''>
                <div className=''>
                    <p className='text-zinc-400 text-xs md:text-sm'>Since 2012</p>
                    <Link to={`/stores/${store?.name}`} className='font-family-primary font-bold text-sm md:text-2xl text-zinc-600 hover:text-yellow-500 transition-all cursor-pointer'>{store?.name} </Link>
                    <div className='flex items-center gap-2'>
                        <div className="flex items-center text-orange-300 text-xs md:text-sm">
                            <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf />
                        </div>
                        <p className='text-sm  text-zinc-400'>{store?.rating}</p>
                    </div>
                </div>
                <div>
                    <h1 className='bg-emerald-100 font-bold text-xs md:text-sm
                     text-emerald-500 w-fit mt-2 md:mt-3 px-3
                      md:px-5 py-1 rounded-md'>{store?.products} products</h1>
                </div>
            </div>

            <div className=' text-zinc-400 md:text-sm font-medium text-xs  '>
                <h1><span className='font-bold'>Address:</span> {store?.address}</h1>
                <p className='mt-2'><span className='font-bold'>Call Us:</span> {store?.phone}</p>
            </div>

            <Link to={`/stores/${store?.name}`} className="bg-emerald-500 w-fit hover:bg-orange-400 hover:px-5 active:scale-95 transition-all px-2 md:px-4 py-2 text-xs md:text-sm rounded-sm flex items-center gap-1 text-white font-semibold cursor-pointer md:mt-3 mt-2 duration-500">
                Visit Store <FaArrowRight className='text-xs' />
            </Link>
        </div>
    )
}

export default StoreCard