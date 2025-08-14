import { useState } from 'react';
import { useContactForm } from './hooks/useContactForm';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { errorMessage, loading, submitForm, successMessage } = useContactForm();

  function handleSubmit(event) {
    event.preventDefault();
    submitForm({ name, email });
    setName('');
    setEmail('');
  }

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  }

  return (
    <>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Enter Name'
          value={name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='email'
          placeholder='Enter Email'
          value={email}
          onChange={handleChange}
        />
        <button
          type='submit'
          disabled={loading}
        >
          {loading ? <p>sending...</p> : <p>send</p>}
        </button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </>
  );
}

export default App;
