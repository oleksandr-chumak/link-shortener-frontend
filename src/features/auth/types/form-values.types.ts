export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string
}
export interface ResetRequestFormValues{
  email:string
}
export interface UserIdentificationValues{
  username: string,
  email: string
}
export interface PasswordSecurityValues{
  password: string;
  confirmPassword: string;
}