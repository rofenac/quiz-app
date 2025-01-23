import { Link } from 'react-router-dom'
import PageTemplate from './pagetemplate'

function HomePage() {
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
        descriptionBoxOne="Focuses on effectively leading and empowering teams. It includes stakeholder management, conflict resolution, motivation, and building an environment where team members can excel."
        descriptionBoxTwo="Covers the technical aspects of managing a project from start to finish. It includes planning, executing, monitoring, and controlling processes using proven methodologies and best practices."
        descriptionBoxThree="Addresses the broader context impacting projects, including organizational strategy, compliance, and external factors. It ensures alignment with business goals and promotes an understanding of the project’s role within the bigger picture."
        descriptionBoxFour=""
        descriptionBoxFive=""
        descriptionBoxSix=""
        showQuizButton={true}
      />
    </>
  )
}

export default HomePage