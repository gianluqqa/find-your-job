import { IRegisterRecruiter } from "src/interfaces/IRegisterRecruiter";
import { IRegisterErrorsRecruiter } from "src/interfaces/IRegisterErrorsRecruiter";

export function validateRegisterRecruiter(
  formData: IRegisterRecruiter
): IRegisterErrorsRecruiter {
  const errors: IRegisterErrorsRecruiter = {};

  if (!formData.name.trim()) errors.name = "Name is required.";

  if (!formData.email.trim()) errors.email = "Email is required.";
  else if (!/^\S+@\S+\.\S+$/.test(formData.email))
    errors.email = "Invalid email format.";

  if (!formData.password) errors.password = "Password is required.";
  else if (formData.password.length < 6)
    errors.password = "Password must be at least 6 characters.";

  if (!formData.confirmPassword)
    errors.confirmPassword = "Confirm password is required.";
  else if (formData.confirmPassword !== formData.password)
    errors.confirmPassword = "Passwords do not match.";

  if (!formData.country.trim()) errors.country = "Country is required.";
  if (!formData.state.trim()) errors.state = "State is required.";
  if (!formData.city.trim()) errors.city = "City is required.";

  if (formData.phone && !/^\+?\d{7,15}$/.test(formData.phone))
    errors.phone = "Invalid phone number.";

  if (formData.about && formData.about.trim().length < 10)
    errors.about = "About section must be at least 10 characters.";

  if (!formData.company.trim()) errors.company = "Company is required.";

  if (!formData.category.trim()) errors.category = "Category is required.";

  if (!formData.termsAccepted)
    errors.termsAccepted = "You must accept the terms.";

  return errors;
}
