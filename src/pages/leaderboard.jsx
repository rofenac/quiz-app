import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import { ScoreContext } from '../components/scorecontext'

function LeaderBoard() {
  const { leaderboard, clearLeaderboard } = useContext(ScoreContext)

  const links = [
    { to: '/', text: 'Back Home' },
    { to: '/howworks', text: 'How the Quiz Works' },
  ]

  const headerLinks = links.map((link, index) => (
    <Link key={index} to={link.to} className="hover:text-purple-400">
      {link.text}
    </Link>
  ))

  return (
    <div className="min-h-screen flex flex-col">
      <Header>{headerLinks}</Header>
      <section className="flex-grow bg-neutral py-24">
        <div className="container mx-auto px-5">
          <div className="text-center w-full mb-10">
            <h2 className="text-3xl font-bold text-neutral-content">Leaderboard</h2>
          </div>
          <LeaderboardTable leaderboard={leaderboard} />
          <ClearLeaderboardButton clearLeaderboard={clearLeaderboard} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

function LeaderboardTable({ leaderboard }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full bg-base-100 shadow-xl">
        <thead className="bg-neutral-focus text-neutral-content">
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.length > 0 ? (
            leaderboard.map((entry, index) => (
              <tr key={index} className="hover:bg-neutral-focus">
                <td className="text-neutral-content">{entry.rank}</td>
                <td className="text-neutral-content">{entry.userName}</td>
                <td className="text-neutral-content">{entry.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center text-neutral-content">No scores yet!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function ClearLeaderboardButton({ clearLeaderboard }) {
  return (
    <div className="flex justify-center mt-6">
      <button className="btn btn-secondary" onClick={clearLeaderboard}>
        Clear Leaderboard
      </button>
    </div>
  )
}

export default LeaderBoard