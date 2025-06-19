// helpers/auth.ts
export const fakeLogin = (role: "candidate" | "recruiter") => {
  localStorage.setItem("userRole", role);
};

// helpers/auth.ts
export const getUser = () => {
  const user = localStorage.getItem("registeredUser");
  return user ? JSON.parse(user) : null;
};

