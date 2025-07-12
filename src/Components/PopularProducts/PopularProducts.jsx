import { useContext, useEffect, useState } from "react";
import PopularProduct from "./PopularProduct";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const btnStyles =
    "text-black active:scale-95 hover:-translate-y-1 duration-300 transition-all hover:text-emerald-400";

  const { products } = useContext(AuthContext);
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

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-screen-2xl lg:mx-auto font-family-primary">

      {/* Section Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="my-5 md:my-10 flex justify-between items-center w-full flex-wrap gap-3 lg:gap-8">
          <div>
            <h1 className="md:text-4xl text-2xl font-bold">Popular Product</h1>
          </div>
          <div className="flex justify-center items-center font-semibold lg:gap-8 gap-x-4 gap-y-1 flex-wrap md:text-lg text-xs">
            <a href="#" className={btnStyles}>All</a>
            <a href="#" className={btnStyles}>Milks & Dairies</a>
            <a href="#" className={btnStyles}>Coffes & Teas</a>
            <a href="#" className={btnStyles}>Pet Foods</a>
            <a href="#" className={btnStyles}>Meats</a>
            <a href="#" className={btnStyles}>Vegetables</a>
            <a href="#" className={btnStyles}>Fruits</a>
          </div>
        </div>
      </motion.div>

      {/* Products Grid with Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="md:pt-0 pt-5"
      >
        <div className="grid grid-cols-2 md:mt-0 -mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-5 gap-3">
          {displayProducts.map((product, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <PopularProduct product={product} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View All Button */}
      {!showAll && products.length > 8 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mt-6"
        >
          <Link to={"/shop"}
           
            className="bg-emerald-500 active:scale-95 cursor-pointer duration-300 text-white px-5 py-2 rounded-md hover:bg-emerald-600 transition"
          >
            View All
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default PopularProducts;
