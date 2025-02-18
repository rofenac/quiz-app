import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Logo from './logo'
import ThemeController from './ThemeController'

function Header({ children }) {
  const headerRef = useRef(null)

  useGSAP(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.3 }
      )
    }
  }, [])

  return (
    <header ref={headerRef}>
      <div className="navbar container mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <Logo />
          <div className="divider divider-horizontal" />
          <nav className="flex items-center space-x-5">{children}</nav>
        </div>
        <ThemeController />
      </div>
    </header>
  )
}

export default Header