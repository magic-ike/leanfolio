import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../contexts/theme'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'

function App() {
  const { themeName } = useContext(ThemeContext)
  const rootRef = useRef(null)

  useEffect(() => {
    const oldThemeName = themeName === 'dark' ? 'light' : 'dark'
    document.body.classList.remove(oldThemeName)
    document.body.classList.add(themeName)
  }, [themeName])

  useEffect(() => {
    window.setTimeout(() => {
      rootRef.current?.style.removeProperty('pointer-events')
    }, 5000)
  }, [])

  return (
    <div
      ref={rootRef}
      className='app'
      id='top'
      style={{ pointerEvents: 'none' }}
    >
      <Header />

      <main className='container'>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <div className='animate__animated animate__fadeIn animate__delay-5s'>
        <ScrollToTop />
      </div>

      <Footer />
    </div>
  )
}

export default App
