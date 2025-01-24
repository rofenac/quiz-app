import Header from './header'
import Body from './body'
import Footer from './footer'

function PageTemplate(props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header {...props} />
      <Body {...props} className="flex-grow" />
      <Footer />
    </div>
  )
}

export default PageTemplate