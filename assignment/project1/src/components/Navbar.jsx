import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div  className='nav' >
   <ul className='list'>
    <li>
    <Link to='home'>Home</Link></li>
    <li> <Link to='about'>About</Link></li>
    <li><Link to='contact'>Contact</Link></li>
    <li><Link to='service'>Service</Link></li>
 
    
   </ul>

      <Outlet/>
    </div>
  )
}

export default Navbar

