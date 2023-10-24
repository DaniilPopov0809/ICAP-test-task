import { Button } from '@mui/material';
import { Formik, Form, Field, FormikHelpers, FieldProps } from 'formik';
import { useAppDispatch } from '../../../hooks/redux';
import { authOperation } from '../../../redux/auth/operations';
import FieldInput from '../FieldInput/FieldInput';
import { InitialValues } from '../../../types/auth';

const initialValues: InitialValues = {
  username: '',
  password: ''
}

export const LoginForm = () => {
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
            Enter the Matrix
          </Button>
        </Form>
      )}
    </Formik>
  );
}