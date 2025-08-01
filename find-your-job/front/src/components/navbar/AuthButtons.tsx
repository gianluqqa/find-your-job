"use client";
import React from "react";
import Link from "next/link";
import Button1 from "../ui/Button1";
import Button2 from "../ui/Button2";
import { useRouter } from "next/navigation";
import { useAuth } from "src/context/useAuth";

const AuthButtons = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Limpiamos user/token del contexto y localStorage
    router.push("/"); 
  };

  if (user && user.role === "candidate") {
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

  if (user && user.role === "recruiter") {
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
