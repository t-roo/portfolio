import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white dark:bg-slate-600">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp
