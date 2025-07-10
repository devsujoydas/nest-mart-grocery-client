import { useEffect, useState } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";


const WishlistProducts = () => {

    const [price] = useState(2.0);
    const [qty, setQty] = useState(1);
    const [subTotal, setSubTotal] = useState(price);

    useEffect(() => {
        setSubTotal((qty * price).toFixed(2));
    }, [qty, price]);

    const handleDecrease = () => {
        if (qty > 1) setQty(qty - 1);
    };

    const handleIncrease = () => {
        setQty(qty + 1);
    };



    return (
        <tr className="border-b border-zinc-200 text-base md:text-lg font-montserrat text-zinc-700">
            {/* Product Info */}
            <td className="md:p-4 p-2 flex gap-4 items-center">
                <div className="w-26 h-26 border border-zinc-200 rounded-lg overflow-hidden">
                    <img
                        src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg"
                        alt="product"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <h2 className="font-semibold hover:text-yellow-500 transition duration-300 cursor-pointer text-xs md:text-[16px]">
                        Field Roast Chao Cheese Creamy Original
                    </h2>
                    <div className="flex items-center gap-1 mt-2 text-orange-300 text-sm">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                        <span className="text-zinc-600 ml-2 text-xs md:text-[16px]">(4.0)</span>
                    </div>
                </div>
            </td>

            {/* Unit Price */}
            <td className="md:p-4 p-2 font-bold md:text-xl text-zinc-700">${price}</td>

            {/* Quantity Control */}
            <td className="md:p-4 p-2">
                <h1 className="text-xs bg-emerald-100 text-emerald-600 rounded-sm  px-2  py-1 w-fit font-bold">In Stock</h1>
            </td>

            {/* Subtotal */}
            <td className="md:p-4 p-2 font-bold md:text-xl text-zinc-700">

                <button className="hover:bg-yellow-400 bg-emerald-500 text-white font-semibold px-3 lg:px-6 md:py-2 py-1 rounded-sm flex justify-between items-center gap-1 hover:-translate-y-1 active:scale-95 transition duration-300 md:text-sm text-xs cursor-pointer">
                    <BsCart3 />
                    <h1 className="">Add</h1>
                </button>
            </td>

            {/* Remove Button */}
            <td className="md:p-4 p-2 text-center">
                <button
                    className="text-zinc-500 cursor-pointer hover:text-red-500 transition-all duration-300 md:text-xl"
                    title="Remove item"
                >
                    <BsTrash />
                </button>
            </td>
        </tr>
    )
}

export default WishlistProducts