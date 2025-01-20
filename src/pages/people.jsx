//import PageTemplate from '../pagetemplate'
import { HeaderTemplate } from '../pagetemplate'

function People() {
  return (
    <>
      <div data-theme="night">
        <HeaderTemplate
          firstLink="Home"
          secondLink="About"
          thirdLink="Services"
          fourthLink="Contact"
        />
      </div>
    </>
  )
}

export default People