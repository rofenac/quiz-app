import React, { createContext, useState } from 'react'

export const ScoreContext = createContext()

export const ScoreProvider = ({ children }) => {
  const [rank, setRank] = useState(0)
  const [score, setScore] = useState(0)
  const [leaderboard, setLeaderboard] = useState([])

  const updateScore = (points) => {
    setScore(prevScore => prevScore + points)
  }

  const resetScore = () => {
    setScore(0)
  }

  const addScoreToLeaderboard = (userName, finalScore) => {
    setLeaderboard(prevLeaderboard => {
      const updated = [...prevLeaderboard, { userName, score: finalScore }]
        .sort((a, b) => b.score - a.score) // Sort by highest score first
        .map((entry, index) => ({ ...entry, rank: index + 1 })) // Assign ranks

      return updated
    })
  }

  return (
    <ScoreContext.Provider value={{ score, updateScore, resetScore, leaderboard, addScoreToLeaderboard }}>
      {children}
    </ScoreContext.Provider>
  )
}