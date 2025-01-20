import { Link } from 'react-router-dom';

function PageTemplate(props) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderTemplate {...props} />
      <BodyTemplate {...props} className="flex-grow" />
      <FooterTemplate />
    </div>
  )
}

function HeaderTemplate({
  firstLink,
  secondLink,
  thirdLink,
  fourthLink,
}) {
  return (
    <header className="bg-gray-900">
      <div className="navbar container mx-auto px-5 flex items-center justify-between">
        {/* Logo and text */}
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3">DFPMPQA</span>
          </Link>
          {/* Vertical line */}
          <div className="divider-horizontal h-10 w-[1px] bg-gray-700"></div>
          {/* Navigation links */}
          <nav className="flex items-center space-x-5">
            <a className="hover:text-white text-gray-400">{firstLink}</a>
            <a className="hover:text-white text-gray-400">{secondLink}</a>
            <a className="hover:text-white text-gray-400">{thirdLink}</a>
            <a className="hover:text-white text-gray-400">{fourthLink}</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

function BodyTemplate({
  pageFlavorText,
  pageTitle,
  pageSubTitle,
  titleBoxOne,
  titleBoxTwo,
  titleBoxThree,
  titleBoxFour,
  titleBoxFive,
  titleBoxSix,
  descriptionBoxOne,
  descriptionBoxTwo,
  descriptionBoxThree,
  descriptionBoxFour,
  descriptionBoxFive,
  descriptionBoxSix,
  showQuizButton,
  className,
}) {
  const boxes = [
    { title: titleBoxOne, description: descriptionBoxOne, svgPath: 'M22 12h-4l-3 9L9 3l-3 9H2' },
    { title: titleBoxTwo, description: descriptionBoxTwo, svgPath: 'M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12' },
    { title: titleBoxThree, description: descriptionBoxThree, svgPath: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z' },
    { title: titleBoxFour, description: descriptionBoxFour, svgPath: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7' },
    { title: titleBoxFive, description: descriptionBoxFive, svgPath: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' },
    { title: titleBoxSix, description: descriptionBoxSix, svgPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }
  ]
  const boxesToRender = boxes.filter((box) => box.title)

  return (
    <section className={`bg-gray-900 ${className}`}>
      <div className="container mx-auto px-5 py-24">
        <div className="text-center mb-12">
          <p className="text-purple-400">{pageFlavorText}</p>
          <h1 className="text-3xl font-bold text-white">{pageTitle}</h1>
          <p>{pageSubTitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {boxesToRender.map((item, index) => (
            <div key={index} className="card shadow-lg border border-gray-700">
              <div className="card-body items-center text-center">
                <div className="rounded-full bg-gray-800 p-3">
                  <svg className="w-6 h-6 text-purple-400">
                    <path d={item.svgPath}></path>
                  </svg>
                </div>
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {showQuizButton && (
          <div className="flex justify-center mt-16">
            <Link to="/quiz" className="btn btn-primary">Start Quiz</Link>
          </div>
        )}
      </div>
    </section>
  )
}

function FooterTemplate() {
  return (
    <footer className="footer bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a className="btn btn-ghost normal-case text-xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3">DFPMPQA</span>
          </a>
        </div>
        {/* Links */}
        <nav className="menu menu-horizontal px-1">
          <li><a>© 2025 David Derr</a></li>
          <li>
            <a
              href="https://github.com/rofenac"
              className="hover:text-white text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </nav>
      </div>
    </footer>
  )
}

export default PageTemplate