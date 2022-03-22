import { Html, Head, Main, NextScript } from 'next/document'
import Layout from '../components/Layout'
import Social from '../components/Social'
export default function Document() {
    
  return (
    <Html lang='es'>
      <Head>
          <Layout></Layout>
    </Head>
      <body>
        <Main />
        <Social></Social>
        <NextScript />
        <div id='modal-root'></div>
      </body>
    </Html>
  )
}