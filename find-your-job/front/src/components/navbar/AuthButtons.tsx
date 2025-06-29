import React from "react";
import Link from "next/link";
import Button1 from "../ui/Button1";

const AuthButtons = () => {
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
