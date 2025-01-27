import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import questions from '../data/questions.json' // Adjust path as needed

function Quiz() {
  const { domain } = useParams() // Get quiz domain from URL
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [feedback, setFeedback] = useState(null) // Feedback message
  const [showNext, setShowNext] = useState(false) // Control when to show the "Next" button
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null) // Track which option the user chose

  const letters = ['A', 'B', 'C', 'D'] // Letters for answers

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

  function handleAnswer(isCorrect, explanation, index) {
    setSelectedOptionIndex(index) // Track which option was selected
    const correctOptionIndex = quizQuestions[currentQuestionIndex].options.findIndex(option => option.isCorrect)
    const correctOption = quizQuestions[currentQuestionIndex].options[correctOptionIndex]

    if (isCorrect) {
      setScore(prev => prev + 1)
      setFeedback({
        message: 'Correct!',
        explanation,
        correctAnswer: `${letters[correctOptionIndex]}: ${correctOption.text}`, // Add letter and text of correct answer
      })
    } else {
      setFeedback({
        message: 'Incorrect!',
        explanation,
        correctAnswer: `${letters[correctOptionIndex]}: ${correctOption.text}`, // Add letter and text of correct answer
      })
    }

    setShowNext(true) // Allow user to proceed to the next question
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setFeedback(null) // Clear feedback for the next question
      setShowNext(false) // Hide the "Next" button for the new question
      setSelectedOptionIndex(null) // Reset selected option
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
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        {domain ? domain.toUpperCase() : 'RANDOM'} Quiz
      </h1>
      <p>
        Question {currentQuestionIndex + 1} / {quizQuestions.length}
      </p>
      <h3 className="text-lg font-semibold">{quizQuestions[currentQuestionIndex].question}</h3>
      <div className="flex flex-col gap-2 my-4">
        {quizQuestions[currentQuestionIndex].options.map((option, index) => {
          // Determine button class based on the feedback state and option correctness
          let buttonClass = 'btn'
          if (feedback) {
            if (option.isCorrect) {
              buttonClass += ' btn-success' // Highlight the correct answer
            } else if (index === selectedOptionIndex) {
              buttonClass += ' btn-error' // Highlight the incorrect answer selected by the user
            } else {
              buttonClass += ' btn-disabled' // Disable other options
            }
          } else {
            buttonClass += ' btn-primary'
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() =>
                handleAnswer(option.isCorrect, quizQuestions[currentQuestionIndex].correctAnswerExplanation, index)
              }
              disabled={!!feedback} // Disable buttons after feedback is shown
            >
              {letters[index]}. {option.text}
            </button>
          )
        })}
      </div>

      {feedback && (
        <div className="my-4 p-4 border rounded bg-neutral text-neutral-content">
          <p className="font-bold">{feedback.message}</p>
          <br />
          <p className="font-bold">Correct Answer: {feedback.correctAnswer}</p>
          <p className="italic">{feedback.explanation}</p>

        </div>
      )}

      <div className="flex w-full flex-col lg:flex-row">
        {showNext && (
          <>
            <button
              className="btn btn-secondary mt-6"
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
            <div className="divider divider-horizontal mt-6"></div>
          </>
        )}
        <div className="flex w-full flex-col lg:flex-row"><Link to="/" className="btn btn-secondary mt-6">
          Back to Home
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Quiz