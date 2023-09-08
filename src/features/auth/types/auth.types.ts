export interface LoginUser{
  email:string;
  password:string;
}
export interface RegisterUser{
  username:string;
  email:string;
  password:string;
  confirmPassword:string;
}
export interface ResetPassword{
  newPassword:string,
  newConfirmPassword:string,
  token:string
}