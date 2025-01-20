import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import People from './pages/people'
import Process from './pages/process'
import Business from './pages/business'
import HowWorks from './pages/howworks'
import YourScores from './pages/yourscores'
import Leaderboard from './pages/leaderboard'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<People />} />
        <Route path="/process" element={<Process />} />
        <Route path="/business" element={<Business />} />
        <Route path="/howworks" element={<HowWorks />} />
        <Route path="/yourscores" element={<YourScores />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  )
}

export default App