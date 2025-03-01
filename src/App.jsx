import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import HomePage from './pages/homepage'
import People from './pages/people'
import Process from './pages/process'
import Business from './pages/business'
import HowWorks from './pages/howworks'
import Leaderboard from './pages/leaderboard'
import Quiz from './pages/quiz'

// Register GSAP plugins
gsap.registerPlugin(useGSAP)

function App() {
  useEffect(() => {
    // Get the theme from localStorage or fallback to the <html>'s data-theme attribute
    const savedTheme = localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme')
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<People />} />
        <Route path="/process" element={<Process />} />
        <Route path="/business" element={<Business />} />
        <Route path="/howworks" element={<HowWorks />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/leaderboard/:domain" element={<Leaderboard />} />
        <Route path="/quiz/:domain" element={<Quiz />} />
      </Routes>
    </div>
  )
}

export default App