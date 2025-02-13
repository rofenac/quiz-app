import { useContext } from 'react'
import { CountdownContext } from '../animations/CountdownContext'

function Cta({ quizName, quizDomain }) {
  return (
    <div className="py-10 text-center flex-grow">
      <h2 className="text-2xl font-bold mb-4">Ready to test your knowledge?</h2>
      {quizName && quizDomain && <CtaButton quizName={quizName} quizDomain={quizDomain} />}
    </div>
  )
}

function CtaButton({ quizName, quizDomain }) {
  const { navigateWithCountdown } = useContext(CountdownContext)

  const handleClick = () => {
    navigateWithCountdown(`/quiz/${quizDomain}`)
  }

  return (
    <button onClick={handleClick} className="btn btn-accent">
      {quizName}
    </button>
  )
}

export default Cta