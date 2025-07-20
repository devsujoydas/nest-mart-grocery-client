;
import DealsProduct from './DealsProduct';
import { motion } from 'framer-motion';

const DealsOfTheDay = () => {
  const products = [
    {
      SL: "product 1",
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-5.png",
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      ratings: "4.5",
      by: "NestFood",
      price: "32.85",
      prevPrice: "33.8",
      days: "42",
      hours: "12",
      mins: "53",
      sec: 23,
    },
    {
      SL: "product 2",
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-6.png",
      title: "Perdue Simply Smart Organics Gluten Free",
      ratings: "4.5",
      by: "Old El Paso",
      price: "24.85",
      prevPrice: "26.8",
      days: "56",
      hours: "21",
      mins: "54",
      sec: 5,
    },
    {
      SL: "product 3",
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-7.png",
      title: "Signature Wood-Fired Mushroom and Caramelized",
      ratings: "4.5",
      by: "Progresso",
      price: "12.85 ",
      prevPrice: "13.8",
      days: "12",
      hours: "05",
      mins: "45",
      sec: 36,
    },
    {
      SL: "product 4",
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-8.png",
      title: "Simply Lemonade with Raspberry Juice",
      ratings: "3.5",
      by: "Yoplait",
      price: "12.85 ",
      prevPrice: "13.95",
      days: "68",
      hours: "07",
      mins: "54",
      sec: 51,
    },
  ];

  // Variants for container to stagger children animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for each product fade+slide-up
  const productVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className=" ">
      <div className="max-w-screen-2xl lg:mx-auto md:mx-10">
        <h1 className="md:text-4xl text-2xl font-bold font-family-primary">Deals Of The Day</h1>

        <motion.div
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:py-10 py-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product, idx) => (
            <motion.div key={idx} variants={productVariants}>
              <DealsProduct product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DealsOfTheDay;
