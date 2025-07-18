import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io"



const DescStore = ({ productDetails }) => {
    const { logo, name, reviews, address, contactSeller, rating, shipOnTime, chatResponse, vendorsDescription } = productDetails.stores; 

    return (
        <div className=''>
            <div className='flex gap-5 items-center'>

                {/* Vendor Img */}
                <div><img className="w-20 md:w-fit" src={logo} alt="" /></div>
                <div>
                    {/* Vendor Name */}
                    <h1 className='font-family-primary font-bold text-2xl text-emerald-500'>{name}</h1>
                    {/* Rating */}
                    <div className='flex items-center gap-1'>
                        <div className="flex text-orange-300 text-sm">
                            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                        </div>
                        <h1 className='md:text-sm text-xs text-zinc-400'>({reviews}) reviews</h1>
                    </div>

                </div>
            </div>
            <div className='space-y-3 md:space-y-7'>
                {/* Address */}
                <div className=' text-zinc-600 font-family-primary md:text-sm font-medium text-xs  '>
                    <h1 className='font-normal'><span className='font-bold'>Address:</span> {address}</h1>
                    <p className='mt-2 font-normal'><span className='font-bold'>Call Us:</span> {contactSeller}</p>
                </div>

                {/* Percentage */}
                <div className='flex md:gap-10 gap-5 text-center'>
                    <div>
                        <p className='text-emerald-500 text-xs md:text-sm'>Rating</p>
                        <p className='md:text-3xl text-xl font-bold font-family-primary'>{rating}</p>
                    </div>
                    <div>
                        <p className='text-emerald-500 text-xs md:text-sm'>Ship on time</p>
                        <p className='md:text-3xl text-xl font-bold font-family-primary'>{shipOnTime}</p>
                    </div>
                    <div>
                        <p className='text-emerald-500 text-xs md:text-sm'>Chat response</p>
                        <p className='md:text-3xl text-xl font-bold font-family-primary'>{chatResponse}</p>
                    </div>
                </div>

                {/* Description */}
                <p className='text-zinc-400 text-sm md:text-[16px]'>{vendorsDescription}</p>
            </div>
        </div>
    )
}

export default DescStore