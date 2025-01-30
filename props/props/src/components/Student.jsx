import React from 'react'

const stuData=[
    {
        name:'akhhay',
        age:24,
        city:'bhopal',
        fees:34567
    },
    {
        name:'yash',
        age:26,
        city:'jabalpur',
        fees:345667
    },
    {
        name:'atika',
        age:4,
        city:'indore',
        fees:347
    },
    {
        name:'kartikety',
        age:27,
        city:'australia',
        fees:66567
    },
    {
        name:'ayush',
        age:54,
        city:'uganda',
        fees:88567
    },
]

let ans=stuData.map((e)=>{
     return(
        <>
        
        <tr>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.city}</td>
            <td>{e.fees}</td>
        </tr>
    
       
        </>
     )
})

const Student = () => {
  return (
    <div>
    <table border={1}>
        <tr>
            <td>NAME</td>
            <td>AGE</td>
            <td>CITY</td>
            <td>FEES</td>
        </tr>
        {ans}
    </table>
   
    </div>
  )
}

export default Student
