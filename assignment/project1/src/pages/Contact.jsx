import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <form action="" className='form'>

        Name:<input type='text' placeholder='Enter your name'/>
        Email:<input type='email' placeholder='Enter your email'/>
        Dob:<input type='date' placeholder='Enter your dob'/>
        ID proof:<input type='file'/>
        <input type='button' value='save'/>
      </form>
    </div>
  )
}

export default Contact
