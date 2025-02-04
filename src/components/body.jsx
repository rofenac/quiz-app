import { Link } from 'react-router-dom'

function BoxCard({ svgPath, title, description }) {
  return (
    <div className="card shadow-lg border border-base-300">
      <div className="card-body items-center text-center">
        <div className="rounded-full bg-neutral-focus p-3">
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={svgPath}></path>
          </svg>
        </div>
        <h2 className="card-title text-neutral-content">{title}</h2>
        <p className="text-neutral-content/70">{description}</p>
      </div>
    </div>
  )
}

function Body({
  pageFlavorText,
  pageTitle,
  pageSubTitle,
  boxes = [],
  showQuizButton,
  className,
}) {
  const boxesToRender = boxes.filter((box) => box.title)

  return (
    <section className={`bg-neutral ${className}`}>
      <div className="container mx-auto px-5 py-24">
        <div className="text-center mb-12">
          <p className="text-accent">{pageFlavorText}</p>
          <h1 className="text-3xl font-bold text-neutral-content">{pageTitle}</h1>
          <p className="text-neutral-content/70">{pageSubTitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {boxesToRender.map((item, index) => (
            <BoxCard
              key={index}
              svgPath={item.svgPath}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {showQuizButton && (
          <div className="flex justify-center mt-16">
            <Link to="/quiz/random" className="btn btn-accent">
              Start Quiz
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Body