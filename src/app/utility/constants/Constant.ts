import { RoutePaths } from "../enums/route.enums";

export const Constant = {
  EMAIL_LABLE: "Email Address",  
  PRIVACY_POLICY: "Privacy Policy",
  PASSWORD_LABLE: "Password",
  CONFIRM_PASSWORD_LABLE: "Confirm Password",
  NEW_PASSWORD_LABLE: "New Password",
  PASSWORD_VALIDATION:
    "Must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character",
  FORGOT_PASSWORD_LINK: "Lost Your Password?",
  REGISTRATION_PASSWORD_LINK: "Create an account",

  PASSWORD_EXPRESSION:
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
  PASSWORD_MATCH_VALIDATION: "Confirm Password must match with Password",
  EMAIL_ADDRESS_VALIDATION: "Email is Required",
  EMAIL_ADDRESS_VALIDATION_EXPRESSION: "Email is invalid",
  PAGELIST_NOT_DISPLAY_NAVBAR: [
    RoutePaths.Home,
    RoutePaths.Login,
    RoutePaths.Register,
    RoutePaths.ResetPassword,
    RoutePaths.ForgotPassword,
  ],
  PAGESIZE_OPTIONS: [5, 10, 15, 20],
};

export const UserValidation = {
  FirstNameMinValidation: "First Name must be at least 3 characters",
  FirstNameMaxValidation: "First Name can have a maximum of 20 characters",
  FristNameValidation: "First Name is required",
  LastNameMinValidation: "Last Name must be at least 3 characters",
  LastNameMaxValidation: "Last Name can have a maximum of 20 characters",
  LastNameValidation: "Last Name is required",
  PasswordValidation:
    "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
  PasswordLength: "Password must have at least 8 characters",
  PasswordRequired: "Password is required",
  PhoneValidation: "Phone Number is required",
  PhoneLength: "Phone Number must be 10 digits",
  CityValidation: "City is required",
  StatusValidation: "Status is required",
  ConfirmPasswordValidation: "Confirm Password is required",
  EmailValidation: "Invalid Email",
  EmailRequired: "Email is required",
  ConfirmPasswordMatch: "Confirm Password Is not Matching",
  PasswordExpression:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
};