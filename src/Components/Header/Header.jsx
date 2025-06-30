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
import { CiSettings } from "react-icons/ci";
import { PiSignOutLight } from "react-icons/pi";
import { GrTicket } from "react-icons/gr";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Nav from "./Nav";


const Header = () => {

  const [showAccModal, setShowAccModal] = useState(true)
  const [showSmNav, setShowSmNav] = useState(true)

  return (
    <div className="">
      {/* Nav for lg Device */}
      <div className="md:block hidden">
        <div className="border-b font-family-secondary text-zinc-500 border-zinc-200 p-2 text-sm">


          <div className="max-w-screen-2xl font-family-secondary md:mx-auto mx-10 flex justify-between items-center text-zinc-400">
            <div className="flex gap-2 ">
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

              <select className=" outline-none hover:text-black transition-all cursor-pointer text-center" name="" id="">
                <option value="English">English</option>
                <option value="Bangla">Bangla</option>
                <option value="Hindi">Hindi</option>
              </select>

              <select className="border-l px-2 border-l-zinc-200  outline-none hover:text-black transition-all cursor-pointer text-center" name="" id="">
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto flex gap-10 justify-between items-center py-8"

        >
          <div className="flex  items-center gap-10 w-full">
            <div>
              <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" />
            </div>

            <div className="w-full">

              <div className="flex justify-center items-center border-2 border-emerald-300  rounded-md">
                <select className="outline-none font-family-primary font-semibold text-gray-900  text-sm rounded-lg  block p-3.5" name="" id="">
                  <option selected value="All  Categories">All Categories</option>
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
              <select className="outline-none px-2" name="" id="">
                <option selected value="Your Location">Your Location</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Jamalpur">Jamalpur</option>
                <option value="Sherpur">Sherpur</option>
                <option value="Borisal">Borisal</option>
              </select>
            </div>

            <div className="flex justify-center items-center gap-7">

              <button to={"/"} className="flex justify-center items-end gap-1 cursor-pointer active:scale-95 hover:text-emerald-600 transition-all"><IoGitCompareOutline className="text-2xl" /> Compare</button>
              <button to={"/"} className="flex justify-center items-end gap-1 cursor-pointer active:scale-95 hover:text-emerald-600 transition-all"><FaRegHeart className="text-2xl" /> Wishlist</button>
              <button to={"/"} className="flex justify-center items-end gap-1 cursor-pointer active:scale-95 hover:text-emerald-600 transition-all"><TiShoppingCart className="text-2xl" /> Cart</button>

              <div onMouseEnter={() => setShowAccModal(false)} className="relative">
                <div onMouseLeave={() => setShowAccModal(true)} className={`absolute  ${showAccModal ? "opacity-0 -z-30  top-10" : "opacity-100 z-30  top-8 "} right-0 bg-white py-4 px-3  w-46 border space-y-1 border-zinc-200 rounded-md shadow-md text-sm duration-300 transition-all`}>
                  <button to={"/"} className="flex cursor-pointer hover:text-emerald-600 active:scale-95 transition-all items-center gap-2 hover:bg-zinc-200 w-full  px-2 py-2 rounded-sm"><FaRegUser className="" /> My Account</button>
                  <button to={"/"} className="flex cursor-pointer hover:text-emerald-600 active:scale-95 transition-all items-center gap-2 hover:bg-zinc-200 w-full  px-2 py-2 rounded-sm"><CiLocationOn className="text-black" /> Order Tracking</button>
                  <button to={"/"} className="flex cursor-pointer hover:text-emerald-600 active:scale-95 transition-all items-center gap-2 hover:bg-zinc-200 w-full  px-2 py-2 rounded-sm"><GrTicket className="" /> My Voucher </button>
                  <button to={"/"} className="flex cursor-pointer hover:text-emerald-600 active:scale-95 transition-all items-center gap-2 hover:bg-zinc-200 w-full  px-2 py-2 rounded-sm"><FaRegHeart className="" /> My Wishlist</button>
                  <button to={"/"} className="flex cursor-pointer hover:text-emerald-600 active:scale-95 transition-all items-center gap-2 hover:bg-zinc-200 w-full  px-2 py-2 rounded-sm"><CiSettings className="" /> Settings</button>
                  <button to={"/"} className="flex cursor-pointer hover:text-emerald-600 active:scale-95 transition-all items-center gap-2 hover:bg-zinc-200 w-full  px-2 py-2 rounded-sm"><PiSignOutLight className="" /> Sign out</button>
                </div>

                <button onMouseLeave={() => setShowAccModal(true)} to={"/"} className="flex justify-center items-end gap-1 cursor-pointer active:scale-95 hover:text-emerald-600 transition-all"><FaRegUser className="text-2xl" /> Account</button>
              </div>

            </div>
          </div>

        </div>

        <div className="border-y border-zinc-200 hidden md:block">
          <div className="max-w-screen-2xl mx-auto py-3  flex items-center justify-between ">
            <div className="flex items-center gap-10">
              <div>
                <button className="flex items-center gap-2 border py-2.5 px-4 rounded-md bg-emerald-500 hover:bg-emerald-600 cursor-pointer active:scale-95 transition-all text-white font-semibold font-family-primary ">
                  <MdOutlineGridView className="text-xl font-bold text-white" />Browse All Categories <IoIosArrowDown /></button>
              </div>

              <Nav />
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


      {/* Nav For sm Device */}
      <div className="block md:hidden">
        <div className="font-semibold text-white text-center bg-emerald-600 p-2 text-sm">
          <h1>Grand opening, up to 15% off all items, Only 3days left</h1>
        </div>


        <div className="shadow px-3 py-4 flex justify-between items-center">
          <div>
            <RxHamburgerMenu className="text-3xl cursor-pointer active:scale-95 transition-all" />
          </div>
          <Link to={"/"}><img className="w-33" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" /></Link >
          <div className="flex items-center gap-2 text-zinc-600 ">
            <FaRegHeart className="text-2xl active:scale-95 hover:text-black transition-all cursor-pointer" />
            <TiShoppingCart className="text-3xl active:scale-95 hover:text-black transition-all cursor-pointer" />
          </div>
        </div>



        <div className=" z-40 fixed top-0 left-0  h-screen w-full">
          <div className="flex ">

            <div className="w-9/12 bg-white">
              <div className="flex justify-between items-center border-y border-zinc-300 px-5 py-4">
                <Link to={"/"}><img className="w-33" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" /></Link >
                <IoMdClose className="text-zinc-500 text-2xl p-1 rounded-full bg-emerald-100 cursor-pointer" />
              </div>

              <div className="p-7">
                <div className="flex justify-between items-center border border-zinc-200 bg-zinc-200  rounded-md p-2 ">
                  <input type="text" className="outline-none w-5/6 placeholder:text-sm   border-zinc-300" placeholder=" Search for items..." />
                  <div className="cursor-pointer text-zinc-500 active:scale-95 transition-all hover:bg-emerald-500 p-2 rounded-md hover:text-white">
                    <SlMagnifier className="w-full h-full" />
                  </div>
                </div>

                <div className="mt-6">
                  <Nav />
                </div>

                <div className="border grid gap-3 border-zinc-200 rounded-md p-5 mt-6">
                  <div className="flex items-center text-sm gap-2">
                    <CiLocationOn className="text-lg text-emerald-600" /> <h1>Our location</h1>
                  </div>
                  <div className="flex items-center text-sm gap-2">
                    <FaRegUser className="text-lg text-emerald-600" />
                    <Link to={"/"}>Log In</Link>
                    <Link to={"/"}>Sign Up</Link>
                  </div>
                  <div className="flex items-center text-sm gap-2">
                    <IoHeadsetSharp className="text-lg text-emerald-600" /> <Link to={"tel:+8801303436299"}>+8801303436299</Link>
                  </div>
                </div>


              </div>

            </div>


            <div className="w-3/12 border h-screen bg-[#000000b2]">
              {/* Right side black */}
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Header