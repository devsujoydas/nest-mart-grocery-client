
import { NavLink, Outlet } from 'react-router-dom'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import "./Account.css"
import { useState } from 'react'

const Account = () => {
  const accBtnStyle = 'border group border-zinc-200 cursor-pointer hover:border-zinc-300 rounded-lg md:text-[16px] text-xs w-full font-bold text-zinc-700 py-3 md:py-3.5 flex items-center gap-2 px-5'
  const accbtnText = 'group-hover:text-yellow-500 transition-all duration-300'

  const [path2, setPath2] = useState("")


  return (
    <div>
      <NavigationPage path1={"Account information"} path2={path2} />

      <div className=' max-w-screen-2xl md:mt-10 mt-5 2xl:mx-auto md:mx-10 mx-3 grid md:grid-cols-4 gap-5 lg:gap-14'>
        {/* left btns */}
        <div className='md:col-span-1 font-family-primary relative'>
          <div className=' grid gap-2 md:gap-3 sticky top-0 font-family-primary'>
            <NavLink onClick={() => setPath2("Overview")} to={"/account/overview"} className={accBtnStyle}><p id='accBtn' className={accbtnText}>Overview</p></NavLink>
            <NavLink onClick={() => setPath2("Orders")} to={"/account/orders"} className={accBtnStyle}><p id='accBtn' className={accbtnText}>Orders</p></NavLink>
            <NavLink onClick={() => setPath2("Orders")} to={"/account/reviews"} className={accBtnStyle}><p id='accBtn' className={accbtnText}>Reviews</p></NavLink>
            <NavLink onClick={() => setPath2("Addresses")} to={"/account/address"} className={accBtnStyle}><p id='accBtn' className={accbtnText}>Addresses</p></NavLink>
            <NavLink onClick={() => setPath2("Account Settings")} to={"/account/accountSettings"} className={accBtnStyle}><p id='accBtn' className={accbtnText}>Account Settings</p></NavLink>
            <button onClick={() => setPath2("Become a Vendor")} className={accBtnStyle}><p id='accBtn' className={accbtnText}>Become a Vendor</p></button>
            <button className={accBtnStyle}><p id='accBtn' className={accbtnText}>Logout</p></button>
          </div>
        </div>

        <div className='md:col-span-3'>
          <Outlet />
        </div>
      </div>

      <StayHome />
      <Servicess />

    </div>
  )
}

export default Account