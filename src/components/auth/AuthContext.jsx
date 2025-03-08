import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Check for stored auth token on component mount
    const checkAuthStatus = async () => {
      try {
        const storedUser = localStorage.getItem('currentUser')
        if (storedUser) {
          // Validate token with server
          const response = await fetch('/api/auth/validate', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${JSON.parse(storedUser).token}`
            }
          })

          if (response.ok) {
            setCurrentUser(JSON.parse(storedUser))
          } else {
            // Token invalid or expired
            localStorage.removeItem('currentUser')
          }
        }
      } catch (err) {
        console.error('Auth validation error:', err)
      } finally {
        setLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const login = async (username, password) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Store user data with token
      localStorage.setItem('currentUser', JSON.stringify(data))
      setCurrentUser(data)
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  const register = async (username, email, password, displayName) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password,
          displayName: displayName || username // Use username as displayName if not provided
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed')
      }

      // Automatically log in the user after successful registration
      localStorage.setItem('currentUser', JSON.stringify(data))
      setCurrentUser(data)
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('currentUser')
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        error,
        login,
        register,
        logout,
        isAuthenticated: !!currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider