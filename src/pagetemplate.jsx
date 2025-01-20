import { Link } from 'react-router-dom';

function PageTemplate(props) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderTemplate {...props} />
      <BodyTemplate {...props} className="flex-grow" />
      <FooterTemplate />
    </div>
  );
}

export function HeaderTemplate({
  firstLink,
  secondLink,
  thirdLink,
  fourthLink,
}) {
  return (
    <header className="bg-neutral">
      <div className="navbar container mx-auto px-5 flex items-center justify-between">
        {/* Logo + Text */}
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-neutral-content p-2 bg-accent rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-neutral-content">DFPMPQA</span>
          </Link>
          <div className="h-10 w-[1px] bg-base-300 mx-4" />
          <nav className="flex items-center space-x-5">
            <a className="text-neutral-content/60 hover:text-neutral-content">{firstLink}</a>
            <a className="text-neutral-content/60 hover:text-neutral-content">{secondLink}</a>
            <a className="text-neutral-content/60 hover:text-neutral-content">{thirdLink}</a>
            <a className="text-neutral-content/60 hover:text-neutral-content">{fourthLink}</a>
          </nav>
        </div>
      </div>
    </header>
  );
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
  ];
  const boxesToRender = boxes.filter((box) => box.title);

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
            <div key={index} className="card shadow-lg border border-base-300">
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
                    <path d={item.svgPath}></path>
                  </svg>
                </div>
                <h2 className="card-title text-neutral-content">{item.title}</h2>
                <p className="text-neutral-content/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {showQuizButton && (
          <div className="flex justify-center mt-16">
            <Link to="/quiz" className="btn btn-accent">
              Start Quiz
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function FooterTemplate() {
  return (
    <footer className="footer bg-neutral text-neutral-content/70">
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
              className="w-10 h-10 text-neutral-content p-2 bg-accent rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-neutral-content">DFPMPQA</span>
          </a>
        </div>
        <nav className="menu menu-horizontal px-1">
          <li>
            <a className="text-neutral-content/70">© 2025 David Derr</a>
          </li>
          <li>
            <a
              href="https://github.com/rofenac"
              className="hover:text-neutral-content text-neutral-content/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </nav>
      </div>
    </footer>
  );
}

export default PageTemplate