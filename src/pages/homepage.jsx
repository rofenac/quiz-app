import { Link } from 'react-router-dom'
import PageTemplate from '../components/pagetemplate'
import JsonReformatter from '../components/JsonReformatter'

function HomePage() {
  const links = [
    { to: '/howworks', text: 'How the Quiz Works' },
    { to: '/leaderboard', text: 'Leaderboard' },
  ]

  const headerLinks = links.map((link, index) => (
    <Link key={index} to={link.to} className="hover:text-accent">
      {link.text}
    </Link>
  ))

  const boxes = [
    {
      title: 'People',
      to: '/people',
      description:
        'Focuses on effectively leading and empowering teams. It includes stakeholder management, conflict resolution, motivation, and building an environment where team members can excel.',
      svgPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
    },
    {
      title: 'Process',
      to: '/process',
      description:
        'Covers the technical aspects of managing a project from start to finish. It includes planning, executing, monitoring, and controlling processes using proven methodologies and best practices.',
      svgPath: 'M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12',
    },
    {
      title: 'Business Environment',
      to: '/business',
      description:
        'Addresses the broader context impacting projects, including organizational strategy, compliance, and external factors. It ensures alignment with business goals and promotes an understanding of the project’s role within the bigger picture.',
      svgPath: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0000 8z',
    },
  ]

  return (
    <>
      <PageTemplate
        bodyProps={{
          pageFlavorText: 'So you want to be a PMP...',
          pageTitle: 'Welcome to the Darn Fine PMP Quiz App!',
          pageSubTitle: 'Learn about the PMP certification exam and take our fabulous quizzes!',
          boxes,
          showQuizButton: true,
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-18"
        }}
        headerLinks={headerLinks}
      />
      <JsonReformatter />
    </>
  )
}

export default HomePage