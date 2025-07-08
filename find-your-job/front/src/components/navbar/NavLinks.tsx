"use client";

import React, { useEffect, useState } from "react";
import { NavLinkItem } from "../../interfaces/INavbar";
import { getCurrentRole } from "src/helpers/authFunctions";

const NavLinks: React.FC = () => {
  const [role, setRole] = useState<"candidate" | "recruiter" | null>(null);

  useEffect(() => {
    const currentRole = getCurrentRole();
    setRole(currentRole);
  }, []);

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
    { href: "/dashboard-recruiter", label: "Dashboard" },
    { href: "/post-a-job", label: "Post a Job" },
    { href: "/my-jobs", label: "My Jobs" },
    { href: "/candidates", label: "Candidates" },
  ];

  const linksToRender = role === "candidate" ? candidateLinks : role === "recruiter" ? recruiterLinks : publicLinks;

  return (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-emerald-100 text-sm font-medium">
      {linksToRender.map((link) => (
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
