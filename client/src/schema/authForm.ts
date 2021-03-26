import * as yup from "yup";

export const schema = yup.object().shape({
  login: yup
    .string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Firstname is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

export const schemaEmail = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  login: yup
    .string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Firstname is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum")
    .max(10, "Too Long!"),
});
