import Header from './header'
import Body from './body'
import Footer from './footer'

function PageTemplate({ bodyProps, headerLinks }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header>{headerLinks}</Header>
      <Body
        {...bodyProps}
        classNameSection={`flex-grow ${bodyProps?.classNameSection || ''}`}
      />
      <Footer />
    </div>
  )
}

export default PageTemplate