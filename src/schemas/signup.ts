// schema/passwordSchema.ts
import { object, string, ref } from "yup";

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};
export const signupSchema = object({
  first_name: string().max(50).required("First Name is required"),
  last_name: string().max(50).required("Last Name is required"),
  email: string().email().required("Email is required"),
  password: string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, "Your password must have at least 1 number")
    .matches(/[a-z]/, "Your password must have at least 1 lowercase letter")
    .matches(/[A-Z]/, "Your password must have at least 1 uppercase letter"),
  confirmPassword: string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Passwords does not match"),
});
