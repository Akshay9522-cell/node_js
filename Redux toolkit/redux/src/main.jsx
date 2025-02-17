import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginContext from './components/LoginContext.jsx'

createRoot(document.getElementById('root')).render(
<LoginContext>
<App />
</LoginContext>
   
  
)
