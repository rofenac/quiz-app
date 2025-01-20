import { Link } from 'react-router-dom'
import PageTemplate from '../pagetemplate'

function HowWorks() {
  return (
    <>
      <PageTemplate
        firstLink={<Link to="/howworks" className="hover:text-purple-400">How the Quiz Works</Link>}
        secondLink={<Link to="/yourscores" className="hover:text-purple-400">Your Scores</Link>}
        thirdLink={<Link to="/leaderboard" className="hover:text-purple-400">Leaderboard</Link>}
        fourthLink="Contact"
        pageTitle="Title"
        pageSubTitle="SubTitle"
        titleBoxOne="Box One"
        titleBoxTwo="Box Two"
        titleBoxThree="Box Three"
        titleBoxFour="Box Four"
        titleBoxFive="Box Five"
        titleBoxSix="Box Six"
        descriptionBoxOne="Description One"
        descriptionBoxTwo="Description Two"
        descriptionBoxThree="Description Three"
        descriptionBoxFour="Description Four"
        descriptionBoxFive="Description Five"
        descriptionBoxSix="Description Six" />
    </>
  )
}

export default HowWorks