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
import { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Nav from "./Nav";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BrowesCatContainer from "./BrowesCatContainer";

const Header = () => {
  const { navslide, setNavSlide, megaModal, setMegaModal, pageModal, setPageModal } = useContext(AuthContext)

  const [showAccModal, setShowAccModal] = useState(true)

  const socialBtnStyle = "text-white text-3xl cursor-pointer hover:bg-emerald-400 active:scale-95 transition-all bg-emerald-500 rounded-full p-1.5"
  const compareBtnStyle = "flex justify-center items-end gap-1 cursor-pointer active:scale-95 hover:text-emerald-600 transition-all"
  const myAccbtnStyle = "flex cursor-pointer hover:text-emerald-600 active:scale-95 transition-all items-center gap-2 hover:bg-zinc-200 w-full  px-2 py-2 rounded-sm"
  const megaMenuBtnStyle = "hover:text-emerald-500 font-bold text-zinc-500 text-lg transition text-sm active:scale-95 duration-300"


  const [category, setCategory] = useState("All Categories");
  const [locationStatus, setLocationStatus] = useState("Your Location");
  const [browserModal, setBrowserModal] = useState(true);




  return (
    <div className="">
      {/* Nav for lg Device */}
      <div className="lg:block hidden">
        <div className="border-b font-family-secondary text-zinc-500 border-zinc-200 p-2 text-sm">

          <div className="max-w-screen-2xl font-family-secondary md:mx-auto   mx-10 flex justify-between items-center text-zinc-400">
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

        <div className="max-w-screen-2xl  mx-auto flex gap-10 justify-between items-center py-8">
          <div className="flex  items-center gap-10 w-full">
            <Link to={"/"}>
              <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" />
            </Link>

            <div className="w-full ">
              <div className="flex justify-center items-center border-2 border-emerald-300  rounded-md">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="outline-none font-family-primary font-semibold text-gray-900 text-sm rounded-lg block p-3.5"
                >
                  <option value="All Categories">All Categories</option>
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
              <select
                value={locationStatus}
                onChange={(e) => setLocationStatus(e.target.value)}
                className="outline-none px-2" name="" id="">
                <option value="Your Location">Your Location</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Jamalpur">Jamalpur</option>
                <option value="Sherpur">Sherpur</option>
                <option value="Borisal">Borisal</option>
              </select>
            </div>

            <div className="flex justify-center items-center gap-7">
              <button to={"/"} className={compareBtnStyle}><IoGitCompareOutline className="text-2xl" /> Compare</button>
              <button to={"/"} className={compareBtnStyle}><FaRegHeart className="text-2xl" /> Wishlist</button>
              <button to={"/"} className={compareBtnStyle}><TiShoppingCart className="text-2xl" /> Cart</button>
              <div onMouseEnter={() => setShowAccModal(false)} className="relative">
                <div onMouseLeave={() => setShowAccModal(true)} className={`absolute  ${showAccModal ? "opacity-0 -z-30  top-10" : "opacity-100 z-30  top-8 "} right-0 bg-white py-4 px-3  w-46 border space-y-1 border-zinc-200 rounded-md shadow-md text-sm duration-300 transition-all`}>
                  <button to={"/"} className={myAccbtnStyle}><FaRegUser className="" /> My Account</button>
                  <button to={"/"} className={myAccbtnStyle}><CiLocationOn className="text-black" /> Order Tracking</button>
                  <button to={"/"} className={myAccbtnStyle}><GrTicket className="" /> My Voucher </button>
                  <button to={"/"} className={myAccbtnStyle}><FaRegHeart className="" /> My Wishlist</button>
                  <button to={"/"} className={myAccbtnStyle}><CiSettings className="" /> Settings</button>
                  <button to={"/"} className={myAccbtnStyle}><PiSignOutLight className="" /> Sign out</button>
                </div>
                <button onMouseLeave={() => setShowAccModal(true)} to={"/"} className="flex justify-center items-end gap-1 cursor-pointer active:scale-95 hover:text-emerald-600 transition-all"><FaRegUser className="text-2xl" /> Account</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-zinc-200 hidden md:block">
          <div className="max-w-screen-2xl mx-auto  py-3  flex items-center justify-between ">
            <div className="flex items-center gap-10">

              <div className="relative font-family-primary">

                <button onClick={() => setBrowserModal(!browserModal)} className="flex items-center gap-2 border py-2.5 px-4 rounded-md bg-emerald-500 hover:bg-emerald-600 cursor-pointer active:scale-95 transition-all text-white font-semibold  ">
                  <MdOutlineGridView className="text-xl font-bold text-white" />Browse All Categories <IoIosArrowDown />
                </button>

                {/* Browse Btns container  */}
                <div onClick={() => setBrowserModal(!browserModal)} className={`absolute ${browserModal ? "-z-50 top-22 opacity-0" : "top-18 z-50 opacity-100"}  left-0 w-[480px]  grid grid-cols-2 gap-5 bg-white p-8 transition-all duration-500 border border-emerald-300 rounded-lg`}>
                  <BrowesCatContainer />
                </div>

              </div>

              <div>
                <Nav />
                <div onMouseEnter={() => setPageModal(false)} className="relative">
                  <div onMouseLeave={() => setPageModal(true)} className={`absolute  ${pageModal ? "opacity-0 -z-30  top-10" : "opacity-100 z-30  top-8 "} right-40 bg-white w-50 p-5 flex flex-col items-baseline gap-2 border space-y-1 border-zinc-200 rounded-md shadow-md text-sm duration-300 transition-all font-family-primary text-zinc-500`}>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Contact</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all ">About Us </Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> My Account</Link>
                    <Link to={"/login"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all ">Login </Link>
                    <Link to={"/signup"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Register</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Forgot password</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Reset password</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Purchase Guide</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Privacy Policy</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Terms of Service</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> 404 Page</Link>  
                  </div>
                </div>
              </div>

              <div onMouseEnter={() => setMegaModal(false)} onMouseLeave={() => setMegaModal(true)} className={`absolute ${megaModal ? "-z-50 top-62 opacity-0" : " top-59 z-50 opacity-100"}  w-[1536px] bg-white p-10 transition-all duration-500 border border-emerald-300 rounded-lg font-family-primary  `}>

                <div>
                  <div className="grid grid-cols-2 md:gap-0 gap-8 md:grid-cols-13  ">

                    <div className="flex flex-col gap-4 md:gap-3 col-span-3">
                      <h1 className="text-xl text-emerald-500 font-bold mb-3">Fruit & Vegetables</h1>
                      <a href="#" className={megaMenuBtnStyle}>Meat & Poultry </a>
                      <a href="#" className={megaMenuBtnStyle}>Fresh Vegetables </a>
                      <a href="#" className={megaMenuBtnStyle}>Herbs & Seasonings </a>
                      <a href="#" className={megaMenuBtnStyle}>Cuts & Sprouts </a>
                      <a href="#" className={megaMenuBtnStyle}>Exotic Fruits & Veggies </a>
                      <a href="#" className={megaMenuBtnStyle}>Packaged Produce </a>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-3 col-span-3">
                      <h1 className="text-xl text-emerald-500 font-bold mb-3">Breakfast & Dairy </h1>
                      <a href="#" className={megaMenuBtnStyle}>Milk & Flavoured Milk </a>
                      <a href="#" className={megaMenuBtnStyle}>Butter and Margarine </a>
                      <a href="#" className={megaMenuBtnStyle}>Eggs Substitutes </a>
                      <a href="#" className={megaMenuBtnStyle}>Marmalades </a>
                      <a href="#" className={megaMenuBtnStyle}>Sour Cream </a>
                      <a href="#" className={megaMenuBtnStyle}>Cheese </a>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-3 col-span-3">
                      <h1 className="text-xl text-emerald-500 font-bold mb-3"> Meat & Seafood </h1>
                      <a href="#" className={megaMenuBtnStyle}>Breakfast Sausage </a>
                      <a href="#" className={megaMenuBtnStyle}>Dinner Sausage </a>
                      <a href="#" className={megaMenuBtnStyle}>Chicken </a>
                      <a href="#" className={megaMenuBtnStyle}>Sliced Deli Meat </a>
                      <a href="#" className={megaMenuBtnStyle}>Wild Caught Fillets </a>
                      <a href="#" className={megaMenuBtnStyle}>Crab and Shellfish </a>
                    </div>

                    <div
                      style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-menu.png")` }} className="w-full relative rounded-lg h-66 bg-cover bg-center p-10 col-span-4 flex justify-between">
                      <div className="space-y-3">
                        <h1>HOT DEALS</h1>
                        <h1 className="text-2xl font-bold">Don't miss <br /> Trending</h1>
                        <h1 className="text-emerald-600 font-bold text-2xl ">Save to 50%</h1>

                        <button className="bg-emerald-500 px-4 py-2 rounded-full text-sm text-white font-bold hover:bg-emerald-400 active:scale-95 transition-all cursor-pointer">Shop Now</button>
                      </div>
                      <div className="text-xl bg-yellow-400 h-fit font-bold w-fit py-4 px-6 rounded-full">
                        <h1>25%</h1>
                        <h1 className="-mt-1">off</h1>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
            <div className="flex items-center gap-2">
              <div> <IoHeadsetSharp className="text-5xl" /></div>
              <div>
                <Link to={"tel:+8801303436299"} className="text-emerald-600 hover:text-emerald-400 transition-all font-bold text-xl">01303-436299</Link>
                <h1 className="text-sm text-zinc-500">24/7 Support Center</h1>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Nav For sm Device */}
      <div className="block lg:hidden">
        <div className="font-semibold text-white text-center bg-emerald-600 p-2 text-sm">
          <h1 className="font-family-primary text-xs">Grand opening, up to 15% off all items, Only 3days left</h1>
        </div>


        <div className="shadow px-3 py-4 flex justify-between items-center">
          <div onClick={() => setNavSlide(false)}>
            <RxHamburgerMenu className="text-3xl cursor-pointer active:scale-95 transition-all" />
          </div>
          <Link to={"/"}><img className="w-33" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" /></Link >
          <div className="flex items-center gap-2 text-zinc-600 ">
            <FaRegHeart className="text-2xl active:scale-95 hover:text-black transition-all cursor-pointer" />
            <TiShoppingCart className="text-3xl active:scale-95 hover:text-black transition-all cursor-pointer" />
          </div>
        </div>

        {/* nav Slide bar   */}
        <div className={`${navslide ? "top-0 -left-[100%] transition-all duration-500 " : "top-0 left-0 transition-all duration-500"}  transition-all duration-500 z-40 fixed  h-screen w-full`}>
          <div className="flex ">

            <div className="w-9/12 bg-white">
              <div className="flex justify-between items-center border-y border-zinc-300 px-5 py-4">
                <Link to={"/"}><img className="w-33" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" /></Link >
                <IoMdClose onClick={() => setNavSlide(true)} className="text-zinc-500 text-2xl p-1 rounded-full bg-emerald-100 cursor-pointer" />
              </div>

              <div className="p-7 flex flex-col justify-between h-[85vh]  ">
                <div>
                  <div className="flex justify-between items-center border border-zinc-200 bg-zinc-200  rounded-md p-2 ">
                    <input type="text" className="outline- w-5/6 placeholder:text-sm   border-zinc-300" placeholder=" Search for items..." />
                    <div className="cursor-pointer text-zinc-500 active:scale-95 transition-all hover:bg-emerald-500 p-2 rounded-md hover:text-white">
                      <SlMagnifier className="w-full h-full" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Nav />
                  </div>

                  <div className="border grid gap-3 border-zinc-200 rounded-md p-5 mt-6 font-family-secondary">
                    <div className="flex items-center text-sm gap-2">
                      <CiLocationOn className="text-lg text-emerald-600" /> <h1>Our location</h1>
                    </div>
                    <div className="flex items-center text-sm gap-2">
                      <FaRegUser className="text-lg text-emerald-600" />
                      <Link to={"/"}>Log In</Link> /
                      <Link to={"/"}>Sign Up</Link>
                    </div>
                    <div className="flex items-center text-sm gap-2">
                      <IoHeadsetSharp className="text-lg text-emerald-600" /> <Link to={"tel:+8801303436299"}>+8801303436299</Link>
                    </div>
                  </div>

                  <div className="font-family-primary font-bold mt-5">
                    Follow Us
                    <div className="flex items-center gap-1.5 mt-2">
                      <FaFacebookF className={socialBtnStyle} />
                      <FiGithub className={socialBtnStyle} />
                      <FaWhatsapp className={socialBtnStyle} />
                      <FaInstagram className={socialBtnStyle} />
                      <FaTwitter className={socialBtnStyle} />
                      <FaYoutube className={socialBtnStyle} />
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-sm text-center font-family-secondary text-zinc-400">
                  <h1>All rights reserved. <br /> Development by <Link to={""} className="font-semibold hover:text-emerald-500">Sujoy Das</Link></h1>
                </div>

              </div>

            </div>


            <div onClick={() => setNavSlide(true)} className={`w-3/12  h-screen  ${navslide ? " bg-[#00000000] transition-all duration-1000 opacity-0" : "bg-[#000000b2] transition-all duration-1000 opacity-100"} `}>
              {/* Right side black */}
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Header