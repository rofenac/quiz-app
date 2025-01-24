import { Link } from 'react-router-dom'
import PageTemplate from '../components/pagetemplate'

function HomePage() {
  const links = [
    { to: '/howworks', text: 'How the Quiz Works' },
    { to: '/yourscores', text: 'Your Scores' },
    { to: '/leaderboard', text: 'Leaderboard' },
  ]

  const titleBoxes = [
    { to: '/people', text: 'People' },
    { to: '/process', text: 'Process' },
    { to: '/business', text: 'Business Environment' },
  ]

  const descriptions = [
    'Focuses on effectively leading and empowering teams. It includes stakeholder management, conflict resolution, motivation, and building an environment where team members can excel.',
    'Covers the technical aspects of managing a project from start to finish. It includes planning, executing, monitoring, and controlling processes using proven methodologies and best practices.',
    'Addresses the broader context impacting projects, including organizational strategy, compliance, and external factors. It ensures alignment with business goals and promotes an understanding of the project’s role within the bigger picture.'
  ]

  return (
    <>
      <PageTemplate
        firstLink={<Link to={links[0].to} className="hover:text-purple-400">{links[0].text}</Link>}
        secondLink={<Link to={links[1].to} className="hover:text-purple-400">{links[1].text}</Link>}
        thirdLink={<Link to={links[2].to} className="hover:text-purple-400">{links[2].text}</Link>}
        pageFlavorText="So you want to be a PMP..."
        pageTitle="Welcome to the Darn Fine PMP Quiz App!"
        pageSubTitle="Learn about the PMP certification exam and take our fabulous quiz!"
        titleBoxOne={<Link to={titleBoxes[0].to} className="hover:text-purple-400">{titleBoxes[0].text}</Link>}
        titleBoxTwo={<Link to={titleBoxes[1].to} className="hover:text-purple-400">{titleBoxes[1].text}</Link>}
        titleBoxThree={<Link to={titleBoxes[2].to} className="hover:text-purple-400">{titleBoxes[2].text}</Link>}
        descriptionBoxOne={descriptions[0]}
        descriptionBoxTwo={descriptions[1]}
        descriptionBoxThree={descriptions[2]}
        showQuizButton={true}
      />
    </>
  )
}

export default HomePage