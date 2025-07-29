import { IRegister } from "../interfaces/IRegister";

export const validateRegister = (data: IRegister) => {
  if (!data.name || !data.email || !data.password || !data.confirmPassword ||
      !data.country || !data.state || !data.city) {
    return "Todos los campos obligatorios deben estar completos";
  }

  if (data.password !== data.confirmPassword) {
    return "Las contraseñas no coinciden";
  }

  if (!data.termsAccepted) {
    return "Debes aceptar los términos";
  }

  return null; // null significa que todo está bien
};
