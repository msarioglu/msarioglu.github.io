import '@/styles/style.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import Layout from '@/template/layout';

function MsrglApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MsrglApp
