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

  useEffect(() => {
    const savedBoards = localStorage.getItem("leaderboardscores.json")
    if (savedBoards) {
      setLeaderboards(JSON.parse(savedBoards))
    }
  }, [])

  const saveLeaderboards = (updatedBoards) => {
    localStorage.setItem("leaderboardscores.json", JSON.stringify(updatedBoards))
  }

  const addScoreToLeaderboard = (userName, finalScore, domain = 'full') => {
    setLeaderboards(prevBoards => {
      const updatedDomainBoard = [...(prevBoards[domain] || []), { userName, score: finalScore }]
        .sort((a, b) => b.score - a.score)
        .map((entry, index) => ({ ...entry, rank: index + 1 }))

      const updatedBoards = {
        ...prevBoards,
        [domain]: updatedDomainBoard
      }

      saveLeaderboards(updatedBoards)
      return updatedBoards
    })
  }

  const clearLeaderboard = (domain = 'full') => {
    setLeaderboards(prevBoards => {
      const updatedBoards = {
        ...prevBoards,
        [domain]: []
      }
      saveLeaderboards(updatedBoards)
      return updatedBoards
    })
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
      }}
    >
      {children}
    </ScoreContext.Provider>
  )
}