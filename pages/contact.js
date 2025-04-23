import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you, ${name}!`);
  }

  return (
    <Layout>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}
