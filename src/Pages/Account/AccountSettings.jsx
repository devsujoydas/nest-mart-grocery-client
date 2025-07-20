import React from 'react'
import { BsTrash } from "react-icons/bs";


const AccountSettings = () => {

  const inputStyle = "focus:outline-emerald-500 outline-transparent transition-all duration-500 outline-1 w-full mt-1 border border-zinc-200 rounded-md px-4 py-2.5"


  return (
    <div className='grid gap-5'>
      {/* Profile Information */}
      <div className='border border-zinc-200 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-500 '>
        <div className='flex items-center gap-4 bg-zinc-100  p-3 md:p-5'>
          <div className='w-12 border border-zinc-400 h-12 rounded-full overflow-hidden'>
            <img className='w-full h-full' src="/default.jpg" alt="" />
          </div>
          <div>
            <h1 className='text-xl font-bold font-family-primary'>Profile Information</h1>
            <p className='text-zinc-500 text-xs md:text-sm'>Update your account profile information.</p>
          </div>
        </div>
        <div className='p-3 md:p-5'>
          <form className="grid gap-3 md:gap-5 text-sm md:text-[16px]">
            <div className='grid '>
              <label htmlFor="fullName">Full Name</label>
              <input className={inputStyle} type="text" placeholder='Enter Your Full Name' name='fullName' />
            </div>
            <div className='grid '>
              <label htmlFor="email">Email</label>
              <input disabled className={`${inputStyle} cursor-not-allowed bg-zinc-200`} type="email" placeholder='Enter Your Email' name='email' />
            </div>
            <div className='grid '>
              <label htmlFor="dob">Date of birth</label>
              <input className={inputStyle} type="date" name='dob' />
            </div>
            <div className='grid '>
              <label htmlFor="fullName">Phone</label>
              <input className={inputStyle} type="text" placeholder='Enter Your Phone' />
            </div>
            <div>
              <button className='bg-emerald-500 text-white font-family-primary font-semibold px-4 py-2 text-sm rounded-md active:scale-95 hover:bg-amber-300 hover:text-black duration-300 transition-all cursor-pointer'>Update</button>
            </div>
          </form>
        </div>
      </div>


      {/* Change Password */}
      <div className='border border-zinc-200 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-500 '>
        <div className='flex items-center gap-4 bg-zinc-100  p-3 md:p-5'>
          <div>
            <div className='w-12 h-12 border bg-amber-400 border-zinc-400  rounded-full overflow-hidden'>
              {/* <img className='w-full h-full' src="/default.jpg" alt="" /> */}
            </div>
          </div>

          <div>
            <h1 className='text-xl font-bold font-family-primary'>Change Password</h1>
            <p className='text-zinc-500 text-xs md:text-sm'>Ensure your account is using a long, random password to stay secure.</p>
          </div>
        </div>
        <div className='p-3 md:p-5'>
          <form className="grid gap-3 md:gap-5 text-sm md:text-[16px]">
            <div className='grid '>
              <label htmlFor="Current-password">Current password </label>
              <input className={inputStyle} type="password" placeholder='Current password ' name='Current-password' />
            </div>
            <div className='grid '>
              <label htmlFor="New-Passowrd">New Password</label>
              <input className={inputStyle} type="password" placeholder='New Passowrd' name='New-Passowrd' />
            </div>
            <div className='grid '>
              <label htmlFor="Password-confirmation">Password confirmation</label>
              <input className={inputStyle} type="password" placeholder='Password confirmation' name='Password-confirmation' />
            </div>

            <div>
              <button className='bg-emerald-500 text-white font-family-primary font-semibold px-4 py-2 text-sm rounded-md active:scale-95 hover:bg-amber-300 hover:text-black duration-300 transition-all cursor-pointer'>Change Password</button>
            </div>
          </form>
        </div>
      </div>


      {/* Delete Account */}
      <div className='border border-zinc-200 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-500 '>
        <div className='flex items-center gap-4 bg-red-100  p-3 md:p-5'>
          <div>
            <div className='w-12 bg-red-500 border border-zinc-400 h-12 rounded-full overflow-hidden'>
              {/* <img className='w-full h-full' src="/default.jpg" alt="" /> */}
            </div>
          </div>
          <div>
            <h1 className='text-xl text-red-500 font-bold font-family-primary'>Delete Account</h1>
            <p className='text-zinc-500 text-xs md:text-sm'>Permanently delete your account and all associated data.</p>
          </div>
        </div>
        <div className='p-3 md:p-5'>
          <form className="grid gap-3 md:gap-5 text-sm md:text-[16px]">
            <div className='bg-amber-100 p-5 rounded-md border border-zinc-100'>
              <h1 className='font-bold font-family-primary'>Warning</h1>
              <p className='text-sm'>This action will permanently delete your account and all associated data and is irreversible. Please be sure before proceeding.

              </p>
            </div>
            <div>
              <button className='border border-red-500 text-red-400 hover:text-white hover:border-transparent font-family-primary font-semibold px-4 py-2 rounded-md active:scale-95 hover:bg-red-600 text-sm duration-300 transition-all cursor-pointer flex items-center gap-2'><BsTrash />Delete your account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings