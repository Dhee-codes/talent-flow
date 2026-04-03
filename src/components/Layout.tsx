import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

const noLayoutRoutes = ['/login', '/register']

const Layout = () => {
  const location = useLocation()
  const hideLayout = noLayoutRoutes.includes(location.pathname)

  return (
    <div className='flex flex-col min-h-screen'>
      {!hideLayout && <Navbar />}
      <main className='flex-1'>
        <Outlet />
      </main>
      {!hideLayout && <Footer />}
    </div>
  )
}

export default Layout