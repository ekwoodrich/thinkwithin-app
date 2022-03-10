import '../styles/globals.css'
import create from 'zustand'
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {} // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // optional
  }
})








function MyApp({ Component, pageProps }) {
  return  <NextThemesProvider
  defaultTheme="dark"
  attribute="class"
  value={{
    light: lightTheme.className,
    dark: darkTheme.className
  }}
><NextUIProvider >
          <Component {...pageProps} />
        </NextUIProvider>
        </NextThemesProvider>

}

export default MyApp
