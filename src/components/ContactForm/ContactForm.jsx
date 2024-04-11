import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { number } from 'prop-types';

// const startValues = {
//   name: '',
//   phone: '',
// };

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'too short')
    .max(50, 'Too long')
    .required('Required'),
  number: Yup.string()
    .min(3, 'too short')
    .max(50, 'Too long')
    .required('Required'),
});

export default function ContactForm(onAdd) {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(values.name);
    console.log(values.phone);
    onAdd({
      name: values.name,
      number: values.phone,
    });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component={name} />
        <label htmlFor={phoneFieldId}>Number</label>
        <Field type="tel" name="phone" id={phoneFieldId} />
        <ErrorMessage name="phone" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
