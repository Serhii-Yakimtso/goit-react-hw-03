import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  const nameFieldId = useId();

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Find contacts by name</label>
        <Field
          className={css.input}
          type="text"
          name="username"
          value={value}
          onChange={evt => onFilter(evt.target.value)}
          id={nameFieldId}
        />
      </Form>
    </Formik>
  );
}
