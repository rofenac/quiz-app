import CardWrapper from "../animations/CardWrapper"

function RealLife({ scenarioOne, tipOne, tipTwo, tipThree }) {
  return (
    <div className="py-10 px-4 lg:px-16 bg-base-300">
      <h2 className="text-2xl font-bold mb-4">Real-Life Application</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardWrapper animationDirection="left">
        <RealLifeCard title="Leadership Scenarios">
          <p>{scenarioOne}</p>
        </RealLifeCard>
        </CardWrapper>
        <CardWrapper animationDirection="right">
        <RealLifeCard title="Practical Tips & Tools">
          <ul className="list-disc list-inside">
            {[tipOne, tipTwo, tipThree].map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </RealLifeCard>
        </CardWrapper>
      </div>
    </div>
  )
}

function RealLifeCard({ title, children }) {
  return (
    <div className="card bg-base-100 shadow-lg p-4">
      <h3 className="font-bold text-lg">{title}</h3>
      {children}
    </div>
  )
}

export default RealLife