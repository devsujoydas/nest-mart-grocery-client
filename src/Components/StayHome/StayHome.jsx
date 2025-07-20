
import { FaRegPaperPlane } from "react-icons/fa6";
import { motion } from "framer-motion";
import bgStayHome from '/assets/banner/banner-10.png';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const StayHome = () => {
  const { notify } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    if (email == "") {
      notify('Email is required')
    } else {
      notify('Email is sent')
    }
  }

  return (
    <div className="md:mx-10 mx-3">
      <motion.div
        className="max-w-screen-2xl lg:mx-auto font-family-primary"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}  // animate once when 30% visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="md:my-10 my-3 relative overflow-hidden rounded-2xl  md:rounded-3xl md:flex lg:flex-row justify-between items-end" style={{ backgroundImage: `url(${bgStayHome})` }}>

          <img className="absolute w-full h-full -z-20 transition" src={bgStayHome} alt="" />

          <div className="flex flex-col items-start justify-center gap-4 md:p-10 p-8 lg:p-20">
            <h1 className="lg:text-5xl text-2xl font-semibold">
              Stay home & get your daily <br className='md:block hidden ' /> needs from our shop
            </h1>
            <p className="lg:text-xl text-sm text-gray-500 font-family-secondary">
              Start Your Daily Shopping with <span className="text-emerald-500">Nest Mart</span>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="font-family-primary p-1 bg-white flex rounded-full justify-between items-center lg:gap-4 gap-1 md:mt-8 mt-3 overflow-hidden ">
                <div className='lg:ml-5 ml-3 mr-1'>
                  <FaRegPaperPlane className='text-zinc-400 md:text-lg text-sm' />
                </div>
                <input name="email"
                  className="focus:outline-none text-sm lg:text-lg font-semibold bg-white text-black w-4/6"
                  type="email"
                  placeholder="Your email address"
                />
                <div>
                  <button
                    className="bg-emerald-500 cursor-pointer text-white lg:px-8 px-3 text-sm md:text-lg py-2 lg:py-4 rounded-full font-semibold hover:bg-emerald-400 active:scale-95 transition"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="absolute flex -z-10 justify-end pr-2 bottom-0 right-0">
            <img className="w-4/6" src="../../../assets/banner/banner-9.png" alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default StayHome;
