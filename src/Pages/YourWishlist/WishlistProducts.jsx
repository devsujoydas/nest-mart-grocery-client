import { useContext } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { BsTrash, BsCart3 } from "react-icons/bs";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const WishlistProducts = ({ product, onRemove }) => {
    // product: {img1, title, ratings, price, path, ...}
    // onRemove: function to remove from wishlist
    const { addToCart, getCartIds } = useContext(AuthContext);

    const handleAddToCart = () => {
        if (!product || !product.path) return;
        const cartIds = getCartIds();
        // If not already in cart, add to cart and remove from wishlist
        if (!cartIds.includes(product.path)) {
            addToCart(product.path);
            if (onRemove) {
                onRemove(product.path);
            }
        }
    };

    const handleRemove = () => {
        if (onRemove) {
            onRemove(product.path);
        }
    };

    return (
        <tr className="border-b border-zinc-200 text-base md:text-lg font-montserrat text-zinc-700">
            {/* Product Info */}
            <td className="md:p-4 p-2 flex gap-4 items-center">
                <div className="w-26 h-26 border border-zinc-200 rounded-lg overflow-hidden">
                    <Link to={`/products/${product.path}`}>
                    <img
                        src={product.img1}
                        alt={product.title}
                        className="object-cover w-full h-full"
                    />
                    </Link>
                </div>
                <div>
                    <Link to={`/products/${product.path}`}>
                        <h2 className="font-semibold hover:text-yellow-500 transition duration-300 cursor-pointer text-xs md:text-[16px]">
                            {product.title}
                        </h2>
                    </Link>
                    <div className="flex items-center gap-1 mt-2 text-orange-300 text-sm">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                        <span className="text-zinc-600 ml-2 text-xs md:text-[16px]">
                            ({product.ratings})
                        </span>
                    </div>
                </div>
            </td>

            {/* Price */}
            <td className="md:p-4 p-2 font-bold md:text-xl text-zinc-700">
                ${product.price}
            </td>

            {/* Stock Status */}
            <td className="md:p-4 p-2">
                <h1 className="text-xs bg-emerald-100 text-emerald-600 rounded-sm px-2 py-1 w-fit font-bold">
                    In Stock
                </h1>
            </td>

            {/* Action: Add to Cart */}
            <td className="md:p-4 p-2 font-bold md:text-xl text-zinc-700">
                <button
                    onClick={handleAddToCart}
                    className="hover:bg-yellow-400 bg-emerald-500 text-white font-semibold px-3 lg:px-6 md:py-2 py-1 rounded-sm flex justify-between items-center gap-1 hover:-translate-y-1 active:scale-95 transition duration-300 md:text-sm text-xs cursor-pointer"
                >
                    <BsCart3 />
                    <h1 className="">Add</h1>
                </button>
            </td>

            {/* Remove Button */}
            <td className="md:p-4 p-2 text-center">
                <button
                    className="text-zinc-500 cursor-pointer hover:text-red-500 transition-all duration-300 md:text-xl"
                    title="Remove item"
                    onClick={handleRemove}
                >
                    <BsTrash />
                </button>
            </td>
        </tr>
    );
};

export default WishlistProducts;