import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as yup from 'yup';
import css from './RegistrationForm.module.css';
import { register } from "../../redux/auth/operations";
import { Button } from "@mui/material";

const RegistrationForm = () => {

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const userShema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: yup
      .string()
      .email("Must be a valid email!")
      .required("Required"),
    password: yup
      .string()
      .min(8, "Password must be min 8 characters!")
      .required("Required"),
  });
  
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  }

  return (
    <Formik
    initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userShema}>
      <Form className={css.form}>
      <label htmlFor={usernameFieldId}>
          Username
        </label>
        <Field  className={css.field}
          type="text"
          name="name"
          id={emailFieldId}></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={emailFieldId}>
          Email
        </label>
        <Field  className={css.field}
          type="email"
          name="email"
          id={emailFieldId} ></Field>
          <ErrorMessage className={css.error} name="email" component="span" />
        <label htmlFor={passwordFieldId}>
          Password
        </label>
        <Field 
        className={css.field}
          type="password"
          name="password"
          id={passwordFieldId}></Field>
          <ErrorMessage className={css.error} name="password" component="span" />
        <Button variant="contained" type="submit">Register</Button>
      </Form>
    </Formik>
  )
}

export default RegistrationForm;
