import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const TrandingProductsTemplate = () => {
    const { products } = useContext(AuthContext);
    const [trendingProducts, setTrendingProducts] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            const initialProducts = products.slice(9, 12);
            setTrendingProducts(initialProducts);
        }
    }, [products]);



    return (
        <div className='border border-zinc-200 shadow-md  rounded-2xl  p-3 md:p-5'>
            <h1 className="md:text-2xl font-family-primary font-bold text-zinc-600">Tranding Products</h1>
            <hr className='text-zinc-300 my-3' />

            <div className="grid md:grid-rows-3 md:gap-3 gap-3">

                {trendingProducts.map((pro, idx) => (
                    <div key={idx}
                        className="flex items-center p-2 hover:border-emerald-300 border border-zinc-200 gap-1 rounded-lg hover:shadow-lg hover:-translate-y-1 transition ">

                        <div className='w-20 overflow-hidden  '>
                            <img className="scale-125 rounded-lg" src={pro.img1} alt="" />
                        </div>

                        <div>
                            <Link to={`/products/${pro.path}`}>
                                <h1 className="font-family-primary font-bold cursor-pointer hover:text-emerald-500 active:text-emerald-500 transition-all duration-500 md:mb-1 md:text-[13px] text-sm">{pro.title}</h1>
                            </Link>
                            <div className="flex text-orange-300 text-xs">
                                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                            </div>
                            <div className="flex justify-between items-center md:mt-2 mt-1">
                                <h1 className="text-emerald-500 font-bold text-sm md:text-sm">${pro.price}</h1>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default TrandingProductsTemplate