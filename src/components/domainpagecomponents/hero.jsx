import { Link } from 'react-router-dom'

function Hero({
  backgroundImage,
  title,
  subtitle,
  quizType
}) {
  return (
    <>
      <div className="hero bg-cover bg-center py-16" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-4xl font-bold">{title}</h1>
            <p className="mb-5">
              {subtitle}
            </p>
            <Link to='/quiz' className="btn btn-accent">{quizType}</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero