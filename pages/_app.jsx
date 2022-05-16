import '../styles/globals.css'
import {NextUIProvider, createTheme, Text} from '@nextui-org/react'

const theme = createTheme({
  type: "dark"
})


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>

  )
  
}

export default MyApp
