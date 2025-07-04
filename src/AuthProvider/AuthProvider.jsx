import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [navslide, setNavSlide] = useState(true)
    const [megaModal, setMegaModal] = useState(true);
    const [pageModal, setPageModal] = useState(true);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("./product.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    const value = {
        navslide,
        setNavSlide,
        megaModal,
        setMegaModal,
        pageModal,
        setPageModal,
        products, setProducts
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider