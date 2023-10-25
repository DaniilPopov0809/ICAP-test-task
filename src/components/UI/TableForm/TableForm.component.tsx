import { Button } from '@mui/material';
import { Formik, Form, Field, FormikHelpers, FieldProps } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { selectTableEl } from '../../../redux/table/tableSelectors';
import { tableOperation } from '../../../redux/table/operations';
import FieldInput from '../FieldInput/FieldInput';
import { InitialValuesTableForm } from '../../../types/table';
import { RotatingLines } from "react-loader-spinner";
import { validationTableForm } from '../../../schemas';
import { selectStatusLogin } from '../../../redux/auth/authSelectors';
// import { toast } from "react-toastify";
import styles from './TableForm.module.scss';

interface ITableFormProps {
  isEdit?: boolean;
  onClose: () => void;
}

const inputsData: string[] = ['name', 'email', 'birthday_date', 'phone_number', 'address'];

const TableForm = ({ isEdit, onClose }: ITableFormProps) => {
  const tableEl = useAppSelector(selectTableEl);

  const initialValues: InitialValuesTableForm = {
    name: isEdit ? (tableEl?.name || '') : '',
    email: isEdit ? (tableEl?.email || '') : '',
    birthday_date: isEdit ? (tableEl?.birthday_date || '') : '',
    phone_number: isEdit ? (tableEl?.phone_number || '') : '',
    address: isEdit ? (tableEl?.address || '') : '',
  }


  const status = useAppSelector(selectStatusLogin)
  const dispatch = useAppDispatch();
  const handleSubmit = async (
    values: InitialValuesTableForm,
    { resetForm, setSubmitting }: FormikHelpers<InitialValuesTableForm>
  ): Promise<void> => {
    const sendData: InitialValuesTableForm = {
      name: values.name,
      email: values.email,
      birthday_date: values.birthday_date,
      phone_number: values.phone_number,
      address: values.address,
    };
    setSubmitting(true);
    if (isEdit && tableEl) {
      dispatch(tableOperation.updateTable({ id: tableEl.id, data: sendData }));
    }
    else {
      dispatch(tableOperation.addToTable(sendData));
    }

    setSubmitting(false);
    resetForm();
    onClose();

  };
  return (
    <Formik initialValues={initialValues}
      validationSchema={validationTableForm}
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form autoComplete="off" className={styles.form}>
          {inputsData.map((input) =>
            <Field name={input} key={input}>
              {({ field, meta, form }: FieldProps) => (
                <FieldInput
                  field={field}
                  meta={meta}
                  form={form}
                  placeholder=''
                  id={input}
                  label={input}
                  type="text"
                  name={input}
                  aria-label=''
                />
              )}
            </Field>)}

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
            {!isEdit? 'Add' : 'Save'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default TableForm;