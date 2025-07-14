"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button1 from "../ui/Button1";
import Button2 from "../ui/Button2";
import { getCurrentRole } from "src/helpers/authFunctions";
import { useRouter } from "next/navigation"; 

const AuthButtons = () => {
  const [role, setRole] = useState<"candidate" | "recruiter" | null>(null);
  const router = useRouter();

  useEffect(() => {
    const currentRole = getCurrentRole();
    setRole(currentRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    router.push("/");
  };

  if (role === "candidate") {
    return (
      <div className="flex items-center gap-4">
        <Link href={"/dashboard/candidate"}>
          <button className="text-emerald-100 text-sm font-medium hover:text-emerald-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-emerald-800/20">
            Candidate Profile
          </button>
        </Link>
        <Button2 onClick={handleLogout} className="rounded-lg">
          Logout
        </Button2>
      </div>
    );
  }

  if (role === "recruiter") {
    return (
      <div className="flex items-center gap-4">
        <Link href={"/dashboard/recruiter"}>
          <button className="text-emerald-100 text-sm font-medium hover:text-emerald-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-emerald-800/20">
            Recruiter Profile
          </button>
        </Link>
        <Button1 onClick={handleLogout} className="rounded-lg">
          Logout
        </Button1>
      </div>
    );
  }

  // Usuario no logueado
  return (
    <div className="flex items-center gap-4">
      <Link href={"/login"}>
        <button className="text-emerald-100 text-sm font-medium hover:text-emerald-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-emerald-800/20">
          Login
        </button>
      </Link>
      <Link href={"/register"}>
        <Button1 className="rounded-lg">Register</Button1>
      </Link>
    </div>
  );
};

export default AuthButtons;
