import { Link } from 'react-router-dom'
import Header from '../components/header'
import Hero from '../components/domainpagecomponents/hero'
import PmpContext from '../components/domainpagecomponents/pmpcontext'
import RealLife from '../components/domainpagecomponents/reallife'
import Strategies from '../components/domainpagecomponents/strategies'
import Cta from '../components/domainpagecomponents/cta'
import Footer from '../components/footer'
import Boardroom1 from '../assets/boardroom1.jpg'

function People() {
  const links = [
    { to: '/people', text: 'People' },
    { to: '/process', text: 'Process' },
    { to: '/business', text: 'Business Environment' },
  ]

  const headerLinks = links.map((link, index) => (
    <Link key={index} to={link.to} className="hover:text-purple-400">
      {link.text}
    </Link>
  ))

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header>{headerLinks}</Header>

      <Hero
        backgroundImage={Boardroom1}
        title="Mastering the People Domain"
        subtitle="Building strong leadership and collaboration skills to ensure project success"
        quizName="Take the People Quiz"
        quizDomain="people"
      />

      <PmpContext
        quizType="People"
        lineOne="Manage conflict effectively"
        lineTwo="Lead teams with emotional intelligence"
        lineThree="Support and guide stakeholders throughout the project lifecycle"
        typeOne="Scenario-based leadership challenges"
        typeTwo="Questions about managing diverse team dynamics"
        typeThree="Techniques for stakeholder engagement and conflict resolution"
      />

      <RealLife
        scenarioOne="Resolving team conflicts during tight deadlines, motivating underperforming team members, and handling stakeholder disagreements in a collaborative manner"
        tipOne="Use stakeholder mapping to identify key influencers"
        tipTwo="Practice active listening during meetings to gain trust and buy-in"
        tipThree="Leverage tools like Slack or Microsoft Teams for communication"
      />

      <Strategies
        materialsOne="PMBOK Guide (7th Edition) - Focus on Chapter 2"
        materialsTwo="“Emotional Intelligence 2.0” by Travis Bradberry"
        materialsThree="Online simulators like PMP PrepCast"
        tacticsOne="Create flashcards for key concepts"
        tacticsTwo="Practice situational questions to refine critical thinking"
        tacticsThree="Join a study group to discuss leadership challenges"
      />

      <Cta quizName="Take the People Quiz" quizDomain="people" />

      <Footer />
    </div>
  )
}

export default People