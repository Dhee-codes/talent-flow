import logo from "../../assets/logo.svg";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

type DrawerProps = {
  isOpen: boolean;
  isAuthenticated: boolean;
  onClose: () => void;
};

const Drawer = ({ isOpen, isAuthenticated, onClose }: DrawerProps) => {
  return (
    <div className="md:hidden">
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
          <div className="flex flex-col gap-8 bg-card h-screen w-4/5 px-6 pt-16.5">
            <Link to="/">
              <img
                src={logo}
                alt="TalentFlow"
                className="w-20 h-auto"
              />
            </Link>

            {isAuthenticated ? (
              <div className="flex flex-col gap-9 p-3 text-base leading-6 -tracking-[0.02em] font-medium">
                <Link
                  to="/dashboard"
                  className="hover:text-accent transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/courses"
                  className="hover:text-accent transition-colors"
                >
                  My Courses
                </Link>
                <Link
                  to="/assignment"
                  className="hover:text-accent transition-colors"
                >
                  Profile
                </Link>
                <Link
                  to="/progress"
                  className="hover:text-accent transition-colors"
                >
                  Learning Progress
                </Link>
                <Link
                  to="/chat"
                  className="hover:text-accent transition-colors"
                >
                  Chat
                </Link>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-9 p-3 text-base leading-6 -tracking-[0.02em] font-medium">
                  <Link
                    to="/explore"
                    className="hover:text-accent transition-colors"
                  >
                    Explore
                  </Link>
                  <Link
                    to="/help"
                    className="hover:text-accent transition-colors"
                  >
                    Help and Support
                  </Link>
                </div>
                <Link
                  to="/login"
                  className="w-full text-center bg-primary hover:bg-accent text-primary-foreground text-base font-sans px-12.5 py-3.75 rounded-lg"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
