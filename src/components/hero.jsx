function Hero({
  image,
  title,
  content,
  button
}) {
  return (
    <>
      <section className="flex-grow flex flex-col bg-neutral text-base-content">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-5 py-24">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="rounded-lg object-cover object-center" alt="hero" src={image} />
          </div>
          <div className="lg:flex-grow md:w-1/2 md:pl-16 lg:pl-24 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-bold text-neutral-content">
              {title}
            </h1>
            <div className="flex w-full flex-col">
              <div className="divider"></div>
            </div>
            <p className="mb-8">{content}</p>
            <div className="flex justify-center md:justify-start">
              <button className="btn btn-accent px-6 text-lg">{button}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero