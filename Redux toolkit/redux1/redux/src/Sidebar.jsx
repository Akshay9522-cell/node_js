import React, { useState } from 'react'


const Sidebar = () => {

   const[open,setOpen]=useState(false)
    function bar(){
        setOpen(!open)
    }
  return (
    <div>
      <div  className={`sidebar ${open ? 'open' : 'closed'}`}>akksaya</div>

      <button onClick={bar}>{open?'close':'open'}</button>
    </div>
   
  )
}

export default Sidebar
