import { useState } from 'react';
import ContactList from '../ContactList/ContactList';
import './App.module.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm />
        <SearchBox /> */}
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
