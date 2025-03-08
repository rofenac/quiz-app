import { useState, useContext, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { AuthModal } from './UserAuth'

function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    // Only show welcome modal if user is not authenticated
    if (!isAuthenticated) {
      setIsOpen(true)
    }
  }, [isAuthenticated])

  const handleClose = () => {
    // Only allow closing if authenticated
    if (isAuthenticated) {
      setIsOpen(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome to the Darn Fine PMP Quiz App!</h2>

        <div className="p-4 bg-base-200 rounded-lg mb-6">
          <p className="text-lg mb-4">
            Ready to conquer the PMP certification exam? You're in the right place!
          </p>
          <p className="mb-4">
            Our interactive quizzes cover all domains of the PMP exam, helping you master:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>People skills for effective leadership</li>
            <li>Process expertise for project delivery</li>
            <li>Business environment knowledge for strategic alignment</li>
          </ul>
          <p className="font-medium">
            Please log in or create an account to begin your PMP mastery journey!
          </p>
        </div>

        <div className="flex justify-end">
          {isAuthenticated && (
            <button onClick={handleClose} className="btn btn-primary">
              Let's Get Started!
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

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
    <>
      <WelcomeModal />
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
    </>
  )
}

export default WelcomeAuthWrapper