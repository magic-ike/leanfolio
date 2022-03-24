import { useContext, useState, useEffect } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../contexts/theme'
import { ActivityContext } from '../contexts/activity'
import { about, projects, skills, activity, contact } from '../data/portfolio'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [{ nowPlaying, topTracks }] = useContext(ActivityContext)
  const [showNavList, setShowNavList] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { name } = about
  const { showNowPlaying, showTopTracks } = activity

  const toggleNavList = () => setShowNavList(!showNavList)

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  }, [])

  return (
    <nav className={`center nav ${scrolled ? 'nav__shadow' : ''}`}>
      <div className='nav__content'>
        <ul
          style={{ display: showNavList ? 'flex' : null }}
          className='nav__list'
        >
          {name && (
            <li className='nav__list-item'>
              <strong>
                <a href='#top' onClick={toggleNavList} className='link'>
                  {name}
                </a>
              </strong>
            </li>
          )}

          {skills.length && (
            <li className='nav__list-item'>
              <a
                href='#skills'
                onClick={toggleNavList}
                className='link link--nav'
              >
                Skills
              </a>
            </li>
          )}

          {projects.length && (
            <li className='nav__list-item'>
              <a
                href='#projects'
                onClick={toggleNavList}
                className='link link--nav'
              >
                Projects
              </a>
            </li>
          )}

          {((showNowPlaying && nowPlaying) || (showTopTracks && topTracks)) && (
            <li className='nav__list-item'>
              <a
                href='#activity'
                onClick={toggleNavList}
                className='link link--nav'
              >
                Activity
              </a>
            </li>
          )}

          {contact.email && (
            <li className='nav__list-item'>
              <a
                href='#contact'
                onClick={toggleNavList}
                className='link link--nav'
              >
                Contact
              </a>
            </li>
          )}
        </ul>

        <button
          type='button'
          onClick={toggleNavList}
          className='btn btn--icon nav__hamburger'
          aria-label='toggle navigation'
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>

        <button
          type='button'
          onClick={toggleTheme}
          className='btn btn--icon nav__theme'
          aria-label='toggle theme'
        >
          {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
