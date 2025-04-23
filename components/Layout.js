import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title = 'CPAN144 App' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
