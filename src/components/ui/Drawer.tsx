import { X } from "lucide-react";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";

type DrawerProps = {
  isOpen: boolean;
  isAuthenticated: boolean;
  onClose: () => void;
};

const Drawer = ({ isOpen, isAuthenticated, onClose }: DrawerProps) => {
  return (
    <>
      {/* The Backdrop/Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-backgrond/30 backdrop-blur-sm transition-opacity duration-300" />
      )}

      {/* The Animated Container */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 w-full z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          aria-controls="mobile-menu"
          className="absolute top-17 right-7 z-100 border-2 rounded-full p-1"
        >
          <X aria-hidden="true" className="w-6 h-6" />
        </button>

        {/* Drawer panel */}
        <div id="mobile-menu">
          {/* Links */}
          <div className="flex flex-col gap-8 bg-card h-full w-4/5 px-6 pt-16.5">
            <Logo />

            {isAuthenticated ? (
              <div className="flex flex-col gap-9 p-3 text-base leading-6 -tracking-[0.02em] font-medium">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/courses">My Courses</Link>
                <Link to="/assignment">Profile</Link>
                <Link to="/progress">Learning Progress</Link>
                <Link to="/chat">Chat</Link>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-9 p-3 text-base leading-6 -tracking-[0.02em] font-medium">
                  <Link to="/explore">Explore</Link>
                  <Link to="/help">Help and Support</Link>
                </div>
                <Link
                  to="/login"
                  className="w-full text-center bg-primary text-primary-foreground text-base font-sans px-12.5 py-3.75 rounded-lg"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
