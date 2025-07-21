import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import { Link } from 'react-router-dom'

const MegaMenuConainer = () => {
    const megaMenuBtnStyle = "hover:text-emerald-500 font-bold text-zinc-500 text-lg transition text-sm active:scale-95 duration-300"
    const { megaModal, setMegaModal, products } = useContext(AuthContext)


    const [topSellProducts, setTopSellProducts] = useState([])
    const [trendingProducts, setTrendingProducts] = useState([])
    const [recentlyProducts, setRecentlyProducts] = useState([]) 

    useEffect(() => {
        if (products.length > 0) {
            const initialProducts = products.slice(0, 6);
            setTopSellProducts(initialProducts);
        }
    }, [products]);

    useEffect(() => {
        if (products.length > 0) {
            const initialProducts = products.slice(6, 12);
            setTrendingProducts(initialProducts);
        }
    }, [products]);

    useEffect(() => {
        if (products.length > 0) {
            const initialProducts = products.slice(12, 18);
            setRecentlyProducts(initialProducts);
        }
    }, [products]);

 


    return (
        <>
            <div onMouseEnter={() => setMegaModal(false)} onMouseLeave={() => setMegaModal(true)} className={`absolute ${megaModal ? "-z-50 top-20 opacity-0 transition-all duration-500" : " top-14 z-50 opacity-100 transition-all duration-500"} 2xl:-left-46 -left-56 xl:-left-68 md:w-4xl xl:w-7xl mx-5 bg-white p-10  border border-emerald-200 rounded-lg font-family-primary `}>

                <div>
                    <div className="flex items-start justify-between gap-8 ">

                        <div className="flex flex-col gap-2 md:gap-3 w-full">
                            <h1 className="text-xl text-emerald-500 font-bold mb-3">Top Selling</h1>
                            {
                                topSellProducts.length > 0 &&
                                topSellProducts.map((product, idx) => (
                                    <Link key={idx} to={`/products/${product.path}`} className={megaMenuBtnStyle}>{product.title.slice(0, 15) + "..."}</Link>
                                ))
                            }
                        </div>

                        <div className="flex flex-col gap-4 md:gap-3 w-full">
                            <h1 className="text-xl text-emerald-500 font-bold mb-3">Trending</h1>
                            {
                                trendingProducts.length > 0 &&
                                trendingProducts.map((product, idx) => (
                                    <Link key={idx} to={`/products/${product.path}`} className={megaMenuBtnStyle}>{product.title.slice(0, 15) + "..."}</Link>
                                ))
                            }
                        </div>

                        <div className="flex flex-col gap-4 md:gap-3 w-full">
                            <h1 className="text-xl text-emerald-500 font-bold mb-3">Recently Viewed</h1>
                            {
                                recentlyProducts.length > 0 &&
                                recentlyProducts.map((product, idx) => (
                                    <Link key={idx}     to={`/products/${product.path}`} className={megaMenuBtnStyle}>{product.title.slice(0, 15) + "..."}</Link>
                                ))
                            }
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