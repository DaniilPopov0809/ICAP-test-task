import * as Yup from "yup";
import { InitialValuesTableForm } from "../types/table";

const phoneRegExp = /^\+\d{12}$/;
const dateOfBirthRegExp = /^\d{4}-\d{2}-\d{2}$/;

const validationTableForm: Yup.Schema<InitialValuesTableForm> = Yup.object({
  name: Yup.string()
    .required("Please enter name")
    .max(150, 'Name must not be more than 150 characters.'),
  email: Yup.string()
    .required("Email is required")
    .email("Is not valid email"),
  phone_number: Yup.string()
  .required("Phone is required")
  .matches(phoneRegExp, 'Invalid phone number'),
  birthday_date: Yup.string()
  .required("Phone is required")
  .matches(dateOfBirthRegExp, 'Invalid date of birth. Use YYYY-MM-DD format'),
  address: Yup.string().required("Email is required")
});

export default validationTableForm; 