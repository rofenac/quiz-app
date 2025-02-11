import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className="btn btn-ghost normal-case text-xl flex items-center">
      <div className="avatar">
        <div className="w-12 h-8 rounded bg-accent flex items-center justify-center">
          <span className="text-black text-lg font-bold leading-none">PMP</span>
        </div>
      </div>
      <span className="ml-3">DFPMPQA</span>
    </Link>
  )
}

export default Logo