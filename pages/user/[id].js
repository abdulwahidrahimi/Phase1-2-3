import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h2>User Page</h2>
      <p>Showing user ID: {id}</p>
    </Layout>
  );
}
