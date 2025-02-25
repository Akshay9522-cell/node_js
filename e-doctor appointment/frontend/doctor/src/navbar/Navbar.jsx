import React from 'react'
import TopMenu from '../components/TopMenu'
import {Outlet}  from 'react-router-dom'
import Footer from '../components/Footer'

const Navbar = () => {
  return (
    <div>
      <TopMenu/>

      <Outlet/>

      <Footer/>
    </div>
  )
}

export default Navbar
