import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function CountdownOverlay({ onComplete }) {
  const overlayRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete })
    // Ensure the overlay is visible
    tl.set(overlayRef.current, { display: 'flex', opacity: 1 })

    // Animate the "Are you ready?" text
    const readyText = overlayRef.current.querySelector('.ready-text')
    tl.fromTo(
      readyText,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
    )
    tl.to(readyText, { opacity: 0, duration: 0.5, delay: 0.5 })

    // Animate the countdown from 3 to 1
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

    // Cleanup the timeline when the component unmounts.
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