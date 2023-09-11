import '../styles/globals.css'
import { useRouter } from "next/router";
import { ChakraProvider } from '@chakra-ui/react'


  
function MyApp({ Component, pageProps }) {
 
  
  return (

    <ChakraProvider  >     
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
