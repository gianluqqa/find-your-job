// src/components/Navbar/interfaces.ts
export interface IUser {
  // Define la estructura de tu usuario según IUser de authFunctions
}

export interface NavLinkItem {
  href: string;
  label: string;
}

export interface BackButtonProps {
  isHomePage: boolean;
  handleGoBack: () => void;
}

export interface MobileMenuButtonProps {
  toggleMenu: () => void;
}
