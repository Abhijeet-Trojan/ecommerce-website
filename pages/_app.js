import Layout from '../components/Layout'
import CartProvider from '../context/CartContext'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ChakraProvider>
  )
}

export default App
