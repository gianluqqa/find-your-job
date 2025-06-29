import React from "react";
import { BackButtonProps } from "../../interfaces/INavbar";

const BackButton: React.FC<BackButtonProps> = ({ isHomePage, handleGoBack }) => {
  if (isHomePage) return null;

  return (
    <button
      onClick={handleGoBack}
      className="group p-2 rounded-xl hover:bg-emerald-800/20 transition-all duration-300 hover:scale-105 active:scale-95"
      title="Volver atrás"
    >
      <svg
        className="w-6 h-6 text-emerald-100 group-hover:text-emerald-300 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

export default BackButton;
