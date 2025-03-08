import { createContext, useState, useEffect } from 'react'

export const ScoreContext = createContext()

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [leaderboards, setLeaderboards] = useState({
    full: [],
    people: [],
    process: [],
    business: []
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchLeaderboards()
  }, [])

  const fetchLeaderboards = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/leaderboard')

      if (response.ok) {
        const data = await response.json()
        setLeaderboards(data)
      }
    } catch (error) {
      console.error('Error fetching leaderboards:', error)
    } finally {
      setLoading(false)
    }
  }

  const addScoreToLeaderboard = async (userName, finalScore, domain = 'full') => {
    try {
      setLoading(true)

      // Get the authentication token
      const storedUser = localStorage.getItem('currentUser')
      const token = storedUser ? JSON.parse(storedUser).token : null

      if (!token) {
        console.error('No authentication token found')
        return
      }

      // Post the score to the server with authentication token
      const response = await fetch('/api/leaderboard/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          userName,
          score: finalScore,
          domain
        })
      })

      if (response.ok) {
        // Update local state with fresh data from server
        fetchLeaderboards()
      } else {
        const errorData = await response.json()
        console.error('Server error:', errorData)
      }
    } catch (error) {
      console.error('Error adding score to leaderboard:', error)
    } finally {
      setLoading(false)
    }
  }

  const clearLeaderboard = async (domain = 'full') => {
    try {
      setLoading(true)

      // Get the authentication token
      const storedUser = localStorage.getItem('currentUser')
      const token = storedUser ? JSON.parse(storedUser).token : null

      if (!token) {
        console.error('No authentication token found')
        return
      }

      // Request to clear the leaderboard on the server with authentication token
      const response = await fetch(`/api/leaderboard/clear/${domain}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        // Update local state
        fetchLeaderboards()
      } else {
        const errorData = await response.json()
        console.error('Server error:', errorData)
      }
    } catch (error) {
      console.error('Error clearing leaderboard:', error)
    } finally {
      setLoading(false)
    }
  }

  function updateScore(points) {
    setScore(prev => prev + points)
  }

  function resetScore() {
    setScore(0)
  }

  return (
    <ScoreContext.Provider
      value={{
        score,
        updateScore,
        resetScore,
        leaderboards,
        addScoreToLeaderboard,
        clearLeaderboard,
        loading
      }}
    >
      {children}
    </ScoreContext.Provider>
  )
}