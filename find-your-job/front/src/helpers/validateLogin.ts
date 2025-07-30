import { ILogin } from "src/interfaces/ILogin";

export const validateLogin = (values: ILogin): string | null => {
  // Email is required and must be valid format
  if (!values.email) {
    return "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    return "Invalid email format";
  }

  // Password is required
  if (!values.password) {
    return "Password is required";
  }

  // No errors
  return null;
};