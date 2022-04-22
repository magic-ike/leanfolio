import Head from 'next/head'
import { ThemeProvider } from '../contexts/theme'
import { ActivityProvider } from '../contexts/activity'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/About.css'
import '../styles/Contact.css'
import '../styles/Footer.css'
import '../styles/Navbar.css'
import '../styles/ProjectCard.css'
import '../styles/Projects.css'
import '../styles/ScrollToTop.css'
import '../styles/Skills.css'
import '../styles/Activity.css'
import '../styles/TrackCard.css'
import 'animate.css'

// google analytics
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ga_measurement_id, pageview } from '../lib/google-analytics'
// /google analytics

function MyApp({ Component, pageProps }) {
  // google analytics
  // will log page views on route change if new routes are added
  const router = useRouter()
  useEffect(() => {
    if (!ga_measurement_id) return
    const handleRouteChange = (url) => pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])
  // /google analytics

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>John Smith</title>
      </Head>
      <ThemeProvider>
        <ActivityProvider>
          <Component {...pageProps} />
        </ActivityProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
