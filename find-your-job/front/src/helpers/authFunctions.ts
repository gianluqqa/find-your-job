import { IUser } from "../interfaces/IUser";

// Guarda el usuario registrado (el rol ya se conoce por el contexto)
export const saveUser = (user: IUser) => {
  localStorage.setItem("registeredUser", JSON.stringify(user));
};

// Obtiene el usuario registrado (usado para login, por ejemplo)
export const getUser = (): IUser | null => {
  const user = localStorage.getItem("registeredUser");
  return user ? (JSON.parse(user) as IUser) : null;
};

// Guarda el rol actual del usuario (usado solo para navegación/contexto)
export const fakeLogin = (role: "candidate" | "recruiter") => {
  localStorage.setItem("userRole", role);
};

// Recupera el rol actual del usuario logueado
export const getCurrentRole = (): "candidate" | "recruiter" | null => {
  const role = localStorage.getItem("userRole");
  return role === "candidate" || role === "recruiter" ? role : null;
};
