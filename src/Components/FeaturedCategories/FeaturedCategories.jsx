
import './FeaturedCategories.css'
const FeaturedCategories = () => {
  return (
    <div className='max-w-screen-2xl md:mx-auto mx-10'>
      <section id="feature-categories" className="scroll-smooth">
            <div className=" my-10 flex ljustify-start litems-center  flex-wrap gap-3 lg:gap-8">
                <h1 className="text-3xl font-semibold">Featured Categories</h1>
                <div className="flex gap-3 justify-center lg:gap-8">
                    <a href="#"
                        className="text-black active:scale-95 hover:-translate-y-1 hover:-translate-x-1 transition-all hover:text-emerald-400">Cake
                        & Milk</a>
                    <a href="#"
                        className="text-black active:scale-95 hover:-translate-y-1 hover:-translate-x-1 transition-all hover:text-emerald-400">Coffes
                        & Teas</a>
                    <a href="#"
                        className="text-black  active:scale-95hover:-translate-y-1 hover:-translate-x-1 transition-all hover:text-emerald-400">Pet
                        Foods</a>
                    <a href="#"
                        className="text-black active:scale-95 hover:-translate-y-1 hover:-translate-x-1 transition-all hover:text-emerald-400">Vegitables</a>
                </div>
            </div>

            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-6">
                <div id="card"
                    className="hover:-translate-x-2 hover:-translate-y-1 hover:shadow-xl hover:border transition-all text-black  bg-orange-100 p-4 rounded-lg flex justify-center items-center flex-col">
                    <img className="w-8/12 hover:scale-110 transition" src="../../assets/icons/cat-12.png" alt=""/>
                    <a href="#" className="font-semibold mt-4 hover:text-emerald-400">Oganic Kiwi</a>
                    <h1 className="text-gray-500">14 items</h1>
                </div>

                <div id="card"
                    className="hover:-translate-x-2 hover:-translate-y-1 hover:shadow-xl hover:border transition-all text-black  bg-green-100 p-4 rounded-lg flex justify-center items-center flex-col">
                    <img className="w-8/12 hover:scale-110 transition" src="../../assets/icons/cat-11.png" alt=""/>
                    <a href="#" className="font-semibold mt-4 hover:text-emerald-400">Peach</a>
                    <h1 className="text-gray-500">54 items</h1>
                </div>

                <div id="card"
                    className="hover:-translate-x-2 hover:-translate-y-1 hover:shadow-xl hover:border transition-all text-black  bg-red-100 p-4 rounded-lg flex justify-center items-center flex-col">
                    <img className="w-8/12 hover:scale-110 transition" src="../../assets/icons/cat-9.png" alt=""/>
                    <a href="#" className="font-semibold mt-4 hover:text-emerald-400">Red Apple</a>
                    <h1 className="text-gray-500">56 items</h1>
                </div>

                <div id="card"
                    className="hover:-translate-x-2 hover:-translate-y-1 hover:shadow-xl hover:border transition-all text-black  bg-orange-100 p-4 rounded-lg flex justify-center items-center flex-col">
                    <img className="w-8/12 hover:scale-110 transition" src="../../assets/icons/cat-3.png" alt=""/>
                    <a href="#" className="font-semibold mt-4 hover:text-emerald-400">Snack</a>
                    <h1 className="text-gray-500">72 items</h1>
                </div>

                <div id="card"
                    className="hover:-translate-x-2 hover:-translate-y-1 hover:shadow-xl hover:border transition-all text-black  bg-violet-100 p-4 rounded-lg flex justify-center items-center flex-col">
                    <img className="w-8/12 hover:scale-110 transition" src="../../assets/icons/cat-1.png" alt=""/>
                    <a href="#" className="font-semibold mt-4 hover:text-emerald-400">Vegetables</a>
                    <h1 className="text-gray-500">36 items</h1>
                </div>

                <div id="card"
                    className="hover:-translate-x-2 hover:-translate-y-1 hover:shadow-xl hover:border transition-all text-black  bg-green-200 p-4 rounded-lg flex justify-center items-center flex-col">
                    <img className="w-8/12 hover:scale-110 transition" src="../../assets/icons/cat-2.png" alt=""/>
                    <a href="#" className="font-semibold mt-4 hover:text-emerald-400">Strawberry</a>
                    <h1 className="text-gray-500">123 items</h1>
                </div>

                <div id="card"
                    className="hover:-translate-x-2 hover:-translate-y-1 hover:shadow-xl hover:border transition-all text-black  bg-red-200 p-4 rounded-lg flex justify-center items-center flex-col">
                    <img className="w-8/12 hover:scale-110 transition" src="../../assets/icons/cat-4.png" alt=""/>
                    <a href="#" className="font-semibold mt-4 hover:text-emerald-400">Black Plum</a>
                    <h1 className="text-gray-500">34 items</h1>
                </div>

                <div id="card"
                    className="hover:-translate-x-2 hover:-translate-y-1 hover:shadow-xl hover:border transition-all text-black  bg-gray-200 p-4 rounded-lg flex justify-center items-center flex-col">
                    <img className="w-8/12 hover:scale-110 transition" src="../../assets/icons/cat-3.png" alt=""/>
                    <a href="#" className="font-semibold mt-4 hover:text-emerald-400">Coffee & Tea</a>
                    <h1 className="text-gray-500">89 items</h1>
                </div>

                <div id="card"
                    className="hover:-translate-x-2 hover:-translate-y-1 hover:shadow-xl hover:border transition-all text-black  bg-orange-100 p-4 rounded-lg flex justify-center items-center flex-col">
                    <img className="w-8/12 hover:scale-110 transition" src="../../assets/icons/cat-15.png" alt=""/>
                    <a href="#" className="font-semibold mt-4 hover:text-emerald-400">Headphone</a>
                    <h1 className="text-gray-500">84 items</h1>
                </div>

            </div>

            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <div
                    className="bg-cover bgOnion border rounded-xl p-10 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-lg  transition-all">
                    <h1 className="font-semibold text-2xl my-8 text-black hover:-translate-y-1 transition-all">Everyday
                        Fresh & <br/>
                        Clean with Our <br/> Products</h1>
                    <button
                        className="bg-emerald-500 hover:bg-orange-400 hover:px-5 active:scale-95 transition-all  px-4 py-1 rounded-lg text-white font-semibold ">Shop
                        Now</button>
                </div>
                <div
                    className="bg-cover bgStroberry border rounded-xl p-10 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-lg transition-all">
                    <h1 className="font-semibold text-2xl my-8 text-black hover:-translate-y-1 transition-all">Make your
                        Breakfast
                        <br/> Healthy and Easy
                    </h1>
                    <button className=" bg-emerald-500 hover:bg-orange-400 hover:px-5 active:scale-95 transition-all px-4 py-1
                        rounded-lg text-white font-semibold ">Shop
                        Now</button>
                </div>
                <div className=" bg-cover bgVegetable border rounded-xl p-10 hover:-translate-y-1 hover:-translate-x-1
                        hover:shadow-lg transition-all">
                    <h1 className="font-semibold text-2xl my-8 text-black hover:-translate-y-1 transition-all">The best
                        Organic <br/>
                        Products Online</h1>
                    <button id="nav-for-products" className=" bg-emerald-500 hover:bg-orange-400 hover:px-5 active:scale-95 transition-all px-4 py-1
                            rounded-lg text-white font-semibold ">Shop
                        Now</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FeaturedCategories