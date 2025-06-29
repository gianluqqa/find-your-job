import React from "react";
import { NavLinkItem } from "../../interfaces/INavbar";

const NavLinks: React.FC = () => {
  const links: NavLinkItem[] = [
    { href: "#jobspreview", label: "Jobs" },
    { href: "#companiespreview", label: "Companies" },
    { href: "#aboutus", label: "About Us" },
    { href: "#professionaldpreview", label: "Professional Development" },
  ];

  return (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-emerald-100 text-sm font-medium">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="relative cursor-pointer transition-all duration-300 hover:text-emerald-300 group"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
