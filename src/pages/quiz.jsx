import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import questions from '../data/questions.json' // Adjust path as needed

function Quiz() {
  const { domain } = useParams()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [feedback, setFeedback] = useState(null)
  const [showNext, setShowNext] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)

  const letters = ['A', 'B', 'C', 'D']

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
      filteredQuestions = [...questions]
    }

    setQuizQuestions(shuffleArray(filteredQuestions))
  }, [domain])

  function handleAnswer(isCorrect, explanation, index) {
    setSelectedOptionIndex(index)
    const correctOptionIndex = quizQuestions[currentQuestionIndex].options.findIndex(option => option.isCorrect)
    const correctOption = quizQuestions[currentQuestionIndex].options[correctOptionIndex]

    if (isCorrect) {
      setScore(prev => prev + 1)
      setFeedback({
        message: 'Correct!',
        explanation,
        correctAnswer: `${letters[correctOptionIndex]}: ${correctOption.text}`,
      })
    } else {
      setFeedback({
        message: 'Incorrect!',
        explanation,
        correctAnswer: `${letters[correctOptionIndex]}: ${correctOption.text}`,
      })
    }

    setShowNext(true)
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setFeedback(null)
      setShowNext(false)
      setSelectedOptionIndex(null)
    } else {
      alert(`Quiz Over! Your score is ${score} / ${quizQuestions.length}`)
      setScore(0)
      setCurrentQuestionIndex(0)
      setFeedback(null)
      setShowNext(false)
      setSelectedOptionIndex(null)
    }
  }

  if (quizQuestions.length === 0) {
    return <p>Loading questions...</p>
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center mb-4">
            {domain ? domain.toUpperCase() : 'RANDOM'} Quiz
          </h1>
          <progress
            className="progress progress-primary w-full mb-4"
            value={(currentQuestionIndex + 1) / quizQuestions.length * 100}
            max="100"
          ></progress>
          <p className="text-sm text-gray-500 mb-2">
            Question {currentQuestionIndex + 1} / {quizQuestions.length}
          </p>
          <h3 className="text-lg font-semibold mb-4">
            {quizQuestions[currentQuestionIndex].question}
          </h3>
          <div className="flex flex-col gap-4">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => {
              let buttonClass = 'btn w-full'
              if (feedback) {
                if (option.isCorrect) {
                  buttonClass += ' btn-success'
                } else if (index === selectedOptionIndex) {
                  buttonClass += ' btn-error'
                } else {
                  buttonClass += ' btn-disabled'
                }
              } else {
                buttonClass += ' btn-primary'
              }

              return (
                <button
                  key={index}
                  className={buttonClass}
                  onClick={() =>
                    handleAnswer(
                      option.isCorrect,
                      quizQuestions[currentQuestionIndex].correctAnswerExplanation,
                      index
                    )
                  }
                  disabled={!!feedback}
                >
                  {letters[index]}. {option.text}
                </button>
              )
            })}
          </div>

          {feedback && (
            <div className={`alert mt-4 ${feedback.message === 'Incorrect!' ? 'alert-error' : 'alert-success'}`}>
              <div>
                <p className="text-2xl font-bold">{feedback.message}</p>
                <br />
                <p className="text-lg font-bold">Correct Answer: "{feedback.correctAnswer}"</p>
                <p className="italic text-lg">{feedback.explanation}</p>
              </div>
            </div>
          )}
          <div className="flex w-full">
            <Link to="/" className="btn btn-outline">
              Back to Home
            </Link>
            {showNext && (
              <>
                <div className="card grid h-20 flex-grow place-items-center"></div>
                <button className="btn btn-secondary" onClick={handleNextQuestion}>
                  Next Question
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz