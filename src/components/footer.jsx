import Logo from './logo'

function FooterNav() {
  return (
    <nav className="menu menu-horizontal px-1">
      <li>
        <span className="text-info pointer-events-none">© 2025 David Derr</span>
      </li>
      <li>
        <a
          href="https://github.com/rofenac"
          className="hover:text-accent text-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
    </nav>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Logo />
        <FooterNav />
      </div>
    </footer>
  )
}

export default Footer