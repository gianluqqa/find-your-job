"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getUser } from "src/helpers/authFunctions";
import { IUser, BackButtonProps, MobileMenuButtonProps } from "../../interfaces/INavbar";
import BackButton from "./BackButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchInputs from "./SearchInputs";
import AuthButtons from "./AuthButtons";
import MobileMenuButton from "./MobileMenuButton";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const storedUser = getUser();
    setUser(storedUser);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BackButton 
              isHomePage={isHomePage} 
              handleGoBack={handleGoBack} 
            />
            <Logo />
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <NavLinks />
          </div>
          <SearchInputs />
          <AuthButtons />
          <MobileMenuButton toggleMenu={toggleMobileMenu} />
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 mb-4">
            <NavLinks />
            <SearchInputs isMobile />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
