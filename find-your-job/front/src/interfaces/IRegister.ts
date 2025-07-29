export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: "candidate" | "recruiter" | "admin";
  country: string;
  state: string;     
  city: string;
  phone?: string;
  termsAccepted: boolean;
}
