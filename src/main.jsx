import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CountdownProvider } from './components/animations/CountdownContext'
import { ScoreProvider } from './components/scorecontext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/quiz-app/">
      <ScoreProvider>
        <CountdownProvider>
          <App />
        </CountdownProvider>
      </ScoreProvider>
    </BrowserRouter>
  </StrictMode>
)