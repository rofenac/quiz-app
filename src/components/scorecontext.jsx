import { createContext, useState, useEffect } from 'react'

export const ScoreContext = createContext()

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    const savedLeaderboard = localStorage.getItem("leaderboardscores.json")
    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard))
    }
  }, [])

  const saveLeaderboard = (updatedLeaderboard) => {
    localStorage.setItem("leaderboardscores.json", JSON.stringify(updatedLeaderboard))
  }

  const addScoreToLeaderboard = (userName, finalScore) => {
    setLeaderboard(prevLeaderboard => {
      const updated = [...prevLeaderboard, { userName, score: finalScore }]
        .sort((a, b) => b.score - a.score)
        .map((entry, index) => ({ ...entry, rank: index + 1 }))

      saveLeaderboard(updated)
      return updated
    })
  }

  // Define updateScore here so that Quiz.jsx can call it
  function updateScore(points) {
    setScore(prev => prev + points)
  }

  // Optionally, you can also define a resetScore function
  function resetScore() {
    setScore(0)
  }

  return (
    <ScoreContext.Provider
      value={{
        score,
        updateScore,
        resetScore,
        leaderboard,
        addScoreToLeaderboard,
        clearLeaderboard: () => {
          setLeaderboard([])
          localStorage.removeItem("leaderboardscores.json")
        },
      }}
    >
      {children}
    </ScoreContext.Provider>
  )
}