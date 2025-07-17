import React, { useContext } from 'react'
import Header from '../Shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import LoadingPage from '../Components/LoadingPage/LoadingPage'
import { AuthContext } from '../AuthProvider/AuthProvider' 
import toast, { Toaster } from 'react-hot-toast';

const Layout = () => {

  const { user, setUser } = useContext(AuthContext)

  return ( 
    <div className='relative'>
      {user ?
        <>
          <Header />
          <div>
             <Toaster />
            <Outlet />
          </div>
          <Footer />
        </>
        :
        <LoadingPage />
      }
    </div>
  )
}

export default Layout