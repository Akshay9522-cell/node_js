import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to='insert'>insert</Link>
      <Link to='display'>display</Link>

      <Outlet/>
    </div>
  )
}

export default Navbar
