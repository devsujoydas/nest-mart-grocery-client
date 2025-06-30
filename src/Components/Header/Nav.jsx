import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
const Nav = () => {
const navBtnStyle = "hover:text-emerald-500 md:active:scale-95 transition-all flex justify-between md:justify-normal items-center gap-1 font-bold md:border-none border-b border-zinc-200 md:pb-0 pb-3"

    return (
        <div className="flex md:items-center md:flex-row flex-col md:gap-8 gap-3 font-family-primary md:text-lg text-sm ">
            <Link to={"/"} className={navBtnStyle}>Home <span><IoIosArrowDown className="-mb-1" /></span></Link>
            <Link to={"/"} className={navBtnStyle}>About <span className="md:hidden"><IoIosArrowDown className="-mb-1" /></span></Link>
            <Link to={"/"} className={navBtnStyle}>Shop <span><IoIosArrowDown className="-mb-1" /></span></Link>
            <Link to={"/"} className={navBtnStyle}>Vendor<span><IoIosArrowDown className="-mb-1" /></span></Link>
            <Link to={"/"} className={navBtnStyle}>Mega menu  <IoIosArrowDown className="-mb-1" /></Link>
            <Link to={"/"} className={navBtnStyle}>Blog <span><IoIosArrowDown className="-mb-1" /></span></Link>
            <Link to={"/"} className={"hover:text-emerald-500 active:scale-95 transition-all flex justify-between md:justify-normal items-center gap-1 font-bold md:pb-0 pb-3"}>Contact <span className="md:hidden"><IoIosArrowDown className="-mb-1" /></span></Link>
        </div>
    )
}

export default Nav