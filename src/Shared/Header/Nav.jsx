import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
const Nav = () => {
    const navBtnStyle = "hover:text-emerald-500 md:active:scale-95 cursor-pointer transition-all flex justify-between lg:justify-normal items-center gap-1 font-bold lg:border-none border-b border-zinc-200 lg:pb-0 pb-3"

    const { setNavSlide, setMegaModal, setPageModal } = useContext(AuthContext)

    return (
        <div onClick={() => setNavSlide(true)} className="flex relative lg:items-center lg:flex-row flex-col md:gap-8 gap-3 font-family-primary md:text-[15px] text-sm ">

            <Link className={navBtnStyle}>Home </Link>

            <Link to={"/about"} className={navBtnStyle}>About <span className="md:hidden"><IoIosArrowDown className="-mb-1" /></span></Link>

            <Link to={"/products"} className={navBtnStyle}>Products <span className="md:hidden"><IoIosArrowDown className="-mb-1" /></span></Link>

            <Link to={"/stores"} className={navBtnStyle}>Stores <span className="md:hidden"><IoIosArrowDown className="-mb-1" /></span></Link>

            <button onMouseEnter={() => { setMegaModal(false) }} onMouseLeave={() => setMegaModal(true)} className={`${navBtnStyle} lg:flex hidden`}>Mega menu  <IoIosArrowDown className="-mb-1" /></button>

            <button onMouseEnter={() => { setPageModal(false) }} onMouseLeave={() => setPageModal(true)} className={`${navBtnStyle} lg:flex hidden`}>Pages<span><IoIosArrowDown className="-mb-1" /></span></button>

            <Link to={"/blogs"} className={navBtnStyle}>Blog <span className="md:hidden"><IoIosArrowDown className="-mb-1" /></span></Link>

            <Link to={"/contact"} className={"hover:text-emerald-500 active:scale-95 transition-all flex justify-between md:justify-normal cursor-pointer items-center gap-1 font-bold md:pb-0 pb-3"}>Contact</Link>
            
        </div>
    )
}

export default Nav