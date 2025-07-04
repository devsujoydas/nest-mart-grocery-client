import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [navslide, setNavSlide] = useState(true)
    const [megaModal, setMegaModal] = useState(true );
    const [pageModal, setPageModal] = useState(true);
    const [vendormodal, setVendormodal] = useState(true);
    const [products, setProducts] = useState([]);
    const [provideData, setProvideData] = useState([]);


    useEffect(() => {
        fetch("./product.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        fetch("./provide.json")
            .then(res => res.json())
            .then(data => setProvideData(data))
    }, [])



    const value = {
        navslide, setNavSlide,
        megaModal, setMegaModal,
        pageModal, setPageModal,
        products, setProducts,
        vendormodal, setVendormodal,
        provideData, setProvideData
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider