import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

function CardTitleAnimation({ children }) {
  const cardTitle = useRef(null)

  useGSAP(() => {
    gsap.from(cardTitle.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.2,
    })
  })

  return <div ref={cardTitle}>{children}</div>
}

export default CardTitleAnimation