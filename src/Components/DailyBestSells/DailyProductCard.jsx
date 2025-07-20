import { useContext, useState } from "react"
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoHeartOutline, IoHeart } from "react-icons/io5";


const DailyProducts = ({ product }) => {
    const [showImg, setShowImg] = useState(true)
    const [isWishlisted, setIsWishlisted] = useState(false)
    const { notify, addToWishlist, removeFromWishlist, addToCart, removeFromCart, getWishlistIds, getCartIds } = useContext(AuthContext)


    return (

        <div onMouseEnter={() => setShowImg(false)} onMouseLeave={() => setShowImg(true)} className="text-left w-full ">
            <div className="border border-zinc-200 w-full relative overflow-hidden md:p-4 p-2 md:pt-0 pt-4 lg:p-6 md:rounded-2xl rounded-xl  ">

                <span className="bg-emerald-600  text-white text-xs px-4 md:py-2 py-1 rounded-br-2xl z-20 absolute top-0 left-0">{product.status}</span>

                <div className="2xl:h-58  overflow-hidden relative md:mb-3 rounded-md cursor-pointer ">
                    <Link to={`/products/${product.path}`}>
                        <div className={`w-full h-full ${showImg ? 'opacity-100 z-10 transition-all duration-500' : 'opacity-0 z-0 transition-all duration-500'}`}>
                            <img className="w-full" src={product.img1} alt="" />
                        </div>
                    </Link>
                    {/* Wishlist Button */}
                    <div className={`absolute top-0 w-full h-full ${showImg ? 'opacity-0 z-0 transition-all duration-500' : 'opacity-100 z-10 transition-all duration-500'}`}>
                        <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                            style={{ backgroundImage: `url(${product.img2})` }}
                        >
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsWishlisted(!isWishlisted);
                                    isWishlisted ? removeFromWishlist(product.path) : addToWishlist(product.path);
                                }}
                                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-600 hover:text-red-500 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 cursor-pointer"
                            >
                                {isWishlisted ? (
                                    <IoHeart className="w-5 h-5 text-red-500" />
                                ) : (
                                    <IoHeartOutline className="w-5 h-5" />
                                )}
                            </button>
                            <Link
                                to={`/products/${product.path}`}
                                className="absolute inset-0"
                                tabIndex={-1}
                                aria-label={product.title}
                            >
                                {/* Empty link to cover the image for navigation, but not the wishlist button */}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mb-1">
                    <a href="#"
                        className="text-gray-400 text-xs text-left hover:text-emerald-400">{product.categories}</a>

                    <Link to={`/products/${product.path}`} className="text-left font-bold my-1 leading-none hover:text-emerald-500 transition-colors md:text-[16px] text-sm">{product.title}</Link>
                </div>

                <div className="flex text-orange-300 md:text-sm text-xs">
                    <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                </div>

                <div className="grid md:gap-2 gap-1">
                    <h1 className="md:mt-2 mt-1 text-xs">By <a href="#"
                        className="text-emerald-500 hover:-translate-x-1 hover:-translate-y-1 hover:text-orange-400"><span>{product.by}</span></a>
                    </h1>
                    <h1 className="text-emerald-500 font-semibold md:text-lg text-sm">${product.price}</h1>
                </div>

                <div className=" mt-1">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="bg-emerald-600 text-xs font-medium text-blue-100 text-center md:p-1 p-0.5 leading-none rounded-full" style={{ width: '45%' }}></div>
                    </div>

                    <p className="text-xs mt-2">Sold: {product.productDetails.sold}/{product.productDetails.quantity}</p>

                    <button onClick={() => addToCart(product.path)}
                        className="bg-emerald-500 active:bg-orange-300 hover:bg-orange-300 cursor-pointer active:scale-95 text-white hover:text-white font-semibold w-full md:py-3 py-1.5 rounded-md flex justify-center items-center gap-1 hover:-translate-y-1 duration-500 transition md:mt-3 mt-1">
                        <BsCart3 />
                        <h1 className="text-xs">Add To Cart</h1>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default DailyProducts