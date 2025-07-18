import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import Description from './Description'
import RelatedProducts from './RelatedProducts'
import DetailsContainer from './DetailsContainer'
import CategorySide from '../../Components/CategorySide/CategorySide'
import DescStore from './DescStore'

const ProductDetails = () => {
  const { products } = useContext(AuthContext)
  const paramsId = useParams()
  const product = products.find(product => product.SL == paramsId.id)
  const { img1, img2, productDetails } = product;
  const [descOrVendor, setDescOrVendor] = useState(true);
  const [imgBanner, setImgBanner] = useState(img1)
 
  return (
    <>
      <NavigationPage path1={`Product`} path2={`${product.title}`} />

      <div className='md:mx-10 2xl:mx-0 mx-3'>
        <div className=' grid xl:grid-cols-9 gap-5 rounded-md  max-w-screen-2xl mx-auto md:my-10 my-5'>
          <div className=' xl:col-span-7'>
            {/* Product Image Details */}
            <div className='grid md:grid-cols-2 gap-3 md:gap-10'>
              {/* img Container  */}
              <div className='flex flex-col gap-3 md:gap-5'>
                <div className=' border h-fit border-zinc-200 rounded-3xl overflow-hidden'>
                  <img src={imgBanner} className='hover:scale-125 duration-500 transition-all cursor-zoom-in active:scale-200' alt="" />
                </div>

                <div className=' flex gap-3 cursor-pointer '>
                  <div onMouseEnter={() => setImgBanner(img1)} className='border  hover:border-emerald-300 duration-500 transition-all border-zinc-200 rounded-lg overflow-hidden'><img className='md:w-26 w-20' src={img1} alt="" /></div>
                  <div onMouseEnter={() => setImgBanner(img2)} className='border hover:border-emerald-300 duration-500 transition-all border-zinc-200 rounded-lg overflow-hidden'><img className='md:w-26 w-20' src={img2} alt="" /></div>
                </div>
              </div>

              {/* Details Container */}
              <DetailsContainer product={product} />
            </div>

            {/* Specs */}
            <div className='border border-zinc-200 md:my-10 my-5 rounded-xl p-3 md:p-5 xl:p-10 
          '>
              <div className='flex items-center gap-1 md:gap-5'>
                <button onClick={() => setDescOrVendor(true)} className='text-emerald-500 cursor-pointer hover:-translate-y-1 font-semibold md:px-6 px-4 md:py-2 py-1 md:text-lg text-sm shadow-xl border border-zinc-200 rounded-full transition-all duration-300'>Description</button>
                <button onClick={() => setDescOrVendor(false)} className='text-emerald-500 cursor-pointer hover:-translate-y-1 font-semibold md:px-6 px-4 md:py-2 py-1 md:text-lg text-sm shadow-xl border border-zinc-200 rounded-full transition-all duration-300'>Store</button>
                <button className='text-emerald-500 cursor-pointer hover:-translate-y-1 font-semibold md:px-6 px-4 md:py-2 py-1 md:text-lg text-sm shadow-xl border border-zinc-200 rounded-full transition-all duration-300'>Reviews</button>
              </div>
              <div>
                {descOrVendor
                  ? <Description productDetails={productDetails} />
                  : <DescStore productDetails={productDetails} />
                }
              </div>
            </div>

            {/* Related products */}
            <RelatedProducts product={product} />
          </div>

          {/* right Side */}
          <div className='xl:col-span-2 relative  '>
            <CategorySide />
          </div>
        </div>

      </div>

      <StayHome />
      <Servicess />
    </>
  )
}

export default ProductDetails