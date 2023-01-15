import { Roboto } from '@next/font/google';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400'],
});

export default function Layout({ children }) {
  return (
    <div className={roboto.className}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/pokeball.png" />
      </Head>

      <Navbar />

      <main className="container">
        {children}
      </main>

      <Footer />
    </div>
  );
}
