import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CountdownOverlay from './CountdownOverlay'

export const CountdownContext = createContext()

export function CountdownProvider({ children }) {
  const navigate = useNavigate()
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [targetRoute, setTargetRoute] = useState(null)

  const navigateWithCountdown = route => {
    setTargetRoute(route)
    setOverlayVisible(true)
  }

  const handleOverlayComplete = () => {
    setOverlayVisible(false)
    if (targetRoute) {
      navigate(targetRoute)
    }
  }

  return (
    <CountdownContext.Provider value={{ navigateWithCountdown }}>
      {children}
      {overlayVisible && (
        <CountdownOverlay onComplete={handleOverlayComplete} />
      )}
    </CountdownContext.Provider>
  )
}