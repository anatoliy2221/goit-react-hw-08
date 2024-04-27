import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Button } from "@mui/material";


const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const contactShema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: yup
      .string()
      .min(7, "Too short")
      .max(13, "Too long")
      .required("Required"),
  });

  const nameFieldId = useId();
  const phoneFieldId = useId();

const handleSubmit = (values, action) => {
  dispatch(addContact(values));
  action.resetForm();
}  

return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactShema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={css.field}
          type="text"
          name="name"
          id={nameFieldId}
        ></Field>
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={phoneFieldId}>Number</label>
        <Field
          className={css.field}
          type="phone"
          name="number"
          id={phoneFieldId}
        ></Field>
        <ErrorMessage className={css.error} name="number" component="span" />
        <Button variant="contained" size="small" type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
