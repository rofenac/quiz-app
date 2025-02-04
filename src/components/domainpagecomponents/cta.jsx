import { Link } from 'react-router-dom'

function Cta({ quizName, quizDomain }) {
  return (
    <div className="py-10 text-center bg-neutral flex-grow">
      <h2 className="text-2xl font-bold mb-4">Ready to test your knowledge?</h2>
      {quizName && quizDomain && <CtaButton quizName={quizName} quizDomain={quizDomain} />}
    </div>
  )
}

function CtaButton({ quizName, quizDomain }) {
  return (
    <Link to={quizDomain} className="btn btn-accent">
      {quizName}
    </Link>
  )
}

export default Cta