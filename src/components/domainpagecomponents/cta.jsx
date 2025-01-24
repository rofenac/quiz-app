import { Link } from 'react-router-dom'

function Cta() {
  return (
    <>
      <div className="py-10 text-center bg-neutral flex-grow">
        <h2 className="text-2xl font-bold mb-4">Ready to test your knowledge?</h2>
        <Link to='/quiz' className="btn btn-accent">Take the People Quiz</Link>
      </div>
    </>
  )
}
export default Cta