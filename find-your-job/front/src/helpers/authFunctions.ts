import { IUser } from "../interfaces/IUser";

// helpers/auth.ts
export const fakeLogin = (role: "candidate" | "recruiter") => {
  localStorage.setItem("userRole", role);
};

export const getUser = (): IUser | null => {
  const user = localStorage.getItem("registeredUser");
  return user ? JSON.parse(user) as IUser : null;
};


