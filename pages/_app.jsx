import '../styles/globals.css'
import { useRouter } from "next/router";
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header'

  
function MyApp({ Component, pageProps }) {
 
  
  return (

    <  >   
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
