
const Servicess = () => {
  return (
    <div className="max-w-screen-2xl lg:mx-auto  ">
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 font-family-primary">
            <div
                className="hover:shadow-md flex cursor-pointer gap-2 md:justify-center items-center border border-zinc-200 bg-[#edf0f19a] p-6 md:p-5 rounded-lg hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-1.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Best prices & offers</p>
                    <p className="text-zinc-400 font-medium ">Orders $50 or More</p>
                </div>
            </div>

            <div
                className="hover:shadow-md flex cursor-pointer gap-2 md:justify-center items-center border border-zinc-200 bg-[#edf0f19a] p-6 md:p-5 rounded-lg hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-2.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Free delivery</p>
                    <p className="text-zinc-400 font-medium ">24/7 amazing services</p>
                </div>
            </div>

            <div
                className="hover:shadow-md lg:hidden flex gap-2 md:justify-center items-center border border-zinc-200 bg-[#edf0f19a] p-6 md:p-5 rounded-lg hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-3.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Great daily deal</p>
                    <p className="text-zinc-400 font-medium ">When you sign up</p>
                </div>
            </div>

            <div
                className="hover:shadow-md flex cursor-pointer gap-2 md:justify-center items-center border border-zinc-200 bg-[#edf0f19a] p-6 md:p-5 rounded-lg hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-4.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Wide assortment</p>
                    <p className="text-zinc-400 font-medium ">Mega Discounts</p>
                </div>
            </div>

            <div
                className="hover:shadow-md flex cursor-pointer gap-4 md:justify-center items-center border border-zinc-200 bg-[#edf0f19a] p-6 md:p-5 rounded-lg hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-5.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Easy returns</p>
                    <p className="text-zinc-400 font-medium ">Within 30 days</p>
                </div>
            </div>

            <div id="footer"
                className=" scroll-smooth hover:shadow-md flex cursor-pointer gap-2 md:justify-center items-center border border-zinc-200 bg-[#edf0f19a] p-6 md:p-5 rounded-lg hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-6.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Safe delivery</p>
                    <p className="text-zinc-400 font-medium ">Within 30 days</p>
                </div>
            </div>





        </div>
    </div>
  )
}

export default Servicess