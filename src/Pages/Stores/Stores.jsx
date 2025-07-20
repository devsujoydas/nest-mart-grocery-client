import { useContext, useState } from 'react'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineGridView } from "react-icons/md";
import StayHome from '../../Components/StayHome/StayHome';
import Servicess from '../../Components/Servicess/Servicess';
import { SlMagnifier } from "react-icons/sl";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import StoreCard from './StoreCard';


const Stores = () => {
    const [show, setShow] = useState("");
    const [sort, setSort] = useState("");

    const { stores } = useContext(AuthContext)

    return (
        <div>
            <NavigationPage path1={"Stores"} />


            <div className='max-w-screen-2xl 2xl:mx-auto  md:mx-10 mx-3 my-5 md:my-10'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-family-primary font-bold md:text-7xl text-3xl text-zinc-700'>Stores List</h1>

                    <div className='flex items-center justify-between gap-5 border border-zinc-200 px-5 py-2 rounded-full  md:w-1/2 mt-5 md:mt-10 shadow-lg'>
                        <input type="text" className="md:py-2 py-1 pl-2 w-full outline-none
                        " placeholder="Search for Stores..." />
                        <div className=" text-xl ">
                            <SlMagnifier />
                        </div>
                    </div>
                </div>


                {/* Sorting and filter */}
                <div className='md:my-10 my-5  flex md:flex-row flex-col justify-between items-center'>
                    {/* Recips Articles */}
                    <div className=''>
                        <h1 className='font-family-primary'>We found <span className='font-bold text-emerald-500'>{stores?.length}</span> vendors now</h1>
                    </div>
                    {/* Filtering Section */}
                    <div className='flex items-center  md:mt-0 mt-2 gap-2'>
                        <div className='flex  items-center  justify-center text-zinc-500 border border-zinc-200 rounded-md p-2 md:p-3  bg-white  transition'>
                            <MdOutlineGridView className="text-xl text-emerald-600" />
                            <select
                                value={show}
                                onChange={(e) => setShow(e.target.value)}
                                className="bg-white md:text-sm text-xs font-semibold px-3  rounded-md  outline-none transition duration-200 cursor-pointer"
                            >
                                <option value="10">Show: 10</option>
                                <option value="20">Show: 20</option>
                                <option value="50">Show: 50</option>
                            </select>
                        </div>

                        <div className='flex  items-center  justify-center text-zinc-500 border border-zinc-200 rounded-md p-2 md:p-3  bg-white  transition'>

                            <div className='flex items-center gap-2'>
                                <TbArrowsSort className="text-xl text-emerald-600" />
                                <p className='text-sm font-semibold'>Sort:</p>
                            </div>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="bg-white md:text-sm text-xs font-semibold pl-1  rounded-md  outline-none transition duration-200 cursor-pointer"
                            >
                                <option value="10">Featured</option>
                                <option value="20">Newest</option>
                                <option value="50">Oldest</option>
                                <option value="50">Release Date</option>
                                <option value="50">Most comments</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Vendor Sections */}
                <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5   '>

                    {stores.map((store, idx) => (
                        <StoreCard key={idx} store={store} />
                    ))}
                </div>
            </div>



            <StayHome />
            <Servicess />
        </div>
    )
}

export default Stores