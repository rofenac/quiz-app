import { useRef, useContext } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { CountdownContext } from './animations/CountdownContext'
import BoxCard from './BoxCard'

function Body({
  pageFlavorText,
  pageTitle,
  pageSubTitle,
  boxes = [],
  showQuizButton,
  className,
  classNameSection
}) {
  const boxesToRender = boxes.filter(box => box.title)
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const quizButtonRef = useRef(null)
  const { navigateWithCountdown } = useContext(CountdownContext)

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    )
  }, [])

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        ease: 'back.out',
        clearProps: 'transform'
      }
    )
  }, [])

  useGSAP(() => {
    if (quizButtonRef.current) {
      gsap.fromTo(
        quizButtonRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
      )
    }
  }, [])

  const handleStartQuiz = () => {
    navigateWithCountdown('/quiz/full')
  }

  return (
    <section className={`${classNameSection}`}>
      <div className="container mx-auto px-5 py-32">
        <div ref={headerRef} className="text-center mb-12">
          <p className="pageFlavorText text-accent">{pageFlavorText}</p>
          <h1 className="pageTitle text-3xl font-bold">{pageTitle}</h1>
          <p className="pageSubTitle">{pageSubTitle}</p>
        </div>

        <div ref={containerRef} className={`${className}`}>
          {boxesToRender.map((item, index) => (
            <BoxCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              to={item.to}
            />
          ))}
        </div>

        {showQuizButton && (
          <div ref={quizButtonRef} className="flex justify-center mt-16">
            <button onClick={handleStartQuiz} className="btn btn-lg btn-accent">
              Start Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Body