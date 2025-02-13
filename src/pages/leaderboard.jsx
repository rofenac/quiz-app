import { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Header from '../components/header'
import Footer from '../components/footer'
import { ScoreContext } from '../components/scorecontext'

function LeaderBoard() {
  const { leaderboard, clearLeaderboard } = useContext(ScoreContext)

  // Refs for animating various sections
  const headerRef = useRef(null)
  const footerRef = useRef(null)
  const titleRef = useRef(null)
  const tableRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    // Animate header fade in
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.3 }
      )
    }
    // Animate footer fade in with a slight delay
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.3, delay: 0.5 }
      )
    }
    // Animate the Leaderboard title (fading in and dropping)
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1 }
      )
    }
    // Animate the leaderboard table (fading in and sliding up)
    if (tableRef.current) {
      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'back.out' }
      )
    }
    // Animate the "Clear Leaderboard" button (zoom in effect)
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
      )
    }
  }, [])

  const links = [
    { to: '/', text: 'Home Page' },
    { to: '/howworks', text: 'How the Quiz Works' },
  ]

  const headerLinks = links.map((link, index) => (
    <Link key={index} to={link.to} className="hover:text-accent">
      {link.text}
    </Link>
  ))

  return (
    <div className="min-h-screen flex flex-col">
      {/* Wrap Header with ref for fade-in animation */}
      <div ref={headerRef}>
        <Header>{headerLinks}</Header>
      </div>

      <section className="flex-grow py-24">
        <div className="container mx-auto px-5">
          {/* Leaderboard Title Animation */}
          <div ref={titleRef} className="text-center w-full mb-10">
            <h2 className="text-3xl font-bold">Leaderboard</h2>
          </div>

          {/* Leaderboard Table Animation */}
          <div ref={tableRef}>
            <LeaderboardTable leaderboard={leaderboard} />
          </div>

          {/* Clear Leaderboard Button Animation */}
          <div ref={buttonRef} className="flex justify-center mt-6 pt-6">
            <ClearLeaderboardButton clearLeaderboard={clearLeaderboard} />
          </div>
        </div>
      </section>

      {/* Wrap Footer with ref for fade-in animation */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  )
}

function LeaderboardTable({ leaderboard }) {
  return (
    <div className="overflow-x-auto py-6">
      <table className="table w-full bg-base-300 shadow-xl">
        <thead className="bg-neutral-focus">
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
                <td>{entry.rank}</td>
                <td>{entry.userName}</td>
                <td>{entry.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No scores yet!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function ClearLeaderboardButton({ clearLeaderboard }) {
  return (
    <button className="btn btn-secondary" onClick={clearLeaderboard}>
      Clear Leaderboard
    </button>
  )
}

export default LeaderBoard