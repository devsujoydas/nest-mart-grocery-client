import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import DealsOfTheDay from '../../Components/DealsOfTheDay/DealsOfTheDay'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import { useState } from 'react'
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineGridView } from "react-icons/md";

import { useContext, useEffect } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import PopularProduct from '../../Components/PopularProducts/PopularProduct'
import { motion } from "framer-motion";


const Shop = () => {
  const [show, setShow] = useState("");
  const [sort, setSort] = useState("");
  const btnStyles = "text-black active:scale-95 hover:-translate-y-1 duration-300 transition-all hover:text-emerald-400"

  const { products, setProducts } = useContext(AuthContext)
  const [displayProducts, setDisplayProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    if (products.length > 0) {
      const initialProducts = products.slice(0, 10);
      setDisplayProducts(initialProducts);
    }
  }, [products]);

  const handleViewAll = () => {
    setShowAll(true);
    setDisplayProducts(products);
  };

  return (
    < >
      <div className='max-w-screen-2xl 2xl:mx-auto  md:mx-10 mx-3 my-10'>

        <div
          className='md:px-20 md:p-0 px-5 pt-5 pb-3 md:pt-16 md:pb-10 rounded-xl bg-center bg-cover flex flex-col justify-center md:items-baseline items-center' style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/blog/header-bg.png")` }}>
          <h1 className='md:text-5xl text-3xl text-zinc-700 font-bold font-family-primary'>Shop</h1>
          <div className='-mt-2'>
            <NavigationPage path1={"Shop"} />
          </div>
        </div>

        <div className='md:my-10 my-5 flex md:flex-row flex-col justify-between items-center'>
          {/* Recips Articles */}
          <div className=''>
            <h1 className='font-family-primary'>We found <span className='font-bold text-emerald-500'>{products?.length}</span> items for you!</h1>
          </div>
          {/* Filtering Section */}
          <div className='flex items-center md:flex-row flex-col md:mt-0 mt-2 gap-2'>
            <div className='flex  items-center  justify-center text-zinc-500 border border-zinc-200 rounded-md p-2 md:p-3  bg-white  transition'>
              <MdOutlineGridView className="text-xl text-emerald-600" />
              <select
                value={show}
                onChange={(e) => setShow(e.target.value)}
                className="bg-white text-sm font-semibold px-3  rounded-md  outline-none transition duration-200 cursor-pointer"
              >
                <option value="10">Show: 10</option>
                <option value="20">Show: 20</option>
                <option value="50">Show: 50</option>
              </select>
            </div>

            <div className='flex  items-center  justify-center text-zinc-500 border border-zinc-200 rounded-md p-2 md:p-3  bg-white  transition'>
              <TbArrowsSort className="text-xl text-emerald-600" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-white text-sm font-semibold px-3  rounded-md  outline-none transition duration-200 cursor-pointer"
              >
                <option value="10">Sort: Featured</option>
                <option value="20">Sort: Newest</option>
                <option value="50">Sort: Most comments</option>
                <option value="50">Sort: Release Date</option>
              </select>
            </div>
          </div>
        </div>

        <div className='md:pt-0 pt-5'>
          <div className="grid grid-cols-2 md:mt-0 -mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-5 gap-3">
            {displayProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.01 }}
              >
                <PopularProduct product={product} />
              </motion.div>
            ))}
          </div>

          {!showAll && products.length > 8 && (
            <div className="flex justify-center mt-6">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={handleViewAll}
                className="bg-emerald-500 active:scale-95 cursor-pointer duration-300 text-white px-5 py-2 rounded-md hover:bg-emerald-600 transition"
              >
                View All
              </motion.button>
            </div>
          )}
        </div>





      </div>


      <DealsOfTheDay />
      <StayHome />
      <Servicess />
    </ >
  )
}

export default Shop