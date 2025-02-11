import { Link } from 'react-router-dom'
import PageTemplate from '../components/pagetemplate'
import businessWoman from '../assets/businesswoman.jpg'

function HowWorks() {
  const links = [
    { to: '/', text: 'Home Page' },
    { to: '/leaderboard', text: 'Leaderboard' },
  ]

  const headerLinks = links.map((link, index) => (
    <Link key={index} to={link.to} className="hover:text-accent">
      {link.text}
    </Link>
  ))

  const boxes = [
    {
      title: 'All Questions',
      to: '/quiz/all',
      description: 'Challenge yourself with questions covering the full PMP syllabus.',
      svgPath: 'M12 2a10 10 0 110 20 10 10 0 010-20z',
    },
    {
      title: 'People',
      to: '/quiz/people',
      description:
        'Focus on effectively leading and empowering teams—covering stakeholder management, conflict resolution, and motivation.',
      svgPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
    },
    {
      title: 'Process',
      to: '/quiz/process',
      description:
        'Test your skills in planning, executing, monitoring, and controlling project processes with proven methodologies.',
      svgPath: 'M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12',
    },
    {
      title: 'Business Environment',
      to: '/quiz/business',
      description:
        'Assess your knowledge of organizational strategy, compliance, and external factors that impact projects.',
      svgPath: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0000 8z',
    },
  ]

  const pageSubTitle = (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={businessWoman}
          class="max-w-sm rounded-lg shadow-2x justify-items-center" />
        <div>
          <h1 className="text-5xl font-bold">How the Quiz Works</h1>
          <p className="py-6">
            The Darn Fine PMP Quiz App—your interactive gateway to mastering project management. Whether you choose the comprehensive <strong>All Questions Quiz</strong> or hone your skills with a domain-specific challenge in People, Process, or Business Environment, every quiz propels you closer to PMP mastery.
          </p>
          <p className="text-accent">Experience randomized questions, instant expert feedback, and real-time progress tracking. Ready to conquer the PMP exam? Your journey begins here!</p>
        </div>
      </div>
    </div>
  )

  return (
    <PageTemplate
      bodyProps={{
        pageSubTitle,
        boxes,
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      }}
      headerLinks={headerLinks}
    />
  )
}

export default HowWorks