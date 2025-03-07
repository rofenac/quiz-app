import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import PageTemplate from '../components/pagetemplate.jsx'
import businessWoman from '../assets/businesswoman.jpg'
import AllInclusiveTwoToneIcon from '@mui/icons-material/AllInclusiveTwoTone'
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone'
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone'
import CasesTwoToneIcon from '@mui/icons-material/CasesTwoTone'

function HowWorks() {
  const links = [
    { to: '/', text: 'Home Page' },
    { to: '/leaderboard', text: 'Leaderboard' },
    { to: 'https://rofenac.github.io/blog/', text: 'My DevLog' },
  ]

  const headerLinks = links.map((link, index) => {
    if (link.to.startsWith('http')) {
      return (
        <a
          key={index}
          href={link.to}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          {link.text}
        </a>
      )
    }
    return (
      <Link key={index} to={link.to} className="hover:text-accent">
        {link.text}
      </Link>
    )
  })

  const boxes = [
    {
      icon: <AllInclusiveTwoToneIcon className="text-accent" />,
      title: 'All Questions',
      to: '/quiz/full',
      description: 'Challenge yourself with questions covering the full PMP syllabus.',
    },
    {
      icon: <PeopleTwoToneIcon className="text-accent" />,
      title: 'People',
      to: '/quiz/people',
      description:
        'Focus on effectively leading and empowering teams—covering stakeholder management, conflict resolution, and motivation.',
    },
    {
      icon: <AccountTreeTwoToneIcon className="text-accent" />,
      title: 'Process',
      to: '/quiz/process',
      description:
        'Test your skills in planning, executing, monitoring, and controlling project processes with proven methodologies.',
    },
    {
      icon: <CasesTwoToneIcon className="text-accent" />,
      title: 'Business Environment',
      to: '/quiz/business',
      description:
        'Assess your knowledge of organizational strategy, compliance, and external factors that impact projects.',
    },
  ]

  const heroRef = useRef(null)

  useGSAP(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelector('.hero-image'),
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
      )
      gsap.fromTo(
        heroRef.current.querySelector('.hero-text'),
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }
      )
    }
  }, [])

  const pageSubTitle = (
    <div className="hero">
      <div ref={heroRef} className="hero-content grid grid-cols-3 items-center">
        <img
          src={businessWoman}
          alt="Business Woman"
          className="hero-image max-w-sm rounded-lg shadow-2xl"
        />
        <div className="col-span-2 hero-text">
          <h1 className="text-5xl font-bold">How the Quiz Works</h1>
          <p className="py-6">
            The Darn Fine PMP Quiz App—your interactive gateway to mastering project management. Whether you choose the comprehensive <strong>All Questions Quiz</strong> or hone your skills with a domain-specific challenge in People, Process, or Business Environment, every quiz propels you closer to PMP mastery.
          </p>
          <p className="text-accent">
            Experience randomized questions, instant expert feedback, and real-time progress tracking. Ready to conquer the PMP exam? Your journey begins here!
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <PageTemplate
      bodyProps={{
        pageSubTitle,
        boxes,
        className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-18',
      }}
      headerLinks={headerLinks}
    />
  )
}

export default HowWorks