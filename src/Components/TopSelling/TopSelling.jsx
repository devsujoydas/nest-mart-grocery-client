import { BsCart3 } from "react-icons/bs";

import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
const TopSelling = ({ data }) => {


  return (
    <div>
      <div>
        <h1 className="md:text-3xl text-2xl font-bold border-b-2 border-emerald-600 mb-5 pb-2">{data}</h1>

        <div className="grid md:grid-rows-3 md:gap-4 gap-1">

          <div
            className="flex items-center md:gap-4 gap-2 rounded-lg hover:shadow-lg hover:-translate-y-1 transition p-2 border border-zinc-200
            ">
            <img className="md:w-22 w-18 rounded-lg" src="../../../assets/top selling/thumbnail-1.jpg" alt="" />
            <div>
              <h1 className="font-bold cursor-pointer hover:text-emerald-500 active:text-emerald-500 transition-all duration-500 md:mb-1 md:text-[16px] text-sm">Carrot Nurtition and Health Benifit</h1>
              <div className="flex text-orange-300 text-sm">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
              </div>
              <div className="flex justify-between items-center md:mt-2 mt-1">
                <h1 className="text-emerald-500 font-bold text-sm md:text-lg">$8.58</h1>
              </div>
            </div>
          </div>

          <div
            className="flex items-center md:gap-4 gap-2 rounded-lg hover:shadow-lg hover:-translate-y-1 transition p-2 border border-zinc-200
            ">
            <img className="md:w-22 w-18 rounded-lg" src="../../../assets/top selling/thumbnail-2.jpg" alt="" />
            <div>
              <h1 className="font-bold cursor-pointer hover:text-emerald-500 active:text-emerald-500 transition-all duration-500 md:mb-1 md:text-[16px] text-sm">Capsicum Red Green Yellow</h1>
              <div className="flex text-orange-300 text-sm">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
              </div>
              <div className="flex justify-between items-center md:mt-2 mt-1">
                <h1 className="text-emerald-500 font-bold text-sm md:text-lg">$6.85</h1>
              </div>
            </div>
          </div>

          <div
            className="flex items-center md:gap-4 gap-2 rounded-lg hover:shadow-lg hover:-translate-y-1 transition p-2 border border-zinc-200
            ">
            <img className="md:w-22 w-18 rounded-lg" src="../../../assets/top selling/thumbnail-3.jpg" alt="" />
            <div>
              <h1 className="font-bold cursor-pointer hover:text-emerald-500 active:text-emerald-500 transition-all duration-500 md:mb-1 md:text-[16px] text-sm">Mango Juice & Mango Slices</h1>
              <div className="flex text-orange-300 text-sm">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
              </div>
              <div className=" md:mt-2 mt-1">
                <h1 className="text-emerald-500 font-bold text-sm md:text-lg">$4.99</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopSelling