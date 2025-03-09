import { useState, useContext, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { AuthModal } from './UserAuth'

function WelcomeAuthWrapper() {
  const [showAuth, setShowAuth] = useState(false)
  const { isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    // Show auth modal if user is not authenticated
    if (!isAuthenticated) {
      setShowAuth(true)
    } else {
      setShowAuth(false)
    }
  }, [isAuthenticated])

  return (
    <AuthModal
      isOpen={showAuth}
      onClose={() => {
        // Only allow closing if authenticated
        if (isAuthenticated) {
          setShowAuth(false)
        }
      }}
      initialTab="login"
    />
  )
}

export default WelcomeAuthWrapper