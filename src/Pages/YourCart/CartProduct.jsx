
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
  
const CartProduct = ({ product, onRemove, quantity = 1, onQuantityChange }) => {
  // Handlers for quantity change
  const handleDecrease = () => {
    if (quantity > 1 && onQuantityChange) {
      onQuantityChange(product.path, quantity - 1);
    }
  };
  const handleIncrease = () => {
    if (onQuantityChange) {
      onQuantityChange(product.path, quantity + 1);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(product.path);
    }
  };

  // Calculate subtotal based on quantity
  const subTotal = ((product.price || 0) * quantity).toFixed(2);

  return (
    <tr className="border-b border-zinc-200 text-base md:text-lg font-montserrat text-zinc-700">
      {/* Product Info */}
      <td className="md:p-4 p-2 flex gap-4 items-center">
        <div className="w-26 h-26 border border-zinc-200 rounded-lg overflow-hidden">
          <Link to={`/products/${product.path}`}>
            <img
              src={product.img1}
              alt="product"
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

      {/* Unit Price */}
      <td className="md:p-4 p-2 font-bold md:text-xl text-zinc-700">
        ${product.price}
      </td>

      {/* Quantity Control */}
      <td className="md:p-4 p-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrease}
            disabled={quantity === 1}
            className={`transition-all duration-300 active:scale-95 ${quantity === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-zinc-700 hover:text-yellow-500"
              }`}
          >
            <TiMinus />
          </button>
          <span className="w-10 text-center border border-zinc-300 rounded-md py-1">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="text-zinc-700 hover:text-yellow-500 transition-all duration-300 active:scale-95"
          >
            <FaPlus />
          </button>
        </div>
      </td>

      {/* Subtotal */}
      <td className="md:p-4 p-2 font-bold text-center md:text-xl text-zinc-700">
        ${subTotal}
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

export default CartProduct;
