import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import { Link } from 'react-router-dom'

const PageModalsContainer = () => {
     const { pageModal, setPageModal } = useContext(AuthContext)
    return (
        <>
            <div onMouseEnter={() => setPageModal(false)} className="relative">
                <div onMouseLeave={() => setPageModal(true)} className={`absolute  ${pageModal ? "opacity-0 -z-30  top-12" : "opacity-100 z-30  top-8 "} right-28 bg-white w-50 p-5 flex flex-col items-baseline gap-2 border space-y-1 border-zinc-200 rounded-md shadow-md text-sm duration-300 transition-all font-family-primary text-zinc-500`}>
                    
                    <Link to={"/about"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all ">About Us </Link>
                    <Link to={"/account/overview"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> My Account</Link>
                    <Link to={"/login"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all ">Login </Link>
                    <Link to={"/signup"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Register</Link>
                    <Link to={"/forgotPassword"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Forgot password</Link> 
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Purchase Guide</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Privacy Policy</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> Terms of Service</Link>
                    <Link to={"/404"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all "> 404 Page</Link>
                </div>
            </div>
        </>
    )
}

export default PageModalsContainer