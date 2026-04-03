import { Menu } from "lucide-react";

export const HamburgerToggle = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <div>
      <button
        className="md:hidden"
        aria-label="Open main menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={onClick}
      >
        <Menu aria-hidden="true" className="w-7 h-7" />
      </button>
    </div>
  );
};
