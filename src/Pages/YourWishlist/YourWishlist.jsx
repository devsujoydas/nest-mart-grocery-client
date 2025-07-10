import NavigationPage from '../../Shared/NavigationPage/NavigationPage';
import Servicess from '../../Components/Servicess/Servicess';
import StayHome from '../../Components/StayHome/StayHome';
import WishlistProducts from './WishlistProducts';

const YourWishlist = () => {
  return (
    <div>
      <NavigationPage path1={"Shop"} path2={"Wishlist"} />

      <div className="max-w-screen-2xl mx-auto px-3 md:px-6 lg:px-8 md:my-12 my-5 font-family-primary">
        <h1 className="font-bold text-3xl md:text-5xl text-zinc-700">Your Wishlist</h1>
        <p className="font-medium text-zinc-500 mt-2 text-sm md:text-base">
          There are <span className="text-emerald-500 font-semibold">5</span> products in your wishlist
        </p>

        {/* Wishlist Table */}
        <div className="mt-6 overflow-x-auto border border-zinc-200">
          <table className="w-full min-w-[640px] text-left table-auto shadow-sm  rounded-md">
            <thead className="bg-zinc-200 text-zinc-600 text-sm md:text-base">
              <tr>
                <th className="md:p-4 p-2">Product</th>
                <th className="md:p-4 p-2">Price</th>
                <th className="md:p-4 p-2">Stock Status</th>
                <th className="md:p-4 p-2">Action</th>
                <th className="md:p-4 p-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              <WishlistProducts />
              <WishlistProducts />
              <WishlistProducts />
            </tbody>
          </table>
        </div>
      </div>

      <StayHome />
      <Servicess />
    </div>
  );
};

export default YourWishlist;
