/* eslint-disable react/jsx-props-no-spreading */

// import App from 'next/app'
import Head from 'next/head'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/About.css'
import '../styles/Contact.css'
import '../styles/Footer.css'
import '../styles/Navbar.css'
import '../styles/ProjectContainer.css'
import '../styles/Projects.css'
import '../styles/ScrollToTop.css'
import '../styles/Skills.css'
import { ThemeProvider } from '../contexts/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>John Smith</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
