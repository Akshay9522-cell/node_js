import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to='service'>Service</Link>
      <Link to='facility'>Facility</Link>

      <hr />
       <Outlet/>
    </div>
  )
}

export default About
