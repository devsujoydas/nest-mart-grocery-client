import NavigationPage from '../../Shared/NavigationPage/NavigationPage';
import Servicess from '../../Components/Servicess/Servicess';
import StayHome from '../../Components/StayHome/StayHome';
import { useContext, useEffect, useState, useMemo, useCallback } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import WishlistProducts from './WishlistProducts';

const YourWishlist = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlistIds, setWishlistIds] = useState([]);

  const { getWishlistIds, removeFromWishlist } = useContext(AuthContext);

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

  // Sync wishlistIds with AuthContext
  useEffect(() => {
    setWishlistIds(getWishlistIds());
    // eslint-disable-next-line
  }, [getWishlistIds]);

  // Handler to remove product from wishlist and update wishlistIds state
  const handleRemoveFromWishlist = useCallback((productPath) => {
    removeFromWishlist(productPath);
    // After removing, update wishlistIds state to trigger re-render
    setWishlistIds(getWishlistIds());
  }, [removeFromWishlist, getWishlistIds]);

  // Get wishlist product objects
  const wishlistProducts = useMemo(
    () =>
      wishlistIds
        .map(id => products.find(product => product && product.path === id))
        .filter(Boolean),
    [wishlistIds, products]
  );

  // Wishlist count
  const wishlistCount = wishlistProducts.length;

  return (
    <div>
      <NavigationPage path1={"Shop"} path2={"Wishlist"} />

      <div className="max-w-screen-2xl mx-auto px-3 md:px-6 lg:px-8 md:my-12 my-5 font-family-primary">
        <h1 className="font-bold text-3xl md:text-5xl text-zinc-700">Your Wishlist</h1>
        <p className="font-medium text-zinc-500 mt-2 text-sm md:text-base">
          There {wishlistCount === 1 ? "is" : "are"} <span className="text-emerald-500 font-semibold">{wishlistCount}</span> product{wishlistCount === 1 ? "" : "s"} in your wishlist
        </p>

        {/* Wishlist Table */}
        <div className="mt-6 overflow-x-auto border border-zinc-200">
          <table className="w-full min-w-[640px] text-left table-auto shadow-sm rounded-md">
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
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-zinc-400">Loading...</td>
                </tr>
              ) : wishlistProducts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-zinc-400">Your wishlist is empty.</td>
                </tr>
              ) : (
                wishlistProducts.map(product => (
                  <WishlistProducts
                    key={product.path}
                    product={product}
                    onRemove={handleRemoveFromWishlist}
                  />
                ))
              )}
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
