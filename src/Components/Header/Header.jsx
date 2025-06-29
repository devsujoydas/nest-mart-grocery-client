import { Link } from "react-router-dom"
import { FaMagnifyingGlass } from "react-icons/fa6";


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

      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-5">
        <div>
          <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="" />
        </div>

        <div>
          <div>
            <select name="" id="">
              <option value="English">All Categories</option>
              <option value="Bangla">Bangla</option>
              <option value="Francais">Francais</option>
            </select>
            <input type="text" placeholder=" Search for items..." />
          </div>
        </div>
        <div></div>
      </div>

      <div></div>

    </div>
  )
}

export default Header