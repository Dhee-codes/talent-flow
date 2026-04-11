import logo from "../../assets/logo.svg";
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
          className=" absolute top-17 right-7 z-100 w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer"
        >
          <svg
            aria-hidden="true"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="48"
              height="48"
              rx="24"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M31 19L19 31M19 19L31 31"
              stroke="#1E1E1E"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Drawer panel */}
        <div id="mobile-menu">
          {/* Links */}
          <div className="flex flex-col gap-8 bg-card h-screen w-4/5 px-6 pt-16.5">
            <Link to="/" onClick={onClose}>
              <img src={logo} alt="TalentFlow" className="w-20 h-auto" />
            </Link>

            {isAuthenticated ? (
              <div className="flex flex-col gap-9 p-3 text-base leading-6 -tracking-[0.02em] font-medium">
                <Link
                  to="/dashboard"
                  onClick={onClose}
                  className="hover:text-accent transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/courses"
                  onClick={onClose}
                  className="hover:text-accent transition-colors"
                >
                  My Courses
                </Link>
                <Link
                  to="/profile"
                  onClick={onClose}
                  className="hover:text-accent transition-colors"
                >
                  Profile
                </Link>
                <Link
                  to="/progress"
                  onClick={onClose}
                  className="hover:text-accent transition-colors"
                >
                  Learning Progress
                </Link>
                <Link
                  to="/chat"
                  onClick={onClose}
                  className="hover:text-accent transition-colors"
                >
                  Chat
                </Link>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-9 p-3 text-base leading-6 -tracking-[0.02em] font-medium">
                  <Link
                    to="/"
                    onClick={onClose}
                    className="hover:text-accent transition-colors"
                  >
                    Explore
                  </Link>
                  <Link
                    to="/"
                    onClick={onClose}
                    className="hover:text-accent transition-colors"
                  >
                    Help and Support
                  </Link>
                </div>
                <Link
                  to="/login"
                  onClick={onClose}
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
