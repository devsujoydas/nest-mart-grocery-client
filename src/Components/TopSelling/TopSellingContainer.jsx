import { motion } from "framer-motion";
import TopSelling from "./TopSelling";

const TopSellingContainer = () => {
    return (
        <div className="max-w-screen-2xl md:mx-auto font-family-primary px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <TopSelling data={"Top Selling"} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <TopSelling data={"Trending Products"} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:block hidden"
                >
                    <TopSelling data={"Recently added"} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="xl:block hidden"
                >
                    <TopSelling data={"Top Rated"} />
                </motion.div>
            </div>
        </div>
    );
};

export default TopSellingContainer;
