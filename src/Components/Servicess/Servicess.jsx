
const Servicess = () => {
  return (
    <div className="max-w-screen-2xl lg:mx-auto mx-10">
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div
                className="hover:shadow-md flex gap-2 justify-center items-center border p-5 rounded-lg hover:-translate-x-2 hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-1.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Best prices & offers</p>
                    <p className="text-gray-4500 ">Orders $50 or More</p>
                </div>
            </div>

            <div
                className="hover:shadow-md flex gap-2 justify-center items-center border p-5 rounded-lg hover:-translate-x-2 hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-2.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Free delivery</p>
                    <p className="text-gray-4500 ">24/7 amazing services</p>
                </div>
            </div>

            <div
                className="hover:shadow-md lg:hidden flex gap-2 justify-center items-center border p-5 rounded-lg hover:-translate-x-2 hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-3.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Great daily deal</p>
                    <p className="text-gray-4500 ">When you sign up</p>
                </div>
            </div>

            <div
                className="hover:shadow-md flex gap-2 justify-center items-center border p-5 rounded-lg hover:-translate-x-2 hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-4.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Wide assortment</p>
                    <p className="text-gray-4500 ">Mega Discounts</p>
                </div>
            </div>

            <div
                className="hover:shadow-md flex gap-4 justify-center items-center border p-5 rounded-lg hover:-translate-x-2 hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-5.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Easy returns</p>
                    <p className="text-gray-4500 ">Within 30 days</p>
                </div>
            </div>

            <div id="footer"
                className=" scroll-smooth hover:shadow-md flex gap-2 justify-center items-center border p-5 rounded-lg hover:-translate-x-2 hover:-translate-y-2 transition-all">
                <img className="hover:-translate-y-2 transition w-12" src="../../../assets/svgs/icon-6.svg" alt=""/>
                <div>
                    <p className="font-bold text-lg">Safe delivery</p>
                    <p className="text-gray-4500 ">Within 30 days</p>
                </div>
            </div>





        </div>
    </div>
  )
}

export default Servicess