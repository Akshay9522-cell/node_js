import React from 'react'
import{Link,Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="home">Home</Link>
      <Link to='insert'>Insert</Link>
      <Link to='display'>Display</Link>
      <Link to='alldata'>Alldata</Link>

      <Outlet/>
    </div>
  )
}

export default Navbar
