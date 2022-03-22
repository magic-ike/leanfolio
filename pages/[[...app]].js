import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import ScrollToTop from '../components/ScrollToTop'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function App() {
  const [isMounted, setIsMounted] = useState(false)
  const [{ themeName }] = useContext(ThemeContext)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div id='top' className={`${themeName} app`}>
      <Navbar />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
