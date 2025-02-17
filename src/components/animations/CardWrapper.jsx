import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

function CardWrapper({ children, animationDirection = 'left' }) {
  const cardRef = useRef(null)

  useGSAP(() => {
    // Choose an x offset based on the desired direction
    const xOffset = animationDirection === 'left' ? -100 : 100
    gsap.from(cardRef.current, {
      x: xOffset,
      opacity: 0,
      duration: 2,
      ease: 'back.out(1.7)',
    })
  })

  return <div ref={cardRef}>{children}</div>
}

export default CardWrapper