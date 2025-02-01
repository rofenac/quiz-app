import Header from '../components/header'
import Footer from '../components/footer'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ScoreContext } from '../data/scorecontext'

function LeaderBoard() {
  const { leaderboard } = useContext(ScoreContext)

  const links = [
    { to: '/howworks', text: 'How the Quiz Works' },
    { to: '/', text: 'Home Page' },
  ]

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header
          firstLink={<Link to={links[0].to} className="hover:text-purple-400">{links[0].text}</Link>}
          secondLink={<Link to={links[1].to} className="hover:text-purple-400">{links[1].text}</Link>}
        />
        <section className="flex-grow bg-neutral py-24">
          <div className="container mx-auto px-5">
            <div className="text-center w-full mb-10">
              <h1 className="text-2xl sm:text-3xl font-medium text-neutral-content mb-4">Leaderboard</h1>
            </div>
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
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default LeaderBoard