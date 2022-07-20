import {ChakraProvider} from '@chakra-ui/react'
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import theme from "../theme";
import Fonts from "../fonts";
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
