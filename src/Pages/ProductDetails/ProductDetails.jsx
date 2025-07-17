import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io"

import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { BsCart3 } from "react-icons/bs";

const ProductDetails = () => {
  const { products, vendors } = useContext(AuthContext)
  const paramsId = useParams()
  const product = products.find(product => product.SL == paramsId.id)
  const { img1, img2, status, categories, title, ratings, by, price, prevPrice, discountPercent, productDetails } = product;
  const { Sale, quantity, sold, description, type, mfg, life, sku, tags, stock, TypeOfPacking, Color, QuantityPerCase, Alcohol, PieceInOne, packagingDelivery, suggestedUse, otherIngredients, warnings, delivery, returnAndWarranty } = productDetails;

  const [qty, setQty] = useState(1);
  const [subTotal, setSubTotal] = useState(price);

  useEffect(() => {
    setSubTotal((qty * price).toFixed(2));
  }, [qty, price]);

  const handleDecrease = () => { if (qty > 1) setQty(qty - 1) };
  const handleIncrease = () => { setQty(qty + 1) };

  const [imgBanner, setImgBanner] = useState(img1)

  return (
    <div className='md:mx-10 2xl:mx-0 mx-3'>
      <NavigationPage path1={`Product`} path2={`${product.title}`} />


      <div className=' grid md:grid-cols-9 gap-5 rounded-md  max-w-screen-2xl mx-auto md:my-10 my-5'>

        <div className=' md:col-span-7'>
          {/* Product Image Details */}
          <div className='grid md:grid-cols-2 gap-3 md:gap-10'>

            <div className='flex flex-col  gap-3 md:gap-5'>

              <div className=' border h-fit border-zinc-200 rounded-3xl overflow-hidden'>
                <img src={imgBanner} className='hover:scale-125 duration-500 transition-all cursor-zoom-in active:scale-200' alt="" />
              </div>

              <div className=' flex gap-3 cursor-pointer '>
                <div onClick={() => setImgBanner(img1)} className='border  hover:border-emerald-300 duration-500 transition-all border-zinc-200 rounded-lg overflow-hidden'><img className='w-26' src={img1} alt="" /></div>
                <div onClick={() => setImgBanner(img2)} className='border hover:border-emerald-300 duration-500 transition-all border-zinc-200 rounded-lg overflow-hidden'><img className='w-26' src={img2} alt="" /></div>
              </div>
            </div>



            <div className='font-family-primary space-y-4 md:space-y-7'>
              <p className='text-red-500 px-4 rounded-sm py-1 text-xs md:text-sm font-bold bg-red-100 w-fit
              '>Sale {Sale}</p>

              <h1 className=' text-3xl md:text-4xl font-bold text-zinc-600'>{title}</h1>

              <div className='flex items-center gap-1'>
                <div className="flex text-orange-300 text-sm">
                  <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                </div>
                <h1 className='md:text-sm text-xs'>({ratings})</h1>
              </div>

              <div className='flex items-center gap-3'>
                <h1 className='font-bold text-emerald-500 text-5xl md:text-6xl'>${price}</h1>
                <div className='text-center'>
                  <p className='text-yellow-500 font-semibold md:text-sm text-xs'>{discountPercent} Off</p>
                  <h1 className='font-bold text-zinc-400 text-xl md:text-3xl line-through'>${prevPrice}</h1>
                </div>
              </div>

              <p className='text-zinc-500 font-medium'>{description}</p>

              <p className='font-semibold'>By <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500  cursor-pointer'>{by}</span></p>

              <div className='flex gap-3 '>
                <div className="flex items-center gap-1 border w-fit px-4 py-2 md:py-3 rounded-md border-emerald-500 md:text-sm text-xs">
                  <button
                    onClick={handleDecrease}
                    disabled={qty === 1}
                    className={`transition-all duration-300 active:scale-95 cursor-pointer ${qty === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-zinc-700 hover:text-yellow-500"
                      }`}
                  >
                    <TiMinus />
                  </button>
                  <span className="w-10 font-semibold text-lg text-center ">
                    {qty}
                  </span>
                  <button
                    onClick={handleIncrease}
                    className="text-zinc-700 hover:text-yellow-500 transition-all cursor-pointer duration-300 active:scale-95"
                  >
                    <FaPlus />
                  </button>
                </div>

                <button className="font-bold flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700  text-white px-4 md:px-6 text-lg rounded-md cursor-pointer active:scale-95 transition-all duration-300">
                  <BsCart3 />
                  <h1 className="">Add to cart</h1>
                </button>
              </div>



              <div className='grid grid-cols-2 text-xs md:mt-0 md:text-sm '>

                <div className='grid gap-2'>
                  <p>Type: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{type}</span></p>
                  <p>MFG: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{mfg}</span></p>
                  <p>LIFE: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{life}</span></p>
                </div>

                <div className='grid gap-2'>
                  <p>SKU: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{sku}</span></p>
                  <p>Stock: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{stock} Items In Stock</span> </p>
                  <p>Tags: <span className='text-emerald-500 hover:text-yellow-500 transition-all duration-500 cursor-pointer'>{tags}</span></p>
                </div>
              </div>



            </div>
          </div>




          {/* Specs */}
          <div className=' '>

          </div>


          {/* Related products */}
          <div className=' '>

          </div>
        </div>



        <div className='md:col-span-2 bg-blue-400 rounded-md p-5 '>
          {/* Category */}
          <div className='bg-green-400 rounded-md p-10'></div>

          {/* Fill by price */}
          <div className='bg-purple-400 rounded-md p-10'></div>

          {/* New products */}
          <div className='bg-orange-400 rounded-md p-10'></div>
        </div>

      </div>

      <StayHome />
      <Servicess />

    </div>
  )
}

export default ProductDetails