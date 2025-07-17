import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io"




const ProductDetails = () => {
  const { products, vendors } = useContext(AuthContext)
  const paramsId = useParams()

  const product = products.find(product => product.SL == paramsId.id)

  console.log(paramsId)
  console.log(product)

  const { img1, img2, status, categories, title, ratings, by, price, prevPrice, discountPercent, productDetails } = product;


  const { Sale, quantity, sold, description, type, mfg, life, sku, tags, stock, TypeOfPacking, Color, QuantityPerCase, Alcohol, PieceInOne, packagingDelivery, suggestedUse, otherIngredients, warnings, delivery, returnAndWarranty } = productDetails;


  return (
    <div>
      <NavigationPage path1={`Shop`} path2={`${product.title}`} />


      <div className=' grid md:grid-cols-9 gap-5 rounded-md  max-w-screen-2xl mx-auto my-10'>

        <div className=' col-span-7'>
          {/* Product Image Details */}
          <div className='grid grid-cols-2 gap-10'>
            <div className='border border-zinc-200 rounded-3xl overflow-hidden'>
              <img src={img1} alt="" />
            </div>
            <div className='font-family-primary space-y-5'>
              <p className='text-red-500 px-4 rounded-sm py-1 text-sm font-bold bg-red-100 w-fit
              '>Sale {Sale}</p>

              <h1 className='text-4xl font-bold text-zinc-600'>{title}</h1>

              <div className='flex items-center gap-1'>
                <div className="flex text-orange-300 text-sm">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
              </div>
              <h1>({ratings})</h1>
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



        <div className='bg-blue-400 rounded-md p-5 col-span-2'>
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