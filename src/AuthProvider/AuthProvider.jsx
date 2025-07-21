import axios from 'axios';
import React, { createContext, useEffect, useState, useCallback } from 'react'
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, EmailAuthProvider, linkWithCredential } from 'firebase/auth'



export const AuthContext = createContext();

import {
    saveToWishlist,
    getStoredWishlist,
    removeFromWishlist as removeFromWishlistLS,
    saveToCart,
    getStoredCart,
    removeFromCart as removeFromCartLS
} from '../utils/LocalStorage';
import auth from '../Firebase/firebase.config';

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

    useEffect(() => {
        updateCounts();
    }, [updateCounts]);
    const addToWishlist = (path) => {
        const added = saveToWishlist(path);
        if (added) {
            notify('Added to wishlist!');
        } else {
            notify('Product is already in wishlist!');
        }
        updateCounts();
    };
    const removeFromWishlist = (path) => {
        removeFromWishlistLS(path);
        notify('Removed from wishlist!');
        updateCounts();
    };
    const addToCart = (path) => {
        const addedCart = saveToCart(path);
        if (addedCart) {
            notify('Added to cart!');
        } else {
            notify('Product is already in cart!');
        }
        updateCounts();
    };
    const removeFromCart = (path) => {
        removeFromCartLS(path);
        updateCounts();
    };
    const getWishlistIds = () => {
        return getStoredWishlist();
    };
    const getCartIds = () => {
        return getStoredCart();
    };




    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signOutUser = async () => {
        setLoading(true)
        try {
            await signOut(auth);;
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);



    const value = {
        navslide, setNavSlide, megaModal, setMegaModal, pageModal, setPageModal, products, setProducts, vendormodal, setVendormodal, provideData, setProvideData, blogsData, setBlogsData, stores, setStores, loading, setLoading, notify, addToWishlist, removeFromWishlist, addToCart, removeFromCart, getWishlistIds, getCartIds, wishlistCount, cartCount, updateCounts,
        signUpUser, logInUser, signInWithGoogle, signOutUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;