import CardTitleAnimation from "../animations/CardTitleAnimation"
import CardWrapper from "../animations/CardWrapper"

function PmpContext({ quizType, lineOne, lineTwo, lineThree, typeOne, typeTwo, typeThree }) {
  return (
    <div className="py-10 px-4 lg:px-16">
      <CardTitleAnimation>
        <h2 className="text-2xl font-bold mb-4">Mastering the {quizType} Domain</h2>
      </CardTitleAnimation>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardWrapper animationDirection="left" dOffset="0">
          <PmpCard title="Key Objectives" items={[lineOne, lineTwo, lineThree]} />
        </CardWrapper>
        <CardWrapper animationDirection="right" dOffset="0">
          <PmpCard title="Types of PMP Questions" items={[typeOne, typeTwo, typeThree]} />
        </CardWrapper>
      </div>
    </div>
  )
}

function PmpCard({ title, items }) {
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

export default PmpContext