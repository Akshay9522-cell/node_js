import React from 'react'

const StuDesign = (props) => {
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td>{props.city}</td>
        <td>{props.fees}</td>
      </tr>
    </>
  )
}

export default StuDesign
