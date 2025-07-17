import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  const [showImg, setShowImg] = useState(true)

  return (
    <div onMouseEnter={() => setShowImg(false)} onMouseLeave={() => setShowImg(true)}
      className="border h-full flex flex-col justify-between group border-zinc-100 hover:border-emerald-200 relative overflow-hidden shadow-xl p-4 lg:p-6 rounded-2xl hover:shadow-2xl transition ">

      <span className="bg-emerald-600  text-white text-xs px-4 py-1.5 rounded-br-2xl z-20 absolute top-0 left-0">{product.status}</span>

      <Link to={`/product/${product.SL}`}>
        <div className="h-[225px] overflow-hidden relative mb-3 rounded-md cursor-pointer ">
          <div className={` absolute top-0 w-full h-full ${showImg ? 'opacity-100  z-10 transition-all duration-500' : 'opacity-0  z-0 transition-all duration-500'} `}><img className="w-full" src={product.img1} alt="" /></div>
          <div className={` absolute top-0 w-full h-full ${showImg ? 'opacity-0  z-0 transition-all duration-500 ' : 'opacity-100  z-10 transition-all duration-500'}`}><img className="w-full" src={product.img2} alt="" /></div>
        </div>
      </Link>
      <div className="flex flex-col mb-1">
        <p href="#" className="text-gray-400 text-xs hover:text-emerald-400">{product.categories}</p>
       <Link to={`/product/${product.SL}`} className="font-semibold my-1 leading-none hover:text-emerald-500 transition-colors md:text-lg text-sm">{product.title}</Link>
      </div>

      <div className="flex text-orange-300 text-sm">
        <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
      </div>

      <h1 className="mt-2 text-xs">By <span><a href="#"
        className="text-emerald-500 hover:-translate-x-1 hover:-translate-y-1 hover:text-orange-400 text-xs md:text-sm">{product.by}</a></span>
      </h1>

      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center  gap-1">
          <h1 className="text-emerald-500 font-bold md:text-xl text-sm">${product.price}</h1>
          <h1 className="text-xs text-zinc-400 line-through font-bold ">${product.prevPrice}</h1>
        </div>
        <button className="bg-emerald-100 hover:bg-emerald-500 text-emerald-600 hover:text-white font-semibold px-3 lg:px-6 md:py-2 py-1 rounded-md flex justify-between items-center gap-1 hover:-translate-y-1 active:scale-95 transition duration-300 md:text-sm text-xs cursor-pointer">
          <BsCart3 />
          <h1 className="">Add</h1>
        </button>
      </div>

    </div>
  )
}

export default ProductCard