import { useRef, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { CountdownContext } from './animations/CountdownContext'

function BoxCard({ icon, title, description, to }) {
  // Refs for the two SVG paths
  const path1Ref = useRef(null)
  const path2Ref = useRef(null)
  // Each half-border is 200 units long (for a 100x100 viewBox rectangle)
  const halfLength = 200

  // Access countdown navigation from context
  const { navigateWithCountdown } = useContext(CountdownContext)
  const location = useLocation()
  const navigate = useNavigate()

  // On mouse enter, animate the stroke dash offset to 0 so the half-border "draws" in.
  const handleMouseEnter = () => {
    gsap.to(path1Ref.current, { strokeDashoffset: 0, duration: 0.6, ease: 'power1.inOut' })
    gsap.to(path2Ref.current, { strokeDashoffset: 0, duration: 0.6, ease: 'power1.inOut' })
  }

  // On mouse leave, reset the dash offset so the half-borders disappear.
  const handleMouseLeave = () => {
    gsap.to(path1Ref.current, { strokeDashoffset: halfLength, duration: 0.6, ease: 'power1.inOut' })
    gsap.to(path2Ref.current, { strokeDashoffset: halfLength, duration: 0.6, ease: 'power1.inOut' })
  }

  // Handle click based on the current page:
  // - On the howworks page, use the countdown overlay before navigating.
  // - On other pages, navigate immediately.
  const handleClick = () => {
    if (location.pathname === '/howworks') {
      navigateWithCountdown(to)
    } else {
      navigate(to)
    }
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative card shadow-lg bg-base-300 border border-base-300 hover:shadow-xl hover:scale-105 transition-transform duration-200 overflow-hidden"
    >
      {/* SVG overlay for animated border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-accent"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/*
          Path 1: Starts at lower right (100,100) and goes counter-clockwise along the bottom and left edges to (0,0)
        */}
        <path
          ref={path1Ref}
          d="M100,100 L0,100 L0,0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={halfLength}
          strokeDashoffset={halfLength}
        />
        {/*
          Path 2: Starts at upper left (0,0) and goes clockwise along the top and right edges to (100,100)
        */}
        <path
          ref={path2Ref}
          d="M0,0 L100,0 L100,100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={halfLength}
          strokeDashoffset={halfLength}
        />
      </svg>

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