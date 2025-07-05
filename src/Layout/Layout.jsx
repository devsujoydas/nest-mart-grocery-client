import React, { useContext } from 'react'
import Header from '../Shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import LoadingPage from '../Components/LoadingPage/LoadingPage'
import { AuthContext } from '../AuthProvider/AuthProvider'

const Layout = () => {

  const { user, setUser } = useContext(AuthContext)

  return (
    <div>
      {user ?
        <>
          <Header />
          <div>
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