import { Link, useNavigate } from "react-router-dom"
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
import { useContext, useState, useEffect } from "react";
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
import BrowesCatContainer from "./NavModals/BrowesCatContainer";
import MegaMenuConainer from "./NavModals/MegaMenuConainer";
import PageModalsContainer from "./NavModals/PageModalsContainer";

const MAX_COUNT_DISPLAY = 99;

const Header = () => {
  const { navslide, setNavSlide, getWishlistIds, getCartIds } = useContext(AuthContext);

  const [showAccModal, setShowAccModal] = useState(true);

  const socialBtnStyle = "text-white text-3xl cursor-pointer hover:bg-emerald-400 active:scale-95 transition-all bg-emerald-500 rounded-full p-1.5";
  const compareBtnStyle = "flex justify-center items-end gap-1 cursor-pointer active:scale-95 hover:text-emerald-600 transition-all";
  const myAccbtnStyle = "flex cursor-pointer hover:text-emerald-600 active:scale-95 transition-all items-center gap-2 hover:bg-zinc-200 w-full  px-2 py-2 rounded-sm";

  const navigate = useNavigate();

  const [category, setCategory] = useState("All Categories");
  const [locationStatus, setLocationStatus] = useState("Your Location");
  const [browserModal, setBrowserModal] = useState(true);

  // State for wishlist and cart counts that update on add/remove
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Update wishlist and cart counts whenever their contents change
  useEffect(() => {
    // Defensive: getWishlistIds/getCartIds may be undefined or not a function
    let wishlistArr = [];
    let cartArr = [];
    if (typeof getWishlistIds === "function") {
      const ids = getWishlistIds();
      wishlistArr = Array.isArray(ids) ? ids : [];
    }
    if (typeof getCartIds === "function") {
      const ids = getCartIds();
      cartArr = Array.isArray(ids) ? ids : [];
    }
    setWishlistCount(wishlistArr.length);
    setCartCount(cartArr.length);
  }, [getWishlistIds, getCartIds]);

  // Helper to display fixed length for badge
  const getDisplayCount = (count) => {
    if (count > MAX_COUNT_DISPLAY) return `${MAX_COUNT_DISPLAY}+`;
    return count;
  };

  return (
    <div className="">
      {/* Nav for lg Device */}
      <div className="lg:block hidden ">
        <div className="border-b font-family-secondary text-zinc-500 border-zinc-200 p-2 text-sm">

          <div className="md:mx-10 2xl:mx-0 mx-3">
            <div className="max-w-screen-2xl font-family-secondary md:mx-auto   mx-10 flex justify-between items-center text-zinc-400">
              <div className="flex gap-2 ">
                <Link to={"/about"} className="pr-2 border-r border-zinc-300 hover:text-black transition-all">About Us</Link>
                <Link to={"/account/overview"} className="pr-2 border-r border-zinc-300 hover:text-black transition-all">My Account</Link>
                <Link to={"/wishlist"} className="pr-2 border-r border-zinc-300 hover:text-black transition-all">Wishlist</Link>
                <Link to={"/order/tracking"} className=" hover:text-black transition-all">Order Tracking</Link>
              </div>

              <div className="xl:block hidden h-3 overflow-hidden text-emerald-600 font-semibold">
                <ul className="animate-slideUp">
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                  <li className="">100% Secure delivery without contacting the courier </li>
                  <li className="">Supper Value Deals - Save more with coupons</li>
                  <li className="">Trendy 25silver jewelry, save up 35% off today</li>
                </ul>
              </div>

              <h1 className="font-family-primary hidden font-bold text-emerald-700 text-xs">Grand opening, up to 15% off all items, Only 3days left</h1>

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
        </div>

        <div className="md:mx-10 2xl:mx-0 mx-3">
          <div className="max-w-screen-2xl  mx-auto flex gap-10 justify-between items-center py-6">
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
                  <input type="text" className="border-l w-full outline-none   placeholder:text-sm ml-3 pl-3 border-zinc-300" placeholder=" Search for items..." />
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
                  className="outline-none px-2 font-family-primary font-semibold" name="" id="">
                  <option value="Your Location">Your Location</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Jamalpur">Jamalpur</option>
                  <option value="Sherpur">Sherpur</option>
                  <option value="Borisal">Borisal</option>
                </select>
              </div>

              <div className="flex justify-between relative items-center gap-8">
                <button to={"/"} className={compareBtnStyle}><IoGitCompareOutline className="text-2xl" /> Compare</button>
                <Link to={"/wishlist"} className="relative flex items-center">
                  <FaRegHeart className="text-2xl" />
                  <span className="ml-1">Wishlist</span>
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2.5 left-18 text-xs bg-emerald-500 text-white rounded-full px-1.5   py-0.5 z-10  text-center">
                      {getDisplayCount(wishlistCount)}
                    </span>
                  )}
                </Link>
                <Link to={"/cart"} className="relative flex items-center">
                  <TiShoppingCart className="text-2xl" />
                  <span className="ml-1">Cart</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-2.5 left-12 text-xs bg-emerald-500 text-white rounded-full px-1.5   py-0.5 z-10  text-center">
                      {getDisplayCount(cartCount)}
                    </span>
                  )}
                </Link>

                <button onClick={() => { navigate("/account/overview") }} onMouseEnter={() => setShowAccModal(false)} onMouseLeave={() => setShowAccModal(true)} className="w-12 h-12 p-0.5 cursor-pointer rounded-full bg-emerald-400 active:scale-95 transition-all duration-200" >
                  <img className="rounded-full bg-white" src="/default.jpg" alt="" />
                </button>

                <div onMouseEnter={() => setShowAccModal(false)} onMouseLeave={() => setShowAccModal(true)} className={`absolute  ${showAccModal ? "opacity-0 -z-30  top-20" : "opacity-100 z-30  top-12 "} right-5 bg-white py-4 px-3  w-46 border space-y-1 border-zinc-200 rounded-md shadow-md text-sm duration-300 transition-all`}>
                  <Link to={"/account/overview"} className={myAccbtnStyle}><FaRegUser className="" /> My Account</Link>
                  <Link to={"/order/tracking"} className={myAccbtnStyle}><CiLocationOn className="text-black" /> Order Tracking</Link>
                  {/* <button to={"/"} className={myAccbtnStyle}><GrTicket className="" /> My Voucher </button>  */}
                  <Link to={"/wishlist"} className={myAccbtnStyle}><FaRegHeart className="" /> My Wishlist</Link>
                  <Link to={"/account/accountSettings"} className={myAccbtnStyle}><CiSettings className="" /> Settings</Link>
                  <button to={"/"} className={myAccbtnStyle}><PiSignOutLight className="" /> Sign out</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mx-10 2xl:mx-0 mx-3 ">
          <div className="border-y border-zinc-200 hidden md:block ">
            <div className="max-w-screen-2xl mx-auto  py-3  flex items-center justify-between ">
              <div className="flex items-center gap-10">

                <div className="relative font-family-primary">

                  <button
                    onClick={() => setBrowserModal(!browserModal)}
                    onMouseEnter={() => setBrowserModal(false)}
                    onMouseLeave={() => setBrowserModal(true)}
                    className="flex items-center gap-2 border py-2.5 px-4 rounded-md bg-emerald-500 hover:bg-emerald-600 cursor-pointer active:scale-95 transition-all text-white font-semibold  ">
                    <MdOutlineGridView className="text-xl font-bold text-white" />Browse All Categories <IoIosArrowDown />
                  </button>

                  {/* Browse Btns container  */}
                  <div
                    onMouseEnter={() => setBrowserModal(false)}
                    onMouseLeave={() => setBrowserModal(true)}
                    className={`absolute ${browserModal ? "-z-50 top-22 opacity-0" : "top-18 z-50 opacity-100"}  left-0 w-[480px]  grid grid-cols-2 gap-5 bg-white p-8 transition-all duration-500 border border-emerald-300 rounded-lg`}>
                    <BrowesCatContainer />
                  </div>
                </div>

                <div className="relative">
                  <Nav />
                  <MegaMenuConainer />
                  <PageModalsContainer />
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
      </div>


      {/* Nav For sm Device */}
      <div className="block lg:hidden">

        <div className="font-semibold text-white text-center bg-emerald-600 p-2 text-sm">
          <h1 className="font-family-primary text-xs">Grand opening, up to 15% off all items, Only 3days left</h1>
        </div>


        <div className="shadow px-3 py-3 flex justify-between items-center">
          <div onClick={() => setNavSlide(false)}>
            <RxHamburgerMenu className="text-3xl cursor-pointer active:scale-95 transition-all" />
          </div>
          <Link to={"/"}><img className="w-33" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" /></Link >
          <div className="flex items-center gap-2 text-zinc-600 ">

            <Link to={"/wishlist"} className="relative">
              <FaRegHeart className="text-2xl active:scale-95 hover:text-black transition-all cursor-pointer" />
              {wishlistCount > 0 && (
                <span className="absolute -top-3 -right-2 text-[10px] bg-emerald-500 text-white rounded-full px-1.5  py-0.5 z-10  text-center">
                  {getDisplayCount(wishlistCount)}
                </span>
              )}
            </Link>
            <Link to={"/cart"} className="relative">
              <TiShoppingCart className="text-3xl active:scale-95 hover:text-black transition-all cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-[10px] bg-emerald-500 text-white rounded-full  px-1.5 py-0.5  z-10  text-center">
                  {getDisplayCount(cartCount)}
                </span>
              )}
            </Link>
            <Link to={"/account/overview"} className="w-7 rounded-full overflow-hidden border border-zinc-200">
              <img src="/default.jpg" alt="" />
            </Link>

          </div>
        </div>

        {/* nav Slide bar   */}
        <div className={`${navslide ? "top-0 -left-[100%] transition-all duration-500 " : "top-0 left-0 transition-all duration-500"}  transition-all duration-500 z-40 fixed  h-screen w-full`}>
          <div className="flex ">

            <div className="w-9/12 bg-white">
              <div className="flex justify-between items-center border-y border-zinc-300 px-5 py-4">
                <Link onClick={() => setNavSlide(true)} to={"/"}><img className="w-33" src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" /></Link >
                <IoMdClose onClick={() => setNavSlide(true)} className="text-zinc-500 text-2xl p-1 rounded-full bg-emerald-100 cursor-pointer" />
              </div>

              <div className="p-7 flex flex-col justify-between h-[85vh]  ">
                <div>
                  <div className="flex justify-between items-center border border-zinc-200 bg-zinc-200  rounded-md p-2 ">
                    <input type="text" className="outline-none w-5/6 placeholder:text-sm px-2  border-zinc-300" placeholder="Search for items..." />
                    <div className="cursor-pointer text-zinc-500 active:scale-95 transition-all hover:bg-emerald-500 md:p-2 p-1 rounded-md hover:text-white">
                      <SlMagnifier className="w-full h-full" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Nav />
                  </div>

                  <div className="border grid gap-3 border-zinc-200 rounded-md p-5 mt-6  font-family-primary font-semibold">
                    <div className="flex items-center text-sm gap-2">
                      <CiLocationOn className="text-lg text-emerald-600" /> <h1>Our location</h1>
                    </div>
                    <div className="flex items-center text-sm gap-2" onClick={() => setNavSlide(true)}>
                      <FaRegUser className="text-lg text-emerald-600" />
                      <Link to={"/login"}>Log In</Link> /
                      <Link to={"/signup"}>Sign Up</Link>
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