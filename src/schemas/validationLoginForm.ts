import * as Yup from "yup";
import { InitialValues } from "../types/auth";

const validationLoginForm: Yup.Schema<InitialValues> = Yup.object({
  username: Yup.string()
    .required("Please enter name")
    .max(150, 'Name must not be more than 150 characters.'),
  password: Yup.string()
    .required("Password is required")
    .max(150, 'Name must not be more than 128 characters.'),
});

export default validationLoginForm; 