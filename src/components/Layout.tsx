import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const noLayoutRoutes = ['/login', '/register']

const Layout = () => {
  const location = useLocation()
  const hideLayout = noLayoutRoutes.includes(location.pathname)

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!hideLayout && <Footer />}
    </>
  )
}

export default Layout