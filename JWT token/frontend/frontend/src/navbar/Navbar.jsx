import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='home'>Home</Link>
      <Link to='regis'>Regis</Link>
      <Link to='login'>Login</Link>

      <Outlet/>


    </div>
  )
}

export default Navbar
