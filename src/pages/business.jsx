import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/domainpagecomponents/Hero'
import PmpContext from '../components/domainpagecomponents/PmpContext'
import RealLife from '../components/domainpagecomponents/RealLife'
import Strategies from '../components/domainpagecomponents/Strategies'
import Cta from '../components/domainpagecomponents/Cta'
import Footer from '../components/Footer'
import worldOrange from '../assets/worldorange.jpg'

function Business() {
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
        backgroundImage={worldOrange}
        title="Mastering the Business Environment Domain"
        subtitle="Navigate external influences and ensure organizational success"
        quizName="Take the Business Environment Quiz"
        quizDomain="../quiz/business"
      />

      <PmpContext
        quizType="Business Environment"
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

      <Cta quizName="Take the Business Environment Quiz" quizDomain="../quiz/business" />

      <Footer />
    </div>
  )
}

export default Business