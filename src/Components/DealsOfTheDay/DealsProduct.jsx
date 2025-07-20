import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DealsProduct = ({ product }) => {
    const { notify, addToWishlist, removeFromWishlist, addToCart, removeFromCart, getWishlistIds, getCartIds } = useContext(AuthContext)


    const [countDown, setCountDown] = useState(product?.sec || 59);
    const [minute, setMinute] = useState(product?.mins || 59);

    useEffect(() => {
        if (countDown <= 1) {
            setCountDown(59)
            setMinute(minute - 1)
            return
        };

        const interval = setInterval(() => {
            setCountDown(prev => {
                if (prev > 1) return prev - 1;
                clearInterval(interval);
                return 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [countDown]);



    return (
        <div className="group cursor-pointer">

            <div className="border border-zinc-50 md:border-zinc-100 min-h-82 rounded-xl overflow-hidden">
                <img className='' src={product.img} alt="" />
            </div>

            <div className='-mt-50 group-hover:-translate-y-1 transition-all duration-500  relative w-11/12 mx-auto z-20  '>

                <div className="grid grid-cols-4 gap-3 mx-2
                 mb-5">
                    <div className="bg-white text-center p-3 rounded-md">
                        <h1 className="text-emerald-500 text-lg md:text-3xl ">{product?.days}</h1>
                        <p className="text-zinc-700 text-sm md:text-base">Days</p>
                    </div>
                    <div className="bg-white text-center p-3 rounded-md">
                        <h1 className="text-emerald-500 text-lg md:text-3xl ">{product?.hours}</h1>
                        <p className="text-zinc-700 text-sm md:text-base">Hours</p>
                    </div>
                    <div className="bg-white text-center p-3 rounded-md">
                        <h1 className="text-emerald-500 text-lg md:text-3xl ">{minute}</h1>
                        <p className="text-zinc-700 text-sm md:text-base">Mins</p>
                    </div>
                    <div className="bg-white text-center p-3 rounded-md">
                        <h1 className="text-emerald-500 text-lg md:text-3xl ">{countDown}</h1>
                        <p className="text-zinc-700 text-sm md:text-base">Sec</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg p-6 rounded-md ">
                    <div className="flex flex-col mb-1">
                        <Link to={`/product/${product.path}`}
                            className=" my-1 leading-none hover:text-emerald-500 font-family-primary font-bold transition-colors md:text-[17px] text-zinc-700 text-sm">{product?.title}</Link>
                    </div>
                    <div className="flex text-orange-300 text-sm">
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf />
                    </div>
                    <h1 className="mt-2 text-xs">By <span><a href="#"
                        className="text-emerald-500 hover:-translate-x-1 hover:-translate-y-1 hover:text-orange-400 text-xs md:text-sm">{product?.by}</a></span>
                    </h1>
                    <div className="flex justify-between items-center mt-3 font-family-primary">
                        <div className="flex items-center  gap-1">
                            <h1 className="text-emerald-500  font-bold md:text-xl text-lg">${product?.price}</h1>
                            <h1 className="text-sm text-zinc-400 line-through font-bold ">${product?.prevPrice}</h1>
                        </div>
                            <button onClick={() => addToCart(product.path)} className="bg-emerald-100 hover:bg-emerald-500 text-emerald-600 hover:text-white font-semibold px-4 lg:px-6 md:py-2 py-1 md:rounded-md rounded-sm flex justify-between items-center gap-1 hover:-translate-y-1 transition duration-300 text-sm cursor-pointer active:scale-95">
                            <BsCart3 />
                            <h1 className="">Add</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealsProduct