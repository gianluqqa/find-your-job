export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: "candidate" | "recruiter";
  company?: string;
  category?: string;
  country: string;
  state: string;     
  city: string;
  phone?: string;
  about?: string;
  termsAccepted: boolean;
}
