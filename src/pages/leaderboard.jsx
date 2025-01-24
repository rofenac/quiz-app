import { Link } from 'react-router-dom'
import PageTemplate from '../components/pagetemplate'

function LeaderBoard() {
  return (
    <>
      <PageTemplate
        firstLink={<Link to="/howworks" className="hover:text-purple-400">How the Quiz Works</Link>}
        secondLink={<Link to="/yourscores" className="hover:text-purple-400">Your Scores</Link>}
        thirdLink={<Link to="/leaderboard" className="hover:text-purple-400">Leaderboard</Link>}
        fourthLink=""
        pageFlavorText="So you want to be a PMP..."
        pageTitle="Welcome to the Darn Fine PMP Quiz App!"
        pageSubTitle="Learn about the PMP certification exam and take our fabulous quiz!"
        titleBoxOne={<Link to="/people" className="hover:text-purple-400">People</Link>}
        titleBoxTwo={<Link to="/process" className="hover:text-purple-400">Process</Link>}
        titleBoxThree={<Link to="/business" className="hover:text-purple-400">Business Environment</Link>}
        titleBoxFour=""
        titleBoxFive=""
        titleBoxSix=""
        descriptionBoxOne="Description One"
        descriptionBoxTwo="Description Two"
        descriptionBoxThree="Description Three"
        descriptionBoxFour=""
        descriptionBoxFive=""
        descriptionBoxSix="" />
    </>
  )
}

export default LeaderBoard