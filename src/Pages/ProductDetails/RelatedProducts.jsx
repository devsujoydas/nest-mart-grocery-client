import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ProductCard from '../../Components/Products/ProductCard';
import { motion } from "framer-motion";


const RelatedProducts = ({ product }) => {
    const { products } = useContext(AuthContext)
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        const remaining = products.filter((pro, idx) => pro.SL != product.SL)
        if (remaining.length > 0) {
            const initialProducts = remaining.slice(1, 5);
            setDisplayProducts(initialProducts);
        }
    }, [products]);
 
    return (
        <div>
            <h1 className='text-2xl font-family-primary font-bold text-zinc-600'>Related products</h1>
            <hr className='text-zinc-300 my-3' />

            <div className="grid grid-cols-2 md:mt-0 -mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5 gap-3">
                {displayProducts.map((product, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.01 }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </div>

        </div>
    )
}

export default RelatedProducts