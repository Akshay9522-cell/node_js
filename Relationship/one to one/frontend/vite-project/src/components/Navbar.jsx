import React from 'react'

import {Link,Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='insert'>Insert</Link>
      <Link to='display'>Display</Link>
      <Link to='search'>Search</Link>

      <Outlet/>
    </div>
  )
}

export default Navbar
