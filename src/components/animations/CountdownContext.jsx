import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CountdownOverlay from './CountdownOverlay'

export const CountdownContext = createContext()

export function CountdownProvider({ children }) {
  const navigate = useNavigate()
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [targetRoute, setTargetRoute] = useState(null)

  // This function triggers the countdown overlay
  const navigateWithCountdown = route => {
    setTargetRoute(route)
    setOverlayVisible(true)
  }

  // When the overlay finishes its animation, navigate to the target route
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