import React from 'react'

const Child = (props) => {
    console.log('i am child')
  return (
    <div>
    <div>
        <button onClick={props.handleClick}>
        {props.button}
            </button>
    </div>
    </div>
  )
}

export default Child
