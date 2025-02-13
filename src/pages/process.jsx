import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/domainpagecomponents/hero'
import PmpContext from '../components/domainpagecomponents/pmpcontext'
import RealLife from '../components/domainpagecomponents/reallife'
import Strategies from '../components/domainpagecomponents/strategies'
import Cta from '../components/domainpagecomponents/cta'
import Footer from '../components/Footer'
import Gantt2 from '../assets/gantt2.jpg'

function Process() {
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
        backgroundImage={Gantt2}
        title="Mastering the Process Domain"
        subtitle="Optimizing workflows and ensuring project success through process mastery"
        quizName="Take the Process Quiz"
        quizDomain="../quiz/process"
      />

      <PmpContext
        quizType="Process"
        lineOne="Plan and define project scope effectively"
        lineTwo="Develop and manage project schedules with precision"
        lineThree="Ensure quality management across all deliverables"
        typeOne="Questions about scheduling techniques and tools"
        typeTwo="Scenarios involving risk mitigation strategies"
        typeThree="Queries on quality assurance processes and compliance"
      />

      <RealLife
        scenarioOne="Developing a realistic project schedule and keeping stakeholders informed of any changes"
        tipOne="Use Gantt charts or Kanban boards for visualizing project timelines"
        tipTwo="Regularly assess and update the risk register to stay proactive"
        tipThree="Incorporate quality audits at key project milestones"
      />

      <Strategies
        materialsOne="PMBOK Guide (7th Edition) - Focus on Chapters 3 and 4"
        materialsTwo="Project Management Professional (PMP) Exam Prep by Rita Mulcahy"
        materialsThree="Practice exams from PMI’s official website"
        tacticsOne="Break down processes into smaller, manageable components to study"
        tacticsTwo="Focus on understanding process flowcharts and their applications"
        tacticsThree="Review case studies to apply theoretical knowledge in practical settings"
      />

      <Cta quizName="Take the Process Quiz" quizDomain="../quiz/process" />

      <Footer />
    </div>
  )
}

export default Process