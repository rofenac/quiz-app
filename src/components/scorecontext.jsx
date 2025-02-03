import { createContext, useState, useEffect } from 'react'

export const ScoreContext = createContext()

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [leaderboard, setLeaderboard] = useState([])

  // Load leaderboard from localStorage when the app starts
  useEffect(() => {
    const savedLeaderboard = localStorage.getItem("leaderboardscores.json")
    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard))
    }
  }, [])

  // Function to update localStorage whenever leaderboard changes
  const saveLeaderboard = (updatedLeaderboard) => {
    localStorage.setItem("leaderboardscores.json", JSON.stringify(updatedLeaderboard))
  }

  // Function to add scores and update leaderboard
  const addScoreToLeaderboard = (userName, finalScore) => {
    setLeaderboard(prevLeaderboard => {
      const updated = [...prevLeaderboard, { userName, score: finalScore }]
        .sort((a, b) => b.score - a.score) // Sort highest score first
        .map((entry, index) => ({ ...entry, rank: index + 1 })) // Assign ranks

      saveLeaderboard(updated) // Save to localStorage
      return updated
    })
  }

  // Function to reset the leaderboard
  const clearLeaderboard = () => {
    setLeaderboard([]) // Reset state
    localStorage.removeItem("leaderboardscores.json") // Clear localStorage
  }

  return (
    <ScoreContext.Provider value={{ score, setScore, leaderboard, addScoreToLeaderboard, clearLeaderboard }}>
      {children}
    </ScoreContext.Provider>
  )
}