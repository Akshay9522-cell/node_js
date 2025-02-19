
import './App.css'
import axios from 'axios'
import New from './components/New'

function App() {
  
   const handleHome= async()=>{
        
    let api="http://localhost:5000/myhome"

     const res= await axios.get(api)
     console.log(res)
   }
   const handleAbout= async()=>{
        
    let api="http://localhost:5000/about"

     const res= await axios.get(api)
     console.log(res)
   }

  return (
    <>
    <New/>
     <button onClick={handleHome}>home</button>
     <button onClick={handleAbout}>About</button>
    </>
  )
}

export default App
