
import './App.css'
import Data from './components/data'
import Student from './components/Student'
import Map from './components/Map'

import StuData from './components/StuData'
import StuDesign from './components/StuDesign'

// const name='akshay namdev'
// const roll=35;
// const age=24
// const skiil='MERN'

function App() {

  const ans=StuData.map((e)=>{

  return   (  <StuDesign
      name={e.name}
      age={e.age}
      city={e.city}
      fees={e.fees}
      />)
 } )   

  return (
    <>

     <h1>Table list</h1>
     <table border={1} >
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>City</td>
        <td>Fees</td>
      </tr>
      
     </table>
     {/* <Data name='akshay' clg='Davv'/>

     <Student nm={name} rl={roll} ag={age} sk={skiil}/>

     <Map/> */}
    </>
  )
}

export default App
