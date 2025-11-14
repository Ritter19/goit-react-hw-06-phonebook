import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '1rem 1.5rem',
    backgroundColor: '#f8fafc',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    color: '#1e1e1e',
  };

  const headingStyle = {
    fontWeight: '800',
    margin: '0.5rem auto 1.5rem',
    textAlign: 'center',
    maxWidth: '480px',
    width: '100%',
    fontSize: '2rem',
    color: '#111',
  };

  const subHeadingStyle = {
    ...headingStyle,
    fontSize: '1.5rem',
    marginTop: '.5rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Phonebook</h1>
      <ContactForm />
      <h2 style={subHeadingStyle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
