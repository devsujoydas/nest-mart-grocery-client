import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [navslide, setNavSlide] = useState(true)
    const [megaModal, setMegaModal] = useState(true);
    const value = {
        navslide,
        setNavSlide,
        megaModal,
        setMegaModal
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider