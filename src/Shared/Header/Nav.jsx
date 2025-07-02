import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
const Nav = () => {
    const navBtnStyle = "hover:text-emerald-500 md:active:scale-95 cursor-pointer transition-all flex justify-between lg:justify-normal items-center gap-1 font-bold md:border-none border-b border-zinc-200 lg:pb-0 pb-3"

    const { navslide, setNavSlide, megaModal, setMegaModal } = useContext(AuthContext)

    return (
        <div className="flex lg:items-center lg:flex-row flex-col md:gap-8 gap-3 font-family-primary md:text-[15px] text-sm ">
            <button onClick={() => setNavSlide(true)} to={"/"} className={navBtnStyle}>Home <span><IoIosArrowDown className="-mb-1" /></span></button>
            <button onClick={() => setNavSlide(true)} to={"/"} className={navBtnStyle}>About <span className="md:hidden"><IoIosArrowDown className="-mb-1" /></span></button>
            <button onClick={() => setNavSlide(true)} to={"/"} className={navBtnStyle}>Shop <span><IoIosArrowDown className="-mb-1" /></span></button>
            <button onClick={() => setNavSlide(true)} to={"/"} className={navBtnStyle}>Vendor<span><IoIosArrowDown className="-mb-1" /></span></button>
            <button onClick={() => { setNavSlide(true) }} onMouseEnter={()=>setMegaModal(false)} onMouseLeave={()=>setMegaModal(true)} to={"/"} className={navBtnStyle}>Mega menu  <IoIosArrowDown className="-mb-1" /></button>
            <button onClick={() => setNavSlide(true)} to={"/"} className={navBtnStyle}>Pages<span><IoIosArrowDown className="-mb-1" /></span></button>
            <button onClick={() => setNavSlide(true)} to={"/"} className={navBtnStyle}>Blog <span><IoIosArrowDown className="-mb-1" /></span></button>
            <button onClick={() => setNavSlide(true)} to={"/"} className={"hover:text-emerald-500 active:scale-95 transition-all flex justify-between md:justify-normal cursor-pointer items-center gap-1 font-bold md:pb-0 pb-3"}>Contact <span className="md:hidden"><IoIosArrowDown className="-mb-1" /></span></button>
        </div>
    )
}

export default Nav