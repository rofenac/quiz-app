import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import PageTemplate from '../components/pagetemplate'
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone'
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone'
import CasesTwoToneIcon from '@mui/icons-material/CasesTwoTone'

function HomePage() {
  const links = [
    { to: '/howworks', text: 'How the Quiz Works' },
    { to: '/leaderboard', text: 'Leaderboard' },
    { to: 'https://rofenac.github.io/blog/', text: 'My DevLog' }
  ]

  const headerLinks = links.map((link, index) => (
    <Link key={index} to={link.to} className="hover:text-accent">
      {link.text}
    </Link>
  ))

  const boxes = [
    {
      icon: <PeopleTwoToneIcon className="text-accent" />,
      title: 'People',
      to: '/people',
      description:
        'Focuses on effectively leading and empowering teams. It includes stakeholder management, conflict resolution, motivation, and building an environment where team members can excel.',
    },
    {
      icon: <AccountTreeTwoToneIcon className="text-accent" />,
      title: 'Process',
      to: '/process',
      description:
        'Covers the technical aspects of managing a project from start to finish. It includes planning, executing, monitoring, and controlling processes using proven methodologies and best practices.',
    },
    {
      icon: <CasesTwoToneIcon className="text-accent" />,
      title: 'Business Environment',
      to: '/business',
      description:
        'Addresses the broader context impacting projects, including organizational strategy, compliance, and external factors. It ensures alignment with business goals and promotes an understanding of the project’s role within the bigger picture.',
    },
  ]

  // GSAP animation to fade in and drop the flavor text, title, and subtitle
  useEffect(() => {
    gsap.from('.page-flavor-text, .page-title, .page-sub-title', {
      opacity: 0,
      y: -50,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
    })
  }, [])

  return (
    <PageTemplate
      bodyProps={{
        pageFlavorText: 'So you want to be a PMP...',
        pageTitle: 'Welcome to the Darn Fine PMP Quiz App!',
        pageSubTitle: 'Learn about the PMP certification exam and take our fabulous quizzes!',
        boxes,
        showQuizButton: true,
        className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-18',
      }}
      headerLinks={headerLinks}
    />
  )
}

export default HomePage