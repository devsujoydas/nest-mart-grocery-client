import NavigationPage from '../../Shared/NavigationPage/NavigationPage';
import Servicess from '../../Components/Servicess/Servicess';
import StayHome from '../../Components/StayHome/StayHome';
import CartProduct from './CartProduct';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext, useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';

const SHIPPING_COST = 5.0;

const YourCart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartIds, setCartIds] = useState([]);
  // New: Track quantity for each product in cart
  const [cartQuantities, setCartQuantities] = useState({});

  const { getCartIds, removeFromCart } = useContext(AuthContext);

  // Fetch products on mount
  useEffect(() => {
    let isMounted = true;
    axios.get('/product.json')
      .then(res => {
        if (isMounted) {
          setProducts(res.data || []);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
    return () => { isMounted = false; };
  }, []);

  // Sync cartIds with AuthContext
  useEffect(() => {
    const ids = getCartIds();
    setCartIds(ids);
    // Initialize quantities to 1 for new cart items
    setCartQuantities(prev => {
      const updated = { ...prev };
      ids.forEach(id => {
        if (!(id in updated)) {
          updated[id] = 1;
        }
      });
      // Remove quantities for items no longer in cart
      Object.keys(updated).forEach(id => {
        if (!ids.includes(id)) {
          delete updated[id];
        }
      });
      return updated;
    });
    // eslint-disable-next-line
  }, [getCartIds]);

  // Handler to remove product from cart and update cartIds state
  const handleRemoveFromCart = useCallback((productPath) => {
    removeFromCart(productPath);
    // After removing, update cartIds state to trigger re-render
    setCartIds(getCartIds());
    setCartQuantities(prev => {
      const updated = { ...prev };
      delete updated[productPath];
      return updated;
    });
  }, [removeFromCart, getCartIds]);

  // Handler to update quantity for a product
  const handleQuantityChange = useCallback((productPath, newQty) => {
    setCartQuantities(prev => ({
      ...prev,
      [productPath]: newQty
    }));
  }, []);

  // Get cart product objects
  const cartProducts = useMemo(
    () =>
      cartIds
        .map(id => products.find(product => product && product.path === id))
        .filter(Boolean),
    [cartIds, products]
  );

  // Calculate subtotal based on quantities
  const subTotal = useMemo(() => {
    return cartProducts.reduce((acc, product) => {
      const qty = cartQuantities[product.path] || 1;
      return acc + (product.price || 0) * qty;
    }, 0);
  }, [cartProducts, cartQuantities]);

  // Cart count
  const cartCount = cartProducts.length;

  const btnStyle =
    "w-full bg-emerald-600 text-white cursor-pointer rounded-full py-3 font-semibold hover:bg-yellow-500 active:scale-95 duration-300 transition-all";

  return (
    <div>
      <NavigationPage path1={"Shop"} path2={"Cart"} />

      <div className="max-w-screen-2xl mx-auto px-3 md:px-6 lg:px-8 md:my-12 my-5 font-family-primary">
        <h1 className="font-bold text-3xl md:text-5xl text-zinc-700">Your Cart</h1>
        <p className="font-semibold text-zinc-500 mt-2 text-sm md:text-base">
          There {cartCount === 1 ? "is" : "are"} <span className="text-emerald-500">{cartCount}</span> product{cartCount === 1 ? "" : "s"} in your cart
        </p>

        <div className="grid lg:grid-cols-3 mt-6 md:gap-6 gap-4">

          {/* Cart Left */}
          <div className="lg:col-span-2 w-full overflow-x-auto border border-zinc-200 ">
            <table className="w-full min-w-[640px] text-left table-auto shadow-sm ">
              <thead className="bg-zinc-200 text-zinc-600">
                <tr>
                  <th className="md:p-3 p-2 text-sm md:text-base">Product</th>
                  <th className="md:p-3 p-2 text-sm md:text-base">Unit Price</th>
                  <th className="md:p-3 p-2 text-sm md:text-base">Quantity</th>
                  <th className="md:p-3 p-2 text-sm md:text-base">Subtotal</th>
                  <th className="md:p-3 p-2 text-sm md:text-base">Remove</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8 text-zinc-400">Loading...</td>
                  </tr>
                ) : cartProducts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8 text-zinc-400">Your cart is empty.</td>
                  </tr>
                ) : (
                  cartProducts.map(product => (
                    <CartProduct
                      key={product.path}
                      product={product}
                      onRemove={handleRemoveFromCart}
                      quantity={cartQuantities[product.path] || 1}
                      onQuantityChange={handleQuantityChange}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Cart Right */}
          <div className="space-y-6 text-zinc-700 font-montserrat w-full">

            {/* Shipping */}
            <div className="flex flex-col gap-5 border border-zinc-300 p-5 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-black">Calculated Shipping</h2>

              {/* Country Select */}
              <select className="w-full px-4 py-3 bg-gray-100 rounded-full outline-none text-sm md:text-base" defaultValue="">
                <option value="" disabled>Country</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="america">America</option>
              </select>

              {/* State & Zip */}
              <div className="flex flex-col sm:flex-row gap-3">
                <select className="w-full px-4 py-3 bg-gray-100 rounded-full outline-none text-sm md:text-base" defaultValue="">
                  <option value="" disabled>State / City</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="newyork">New York</option>
                </select>
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full px-4 py-3 border rounded-full outline-none text-sm placeholder-gray-400"
                />
              </div>

              <button className={btnStyle}>Update</button>
            </div>

            {/* Coupon Code */}
            <div className="flex flex-col gap-4 border border-zinc-300 p-5 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-black">Coupon Code</h2>
              <input
                type="text"
                placeholder="Enter your coupon"
                className="w-full px-4 py-3 border rounded-full outline-none text-sm md:text-base placeholder-gray-400"
              />
              <button className={btnStyle}>Apply Coupon</button>
            </div>

            {/* Cart Totals */}
              <form action="">
              <div className="flex flex-col gap-4 border border-zinc-300 p-5 rounded-lg shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-black">Cart Total</h2>
                <hr />
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span>Subtotal</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span>Shipping</span>
                  <span>${SHIPPING_COST.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between items-center text-base md:text-lg font-semibold text-black">
                  <span>Total</span>
                  <span>${(subTotal + SHIPPING_COST).toFixed(2)}</span>
                </div>
                <hr />
                <button className={btnStyle} disabled={cartCount === 0}>Proceed to Checkout</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <StayHome />
      <Servicess />
    </div>
  );
};

export default YourCart;
