import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/theme'
import { about, projects, skills, contact } from '../data/portfolio'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import Brightness2Icon from '@material-ui/icons/Brightness2'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const { name } = about

  const toggleNavListOverlay = () => {
    showNavList
      ? document.body.classList.remove('disable-scroll')
      : document.body.classList.add('disable-scroll')
    setShowNavList(!showNavList)
  }

  const hideNavListOverlay = () => {
    document.body.classList.remove('disable-scroll')
    setShowNavList(false)
  }

  useEffect(() => {
    const hideNavListOverlayIfScreenTooBig = () =>
      window.innerWidth > 600 ? hideNavListOverlay() : null
    window.addEventListener('resize', hideNavListOverlayIfScreenTooBig)
    return () =>
      window.removeEventListener('resize', hideNavListOverlayIfScreenTooBig)
  }, [])

  return (
    <nav className='nav container animate__animated animate__fadeIn animate__delay-5s'>
      <ul
        className='nav__list'
        style={{ display: showNavList ? 'flex' : null }}
      >
        <li className='nav__list-item'>
          <strong>
            <a href='#top' onClick={hideNavListOverlay} className='link'>
              {name || 'About Me'}
            </a>
          </strong>
        </li>

        {projects.length && (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={hideNavListOverlay}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        )}

        {skills.length && (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={hideNavListOverlay}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        )}

        {contact.email && (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={hideNavListOverlay}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        )}
      </ul>

      <button
        type='button'
        onClick={toggleNavListOverlay}
        aria-label='toggle navigation'
        className='btn btn--icon nav__button nav__hamburger'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>

      <button
        type='button'
        onClick={toggleTheme}
        aria-label='toggle theme'
        className='btn btn--icon nav__button nav__theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </nav>
  )
}

export default Navbar
