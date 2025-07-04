import { Link } from "react-router-dom"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiHeadsetLight } from "react-icons/pi";
import { FaRegPaperPlane } from "react-icons/fa";
import { TbClockHour5 } from "react-icons/tb"; 
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa" 
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";


const Footer = () => {
  const footerBtnStyle = "hover:text-emerald-500 hover:translate-x-1 text-sm transition text-sm active:scale-95 duration-300"
  const socialBtnStyle = "text-white text-3xl cursor-pointer hover:bg-emerald-400 active:scale-95 transition-all bg-emerald-500 rounded-full p-1.5"
  return (
    <div className="max-w-screen-2xl  lg:mx-auto font-family-primary">
      <footer className="mt-10 md:mx-10 2xl:mx-0 mx-3"> 

        <div className="grid lg:grid-cols-10 gap-8 lg:gap-4  ">

          <div className="grid gap-4 text-sm md:col-span-2">
            <img className="md:w-fit w-1/2" src="../../../assets/svgs/logo.svg" alt="" />
            <p className="font-bold text-2xl text-left -mt-2 ">Awesome Grocery <br className="md:block hidden" /> Store</p>
            <div className="grid gap-2  ">
              <div
                className="flex lg:text-left text-center flex-row lg:items-start items-center gap-2">
                <HiOutlineLocationMarker className="text-xl text-emerald-500" />
                <div className="flex flex-row gap-1">
                  <p className="font-semibold">Address:</p><span>Jamalpur, Bangladesh</span>
                </div>
              </div>
              <div className="flex items-center flex-row gap-2">
                <PiHeadsetLight className="text-xl text-emerald-500" />
                <p className="font-semibold">Call Us:</p><Link className={footerBtnStyle} to={"tel:+8801303436299"}>+8801303436299</Link>
              </div>
              <div className="flex items-center flex-row gap-2 flex-wrap">
                <FaRegPaperPlane className="text-xl text-emerald-500" />
                <p className="font-semibold">Email:</p><Link to={"mailto:devsujoydas@gmail.com"} className={footerBtnStyle}>devsujoydas@gmail.com</Link>
              </div>
              <div className="flex items-center flex-row gap-2">
                <TbClockHour5 className="text-xl text-emerald-500" />
                <p className="font-semibold">Hours:</p><span> 10:00 - 18:00, Mon-Sat</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:gap-0 gap-8 md:grid-cols-5 md:col-span-8 ">
            <div className="flex flex-col gap-2 md:gap-3 ">
              <h1 className="text-2xl font-semibold">Company</h1>
              <a href="#none" className={footerBtnStyle}>About
                Us</a>
              <a href="#none" className={footerBtnStyle}>Delivery
                Info</a>
              <a href="#none" className={footerBtnStyle}>Privacy
                Policy</a>
              <a href="#none" className={footerBtnStyle}>Terms &
                Conditions</a>
              <a href="#none" className={footerBtnStyle}>Contact
                Us</a>
              <a href="#none" className={footerBtnStyle}>Support
                Center</a>
              <a href="#none"
                className={footerBtnStyle}>Careers</a>
            </div>


            <div className="flex flex-col gap-2 md:gap-3 ">
              <h1 className="text-2xl font-semibold">Account</h1>
              <a href="#code" className={footerBtnStyle}>Sign
                In</a>
              <a href="#code" className={footerBtnStyle}>View
                Cart</a>
              <a href="#code" className={footerBtnStyle}>My
                Wishlist</a>
              <a href="#code" className={footerBtnStyle}>Track My
                Order</a>
              <a href="#code" className={footerBtnStyle}>Help
                Ticket</a>
              <a href="#code" className={footerBtnStyle}>Shipping
                Details</a>
            </div>


            <div className="flex flex-col gap-2 md:gap-3 ">
              <h1 className="text-2xl font-semibold">Corporate</h1>
              <a href="#code" className={footerBtnStyle}>Become a
                Vendor</a>
              <a href="#code" className={footerBtnStyle}>Affiliate
                Program</a>
              <a href="#code" className={footerBtnStyle}>Farm
                Business</a>
              <a href="#code" className={footerBtnStyle}>Farm
                Careers</a>
              <a href="#code" className={footerBtnStyle}>Our
                Suppliers</a>
              <a href="#code"
                className={footerBtnStyle}>Accessibility</a>
              <a href="#code"
                className={footerBtnStyle}>Promotions</a>
            </div>


            <div className="flex flex-col gap-2 md:gap-3 ">
              <h1 className="text-2xl font-semibold">Popular</h1>
              <a href="#code" className={footerBtnStyle}>Milk &
                Flavoured Milk</a>
              <a href="#code" className={footerBtnStyle}>Butter and
                Margarine</a>
              <a href="#code" className={footerBtnStyle}>Eggs
                Substitutes</a>
              <a href="#code"
                className={footerBtnStyle}>Marmalades</a>
              <a href="#code" className={footerBtnStyle}>Sour Cream
                and Dips</a>
              <a href="#code" className={footerBtnStyle}>Tea &
                Kombucha</a>
              <a href="#code" className={footerBtnStyle}>Cheese</a>
            </div>


            <div className="flex flex-col md:col-span-1 gap-1 lg:gap-2">
              <h1 className="text-2xl font-semibold">Install App</h1>
              <div className="flex flex-col justify-around h-full">
                <div className="flex flex-col gap-3">
                  <h1 className=" ">From App Store or Google Play</h1>
                  <div className="flex gap-2 lg:flex-row flex-col">
                    <a href="#ios-store">
                      <img className="w-3/4 lg:w-full hover:shadow-md hover:-translate-y-1 transition"
                        src="../../../assets/others/app-store.jpg" alt="" />
                    </a>
                    <a href="#play-store">
                      <img className="w-3/4 lg:w-full hover:shadow-md hover:-translate-y-1 transition"
                        src="../../../assets/others/google-play.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1>Secured Payment Gateways</h1>
                  <div className="flex gap-2">
                    <img className="w-full  "
                      src="../../../assets/others/payment-method.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


        <div className="" id="contact-us">
          <div
            className="flex lg:flex-row flex-col-reverse gap-4 justify-between items-center max-w-screen-2xl mx-auto border-emerald-600 border-t py-8 mt-10  ">
            <div className="flex flex-col text-center">
              <h1 className="text-sm">&copy; 2025, <span>Nest</span> - Ecommerce By <Link to={"https://devsujoydas.vercel.app"}
                className="text-emerald-600 hover:text-emerald-500 transition-all  font-bold">Sujoy Das</Link></h1>
              <h1 className="text-sm">All rights reserved</h1>
            </div>
            <div className="flex flex-row md:gap-6 gap-3">
              <div className="flex gap-2 items-center ">
                <LuPhoneCall className="md:text-3xl text-2xl text-zinc-500" />
                <div className="flex flex-col gap-2 lg:items-start items-center ">
                  <Link to={"tel:+8809638-831422"} className="md:text-2xl text-sm font-semibold text-emerald-500 active:scale-95 transition-all">+8809638-831422</Link>
                  <h1 className="md:text-sm text-xs text-gray-500 -mt-2">Working 8:00 - 22:00</h1>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <LuPhoneCall className="md:text-3xl text-2xl text-zinc-500" />
                <div className="flex flex-col gap-2 lg:items-start items-center ">
                  <Link to={"tel:+8801303436299"} className="md:text-2xl text-sm font-semibold text-emerald-500 active:scale-95 transition-all">+8801303-436299</Link>
                  <h1 className="md:text-sm text-xs text-gray-500 -mt-2">24/7 Support Center</h1>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex gap-2">

                <div className="flex items-center gap-1.5 mt-2">
                  <h1 className="font-semibold mr-1">Follow Us</h1>
                  <Link to={"https://web.facebook.com/devsujoydas"}>
                    <FaFacebookF className={socialBtnStyle} />
                  </Link>
                  <Link to={"https://github.com/devsujoydas"}>
                    <FiGithub className={socialBtnStyle} />
                  </Link>
                  <Link to={"https://github.com/devsujoydas"}>
                  </Link>
                  <Link to={"https://api.whatsapp.com/send/?phone=%2B8801303436299&text&type=phone_number&app_absent=0"}>
                    <FaWhatsapp className={socialBtnStyle} />
                  </Link>
                  <Link to={"https://www.youtube.com/@devsujoydas"}>
                    <FaYoutube className={socialBtnStyle} />
                  </Link>
                  <Link to={""}>
                    <FaInstagram className={socialBtnStyle} />
                  </Link>
                </div>

              </div>
              <h1 className="text-xs">Up to 15% discount on your first subscribe</h1>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer