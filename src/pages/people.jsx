import { Link } from 'react-router-dom'
import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import boardroom1 from '../assets/boardroom1.jpg'

function People() {
  const contentParagraphs = [
    "The 'People' domain of the PMP exam emphasizes leadership, collaboration, and interpersonal skills essential for project success. It’s all about managing and empowering project teams, fostering effective communication, resolving conflicts, and motivating stakeholders to work toward a common goal.",
    "This section accounts for 42% of the PMP exam, making it a critical area to focus on. You'll learn how to:",
    "- Build high-performing teams by recruiting, mentoring, and supporting team members.",
    "- Communicate effectively to ensure everyone stays aligned.",
    "- Manage conflicts and promote collaboration among diverse stakeholders.",
    "- Adapt your leadership style to different team dynamics and project environments.",
    "By mastering this domain, you’ll be well-equipped to lead with confidence, build trust, and ensure team success in any project setting. Dive in to learn how to ace this crucial area of the PMP exam!",
    "Ready to test your knowledge? Take our quiz to see how well you understand the 'People' domain of the PMP exam!"
  ]
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Hero
          className="flex-grow"
          image={boardroom1}
          title="Mastering the People Domain of the PMP Exam"
          content={contentParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
          button={<Link to='/quiz'>The People Quiz</Link>}
        />
        <Footer />
      </div >
    </>
  )
}

export default People