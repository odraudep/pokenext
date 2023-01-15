import { Analytics } from '@vercel/analytics/react';
import Layout from '@/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
