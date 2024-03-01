import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={'header' + (scrolled ? ' shadow' : '')}>
      <Navbar />
    </header>
  )
}

export default Header
