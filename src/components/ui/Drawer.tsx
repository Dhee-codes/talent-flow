import { X } from "lucide-react";

type DrawerProps = {
  isOpen: boolean;
  isAuthenticated: boolean;
  onClose: () => void;
};

const Drawer = ({ isOpen, isAuthenticated, onClose }: DrawerProps) => {
  return (
    <>
      {/* Overlay — the dark background behind the drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      {/* Drawer panel */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-card z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-8 py-4">
          {isAuthenticated ? (
            <>
              <a href="#">Dashboard</a>
              <a href="#">My Courses</a>
              <a href="#">Profile</a>
            </>
          ) : (
            <>
              <button className="bg-primary text-primary-foreground text-base font-sans px-12.5 py-3.75 rounded-lg">
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Drawer;
