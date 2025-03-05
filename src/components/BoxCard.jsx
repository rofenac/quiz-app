import { useRef, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CountdownContext } from './animations/CountdownContext'

function BoxCard({ icon, title, description, to }) {
  // Container ref to measure actual dimensions
  const containerRef = useRef(null)
  // Refs for the two border elements
  const borderTopLeftRef = useRef(null)
  const borderBottomRightRef = useRef(null)

  // Access countdown navigation from context
  const { navigateWithCountdown } = useContext(CountdownContext)
  const location = useLocation()
  const navigate = useNavigate()

  // State to track hover status
  const [isHovered, setIsHovered] = useState(false)

  // Helper function to generate smooth clipPath values for top-right to bottom-left border
  const getTopRightClipPath = (progress) => {
    // First quarter: draw down right side to 50%
    if (progress <= 0.25) {
      const rightSideProgress = progress * 4 // 0 to 1
      const rightSideY = rightSideProgress * 50 // 0 to 50%
      return `polygon(100% 0%, 100% ${rightSideY}%, 100% 0%)`
    }
    // Second quarter: draw down right side from 50% to 100%
    else if (progress <= 0.5) {
      const rightSideProgress = (progress - 0.25) * 4 // 0 to 1
      const rightSideY = 50 + rightSideProgress * 50 // 50% to 100%
      return `polygon(100% 0%, 100% ${rightSideY}%, 100% 0%)`
    }
    // Third quarter: draw left along bottom from right to middle
    else if (progress <= 0.75) {
      const bottomProgress = (progress - 0.5) * 4 // 0 to 1
      const bottomX = 100 - (bottomProgress * 50) // 100% to 50%
      return `polygon(100% 0%, 100% 100%, ${bottomX}% 100%)`
    }
    // Fourth quarter: draw left along bottom from middle to left
    else {
      const bottomProgress = (progress - 0.75) * 4 // 0 to 1
      const bottomX = 50 - (bottomProgress * 50) // 50% to 0%
      return `polygon(100% 0%, 100% 100%, ${bottomX}% 100%)`
    }
  }

  // Helper function to generate smooth clipPath values for bottom-left to top-right border
  const getBottomLeftClipPath = (progress) => {
    // First quarter: draw up left side to 50%
    if (progress <= 0.25) {
      const leftSideProgress = progress * 4 // 0 to 1
      const leftSideY = 100 - (leftSideProgress * 50) // 100% to 50%
      return `polygon(0% 100%, 0% ${leftSideY}%, 0% 100%)`
    }
    // Second quarter: draw up left side from 50% to 0%
    else if (progress <= 0.5) {
      const leftSideProgress = (progress - 0.25) * 4 // 0 to 1
      const leftSideY = 50 - (leftSideProgress * 50) // 50% to 0%
      return `polygon(0% 100%, 0% ${leftSideY}%, 0% 100%)`
    }
    // Third quarter: draw right along top from left to middle
    else if (progress <= 0.75) {
      const topProgress = (progress - 0.5) * 4 // 0 to 1
      const topX = topProgress * 50 // 0% to 50%
      return `polygon(0% 100%, 0% 0%, ${topX}% 0%)`
    }
    // Fourth quarter: draw right along top from middle to right
    else {
      const topProgress = (progress - 0.75) * 4 // 0 to 1
      const topX = 50 + (topProgress * 50) // 50% to 100%
      return `polygon(0% 100%, 0% 0%, ${topX}% 0%)`
    }
  }

  // Initialize the border elements when component mounts
  useEffect(() => {
    if (containerRef.current && borderTopLeftRef.current && borderBottomRightRef.current) {
      // Get the computed styles to match the card's border radius
      const computedStyle = window.getComputedStyle(containerRef.current)
      const borderRadius = computedStyle.borderRadius

      // Apply shared styles for both border elements
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

      // Initialize the top-right to bottom-left border (will show right and bottom sides)
      gsap.set(borderTopLeftRef.current, {
        ...commonStyles,
        borderTop: 'none',
        borderLeft: 'none',
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 0%)',
        opacity: 0
      })

      // Initialize the bottom-left to top-right border (will show left and top sides)
      gsap.set(borderBottomRightRef.current, {
        ...commonStyles,
        borderBottom: 'none',
        borderRight: 'none',
        clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%)',
        opacity: 0
      })
    }
  }, [])

  // References to store our animation timelines
  const topRightTimelineRef = useRef(null)
  const bottomLeftTimelineRef = useRef(null)

  // Animate the borders whenever the hover state changes
  useGSAP(() => {
    // First, kill any active animations to prevent overlap
    if (topRightTimelineRef.current) {
      topRightTimelineRef.current.kill()
    }
    if (bottomLeftTimelineRef.current) {
      bottomLeftTimelineRef.current.kill()
    }

    if (borderTopLeftRef.current && borderBottomRightRef.current) {
      if (isHovered) {
        // Reset borders to initial state and make visible
        gsap.set(borderTopLeftRef.current, {
          opacity: 1,
          clipPath: 'polygon(100% 0%, 100% 0%, 100% 0%)'
        })
        gsap.set(borderBottomRightRef.current, {
          opacity: 1,
          clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%)'
        })

        // Create fresh animation timelines and store references
        topRightTimelineRef.current = gsap.timeline()
        bottomLeftTimelineRef.current = gsap.timeline()

        // For top-right border animation
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

        // For bottom-left border animation
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
        // Create fresh timelines for exit animations
        topRightTimelineRef.current = gsap.timeline()
        bottomLeftTimelineRef.current = gsap.timeline()

        // Reverse animation for top-right border using a new progress object
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

        // Reverse animation for bottom-left border
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

    // Clean up function to kill animations when component unmounts or effect reruns
    return () => {
      if (topRightTimelineRef.current) {
        topRightTimelineRef.current.kill()
      }
      if (bottomLeftTimelineRef.current) {
        bottomLeftTimelineRef.current.kill()
      }
    }
  }, [isHovered])

  // Set hover state to trigger the animations
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  // Handle navigation on click based on current page
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
      {/* Animated border elements */}
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