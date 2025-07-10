import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import { Link } from 'react-router-dom'

const MegaMenuConainer = () => {
    const megaMenuBtnStyle = "hover:text-emerald-500 font-bold text-zinc-500 text-lg transition text-sm active:scale-95 duration-300"
    const { megaModal, setMegaModal, } = useContext(AuthContext)

    return (
        <>
            <div onMouseEnter={() => setMegaModal(false)} onMouseLeave={() => setMegaModal(true)} className={`absolute ${megaModal ? "-z-50 top-20 opacity-0 transition-all duration-500" : " top-14 z-50 opacity-100 transition-all duration-500"} 2xl:-left-46 -left-56 xl:-left-68 md:w-4xl xl:w-7xl mx-5 bg-white p-10  border border-emerald-200 rounded-lg font-family-primary `}>

                <div>
                    <div className="flex items-center justify-center gap-8 ">

                        <div className="flex flex-col gap-2 md:gap-3 w-full">
                            <h1 className="text-xl text-emerald-500 font-bold mb-3">Fruit & Vegetables</h1>
                            <Link to="/shop" className={megaMenuBtnStyle}>Meat & Poultry </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Fresh Vegetables </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Herbs & Seasonings </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Cuts & Sprouts </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Exotic Fruits & Veggies </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Packaged Produce </Link>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-3 w-full">
                            <h1 className="text-xl text-emerald-500 font-bold mb-3">Breakfast & Dairy </h1>
                            <Link to="/shop" className={megaMenuBtnStyle}>Milk & Flavoured Milk </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Butter and Margarine </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Eggs Substitutes </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Marmalades </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Sour Cream </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Cheese </Link>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-3 w-full">
                            <h1 className="text-xl text-emerald-500 font-bold mb-3"> Meat & Seafood </h1>
                            <Link to="/shop" className={megaMenuBtnStyle}>Breakfast Sausage </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Dinner Sausage </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Chicken </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Sliced Deli Meat </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Wild Caught Fillets </Link>
                            <Link to="/shop" className={megaMenuBtnStyle}>Crab and Shellfish </Link>
                        </div>

                        <div
                            style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-menu.png")` }} className="w-full relative rounded-lg h-66 bg-cover bg-center p-10 md:col-span-4 flex justify-between">
                            <div className="space-y-3">
                                <h1 className='xl:text-lg text-xs'>HOT DEALS</h1>
                                <h1 className="text-xl xl:text-2xl font-bold">Don't miss <br /> Trending</h1>
                                <h1 className="text-emerald-600 font-bold text-xs xl:text-2xl ">Save to 50%</h1>

                                <button className="bg-emerald-500 xl:px-4 px-2 xl:py-2 py-1 rounded-full text-xs xl:text-sm text-white font-bold hover:bg-emerald-400 active:scale-95 transition-all cursor-pointer">Shop Now</button>
                            </div>
                            <div className="xl:text-xl text-lg bg-yellow-400 h-fit font-bold w-fit md:py-4 py-4 md:px-6 px-4 rounded-full">
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