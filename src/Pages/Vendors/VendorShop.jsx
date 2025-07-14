import React, { useContext } from 'react'
import Servicess from '../../Components/Servicess/Servicess'
import StayHome from '../../Components/StayHome/StayHome'
import Shop from '../Shop/Shop'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { motion } from "framer-motion";
import PopularProduct from '../../Components/PopularProducts/PopularProduct'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'

const VendorShop = () => {
    const { products } = useContext(AuthContext)

    console.log(products)


    return (
        <div>
            <NavigationPage path1={"Vendor"} path2={"Nest Mart"} />


            <div className='max-w-screen-2xl 2xl:mx-auto  md:mx-10 mx-3 my-10'>


                <div className="grid grid-cols-2 md:mt-0 -mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-5 gap-3">
                    {products.map((product, idx) => (
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







            </div>

            <StayHome />
            <Servicess />
        </div>
    )
}

export default VendorShop