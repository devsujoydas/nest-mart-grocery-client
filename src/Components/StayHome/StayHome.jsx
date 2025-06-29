import './StayHome.css'
const StayHome = () => {
  return (
    <div className="max-w-screen-2xl lg:mx-auto m-10 ">
      <div id="stay-home" className="my-10 relative overflow-hidden stay-home-bg rounded-3xl flex lg:flex-row flex-col justify-between items-end">

      <img className="absolute w-full h-full -z-30 transition" src="../../../assets/banner/banner-10.png" alt="" />

        <div className="flex flex-col lg:items-start sm:justify-center gap-4 p-10 lg:p-20">
          <h1 className="lg:text-5xl text-3xl font-semibold">Stay home & get your daily <br /> needs from our shop</h1>
          <p className="lg:text-2xl text-lg text-gray-500">Start Your Daily Shopping with <span
            className="text-emerald-500">Nest Mart</span> </p>
          <div
            className="bg-white flex rounded-full justify-between items-center lg:gap-4 gap-1 mt-8 overflow-hidden">
            <img className="lg:pl-6 pl-3" src="../../../assets/others/icon-plane.png" alt="" />
            <input className="focus:outline-none lg:text-lg text-sm w-full bg-white text-black" type="email"
              placeholder="Your email address" />
            <button
              className="bg-emerald-500 text-white lg:px-8 px-4 py-2 lg:py-4 rounded-full font-semibold hover:bg-emerald-400 active:scale-95 transition">Subscribe</button>
          </div>
        </div>
        <div className="flex justify-center overflow-hidden pt-3">
          <img className="w-10/12 hover:scale-105 transition" src="../../../assets/banner/banner-9.png" alt="" />
        </div>
      </div >
    </div>
  )
}

export default StayHome