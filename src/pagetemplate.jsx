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
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
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
          <span className="ml-3 text-xl">DFPMPQA</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white">{firstLink}</a>
          <a className="mr-5 hover:text-white">{secondLink}</a>
          <a className="mr-5 hover:text-white">{thirdLink}</a>
          <a className="mr-5 hover:text-white">{fourthLink}</a>
        </nav>
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
    <section className={`text-gray-400 body-font bg-gray-900 ${className}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <p className="lg:w-1/2 w-full text-purple-400 leading-relaxed text-opacity-80">
            {pageFlavorText}
          </p>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            {pageTitle}
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
            {pageSubTitle}
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {boxesToRender.map((item, index) => (
            <div className="xl:w-1/3 md:w-1/2 p-4" key={index}>
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d={item.svgPath}></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">{item.title}</h2>
                <p className="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  )
}

function FooterTemplate() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
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
          <span className="ml-3 text-xl">DFPMPQA</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2025 David Derr —
          <a
            href="https://github.com/rofenac"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rofenac
          </a>
        </p>
      </div>
    </footer>
  )
}

export default PageTemplate