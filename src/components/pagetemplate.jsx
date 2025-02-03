import Header from './header'
import Body from './body'
import Footer from './footer'

function PageTemplate({ bodyProps, headerLinks }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header>{headerLinks}</Header>
      <Body {...bodyProps} className={`flex-grow ${bodyProps?.className || ''}`} />
      <Footer />
    </div>
  )
}

export default PageTemplate