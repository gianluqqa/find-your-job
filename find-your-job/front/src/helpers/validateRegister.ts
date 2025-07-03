import { IRegister } from "src/interfaces/IRegister";
import { IRegisterErrors } from "src/interfaces/IRegisterErrors";

export const validateRegister = (values: IRegister): IRegisterErrors => {
  const errors: IRegisterErrors = {};

  if (!values.name) errors.name = "Name is required";
  if (!values.email) errors.email = "Email is required";
  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) errors.email = "Invalid email";

  if (!values.password) errors.password = "Password is required";
  else if (values.password.length < 6) errors.password = "Minimum 6 characters";

  if (!values.confirmPassword) errors.confirmPassword = "Confirming password is required";
  else if (values.password !== values.confirmPassword) errors.confirmPassword = "Passwords do not match";

  if (!values.country) errors.country = "Country is required";
  if (!values.state) errors.state = "State is required";
  if (!values.city) errors.city = "City is required";

  if (!values.phone) errors.phone = "Phone number is required";

  if (values.about && values.about.length > 300) errors.about = "Maximum 300 characters allowed";

  if (!values.termsAccepted) errors.termsAccepted = "You must accept the terms";

  return errors;
};
