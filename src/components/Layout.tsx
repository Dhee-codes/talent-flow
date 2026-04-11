import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const noNavbarRoutes = ['/login', '/register'];
const noFooterRoutes = ['/login', '/register', '/notifications'];
const guestNavRoutes = ["/"];

const Layout = () => {
  const location = useLocation();
  const hideNavbar = noNavbarRoutes.includes(location.pathname);
  const hideFooter = noFooterRoutes.includes(location.pathname);
  const isGuest = guestNavRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar && <Navbar forceGuest={isGuest} />}
      <div className="flex-1">
        <Outlet />
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default Layout;