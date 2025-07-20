import { StrictMode, useEffect } from 'react'
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
import Blogs from './Pages/Blogs/Blogs.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import YourCart from './Pages/YourCart/YourCart.jsx'
import YourWishlist from './Pages/YourWishlist/YourWishlist.jsx'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.jsx'
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx'
import Account from './Pages/Account/Account.jsx'
import Overview from './Pages/Account/Overview.jsx'
import Orders from './Pages/Account/Orders.jsx'
import AccountSettings from './Pages/Account/AccountSettings.jsx'
import Addresses from './Pages/Account/Addresses.jsx'
import Stores from './Pages/Stores/Stores.jsx'
import Store from './Pages/Stores/Store.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import OrderTracking from './Pages/OrderTracking/OrderTracking.jsx'
import Reviews from './Pages/Account/Reviews.jsx'

import Lenis from 'lenis'
// import 'lenis/dist/lenis.css'
import Products from './Pages/Products/Products.jsx'
import GsapScroolAnimation from './Pages/GsapScroolAnimation/GsapScroolAnimation.jsx'
import BlogDetails from './Pages/Blogs/BlogDetails.jsx'


const lenis = new Lenis({
  smooth: true,
  syncTouch: true,
})
const raf = (time) => {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/contact', element: <Contact /> },

      { path: '/stores', element: <Stores /> },
      { path: '/stores/:id', element: <Store /> },

      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <ProductDetails />, },

      { path: '/blogs', element: <Blogs /> },
      { path: '/blogs/:id', element: <BlogDetails /> },

      { path: '/cart', element: <YourCart /> },
      { path: '/wishlist', element: <YourWishlist /> },
      { path: '/vendor-guide', element: <VendorGuide /> },
      { path: '/order/tracking', element: <OrderTracking /> },

      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/forgotPassword', element: <ForgotPassword /> },
      {
        path: '/account', element: <Account />, children: [
          { path: '/account/overview', element: <Overview />, },
          { path: '/account/orders', element: <Orders />, },
          { path: '/account/reviews', element: <Reviews />, },
          { path: '/account/address', element: <Addresses />, },
          { path: '/account/accountSettings', element: <AccountSettings />, },
        ]
      },

    ]
  },
  { path: '/gsap', element: <GsapScroolAnimation /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
