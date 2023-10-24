import { Button } from '@mui/material';
import { Formik, Form, Field, FormikHelpers, FieldProps } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { authOperation } from '../../../redux/auth/operations';
import FieldInput from '../FieldInput/FieldInput';
import { InitialValues } from '../../../types/auth';
import { RotatingLines } from "react-loader-spinner";
import { selectStatusLogin } from '../../../redux/auth/authSelectors';

const initialValues: InitialValues = {
  username: '',
  password: ''
}

export const LoginForm = () => {
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

    setSubmitting(true);

    dispatch(authOperation.login(sendData));

    setSubmitting(false);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues}
      // validationSchema={validationSchema} 
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form autoComplete="off">
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
          <Button
            variant="outlined"
            type="submit"
            disabled={isSubmitting}
            style={{ marginTop: '20px' }}
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