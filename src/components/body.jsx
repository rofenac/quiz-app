import { Link } from 'react-router-dom'

function BoxCard({ svgPath, title, description, to }) {
  return (
    <Link
      to={to}
      className="group card shadow-lg bg-base-300 border border-base-300 hover:shadow-xl hover:scale-105 transition-transform duration-200"
    >
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
        <h2 className="card-title group-hover:text-accent">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}

function Body({
  pageFlavorText,
  pageTitle,
  pageSubTitle,
  boxes = [],
  showQuizButton,
  className,
  classNameSection
}) {
  const boxesToRender = boxes.filter((box) => box.title)

  return (
    <section className={`${classNameSection}`}>
      <div className="container mx-auto px-5 py-24">
        <div className="text-center mb-12">
          <p className="text-accent">{pageFlavorText}</p>
          <h1 className="text-3xl font-bold">{pageTitle}</h1>
          <p>{pageSubTitle}</p>
        </div>

        <div className={`${className}`}>
          {boxesToRender.map((item, index) => (
            <BoxCard
              key={index}
              svgPath={item.svgPath}
              title={item.title}
              description={item.description}
              to={item.to}
            />
          ))}
        </div>

        {showQuizButton && (
          <div className="flex justify-center mt-16">
            <Link to="/quiz/all question" className="btn btn-accent">
              Start Quiz
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Body