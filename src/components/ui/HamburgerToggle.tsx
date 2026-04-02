import { Menu } from "lucide-react";

export const HamburgerToggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <button
        className="md:hidden"
        aria-controls="main-menu"
        onClick={onClick}
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
};
