import CardWrapper from '../animations/CardWrapper'

function Strategies({ materialsOne, materialsTwo, materialsThree, tacticsOne, tacticsTwo, tacticsThree }) {
  return (
    <div className="py-10 px-4 lg:px-16">
      <h2 className="text-2xl font-bold mb-4">Study Strategies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardWrapper animationDirection="left">
        <StrategiesCard title="Recommended Materials" items={[materialsOne, materialsTwo, materialsThree]} />
        </CardWrapper>
        <CardWrapper animationDirection="right">
        <StrategiesCard title="Tactics & Tools" items={[tacticsOne, tacticsTwo, tacticsThree]} />
        </CardWrapper>
      </div>
    </div>
  )
}

function StrategiesCard({ title, items }) {
  return (
    <div className="card bg-base-100 shadow-lg p-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Strategies