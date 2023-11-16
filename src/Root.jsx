import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Myfooter from './components/Myfooter'

function Root() {

  return (
    <>
      <Navbar />
     <div className='mt-[100px]'>
     <Outlet />
     </div>
      <Myfooter />
    </>
  )
}

export default Root