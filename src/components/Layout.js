import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/pokeball.png" />
      </Head>

      <Navbar />

      <main className="container">
        {children}
      </main>

      <Footer />
    </>
  );
}
