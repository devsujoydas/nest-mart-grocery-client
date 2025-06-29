import { Link } from "react-router-dom"
import { SlMagnifier } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineGridView } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoHeadsetSharp } from "react-icons/io5";


const Header = () => {
  return (
    <div className="min-h-56  ">


      {/* Header */}
      <div className="border-b font-family-secondary text-zinc-500 border-zinc-200 p-2 text-sm">
        <div className="max-w-screen-2xl  md:mx-auto mx-10 flex justify-between items-center">

          <div className="flex gap-2">
            <Link to={"/"} className="pr-2 border-r border-zinc-300 hover:text-black transition-all">About Us</Link>
            <Link to={"/"} className="pr-2 border-r border-zinc-300 hover:text-black transition-all">My Account</Link>
            <Link to={"/"} className="pr-2 border-r border-zinc-300 hover:text-black transition-all">Wishlist</Link>
            <Link to={"/"} className=" hover:text-black transition-all">Order Tracking</Link>
          </div>

          <div className="">
            <ul className="font-semibold">
              <li>Supper Value Deals - Save more with coupons</li>
            </ul>
          </div>


          <div className="flex items-center gap-2">
            <h1 className="pr-2 border-r border-zinc-300">Need help? </h1>
            <h1 className="pr-2 border-r border-zinc-300 ">Call Us: <Link className="hover:text-black transition-all cursor-pointer" to={`tel:+8801303436299`}>+8801303436299</Link></h1>

            <select className="w-17 outline-none hover:text-black transition-all cursor-pointer text-center" name="" id="">
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
              <option value="Hindi">Hindi</option>
            </select>

            <select className="border-l pl-2 border-l-zinc-200 w-15 outline-none hover:text-black transition-all cursor-pointer text-center" name="" id="">
              <option value="USD">USD</option>
              <option value="BDT">BDT</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto flex gap-10 justify-between items-center py-5"

      >
        <div className="flex  items-center gap-10 w-full">
          <div>
            <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" />
          </div>

          <div className="w-full">
            <div className="flex justify-center items-center border-2 border-emerald-300  rounded-md">

              <select className="outline-none font-semibold text-gray-900 w-fit text-sm rounded-lg  block p-4" name="" id="">
                <option selected value="All Categories">All Categories</option>
                <option value="Wines & Alcohol">Wines & Alcohol</option>
                <option value="Clothing & Beauty">Clothing & Beauty</option>
                <option value="Pet Foods & Toy">Pet Foods & Toy</option>
                <option value="Fast food">Fast food</option>
                <option value="Baking material">Baking material</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fresh Seafood">Fresh Seafood</option>
                <option value="Noodles & Rice">Noodles & Rice</option>
                <option value="Ice cream">Ice cream</option>
              </select>

              <input type="text" className="border-l w-full placeholder:text-sm ml-3 pl-3 border-zinc-300" placeholder=" Search for items..." />
              <div className="text-xl mr-3">
                <SlMagnifier />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-7 text-zinc-600">

          <div className="text-emerald-400 shadow-md shadow-zinc-100 text-sm rounded-md p-2  border border-zinc-200 flex items-center ">
            <CiLocationOn className="text-xl" />
            <select className="outline-none " name="" id="">

              <option selected value="Your Location">Your Location</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Jamalpur">Jamalpur</option>
              <option value="Sherpur">Sherpur</option>
              <option value="Borisal">Borisal</option>
              <option value=""></option>
            </select>
          </div>

          <div className="flex justify-center items-center gap-7 relative">
            <div className="absolute top-10 right-0 bg-white p-3 border border-zinc-200 shadow-md ">

            </div>

            <button to={"/"} className="flex justify-center items-end gap-1"><IoGitCompareOutline className="text-2xl" /> Compare</button>
            <button to={"/"} className="flex justify-center items-end gap-1"><FaRegHeart className="text-2xl" /> Wishlist</button>
            <button to={"/"} className="flex justify-center items-end gap-1"><TiShoppingCart className="text-2xl" /> Cart</button>
            <button to={"/"} className="flex justify-center items-end gap-1"><FaRegUser className="text-2xl" /> Account</button>
          </div>
        </div>

      </div>

      <div className="border-y border-zinc-200">
        <div className="max-w-screen-2xl mx-auto py-3  flex items-center justify-between ">
          <div className="flex items-center gap-10">
            <div>
              <button className="flex items-center gap-2 border py-2.5 px-4 rounded-md bg-emerald-500 hover:bg-emerald-600 cursor-pointer active:scale-95 transition-all text-white font-semibold "><MdOutlineGridView className="text-xl font-bold text-white" />Browse All Categories <IoIosArrowDown /></button>
            </div>

            <div className="flex items-center gap-6">
              <Link to={"/"} className="hover:text-emerald-500 active:scale-95 transition-all flex items-center gap-1 font-medium ">Home <IoIosArrowDown className="-mb-1" /></Link>
              <Link to={"/"} className="hover:text-emerald-500 active:scale-95 transition-all flex items-center gap-1 font-medium ">About</Link>
              <Link to={"/"} className="hover:text-emerald-500 active:scale-95 transition-all flex items-center gap-1 font-medium ">Shop <IoIosArrowDown className="-mb-1" /></Link>
              <Link to={"/"} className="hover:text-emerald-500 active:scale-95 transition-all flex items-center gap-1 font-medium ">Blog <IoIosArrowDown className="-mb-1" /></Link>
              <Link to={"/"} className="hover:text-emerald-500 active:scale-95 transition-all flex items-center gap-1 font-medium ">Contact</Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div> <IoHeadsetSharp className="text-5xl" /></div>
            <div>
              <h1 className="text-emerald-600 font-bold text-xl">01303-436299</h1>
              <h1 className="text-sm text-zinc-500">24/7 Support Center</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header