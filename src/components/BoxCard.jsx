import { useRef, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CountdownContext } from './animations/CountdownContext'

function BoxCard({ icon, title, description, to }) {
  const containerRef = useRef(null)
  const borderTopLeftRef = useRef(null)
  const borderBottomRightRef = useRef(null)

  const { navigateWithCountdown } = useContext(CountdownContext)
  const location = useLocation()
  const navigate = useNavigate()

  const [isHovered, setIsHovered] = useState(false)

  const getTopRightClipPath = (progress) => {
    if (progress <= 0.25) {
      const rightSideProgress = progress * 4
      const rightSideY = rightSideProgress * 50
      return `polygon(100% 0%, 100% ${rightSideY}%, 100% 0%)`
    }
    else if (progress <= 0.5) {
      const rightSideProgress = (progress - 0.25) * 4
      const rightSideY = 50 + rightSideProgress * 50
      return `polygon(100% 0%, 100% ${rightSideY}%, 100% 0%)`
    }
    else if (progress <= 0.75) {
      const bottomProgress = (progress - 0.5) * 4
      const bottomX = 100 - (bottomProgress * 50)
      return `polygon(100% 0%, 100% 100%, ${bottomX}% 100%)`
    }
    else {
      const bottomProgress = (progress - 0.75) * 4
      const bottomX = 50 - (bottomProgress * 50)
      return `polygon(100% 0%, 100% 100%, ${bottomX}% 100%)`
    }
  }

  const getBottomLeftClipPath = (progress) => {
    if (progress <= 0.25) {
      const leftSideProgress = progress * 4
      const leftSideY = 100 - (leftSideProgress * 50)
      return `polygon(0% 100%, 0% ${leftSideY}%, 0% 100%)`
    }
    else if (progress <= 0.5) {
      const leftSideProgress = (progress - 0.25) * 4
      const leftSideY = 50 - (leftSideProgress * 50)
      return `polygon(0% 100%, 0% ${leftSideY}%, 0% 100%)`
    }
    else if (progress <= 0.75) {
      const topProgress = (progress - 0.5) * 4
      const topX = topProgress * 50
      return `polygon(0% 100%, 0% 0%, ${topX}% 0%)`
    }
    else {
      const topProgress = (progress - 0.75) * 4
      const topX = 50 + (topProgress * 50) // 50% to 100%
      return `polygon(0% 100%, 0% 0%, ${topX}% 0%)`
    }
  }

  useEffect(() => {
    if (containerRef.current && borderTopLeftRef.current && borderBottomRightRef.current) {
      const computedStyle = window.getComputedStyle(containerRef.current)
      const borderRadius = computedStyle.borderRadius

      const commonStyles = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        border: '2px solid currentColor',
        borderRadius,
        boxSizing: 'border-box'
      }

      gsap.set(borderTopLeftRef.current, {
        ...commonStyles,
        borderTop: 'none',
        borderLeft: 'none',
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 0%)',
        opacity: 0
      })

      gsap.set(borderBottomRightRef.current, {
        ...commonStyles,
        borderBottom: 'none',
        borderRight: 'none',
        clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%)',
        opacity: 0
      })
    }
  }, [])

  const topRightTimelineRef = useRef(null)
  const bottomLeftTimelineRef = useRef(null)

  useGSAP(() => {
    if (topRightTimelineRef.current) {
      topRightTimelineRef.current.kill()
    }
    if (bottomLeftTimelineRef.current) {
      bottomLeftTimelineRef.current.kill()
    }

    if (borderTopLeftRef.current && borderBottomRightRef.current) {
      if (isHovered) {
        gsap.set(borderTopLeftRef.current, {
          opacity: 1,
          clipPath: 'polygon(100% 0%, 100% 0%, 100% 0%)'
        })
        gsap.set(borderBottomRightRef.current, {
          opacity: 1,
          clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%)'
        })

        topRightTimelineRef.current = gsap.timeline()
        bottomLeftTimelineRef.current = gsap.timeline()

        const topRightProgress = { value: 0 }
        topRightTimelineRef.current.to(topRightProgress, {
          value: 1,
          duration: 0.8,
          ease: 'linear',
          onUpdate: function () {
            gsap.set(borderTopLeftRef.current, {
              clipPath: getTopRightClipPath(topRightProgress.value)
            })
          }
        })

        const bottomLeftProgress = { value: 0 }
        bottomLeftTimelineRef.current.to(bottomLeftProgress, {
          value: 1,
          duration: 0.8,
          ease: 'linear',
          onUpdate: function () {
            gsap.set(borderBottomRightRef.current, {
              clipPath: getBottomLeftClipPath(bottomLeftProgress.value)
            })
          }
        })
      } else {
        topRightTimelineRef.current = gsap.timeline()
        bottomLeftTimelineRef.current = gsap.timeline()

        const topRightProgress = { value: 1 }
        topRightTimelineRef.current.to(topRightProgress, {
          value: 0,
          duration: 0.8,
          ease: 'linear',
          onUpdate: function () {
            gsap.set(borderTopLeftRef.current, {
              clipPath: getTopRightClipPath(topRightProgress.value)
            })
          },
          onComplete: () => {
            gsap.set(borderTopLeftRef.current, { opacity: 0 })
          }
        })

        const bottomLeftProgress = { value: 1 }
        bottomLeftTimelineRef.current.to(bottomLeftProgress, {
          value: 0,
          duration: 0.8,
          ease: 'linear',
          onUpdate: function () {
            gsap.set(borderBottomRightRef.current, {
              clipPath: getBottomLeftClipPath(bottomLeftProgress.value)
            })
          },
          onComplete: () => {
            gsap.set(borderBottomRightRef.current, { opacity: 0 })
          }
        })
      }
    }

    return () => {
      if (topRightTimelineRef.current) {
        topRightTimelineRef.current.kill()
      }
      if (bottomLeftTimelineRef.current) {
        bottomLeftTimelineRef.current.kill()
      }
    }
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = () => {
    if (location.pathname === '/howworks') {
      navigateWithCountdown(to)
    } else {
      navigate(to)
    }
  }

  return (
    <button
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative card shadow-lg bg-base-300 border border-base-300 hover:shadow-xl hover:scale-105 transition-transform duration-200"
    >
      <div
        ref={borderTopLeftRef}
        className="pointer-events-none text-accent"
      />
      <div
        ref={borderBottomRightRef}
        className="pointer-events-none text-accent"
      />

      <div className="card-body items-center text-center relative z-10">
        <div className="rounded-full bg-neutral-focus p-3">
          {icon}
        </div>
        <h2 className="card-title group-hover:text-accent">{title}</h2>
        <p>{description}</p>
      </div>
    </button>
  )
}

export default BoxCard