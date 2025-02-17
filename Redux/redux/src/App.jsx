
import './App.css'
import { useSelector,useDispatch } from 'react-redux';
// import { increament,decreament } from './counterSlice';

import { bgcolorChange } from './counterSlice';

function App() {
    
  // const myval=useSelector((state)=>state.mycount.count)
  // const dispatch=useDispatch()

  const myclr=useSelector((state)=>state.myColor.bgcolor)
  const mydis=useDispatch()
  return (
    <>
     <h1>my counter app</h1>
     {/* <button onClick={()=>{dispatch(increament())}}>increament</button>
     <h1>{myval}</h1>
     <button onClick={()=>{dispatch(decreament())}}>decreament</button> */}

      <button onClick={()=>{mydis(bgcolorChange())}}>change</button>
       
       <div style={{width:"100px",height:"100px", backgroundColor:myclr}}>

       </div>
    </>
  )
}

export default App
