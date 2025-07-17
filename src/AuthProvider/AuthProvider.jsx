import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [navslide, setNavSlide] = useState(true)
    const [megaModal, setMegaModal] = useState(true);
    const [pageModal, setPageModal] = useState(true);
    const [vendormodal, setVendormodal] = useState(true);

    const [user, setUser] = useState()
    const notify = () => toast('Add to Cart Successfully');

    const [products, setProducts] = useState([]);
    const [provideData, setProvideData] = useState([]);
    const [blogsData, setBlogsData] = useState([]);
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setUser(1)
        }, 400);
    }, [])


    useEffect(() => {
        axios.get('/vendors.json')
            .then(res => setVendors(res.data))
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




    const value = {
        navslide, setNavSlide,
        megaModal, setMegaModal,
        pageModal, setPageModal,
        products, setProducts,
        vendormodal, setVendormodal,
        provideData, setProvideData,
        blogsData, setBlogsData,
        vendors, setVendors,
        user, setUser,
        notify
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider