import { Link } from 'react-router-dom'
import PageTemplate from '../components/pagetemplate'

function HowWorks() {
  const links = [
    { to: '/howworks', text: 'How the Quiz Works' },
    { to: '/yourscores', text: 'Your Scores' },
    { to: '/leaderboard', text: 'Leaderboard' },
  ]

  const boxes = [
    { title: 'Box One', description: 'Description One', svgPath: 'M22 12h-4l-3 9L9 3l-3 9H2' },
    { title: 'Box Two', description: 'Description Two', svgPath: 'M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12' },
    { title: 'Box Three', description: 'Description Three', svgPath: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z' },
    { title: 'Box Four', description: 'Description Four', svgPath: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7' },
    { title: 'Box Five', description: 'Description Five', svgPath: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' },
    { title: 'Box Six', description: 'Description Six', svgPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  ]

  return (
    <PageTemplate
      firstLink={<Link to={links[0].to} className="hover:text-purple-400">{links[0].text}</Link>}
      secondLink={<Link to={links[1].to} className="hover:text-purple-400">{links[1].text}</Link>}
      thirdLink={<Link to={links[2].to} className="hover:text-purple-400">{links[2].text}</Link>}
      bodyProps={{
        pageTitle: 'Title',
        pageSubTitle: 'SubTitle',
        boxes: boxes,
      }}
    />
  )
}

export default HowWorks