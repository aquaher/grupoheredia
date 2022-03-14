import { Html, Head, Main, NextScript } from 'next/document'
import Layout from '../components/Layout'
export default function Document() {
    
  return (
    <Html>
      <Head>
          <Layout></Layout>
    </Head>
      <body>
        <Main />
        <NextScript />
        <div id='modal-root'></div>
      </body>
    </Html>
  )
}