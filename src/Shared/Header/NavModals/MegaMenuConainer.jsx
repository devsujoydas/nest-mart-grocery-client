import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'

const MegaMenuConainer = () => {
    const megaMenuBtnStyle = "hover:text-emerald-500 font-bold text-zinc-500 text-lg transition text-sm active:scale-95 duration-300"
    const { megaModal, setMegaModal, } = useContext(AuthContext)

    return (
        <>
            <div onMouseEnter={() => setMegaModal(false)} onMouseLeave={() => setMegaModal(true)} className={`absolute ${megaModal ? "-z-50 top-20 opacity-0 transition-all duration-500" : " top-14 z-50 opacity-100 transition-all duration-500"} -left-46 xl:w-7xl w-6xl mx-5 bg-white p-10  border border-emerald-200 rounded-lg font-family-primary  `}>

                <div>
                    <div className="grid grid-cols-2 md:gap-0 gap-8 md:grid-cols-13  ">

                        <div className="flex flex-col gap-4 md:gap-3 col-span-3">
                            <h1 className="text-xl text-emerald-500 font-bold mb-3">Fruit & Vegetables</h1>
                            <a href="#" className={megaMenuBtnStyle}>Meat & Poultry </a>
                            <a href="#" className={megaMenuBtnStyle}>Fresh Vegetables </a>
                            <a href="#" className={megaMenuBtnStyle}>Herbs & Seasonings </a>
                            <a href="#" className={megaMenuBtnStyle}>Cuts & Sprouts </a>
                            <a href="#" className={megaMenuBtnStyle}>Exotic Fruits & Veggies </a>
                            <a href="#" className={megaMenuBtnStyle}>Packaged Produce </a>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-3 col-span-3">
                            <h1 className="text-xl text-emerald-500 font-bold mb-3">Breakfast & Dairy </h1>
                            <a href="#" className={megaMenuBtnStyle}>Milk & Flavoured Milk </a>
                            <a href="#" className={megaMenuBtnStyle}>Butter and Margarine </a>
                            <a href="#" className={megaMenuBtnStyle}>Eggs Substitutes </a>
                            <a href="#" className={megaMenuBtnStyle}>Marmalades </a>
                            <a href="#" className={megaMenuBtnStyle}>Sour Cream </a>
                            <a href="#" className={megaMenuBtnStyle}>Cheese </a>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-3 col-span-3">
                            <h1 className="text-xl text-emerald-500 font-bold mb-3"> Meat & Seafood </h1>
                            <a href="#" className={megaMenuBtnStyle}>Breakfast Sausage </a>
                            <a href="#" className={megaMenuBtnStyle}>Dinner Sausage </a>
                            <a href="#" className={megaMenuBtnStyle}>Chicken </a>
                            <a href="#" className={megaMenuBtnStyle}>Sliced Deli Meat </a>
                            <a href="#" className={megaMenuBtnStyle}>Wild Caught Fillets </a>
                            <a href="#" className={megaMenuBtnStyle}>Crab and Shellfish </a>
                        </div>

                        <div
                            style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-menu.png")` }} className="w-full relative rounded-lg h-66 bg-cover bg-center p-10 col-span-4 flex justify-between">
                            <div className="space-y-3">
                                <h1>HOT DEALS</h1>
                                <h1 className="text-2xl font-bold">Don't miss <br /> Trending</h1>
                                <h1 className="text-emerald-600 font-bold text-2xl ">Save to 50%</h1>

                                <button className="bg-emerald-500 px-4 py-2 rounded-full text-sm text-white font-bold hover:bg-emerald-400 active:scale-95 transition-all cursor-pointer">Shop Now</button>
                            </div>
                            <div className="text-xl bg-yellow-400 h-fit font-bold w-fit py-4 px-6 rounded-full">
                                <h1>25%</h1>
                                <h1 className="-mt-1">off</h1>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default MegaMenuConainer