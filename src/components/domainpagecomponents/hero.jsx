import { Link } from 'react-router-dom'

function Hero({ backgroundImage, title, subtitle, quizName, quizDomain }) {
  return (
    <div
      className="hero bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-4xl font-bold">{title}</h1>
          <p className="mb-5">{subtitle}</p>
          {quizName && quizDomain && (
            <HeroButton quizName={quizName} quizDomain={quizDomain} />
          )}
        </div>
      </div>
    </div>
  )
}

function HeroButton({ quizName, quizDomain }) {
  return (
    <Link to={quizDomain} className="btn btn-accent">
      {quizName}
    </Link>
  )
}

export default Hero