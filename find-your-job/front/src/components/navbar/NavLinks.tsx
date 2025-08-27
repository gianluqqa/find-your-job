"use client";
import React from "react";
import { NavLinkItem } from "../../interfaces/INavbar";
import { useAuth } from "src/context/useAuth";

const NavLinks: React.FC = () => {
  const { user } = useAuth();

  // Links para cada tipo de usuario
  const publicLinks: NavLinkItem[] = [
    { href: "#jobspreview", label: "Jobs" },
    { href: "#companiespreview", label: "Companies" },
    { href: "#aboutus", label: "About Us" },
    { href: "#professionaldpreview", label: "Professional Development" },
  ];

  const candidateLinks: NavLinkItem[] = [
    { href: "/jobs", label: "Jobs" },
    { href: "/companies", label: "Companies" },
    { href: "/professionaldev", label: "Professional Development" },
    { href: "/applications", label: "My Applications" },
  ];

  const recruiterLinks: NavLinkItem[] = [
    { href: "/companies-recruiter", label: "Companies" },
    { href: "/create-company", label: "Create Company" },
    { href: "/post-a-job", label: "Post a Job" },
    { href: "/jobs-applications", label: "Jobs/Applications" },
  ];

  const adminLinks: NavLinkItem[] = [
    // TODO: agregar links reales cuando se definan
    { href: "/admin-dashboard", label: "Admin Dashboard" },
  ];

  // Variable para guardar los links que vamos a renderizar
  let linksToRender: NavLinkItem[] = publicLinks;

  // Lógica para decidir qué links usar según el rol
  if (user && user.role === "candidate") {
    linksToRender = candidateLinks;
  } else if (user && user.role === "recruiter") {
    linksToRender = recruiterLinks;
  } else if (user && user.role === "admin") {
    linksToRender = adminLinks;
  }

  return (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-emerald-100 text-sm font-medium">
      {linksToRender.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="relative cursor-pointer transition-all duration-300 hover:text-emerald-300 group">
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
