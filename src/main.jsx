import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import Layout from './Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import Login from './Pages/Login/Login.jsx'
import Errorpage from './Pages/ErrorPage/Errorpage.jsx'
import VendorGuide from './Pages/VendorGuide/VendorGuide.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import Blogs from './Pages/Blogs/Blogs.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import YourCart from './Pages/YourCart/YourCart.jsx'
import YourWishlist from './Pages/YourWishlist/YourWishlist.jsx'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.jsx'
import Vendors from './Pages/Vendors/Vendors.jsx'
import VendorShop from './Pages/Vendors/VendorShop.jsx' 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/signup',
        element: <SignUp />
      }, 
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/forgotPassword',
        element: <ForgotPassword />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/vendors',
        element: <Vendors />
      },
      {
        path: '/vendors/:id',
        element: <VendorShop />
      },
      {
        path: '/cart',
        element: <YourCart />
      },
      {
        path: '/wishlist',
        element: <YourWishlist />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/vendor-guide',
        element: <VendorGuide />
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
