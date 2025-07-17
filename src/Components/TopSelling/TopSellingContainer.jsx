import { motion } from "framer-motion";
import TopSellingCard from "./TopSellingCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";

const TopSellingContainer = () => {

    const { products } = useContext(AuthContext);

    const [topSellProducts, setTopSellProducts] = useState([])
    const [trendingProducts, setTrendingProducts] = useState([])
    const [recentlyProducts, setRecentlyProducts] = useState([])
    const [topRatedProducts, setTopRatedProducts] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            const initialProducts = products.slice(1, 4);
            setTopSellProducts(initialProducts);
        }
    }, [products]);

    useEffect(() => {
        if (products.length > 0) {
            const initialProducts = products.slice(9, 12);
            setTrendingProducts(initialProducts);
        }
    }, [products]);

    useEffect(() => {
        if (products.length > 0) {
            const initialProducts = products.slice(6, 9);
            setRecentlyProducts(initialProducts);
        }
    }, [products]);

    useEffect(() => {
        if (products.length > 0) {
            const initialProducts = products.slice(10, 13);
            setTopRatedProducts(initialProducts);
        }
    }, [products]);


    return (
        <div className="md:mx-0 ">
            <div className="max-w-screen-2xl md:mx-auto font-family-primary ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <TopSellingCard
                            product={topSellProducts}
                            titile={"Top Selling"}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <TopSellingCard
                            product={trendingProducts}
                            titile={"Trending Products"}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:block hidden"
                    >
                        <TopSellingCard
                            product={recentlyProducts}
                            titile={"Recently added"}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="xl:block hidden"
                    >
                        <TopSellingCard
                            product={topRatedProducts}
                            titile={"Top Rated"}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TopSellingContainer;
