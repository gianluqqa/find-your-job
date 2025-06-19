import { ILogin } from "src/interfaces/ILogin";

export const validateLogin = (values: ILogin) => {
  const errors: Partial<Record<keyof ILogin, string>> = {};

  // Email is required and must be valid format
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  // Password is required
  if (!values.password) {
    errors.password = "Password is required";
  }

  // rememberMe is optional boolean, no validation needed

  return errors;
};
