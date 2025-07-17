import NavigationPage from '../../Shared/NavigationPage/NavigationPage';
import Servicess from '../../Components/Servicess/Servicess';
import StayHome from '../../Components/StayHome/StayHome';
import CartProduct from './CartProduct';

const YourCart = () => {

  const btnStyle =
    "w-full bg-emerald-600 text-white rounded-full py-3 font-semibold hover:bg-yellow-500 active:scale-95 duration-300 transition-all";

  return (
    <div>
      <NavigationPage path1={"Shop"} path2={"Cart"} />

      <div className="max-w-screen-2xl mx-auto px-3 md:px-6 lg:px-8 md:my-12 my-5 font-family-primary">
        <h1 className="font-bold text-3xl md:text-5xl text-zinc-700">Your Cart</h1>
        <p className="font-semibold text-zinc-500 mt-2 text-sm md:text-base">
          There are <span className="text-emerald-500">3</span> products in your cart
        </p>

        <div className="grid lg:grid-cols-3 mt-6 md:gap-6 gap-4">

          {/* Cart Left */}
          <div className="lg:col-span-2 w-full overflow-x-auto  border border-zinc-200 ">
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
                <CartProduct />
                <CartProduct />
                <CartProduct />
              </tbody>
            </table>
          </div>

          {/* Cart Right */}
          <div className="space-y-6 text-zinc-700 font-montserrat w-full">

            {/* Shipping */}
            <div className="flex flex-col gap-5 border border-zinc-300 p-5 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-black">Calculated Shipping</h2>

              {/* Country Select */}
              <select className="w-full px-4 py-3 bg-gray-100 rounded-full outline-none text-sm md:text-base">
                <option disabled selected>Country</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="america">America</option>
              </select>

              {/* State & Zip */}
              <div className="flex flex-col sm:flex-row gap-3">
                <select className="w-full px-4 py-3 bg-gray-100 rounded-full outline-none text-sm md:text-base">
                  <option disabled selected>State / City</option>
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
            <div className="flex flex-col gap-4 border border-zinc-300 p-5 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-black">Cart Total</h2>
              <hr />
              <div className="flex justify-between items-center text-sm md:text-base">
                <span>Subtotal</span>
                <span>$120.00</span>
              </div>
              <hr />
              <div className="flex justify-between items-center text-sm md:text-base">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <hr />
              <div className="flex justify-between items-center text-base md:text-lg font-semibold text-black">
                <span>Total</span>
                <span>$125.00</span>
              </div>
              <hr />
              <button className={btnStyle}>Proceed to Checkout</button>
            </div>

          </div>
        </div>
      </div>

      <StayHome />
      <Servicess />
    </div>
  );
};

export default YourCart;
