
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    
      <div>
       <div className='shadow-lg p-4'><Navbar></Navbar></div>
       <Outlet></Outlet>
      </div>
      
  )
}

export default App
