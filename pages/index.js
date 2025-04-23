import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Welcome from '../components/Welcome';

const Counter = dynamic(() => import('../components/Counter'), {
  loading: () => <p>Loading Counter...</p>,
});

export default function Home() {
  return (
    <Layout title="Home | CPAN144">
      <Welcome />
      <Counter />
    </Layout>
  );
}
