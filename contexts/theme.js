import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    setThemeName(
      localStorage.getItem('themeName') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
    )
  }, [])

  const toggleTheme = () => {
    const newThemeName = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', newThemeName)
    setThemeName(newThemeName)
  }

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
