import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <h1>Logo</h1>

        <ul>
          <li><Link to='home'>Home</Link></li>
          <li><Link to='regis'>Regis</Link></li>
          <li><Link to='login'>Login</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Navbar
