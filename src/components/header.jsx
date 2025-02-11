import Logo from './logo'
import ThemeController from './ThemeController'

function Header({ children }) {
  return (
    <header>
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