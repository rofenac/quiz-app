import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import People from './pages/people'
import Process from './pages/process'
import Business from './pages/business'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<People />} />
        <Route path="/process" element={<Process />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </div>
  )
}

export default App