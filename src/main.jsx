import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ScoreProvider } from './components/scorecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/quiz-app">
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </BrowserRouter>
  </StrictMode>
)