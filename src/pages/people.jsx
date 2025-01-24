import Header from '../components/header'
import Hero from '../components/domainpagecomponents/hero'
import PmpContext from '../components/domainpagecomponents/pmpcontext'
import RealLife from '../components/domainpagecomponents/reallife'
import Strategies from '../components/domainpagecomponents/strategies'
import Cta from '../components/domainpagecomponents/cta'
import Footer from '../components/footer'

function People() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header />
      <Hero />
      <PmpContext />
      <RealLife />
      <Strategies />
      <Cta />
      <Footer />
    </div>
  )
}

export default People