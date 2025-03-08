import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { CountdownProvider } from './components/animations/CountdownContext'
import { ScoreProvider } from './components/scorecontext.jsx'
import { AuthProvider } from './components/auth/AuthContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <ScoreProvider>
          <CountdownProvider>
            <App />
          </CountdownProvider>
        </ScoreProvider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>
)