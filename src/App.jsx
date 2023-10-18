
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    
      <div>
       <div className='shadow-lg p-4'><Navbar></Navbar></div>
       <Outlet></Outlet>
       <div className='mt-5'>
       <Footer></Footer>
       </div>
      </div>
      
  )
}

export default App
