import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io"

const Vendor = () => {
    return (
        <div className='min-h-98 border border-zinc-200 rounded-xl p-5'>
            <div>
                <img className='w-38' src="https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-1.png" alt="" />
            </div>

            <div>
                <div>
                    <p>Since 2012</p>
                    <h1>Nature Food </h1>
                    <div className='flex items-center gap-2'>
                        <div className="flex text-orange-300 text-sm">
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStarHalf />
                        </div>
                        <p className='text-sm text-zinc-500'>(4.5)</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Vendor