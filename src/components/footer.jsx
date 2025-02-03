import Logo from './logo'

function FooterNav() {
  return (
    <nav className="menu menu-horizontal px-1">
      <li>
        <span className="text-neutral-content/70 pointer-events-none">© 2025 David Derr</span>
      </li>
      <li>
        <a
          href="https://github.com/rofenac"
          className="hover:text-neutral-content text-neutral-content"
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
    <footer className="footer bg-neutral text-neutral-content/70">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Logo />
        <FooterNav />
      </div>
    </footer>
  )
}

export default Footer