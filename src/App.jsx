
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {
const location = useLocation();
  return (
   <>
<Header/>
        <div className='md:min-h-[calc(100vh-176px)]'>
          <Outlet/>
        </div>
        <Footer/>
  </>
  )
}

export default App
