import { HTMLInputTypeAttribute } from "react";
import { ErrorMessage, FieldProps } from "formik";
import styles from "./FieldInput.module.scss";

interface FieldInputProps extends FieldProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  id: string;
  children?: React.ReactNode;
}

const FieldInput = ({
  field,
  meta,
  placeholder,
  name,
  label,
  id,
  type,
  children,
  ...props
}: FieldInputProps) => {
  // eslint-disable-next-line
  const { form, ...inputProps } = props;
  return (
    <div className={styles.field__container}>
       {label && <label htmlFor={name}>{label}:</label>}
      <input
        className={`mainFontSize ${styles.field__input} ${
          meta.touched && meta.error
            ? styles.error
            : meta.touched
            ? styles.success
            : ""
        }`}
        type={type}
        id={id}
        placeholder={placeholder}
        {...field}
        {...inputProps}
      />
      {children}
      <ErrorMessage
        className={styles.field__error}
        name={name}
        component="div"
      />
    </div>
  );
};
export default FieldInput;
