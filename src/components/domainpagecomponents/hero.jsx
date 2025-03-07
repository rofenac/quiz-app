import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useContext } from 'react'
import { CountdownContext } from '../animations/CountdownContext'

function Hero({ backgroundImage, title, subtitle, quizName, quizDomain }) {
  const heroRef = useRef(null)

  useGSAP(() => {
    const heroTexts = heroRef.current.querySelectorAll('.hero-text')
    gsap.from(heroTexts, {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.2,
    })
  })

  return (
    <div
      className="hero bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      ref={heroRef}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-4xl font-bold hero-text">{title}</h1>
          <p className="mb-5 hero-text">{subtitle}</p>
          {quizName && quizDomain && (
            <HeroButton quizName={quizName} quizDomain={quizDomain} extraClass="hero-text" />
          )}
        </div>
      </div>
    </div>
  )
}

function HeroButton({ quizName, quizDomain, extraClass = '' }) {
  const { navigateWithCountdown } = useContext(CountdownContext)

  const handleClick = () => {
    navigateWithCountdown(`/quiz/${quizDomain}`)
  }

  return (
    <button onClick={handleClick} className={`btn btn-accent ${extraClass}`}>
      {quizName}
    </button>
  )
}

export default Hero