import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { AuthContext } from './components/auth/AuthContext'
import HomePage from './pages/homepage'
import People from './pages/people'
import Process from './pages/process'
import Business from './pages/business'
import HowWorks from './pages/howworks'
import Leaderboard from './pages/leaderboard'
import Quiz from './pages/quiz'

gsap.registerPlugin(useGSAP)

// Protected Route component to guard routes requiring authentication
function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useContext(AuthContext)

  // If still loading auth status, show nothing
  if (loading) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>
  }

  // If not authenticated, redirect to home
  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  // Otherwise, show the protected content
  return children
}

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme')
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Protected routes that require authentication */}
        <Route path="/people" element={
          <ProtectedRoute>
            <People />
          </ProtectedRoute>
        } />

        <Route path="/process" element={
          <ProtectedRoute>
            <Process />
          </ProtectedRoute>
        } />

        <Route path="/business" element={
          <ProtectedRoute>
            <Business />
          </ProtectedRoute>
        } />

        <Route path="/howworks" element={
          <ProtectedRoute>
            <HowWorks />
          </ProtectedRoute>
        } />

        <Route path="/leaderboard" element={
          <ProtectedRoute>
            <Leaderboard />
          </ProtectedRoute>
        } />

        <Route path="/leaderboard/:domain" element={
          <ProtectedRoute>
            <Leaderboard />
          </ProtectedRoute>
        } />

        <Route path="/quiz/:domain" element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App