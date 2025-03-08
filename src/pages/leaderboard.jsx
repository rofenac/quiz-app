import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ScoreContext } from '../components/scorecontext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Header from '../components/header'
import Footer from '../components/footer'

function LeaderBoard() {
  const { leaderboards } = useContext(ScoreContext)

  const titleRef = useRef(null)
  const sectionsRef = useRef([])

  useGSAP(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1 }
      )
    }

    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, delay: index * 0.2 }
        )
      }
    })
  }, [])

  const categories = [
    { key: 'full', title: 'Full Question Set' },
    { key: 'people', title: 'People Quiz' },
    { key: 'process', title: 'Process Quiz' },
    { key: 'business', title: 'Business Environment' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <Link to="/" className="hover:text-accent">
          Home
        </Link>
        <Link to="/howworks" className="hover:text-accent">
          How the Quiz Works
        </Link>
        <Link to="https://rofenac.github.io/blog/" className="hover:text-accent">
          My DevLog
        </Link>
      </Header>

      <section className="flex-grow py-24">
        <div className="container mx-auto px-5">
          <h2 ref={titleRef} className="text-4xl font-bold text-center mb-10">
            Leaderboards
          </h2>
          <div className="divider" />

          {categories.map(({ key, title }, index) => (
            <div key={key} ref={el => (sectionsRef.current[index] = el)} className="mt-24 mb-24">
              <h3 className="text-2xl font-semibold text-center mb-4">{title}</h3>
              <LeaderboardTable leaderboard={leaderboards[key]} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

function LeaderboardTable({ leaderboard }) {
  return (
    <div className="overflow-x-auto py-4">
      <table className="table w-full bg-base-300 shadow-xl">
        <thead className="bg-neutral-focus">
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard?.length > 0 ? (
            leaderboard.map((entry, index) => (
              <tr key={index} className="hover:bg-neutral-focus">
                <td>{entry.rank}</td>
                <td>{entry.userName}</td>
                <td>{entry.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No scores yet!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default LeaderBoard