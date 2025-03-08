import { useContext } from 'react'
import { AuthContext } from './auth/AuthContext'
import { useNavigate } from 'react-router-dom'

function SignOutButton() {
  const { currentUser, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  if (!currentUser) return null

  const handleSignOut = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="flex items-center gap-2">
      <div className="text-sm mr-2">
        Hello, <span className="font-medium">{currentUser.displayName || currentUser.username}</span>
      </div>
      <button onClick={handleSignOut} className="btn btn-sm btn-error">
        Sign Out
      </button>
    </div>
  )
}

export default SignOutButton