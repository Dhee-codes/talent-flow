import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Logo } from "../Logo";
import { SearchBar } from "../ui/SearchBar";
import { HamburgerToggle } from "../ui/HamburgerToggle";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Drawer from "../ui/Drawer";
import { ShoppingCart, Bell } from "lucide-react";

const HeaderLeft = ({
  onMenuClick,
  isOpen,
}: {
  onMenuClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <div className="flex items-baseline gap-4.5 md:mr-11">
      <HamburgerToggle onClick={onMenuClick} isOpen={isOpen} />

      <Logo />
    </div>
  );
};

const LoginBtn = () => {
  return (
    <Link
      to="/login"
      className="hidden md:block bg-primary hover:bg-accent text-primary-foreground text-base font-sans px-12.5 py-3.75 rounded-lg"
    >
      Login
    </Link>
  );
};

const GuestNav = ({
  onMenuClick,
  isOpen,
  isAuthenticated,
}: {
  onMenuClick: () => void;
  isOpen: boolean;
  isAuthenticated: boolean;
}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <>
      <HeaderLeft onMenuClick={onMenuClick} isOpen={isOpen} />

      <SearchBar
        isAuthenticated={isAuthenticated}
        query={query}
        onChange={setQuery}
        onKeyDown={handleKeyDown}
      />

      <div className="flex-1 hidden md:block" />

      <LoginBtn />
    </>
  );
};

const AuthNav = ({
  onMenuClick,
  isOpen,
  isAuthenticated,
}: {
  onMenuClick: () => void;
  isOpen: boolean;
  isAuthenticated: boolean;
}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  const active = "bg-[#5A8CFF] text-white px-2.25 py-1 rounded-lg";

  return (
    <>
      <HeaderLeft onMenuClick={onMenuClick} isOpen={isOpen} />

      <div className="flex-1 hidden md:flex justify-between items-center gap-1 flex-wrap text-xs lg:text-base leading-6 -tracking-[0.02em] font-medium">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `${isActive ? active : ""}`}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => `${isActive ? active : ""}`}
        >
          My Course
        </NavLink>
        <NavLink
          to="/assignment"
          className={({ isActive }) => `${isActive ? active : ""}`}
        >
          Assignment
        </NavLink>
        <NavLink
          to="/progress"
          className={({ isActive }) => `${isActive ? active : ""}`}
        >
          Learning Progress
        </NavLink>
        <NavLink to="/chat" className={({ isActive }) => `${isActive ? active : ""}`}>
          Chat
        </NavLink>
      </div>

      <div className="flex gap-6">
        <div className="flex items-center space-x-4 md:ml-13 mr-0 md:mr-6">
          <SearchBar
            isAuthenticated={isAuthenticated}
            query={query}
            onChange={setQuery}
            onKeyDown={handleKeyDown}
          />

          <button
            onClick={() => navigate("/cart")}
            className="text-gray-500 hover:text-gray-700"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigate("/notifications")}
            className="relative text-gray-500 hover:text-gray-700"
          >
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white translate-x-1/4 -translate-y-1/4"></div>
          </button>
        </div>

        <NavLink
          to="/profile"
          className="w-8 md:w-10 aspect-square bg-[#283C69] rounded-full shadow-[0_0_2px_4px_rgb(96,144,250,.5)] flex justify-center items-center text-white text-xl md:text-2xl -tracking-[0.02em] font-medium"
        >
          A
        </NavLink>
      </div>
    </>
  );
};

const Navbar = ({ forceGuest = false }: { forceGuest?: boolean }) => {
  const { isAuthenticated } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const showGuestNav = forceGuest || isHomePage;

  return (
    <header>
      <nav className="flex items-center justify-between px-8 md:px-14 lg:px-20 py-6">
        {!showGuestNav ? (
          <AuthNav
            onMenuClick={() => setDrawerOpen(true)}
            isOpen={drawerOpen}
            isAuthenticated={isAuthenticated}
          />
        ) : (
          <GuestNav
            onMenuClick={() => setDrawerOpen(true)}
            isOpen={drawerOpen}
            isAuthenticated={isAuthenticated}
          />
        )}
      </nav>

      <Drawer
        isOpen={drawerOpen}
        isAuthenticated={isAuthenticated}
        onClose={() => setDrawerOpen(false)}
      />
    </header>
  );
};

export default Navbar;
