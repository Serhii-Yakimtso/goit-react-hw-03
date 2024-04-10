import { FaPhone, FaUser } from 'react-icons/fa6';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.contact}>
          <FaUser className={css.icon} />
          {name}
        </p>

        <p className={css.contact}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
