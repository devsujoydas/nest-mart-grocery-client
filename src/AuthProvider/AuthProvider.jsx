import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [navslide, setNavSlide] = useState(true)
    const [megaModal, setMegaModal] = useState(true);
    const [pageModal, setPageModal] = useState(true);
    const [vendormodal, setVendormodal] = useState(true);
    const [products, setProducts] = useState([]);
    const [provideData, setProvideData] = useState([]);
    const [blogsData, setBlogsData] = useState([]);
    const [user, setUser] = useState()

    useEffect(() => {
        setTimeout(() => {
            setUser(1)
        }, 300);
    }, [])


    useEffect(() => {
        axios.get('/product.json')
            .then(res => {
                setProducts(res.data)
            })
    }, [])

    // if (products.length >= 1) {
    //     console.log(products)
    // }

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
        user, setUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider