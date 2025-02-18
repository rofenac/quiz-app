import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useContext } from 'react'
import { CountdownContext } from '../animations/CountdownContext'

function Cta({ quizName, quizDomain }) {
  const ctaRef = useRef(null)

  // Animate the CTA container to float up and fade in
  useGSAP(() => {
    gsap.from(ctaRef.current, {
      y: 20,         // Starts 20px below its final position
      opacity: 0,    // Starts fully transparent
      duration: 1,   // Animation lasts 1 second
      ease: 'power1.out' // A simple easing without overshoot
    })
  })

  return (
    <div ref={ctaRef} className="py-10 text-center flex-grow">
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