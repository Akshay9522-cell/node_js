import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='home'>Home</Link>
      <Link to='about'>About</Link>
      <Link to='contact'>Contact</Link>
      <Link to='login'>Login</Link>
       <hr />
       <hr />
       <Outlet/>
       
    </div>
  )
}

export default Navbar
