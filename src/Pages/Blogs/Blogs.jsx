import React from 'react'
import StayHome from '../../Components/StayHome/StayHome'
import Servicess from '../../Components/Servicess/Servicess'
import NavigationPage from '../../Shared/NavigationPage/NavigationPage'

const Blogs = () => {
  return (
    <div>


      <div className='md:max-w-screen-2xl mx-auto'>
        <div style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/blog/header-bg.png")` }}>
          <h1>Blog & News</h1>
          <NavigationPage path1={"Blog & News"} />
        </div>
      </div>


      <StayHome />
      <Servicess />
    </div>
  )
}

export default Blogs