import { useState } from "react";
import { Logo } from "./Logo";
import { SearchBar } from "./ui/SearchBar";
import { HamburgerToggle } from "./ui/HamburgerToggle";
import { Link } from "react-router-dom";
import Drawer from "./ui/Drawer";

const HeaderLeft = ({ onMenuClick, isOpen }: { onMenuClick: () => void, isOpen: boolean }) => {
  return (
    <div className="flex items-baseline gap-4.5">
      <HamburgerToggle onClick={onMenuClick} isOpen={isOpen} />

      <Logo />
    </div>
  );
};

const LoginBtn = () => {
  return (
    <Link
      to="/login"
      className="hidden md:block bg-primary text-primary-foreground text-base font-sans px-12.5 py-3.75 rounded-lg"
    >
      Login
    </Link>
  );
};

const GuestNav = ({
  onMenuClick,
  isOpen,
}: {
  onMenuClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <>
      <HeaderLeft onMenuClick={onMenuClick} isOpen={isOpen} />

      <SearchBar />

      <div className="flex-1 hidden md:block" />

      <LoginBtn />
    </>
  );
};

const AuthNav = ({
  onMenuClick,
  isOpen,
}: {
  onMenuClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <>
      <HeaderLeft onMenuClick={onMenuClick} isOpen={isOpen} />

      <SearchBar />

      <LoginBtn />
    </>
  );
};

const Navbar = () => {
  const [isAuthenticated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between px-8 md:px-14 lg:px-20 py-6">
        {isAuthenticated ? (
          <AuthNav
            onMenuClick={() => setDrawerOpen(true)}
            isOpen={drawerOpen}
          />
        ) : (
          <GuestNav
            onMenuClick={() => setDrawerOpen(true)}
            isOpen={drawerOpen}
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
