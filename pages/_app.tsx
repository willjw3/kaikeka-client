import type { AppProps } from 'next/app'
import {ClientProvider} from 'helpers/graphql/client'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import MainLayout from '../components/layouts/MainLayout'

const theme = createTheme({
  components: {
      MuiFormLabel: {
          styleOverrides: {
              asterisk: { color: "red" },
          },
      },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (<ClientProvider>
    <ThemeProvider {...{theme}}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  </ClientProvider>)
}
