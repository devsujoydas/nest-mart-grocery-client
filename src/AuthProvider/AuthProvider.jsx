import axios from 'axios';
import React, { createContext, useEffect, useState, useCallback } from 'react'
import toast from 'react-hot-toast';

export const AuthContext = createContext();

import {
    saveToWishlist,
    getStoredWishlist,
    removeFromWishlist as removeFromWishlistLS,
    saveToCart,
    getStoredCart,
    removeFromCart as removeFromCartLS
} from '../utils/LocalStorage';

const AuthProvider = ({ children }) => {

    const [navslide, setNavSlide] = useState(true);
    const [megaModal, setMegaModal] = useState(true);
    const [pageModal, setPageModal] = useState(true);
    const [vendormodal, setVendormodal] = useState(true);

    const [loading, setLoading] = useState(true);
    const notify = (msg) => toast.success(msg);

    const [products, setProducts] = useState([]);
    const [provideData, setProvideData] = useState([]);
    const [blogsData, setBlogsData] = useState([]);
    const [stores, setStores] = useState([]);

    // Centralized cart and wishlist length state
    const [wishlistCount, setWishlistCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const updateCounts = useCallback(() => {
        const wishlistArr = getStoredWishlist();
        const cartArr = getStoredCart();
        setWishlistCount(Array.isArray(wishlistArr) ? wishlistArr.length : 0);
        setCartCount(Array.isArray(cartArr) ? cartArr.length : 0);
    }, []);

    const refreshLoading = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 400);
    };

    useEffect(() => {
        refreshLoading();
    }, []);
    useEffect(() => {
        axios.get('/stores.json')
            .then(res => setStores(res.data))
    }, [])
    useEffect(() => {
        axios.get('/product.json')
            .then(res => setProducts(res.data))
    }, [])
    useEffect(() => {
        axios.get('/provide.json')
            .then((res) => setProvideData(res.data))
    }, [])
    useEffect(() => {
        axios.get('/blog.json')
            .then((res) => setBlogsData(res.data))
    }, [])

    // On mount, initialize counts
    useEffect(() => {
        updateCounts();
    }, [updateCounts]);

    // Add to wishlist
    const addToWishlist = (path) => {
        const added = saveToWishlist(path);
        if (added) {
            notify('Added to wishlist!');
        } else {
            notify('Product is already in wishlist!');
        }
        updateCounts();
    };

    // Remove from wishlist
    const removeFromWishlist = (path) => {
        removeFromWishlistLS(path);
        notify('Removed from wishlist!');
        updateCounts();
    };

    // Add to cart
    const addToCart = (path) => {
        const addedCart = saveToCart(path);
        if (addedCart) {
            notify('Added to cart!');
        } else {
            notify('Product is already in cart!');
        }
        updateCounts();
    };
    // Remove from cart
    const removeFromCart = (path) => {
        removeFromCartLS(path);
        updateCounts();
    };

    // Get all wishlist/cart IDs
    const getWishlistIds = () => {
        return getStoredWishlist();
    };
    const getCartIds = () => {
        return getStoredCart();
    };

    const value = {
        navslide, setNavSlide,
        megaModal, setMegaModal,
        pageModal, setPageModal,
        products, setProducts,
        vendormodal, setVendormodal,
        provideData, setProvideData,
        blogsData, setBlogsData,
        stores, setStores,
        loading, setLoading,
        notify,
        addToWishlist,
        removeFromWishlist,
        addToCart,
        removeFromCart,
        getWishlistIds,
        getCartIds,
        wishlistCount,
        cartCount,
        updateCounts
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;