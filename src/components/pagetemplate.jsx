import Header from './header'
import Body from './body'
import Footer from './footer'

function PageTemplate({ bodyProps, ...headerProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header {...headerProps} />
      <Body {...bodyProps} className="flex-grow" />
      <Footer />
    </div>
  )
}

export default PageTemplate