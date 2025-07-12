import { motion } from "framer-motion";

const Servicess = () => {
  const serviceData = [
    {
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg",
      titile: "Best prices & offers",
      desc: "Orders $50 or more",
    },
    {
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-2.svg",
      titile: "Free delivery",
      desc: "24/7 amazing services",
    },
    {
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-3.svg",
      titile: "Great daily deal",
      desc: "When you sign up",
    },
    {
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-4.svg",
      titile: "Wide assortment",
      desc: "Mega Discounts",
    },
    {
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-5.svg",
      titile: "Easy returns",
      desc: "Within 30 days",
    },
  ];

  // Container variant for staggered children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Each service item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="md:mx-10 2xl:mx-0 mx-3">
      <div className="max-w-screen-2xl lg:mx-auto">
        <motion.div
          id="services"
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5 gap-3 md:gap-3 font-family-primary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {serviceData.map((service, idx) => (
            <motion.div
              key={idx}
              className="group flex cursor-pointer gap-4 items-center bg-[#edf0f19a] p-3 md:px-4 py-6 rounded-lg"
              variants={itemVariants}
            >
              <div className="flex justify-center items-center">
                <img
                  className="group-hover:-translate-y-2 transition md:w-14 w-10 duration-500"
                  src={service.img}
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold md:text-lg text-sm">{service.titile}</p>
                <p className="text-zinc-400 font-medium md:text-[14px] text-xs">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Servicess;
