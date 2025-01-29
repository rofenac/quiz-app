import { Link } from 'react-router-dom'
import PageTemplate from '../components/pagetemplate'

function LeaderBoard() {
  const links = [
    { to: '/howworks', text: 'How the Quiz Works' },
    { to: '/yourscores', text: 'Your Scores' },
    { to: '/leaderboard', text: 'Leaderboard' },
  ]

  const boxes = [
    {
      title: <Link to="/people" className="hover:text-purple-400">People</Link>,
      description: 'Description One',
      svgPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
    },
    {
      title: <Link to="/process" className="hover:text-purple-400">Process</Link>,
      description: 'Description Two',
      svgPath: 'M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12',
    },
    {
      title: <Link to="/business" className="hover:text-purple-400">Business Environment</Link>,
      description: 'Description Three',
      svgPath: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z',
    },
  ]

  return (
    <PageTemplate
      firstLink={<Link to={links[0].to} className="hover:text-purple-400">{links[0].text}</Link>}
      secondLink={<Link to={links[1].to} className="hover:text-purple-400">{links[1].text}</Link>}
      thirdLink={<Link to={links[2].to} className="hover:text-purple-400">{links[2].text}</Link>}
      bodyProps={{
        pageFlavorText: 'So you want to be a PMP...',
        pageTitle: 'Welcome to the Darn Fine PMP Quiz App!',
        pageSubTitle: 'Learn about the PMP certification exam and take our fabulous quiz!',
        boxes: boxes,
      }}
    />
  )
}

export default LeaderBoard