import { useState, useContext } from 'react'
import { ScoreContext } from '../scorecontext.jsx'

// Login Form Component
export const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { login, loading } = useContext(ScoreContext)

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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {error && <div className="alert alert-error mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Username or Email</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
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
  const { register, loading } = useContext(ScoreContext)

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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      {error && <div className="alert alert-error mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Display Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="This will appear on leaderboards"
          />
          <label className="label">
            <span className="label-text-alt">If left blank, your username will be used</span>
          </label>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  )
}

// Auth Modal Component
export const AuthModal = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState(initialTab)

  if (!isOpen) return null

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {activeTab === 'login' ? 'Login' : 'Register'}
          </h2>
          <button onClick={onClose} className="btn btn-circle btn-sm">
            ✕
          </button>
        </div>

        <div className="tabs tabs-boxed mb-4">
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