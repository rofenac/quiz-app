import { Link } from 'react-router-dom'
import { useRef } from 'react'
import gsap from 'gsap'

function BoxCard({ icon, title, description, to }) {
  // Refs for the two SVG paths
  const path1Ref = useRef(null)
  const path2Ref = useRef(null)

  // Total length of the path – for a 100x100 square border it’s roughly 400.
  const totalLength = 400

  // On mouse enter, animate the stroke dash offset to 0 so the border "draws" in.
  const handleMouseEnter = () => {
    gsap.to(path1Ref.current, { strokeDashoffset: 0, duration: 0.6, ease: 'power1.inOut' })
    gsap.to(path2Ref.current, { strokeDashoffset: 0, duration: 0.6, ease: 'power1.inOut' })
  }

  // On mouse leave, reset the dash offset so the border disappears.
  const handleMouseLeave = () => {
    gsap.to(path1Ref.current, { strokeDashoffset: totalLength, duration: 0.6, ease: 'power1.inOut' })
    gsap.to(path2Ref.current, { strokeDashoffset: totalLength, duration: 0.6, ease: 'power1.inOut' })
  }

  return (
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative card shadow-lg bg-base-300 border border-base-300 hover:shadow-xl hover:scale-105 transition-transform duration-200 overflow-hidden"
    >
      {/* SVG overlay for animated border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Path 1: Starts at lower right (100,100) and goes counter-clockwise */}
        <path
          ref={path1Ref}
          d="M100,100 L0,100 L0,0 L100,0 L100,100"
          fill="none"
          stroke="#FF0088"
          strokeWidth="2"
          strokeDasharray={totalLength}
          strokeDashoffset={totalLength}
        />
        {/* Path 2: Starts at upper left (0,0) and goes clockwise */}
        <path
          ref={path2Ref}
          d="M0,0 L100,0 L100,100 L0,100 L0,0"
          fill="none"
          stroke="#00FF88"
          strokeWidth="2"
          strokeDasharray={totalLength}
          strokeDashoffset={totalLength}
        />
      </svg>

      <div className="card-body items-center text-center relative z-10">
        <div className="rounded-full bg-neutral-focus p-3">
          {icon}
        </div>
        <h2 className="card-title group-hover:text-accent">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default BoxCard