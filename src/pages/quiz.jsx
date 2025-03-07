import { useState, useEffect, useContext, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ScoreContext } from '../components/scorecontext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Quiz() {
  const { domain } = useParams()
  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [answers, setAnswers] = useState({})

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userNameInput, setUserNameInput] = useState('')

  const { score, updateScore, resetScore, addScoreToLeaderboard } = useContext(ScoreContext)
  const letters = ['A', 'B', 'C', 'D']
  const cardRef = useRef(null)

  const shuffleArray = array => array.sort(() => Math.random() - 0.5)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let url = '/quiz-app/api/questions'

        if (domain && domain !== 'full') {
          url = `/quiz-app/api/questions/${domain}`
        }

        console.log('Fetching questions from:', url)

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setQuizQuestions(shuffleArray(data))

        setAnswers({})
        setCurrentQuestionIndex(0)
      } catch (error) {
        console.error('Error fetching questions:', error)
      }
    }

    fetchQuestions()
  }, [domain])

  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { x: '100vw' },
        { x: '0vw', duration: 0.5, ease: 'power2.out' }
      )
    }
  }, [])

  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <p className="text-xl">Loading quiz questions...</p>
      </div>
    )
  }

  function handleAnswer(isCorrect, explanation, index) {
    if (answers[currentQuestionIndex]) return

    const currentQuestion = quizQuestions[currentQuestionIndex]
    const correctOptionIndex = currentQuestion.options.findIndex(option => option.isCorrect)
    const correctOption = currentQuestion.options[correctOptionIndex]

    const answerData = {
      selectedOptionIndex: index,
      message: isCorrect ? 'Correct!' : 'Incorrect!',
      explanation,
      correctAnswer: `${letters[correctOptionIndex]}: ${correctOption.text}`
    }

    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answerData }))

    if (isCorrect) {
      updateScore(1)
    }
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      gsap.to(cardRef.current, {
        x: '-100vw',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentQuestionIndex(prev => prev + 1)
          gsap.fromTo(
            cardRef.current,
            { x: '100vw' },
            { x: '0vw', duration: 0.5, ease: 'power2.out' }
          )
        }
      })
    } else {
      gsap.to(cardRef.current, {
        x: '-100vw',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => setIsModalOpen(true)
      })
    }
  }

  function handlePreviousQuestion() {
    if (currentQuestionIndex > 0) {
      gsap.to(cardRef.current, {
        x: '100vw',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentQuestionIndex(prev => prev - 1)
          gsap.fromTo(
            cardRef.current,
            { x: '-100vw' },
            { x: '0vw', duration: 0.5, ease: 'power2.out' }
          )
        }
      })
    }
  }

  function handleModalSubmit() {
    if (userNameInput) {
      addScoreToLeaderboard(userNameInput, score, domain ? domain : 'full')
    }
    setIsModalOpen(false)
    resetScore()
    setCurrentQuestionIndex(0)
    setAnswers({})
    setUserNameInput('')
    navigate(`/leaderboard`)
  }

  const currentAnswer = answers[currentQuestionIndex]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl" ref={cardRef}>
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
              if (currentAnswer) {
                if (option.isCorrect) {
                  buttonClass += ' btn-success'
                } else if (index === currentAnswer.selectedOptionIndex) {
                  buttonClass += ' btn-error'
                } else {
                  buttonClass += ' btn-disabled'
                }
              } else {
                buttonClass += ' btn-info'
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
                  disabled={!!currentAnswer}
                >
                  {letters[index]}. {option.text}
                </button>
              )
            })}
          </div>

          {currentAnswer && (
            <div className={`alert mt-4 ${currentAnswer.message === 'Incorrect!' ? 'alert-error' : 'alert-success'}`}>
              <div>
                <p className="text-2xl font-bold">{currentAnswer.message}</p>
                <br />
                <p className="text-lg font-bold">Correct Answer: "{currentAnswer.correctAnswer}"</p>
                <p className="italic text-lg">{currentAnswer.explanation}</p>
              </div>
            </div>
          )}

          <div className="flex w-full gap-2 mt-4">
            <Link to="/" className="btn btn-outline flex-grow">
              Back to Home
            </Link>
            <button
              className="btn btn-secondary flex-grow"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous Question
            </button>
            <button className="btn btn-accent flex-grow" onClick={handleNextQuestion}>
              {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Quiz Over!</h3>
            <p className="py-4">
              Your score is {score} / {quizQuestions.length}. Enter your name for the leaderboard:
            </p>
            <input
              type="text"
              className="input input-bordered w-full"
              value={userNameInput}
              onChange={e => setUserNameInput(e.target.value)}
            />
            <div className="modal-action">
              <button className="btn" onClick={handleModalSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Quiz