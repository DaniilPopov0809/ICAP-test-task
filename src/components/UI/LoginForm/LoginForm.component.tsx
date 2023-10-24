import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { Formik, Form, Field, FormikHelpers, FieldProps } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { authOperation } from '../../../redux/auth/operations';
import FieldInput from '../FieldInput/FieldInput';
import { InitialValues } from '../../../types/auth';
import { RotatingLines } from "react-loader-spinner";
import { validationLoginForm } from '../../../schemas';
import { selectStatusLogin } from '../../../redux/auth/authSelectors';
import { toast } from "react-toastify";
import styles from './LoginForm.module.scss';

const initialValues: InitialValues = {
  username: '',
  password: ''
}

export const LoginForm = () => {
  const [checkboxиBlueChecked, setCheckboxBlueChecked] = useState(false);
  const [checkboxRedChecked, setCheckboxRedChecked] = useState(false);

  const status = useAppSelector(selectStatusLogin)
  const dispatch = useAppDispatch();
  const handleSubmit = async (
    values: InitialValues,
    { resetForm, setSubmitting }: FormikHelpers<InitialValues>
  ): Promise<void> => {
    const sendData: InitialValues = {
      username: values.username,
      password: values.password,
    };
    if (checkboxиBlueChecked || checkboxRedChecked) {
    setSubmitting(true);

    dispatch(authOperation.login(sendData));

    setSubmitting(false);
    resetForm();
    }
    else {
      toast.info('To enter the Matrix, please choose a pill.')
    }
  };

  const handleCheckboxBlueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxBlueChecked(event.target.checked);
  };

  const handleCheckboxRedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxRedChecked(event.target.checked);
  };
  return (
    <Formik initialValues={initialValues}
      validationSchema={validationLoginForm} 
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form autoComplete="off" className={styles.form}>
          <Field name="username">
            {({ field, meta, form }: FieldProps) => (
              <FieldInput
                field={field}
                meta={meta}
                form={form}
                placeholder="Who are you, warrior?:)"
                id="username"
                label="user"
                type="text"
                name="username"
                aria-label="username"
              />
            )}
          </Field>
          <Field name="password">
            {({ field, meta, form }: FieldProps) => (
              <FieldInput
                field={field}
                meta={meta}
                form={form}
                placeholder="Your password?"
                id="password"
                label="password"
                type="password"
                name="password"
                aria-label="password"
              />
            )}
          </Field>
          <p>Choose the pill</p>
          <div>
            <Checkbox onChange={handleCheckboxRedChange} checked={checkboxRedChecked} style={{ color: '#eb3795' }} />
            <span>or</span>
            <Checkbox onChange={handleCheckboxBlueChange} checked={checkboxиBlueChecked} style={{ color: '#204ffe' }} />
          </div>

          <Button
            variant="contained"
            color='success'
            type="submit"
            disabled={isSubmitting}
          >
            {status === "loading" && <RotatingLines
              strokeColor="#20fe75"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}
            />}
            Enter the Matrix
          </Button>
        </Form>
      )}
    </Formik>
  );
}