import { useState } from "react";
import logo from "../assets/logo.svg";
import { SearchBar } from "./ui/SearchBar";
import { HamburgerToggle } from "./ui/HamburgerToggle";
import Drawer from "./ui/Drawer";

const HeaderLeft = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <div className="flex items-baseline gap-4">
      <HamburgerToggle onClick={onMenuClick} />

      <img src={logo} alt="TalentFlow" className="w-16 h-auto" />
    </div>
  );
};

const GuestNav = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <>
      <HeaderLeft onMenuClick={onMenuClick} />

      <SearchBar />

      <div className="flex-1 hidden md:block" />

      <button className="hidden md:block bg-primary text-primary-foreground text-base font-sans px-12.5 py-3.75 rounded-lg">
        Login
      </button>
    </>
  );
};


const AuthNav = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <>
      <HeaderLeft onMenuClick={onMenuClick} />

      <SearchBar />

      <button className="hidden md:block bg-primary text-primary-foreground text-base font-sans px-12.5 py-3.75 rounded-lg">
        Login
      </button>
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
          <AuthNav onMenuClick={() => setDrawerOpen(true)} />
        ) : (
          <GuestNav onMenuClick={() => setDrawerOpen(true)} />
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
