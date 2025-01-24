import { Link } from 'react-router-dom'
import boardroom1 from '../../assets/boardroom1.jpg'

function Hero() {
  return (
    <>
      <div className="hero bg-cover bg-center py-16" style={{ backgroundImage: `url(${boardroom1})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-4xl font-bold">Mastering the People Domain</h1>
            <p className="mb-5">
              Building strong leadership and collaboration skills to ensure project success.
            </p>
            <Link to='/quiz' className="btn btn-accent">Take the People Quiz</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero