import { Link } from 'react-router-dom'
import Header from '../components/header'

function Quiz() {
  return (
    <>
      <Header
        firstLink={<Link to="/howworks" className="hover:text-purple-400">How the Quiz Works</Link>}
        secondLink={<Link to="/yourscores" className="hover:text-purple-400">Your Scores</Link>}
        thirdLink={<Link to="/leaderboard" className="hover:text-purple-400">Leaderboard</Link>}
      />
    </>
  )
}

export default Quiz