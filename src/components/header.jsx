import { Link } from 'react-router-dom'

function Header({
  firstLink,
  secondLink,
  thirdLink,
  fourthLink,
}) {
  return (
    <header className="bg-neutral">
      <div className="navbar container mx-auto px-5 flex items-center justify-between">
        {/* Logo + Text */}
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl flex items-center">
            <div className="avatar">
              <div className="w-12 h-8 rounded bg-accent flex items-center justify-center">
                <span className="text-black text-lg font-bold leading-none">PMP</span>
              </div>
            </div>
            <span className="ml-3 text-neutral-content">DFPMPQA</span>
          </Link>
          <div className="divider divider-horizontal" />
          <nav className="flex items-center space-x-5">
            <a className="text-neutral-content/60 hover:text-neutral-content">{firstLink}</a>
            <a className="text-neutral-content/60 hover:text-neutral-content">{secondLink}</a>
            <a className="text-neutral-content/60 hover:text-neutral-content">{thirdLink}</a>
            <a className="text-neutral-content/60 hover:text-neutral-content">{fourthLink}</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header