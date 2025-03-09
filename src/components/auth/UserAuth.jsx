import { useState, useContext } from 'react'
import { AuthContext } from './AuthContext'

// Login Form Component
export const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { login, loading } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const result = await login(username, password)
    if (!result.success) {
      setError(result.error)
    } else if (onClose) {
      onClose()
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Login</h2>
      {error && <div className="alert alert-error mb-5 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{error}</span>
      </div>}

      <form onSubmit={handleSubmit}>
        <div className="form-control mb-5">
          <div className="mb-3">
            <label className="label">
              <span className="label-text">Username or Email</span>
            </label>
          </div>
          <input
            type="text"
            className="input input-bordered input-primary shadow-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-7">
          {/* Direct spacing between label and input */}
          <div className="mb-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
          </div>
          <input
            type="password"
            className="input input-bordered input-primary shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full mt-4 shadow-md"
          disabled={loading}
        >
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Login'}
        </button>
      </form>
    </div>
  )
}

// Registration Form Component
export const RegisterForm = ({ onClose }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const { register, loading } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    const result = await register(username, email, password, displayName)
    if (!result.success) {
      setError(result.error)
    } else if (onClose) {
      onClose()
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Register</h2>
      {error && <div className="alert alert-error mb-5 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{error}</span>
      </div>}

      <form onSubmit={handleSubmit}>
        <div className="form-control mb-5">
          <div className="mb-3">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
          </div>
          <input
            type="text"
            className="input input-bordered input-primary shadow-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-5">
          <div className="mb-3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
          </div>
          <input
            type="email"
            className="input input-bordered input-primary shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-5">
          <div className="mb-3">
            <label className="label">
              <span className="label-text">Display Name</span>
            </label>
          </div>
          <input
            type="text"
            className="input input-bordered input-primary shadow-sm"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="This will appear on leaderboards"
          />
          <label className="label mt-2">
            <span className="label-text-alt">If left blank, your username will be used</span>
          </label>
        </div>

        <div className="form-control mb-5">
          <div className="mb-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
          </div>
          <input
            type="password"
            className="input input-bordered input-primary shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-7">
          <div className="mb-3">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
          </div>
          <input
            type="password"
            className="input input-bordered input-primary shadow-sm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full mt-4 shadow-md"
          disabled={loading}
        >
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Register'}
        </button>
      </form>
    </div>
  )
}

// Auth Modal Component
export const AuthModal = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState(initialTab)
  const { isAuthenticated } = useContext(AuthContext)

  // If user is authenticated and the modal is open, close it
  if (isAuthenticated && isOpen && onClose) {
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal modal-open">
      <div className="modal-box bg-base-200">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-primary">
            {activeTab === 'login' ? 'Login' : 'Register'}
          </h2>
          {isAuthenticated && (
            <button onClick={onClose} className="btn btn-circle btn-sm btn-ghost">
              ✕
            </button>
          )}
        </div>

        <div className="tabs tabs-boxed mb-6">
          <a
            className={`tab ${activeTab === 'login' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </a>
          <a
            className={`tab ${activeTab === 'register' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </a>
        </div>

        {activeTab === 'login' ?
          <LoginForm onClose={onClose} /> :
          <RegisterForm onClose={onClose} />
        }
      </div>
    </div>
  )
}