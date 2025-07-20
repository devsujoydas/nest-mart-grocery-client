import React, { useContext } from 'react'
import Header from '../Shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import LoadingPage from '../Components/LoadingPage/LoadingPage'
import { AuthContext } from '../AuthProvider/AuthProvider'
import  { Toaster } from 'react-hot-toast';

const Layout = () => {

  const { loading } = useContext(AuthContext)

  return (
    <div>
      {/* <div className='w-full h-screen flex justify-center items-center'>
        <div className='h-10 w-10 border-y rounded-full animate-spin border-emerald-600 '></div>
      </div> */}
      <div className='relative'>
        {!loading ?
          <>
            <Header />
            <div>
              <Toaster
                position="top-right"
                reverseOrder={false} />
              <Outlet />
            </div>
            <Footer />
          </>
          :
          <LoadingPage />
        }
      </div>
    </div>
  )
}

export default Layout