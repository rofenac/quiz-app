import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function CountdownOverlay({ onComplete }) {
  const overlayRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete })
    tl.set(overlayRef.current, { display: 'flex', opacity: 1 })

    const readyText = overlayRef.current.querySelector('.ready-text')
    tl.fromTo(
      readyText,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
    )
    tl.to(readyText, { opacity: 0, duration: 0.5, delay: 0.5 })

    const countdownEl = overlayRef.current.querySelector('.countdown')
    const numbers = ['3', '2', '1']
    numbers.forEach(num => {
      tl.call(() => {
        countdownEl.innerText = num
      })
      tl.fromTo(
        countdownEl,
        { scale: 0.5, opacity: 0 },
        { scale: 1.2, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
      tl.to(
        countdownEl,
        { scale: 1, opacity: 0, duration: 0.5, ease: 'power2.in' }
      )
    })

    return () => tl.kill()
  }, [onComplete])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-base-200 flex flex-col justify-center items-center z-50"
    >
      <div className="ready-text text-6xl font-bold mb-4">Are you ready?</div>
      <div className="countdown text-8xl font-bold"></div>
    </div>
  )
}

export default CountdownOverlay