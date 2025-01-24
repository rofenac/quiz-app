import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content/70">
      <div className="container mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl flex items-center">
            <div className="avatar">
              <div className="w-12 h-8 rounded bg-accent flex items-center justify-center">
                <span className="text-black text-lg font-bold leading-none">PMP</span>
              </div>
            </div>
            <span className="ml-3 text-neutral-content">DFPMPQA</span>
          </Link>
        </div>
        <nav className="menu menu-horizontal px-1">
          <li>
            <a className="text-neutral-content/70">© 2025 David Derr</a>
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
      </div>
    </footer>
  )
}

export default Footer