import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as yup from 'yup';
import css from './LoginForm.module.css';
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };
  const contactShema = yup.object().shape({
    email: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: yup
      .string()
      .min(7, "Too short")
      .max(13, "Too long")
      .required("Required"),
  });
  
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, action) => {
    const user = values;
    dispatch(logIn(user));
    action.resetForm();
  }

  return (
    <Formik
    initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactShema}>
      <Form className={css.form}>
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
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  )
}

export default LoginForm;