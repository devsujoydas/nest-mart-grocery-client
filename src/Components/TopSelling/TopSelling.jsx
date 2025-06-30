import { BsCart3 } from "react-icons/bs";

import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
const TopSelling = () => {


  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold border-b-2 border-emerald-600 mb-5 pb-2">Top Selling</h1>

        <div className="grid grid-rows-3 gap-4">
          <div
            className="flex items-center gap-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition p-3">
            <img className="w-24 rounded-lg" src="../../../assets/top selling/thumbnail-1.jpg" alt="" />
            <div>
              <h1 className="font-bold cursor-pointer hover:text-emerald-500 transition-all duration-500 mb-1">Carrot Nurtition and Health Benifit</h1>
              <div className="flex text-orange-300 text-sm">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
              </div>
              <div className="flex justify-between items-center mt-2">
                <h1 className="text-emerald-500 font-bold text-lg">$8.58</h1>
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition p-3">
            <img className="w-24 rounded-lg" src="../../../assets/top selling/thumbnail-2.jpg" alt="" />
            <div>
              <h1 className="font-bold cursor-pointer hover:text-emerald-500 transition-all duration-500 mb-1">Capsicum Red Green Yellow</h1>
              <div className="flex text-orange-300 text-sm">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
              </div>
              <div className="flex justify-between items-center mt-2">
                <h1 className="text-emerald-500 font-bold text-lg">$6.85</h1> 
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition p-3">
            <img className="w-24 rounded-lg" src="../../../assets/top selling/thumbnail-3.jpg" alt="" />
            <div>
              <h1 className="font-bold cursor-pointer hover:text-emerald-500 transition-all duration-500 mb-1">Mango Juice & Mango Slices</h1>
              <div className="flex text-orange-300 text-sm">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
              </div>
              <div className=" mt-2">
                <h1 className="text-emerald-500 font-bold text-lg">$4.99</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopSelling