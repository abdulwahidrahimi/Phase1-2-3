import Layout from '../components/Layout';
import { useState } from 'react';

export default function About() {
  const [show, setShow] = useState(false);

  return (
    <Layout>
      <h2>About This Project</h2>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Details
      </button>
      {show && <p>This project is built using Next.js and React for CPAN144.</p>}
    </Layout>
  );
}
