// LocalStorage utility functions for wishlist and cart management

// Helper to safely get an array from localStorage by key
function getArrayFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : [];
  } catch {
    // Remove corrupted data
    localStorage.removeItem(key);
    return [];
  }
}



// Wishlist functions

// Add productId to wishlist (no duplicates). Returns true if added, false if already present.
export function saveToWishlist(productId) {
  const key = 'wishlist';
  const wishlist = getArrayFromLocalStorage(key);
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem(key, JSON.stringify(wishlist));
    return true;
  }
  return false;
}
// Get all wishlist product IDs (array)
export function getStoredWishlist() {
  return getArrayFromLocalStorage('wishlist');
}
// Remove productId from wishlist
export function removeFromWishlist(productId) {
  const key = 'wishlist';
  let wishlist = getArrayFromLocalStorage(key);
  wishlist = wishlist.filter(id => id !== productId);
  localStorage.setItem(key, JSON.stringify(wishlist));
}



// Cart functions
// Add productId to cart (no duplicates). Returns true if added, false if already present.
export function saveToCart(productId) {
  const key = 'cart';
  const cart = getArrayFromLocalStorage(key);
  if (!cart.includes(productId)) {
    cart.push(productId);
    localStorage.setItem(key, JSON.stringify(cart));
    return true;
  }
  return false;
}
// Get all cart product IDs (array)
export function getStoredCart() {
  return getArrayFromLocalStorage('cart');
}
// Remove productId from cart
export function removeFromCart(productId) {
  const key = 'cart';
  let cart = getArrayFromLocalStorage(key);
  cart = cart.filter(id => id !== productId);
  localStorage.setItem(key, JSON.stringify(cart));
}

/*
Usage Example:

import { saveToWishlist, getStoredWishlist, removeFromWishlist, saveToCart, getStoredCart, removeFromCart } from 'src/utils/LocalStorage';

// Add to wishlist
const added = saveToWishlist(productId);
if (added) {
  notify('Added to wishlist!');
} else {
  notify('Product is already in wishlist!');
}

// Remove from wishlist
removeFromWishlist(productId);

// Add to cart
const addedCart = saveToCart(productId);
if (addedCart) {
  notify('Added to cart!');
} else {
  notify('Product is already in cart!');
}

// Remove from cart
removeFromCart(productId);

// Get all wishlist/cart IDs
const wishlistIds = getStoredWishlist();
const cartIds = getStoredCart();

// To get full product objects, filter your products array using these IDs.
*/
