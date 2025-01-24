import { Link } from 'react-router-dom'
import Header from '../components/header'
import Hero from '../components/domainpagecomponents/hero'
import PmpContext from '../components/domainpagecomponents/pmpcontext'
import RealLife from '../components/domainpagecomponents/reallife'
import Strategies from '../components/domainpagecomponents/strategies'
import Cta from '../components/domainpagecomponents/cta'
import Footer from '../components/footer'
import worldOrange from '../assets/worldorange.jpg'

function Business() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header
        firstLink={<Link to='/people' className="hover:text-purple-400">People</Link>}
        secondLink={<Link to='/process' className="hover:text-purple-400">Process</Link>}
        thirdLink={<Link to='/business' className="hover:text-purple-400">Business Environment</Link>}
      />
      <Hero
        backgroundImage={worldOrange}
        title="Mastering the Business Environment Domain"
        subtitle="Navigate external influences and ensure organizational success"
        quizType="Take the Business Environment Quiz"
      />
      <PmpContext
        lineOne="Evaluate the impact of external business environments on projects"
        lineTwo="Ensure organizational compliance with regulations and standards"
        lineThree="Align project objectives with organizational goals"
        typeOne="Questions about compliance with laws, regulations, and industry standards"
        typeTwo="Scenarios involving adapting to market changes or external pressures"
        typeThree="Queries about aligning project strategies with organizational objectives"
      />
      <RealLife
        scenarioOne="Adjusting project priorities to accommodate new regulations or market demands"
        tipOne="Stay updated on relevant laws and industry regulations affecting your projects"
        tipTwo="Conduct regular stakeholder reviews to align on strategic goals"
        tipThree="Use compliance management tools to track regulatory adherence"
      />
      <Strategies
        materialsOne="PMBOK Guide (7th Edition) - Focus on Chapter 5"
        materialsTwo="Rita Mulcahy's PMP Exam Prep - Sections on governance and compliance"
        materialsThree="Practice tests with scenarios on external business influences"
        tacticsOne="Create a glossary of key terms related to compliance and governance"
        tacticsTwo="Study case studies on how companies adapt to external challenges"
        tacticsThree="Use flashcards to memorize critical regulations and standards"
      />
      <Cta
        quizType="Take the Business Environment Quiz"
      />
      <Footer />
    </div>
  )
}

export default Business