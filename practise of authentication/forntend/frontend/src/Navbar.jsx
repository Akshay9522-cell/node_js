import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='signin'>Sign</Link><br />
      <Link to='login'>Login</Link>
      <Link to='home'>Home</Link>
      <Link to='display'>Display</Link>


      <Outlet/>
    </div>
  )
}

export default Navbar
