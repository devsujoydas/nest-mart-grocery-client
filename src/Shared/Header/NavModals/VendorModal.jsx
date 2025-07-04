import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import { Link } from 'react-router-dom'

const VendorModal = () => {

    const { vendormodal, setVendormodal } = useContext(AuthContext)
    
    return (
        <>
            <div onMouseEnter={() => setVendormodal(false)} className="relative">
                <div onMouseLeave={() => setVendormodal(true)} className={`absolute  ${vendormodal ? "opacity-0 -z-30  top-12" : "opacity-100 z-30  top-8 "} right-80 bg-white w-50 p-5 flex flex-col items-baseline gap-2 border space-y-1 border-zinc-200 rounded-md shadow-md text-sm duration-300 transition-all font-family-primary text-zinc-500`}>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all ">Vendors Grid</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all ">Vendors List</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all ">Vendor Details 01</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all ">Vendor Details 02</Link>
                    <Link to={"/"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all ">Vendor Dashboard</Link>
                    <Link to={"/vendor-guide"} className="font-semibold hover:text-emerald-600 cursor-pointer duration-300 transition-all ">Vendor Guide</Link>
                </div>
            </div>
        </>
    )
}

export default VendorModal