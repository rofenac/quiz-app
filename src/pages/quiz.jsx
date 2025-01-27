import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import questions from '../data/questions.json' // Adjust path as needed

function Quiz() {
  const { domain } = useParams() // Get quiz domain from URL
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizQuestions, setQuizQuestions] = useState([])

  // Utility function to shuffle questions
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    let filteredQuestions

    if (domain === 'people') {
      filteredQuestions = questions.filter(q => q.domain === 'People')
    } else if (domain === 'process') {
      filteredQuestions = questions.filter(q => q.domain === 'Process')
    } else if (domain === 'business') {
      filteredQuestions = questions.filter(q => q.domain === 'Business Environment')
    } else {
      filteredQuestions = [...questions] // Random for "All" quizzes
    }

    setQuizQuestions(shuffleArray(filteredQuestions)) // Randomize questions
  }, [domain])

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(prev => prev + 1)
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      alert(`Quiz Over! Your score is ${score + (isCorrect ? 1 : 0)} / ${quizQuestions.length}`)
      setScore(0)
      setCurrentQuestionIndex(0)
    }
  }

  if (quizQuestions.length === 0) {
    return <p>Loading questions...</p>
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        {domain ? domain.toUpperCase() : 'RANDOM'} Quiz
      </h1>
      <p>
        Question {currentQuestionIndex + 1} / {quizQuestions.length}
      </p>
      <h3 className="text-lg font-semibold">{quizQuestions[currentQuestionIndex].question}</h3>
      <div className="flex flex-col gap-2 my-4">
        {quizQuestions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            className="btn btn-primary"
            onClick={() => handleAnswer(option.isCorrect)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <Link to="/" className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  )
}

export default Quiz