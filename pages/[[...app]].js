import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Activity from '../components/Activity'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'

function App() {
  const [isMounted, setIsMounted] = useState(false)
  const [{ themeName }] = useContext(ThemeContext)

  useEffect(() => {
    const oldThemeName = themeName === 'dark' ? 'light' : 'dark'
    document.body.classList.remove(oldThemeName)
    document.body.classList.add(themeName)
  }, [themeName])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div id='top' className='app'>
      <Navbar />

      <main>
        <About />
        <Skills />
        <Projects />
        <Activity />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
