import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <Link href="/">Home</Link> | 
      <Link href="/about">About</Link> | 
      <Link href="/contact">Contact</Link> | 
      <Link href="/user/123">User</Link>
    </nav>
  );
}
