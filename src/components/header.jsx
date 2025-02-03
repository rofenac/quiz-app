import Logo from './logo'

function Header({ children }) {
  return (
    <header className="bg-neutral">
      <div className="navbar container mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <div className="divider divider-horizontal" />
          <nav className="flex items-center space-x-5">{children}</nav>
        </div>
      </div>
    </header>
  )
}

export default Header