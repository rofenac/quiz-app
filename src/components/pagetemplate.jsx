import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function PageTemplate({ bodyProps, headerLinks }) {
  const headerRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    // Animate the header: fade in from 0 to full opacity over 1 second.
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.3 }
      )
    }
    // Animate the footer: fade in from 0 to full opacity over 1 second, with a slight delay.
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.3, delay: 0.5 }
      )
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div ref={headerRef}>
        <Header>{headerLinks}</Header>
      </div>
      <Body
        {...bodyProps}
        classNameSection={`flex-grow ${bodyProps?.classNameSection || ''}`}
      />
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  )
}

export default PageTemplate