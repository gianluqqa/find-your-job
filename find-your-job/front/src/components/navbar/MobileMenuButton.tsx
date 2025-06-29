import React from "react";
import { MobileMenuButtonProps } from "../../interfaces/INavbar";

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ toggleMenu }) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="text-emerald-100 p-2 rounded-lg hover:bg-emerald-800/20 transition-colors duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileMenuButton;
