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
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header
        firstLink={<Link to='/people' className="hover:text-purple-400">People</Link>}
        secondLink={<Link to='/process' className="hover:text-purple-400">Process</Link>}
        thirdLink={<Link to='/business' className="hover:text-purple-400">Business Environment</Link>}
      />
      <Hero
        backgroundImage={Boardroom1}
        title="Mastering the People Domain"
        subtitle="Building strong leadership and collaboration skills to ensure project success"
        quizType="Take the People Quiz"
      />
      <PmpContext
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
      <Cta
        quizType="Take the People Quiz"
      />
      <Footer />
    </div>
  )
}

export default People