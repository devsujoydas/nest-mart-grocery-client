import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [navslide, setNavSlide] = useState(true)
    const [megaModal, setMegaModal] = useState(true);
    const [pageModal, setPageModal] = useState(true);
    const value = {
        navslide,
        setNavSlide,
        megaModal,
        setMegaModal,
        pageModal, 
        setPageModal
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider