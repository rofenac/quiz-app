function PmpContext({
  quizType,
  lineOne,
  lineTwo,
  lineThree,
  typeOne,
  typeTwo,
  typeThree
}) {
  return (
    <>
      <div className="py-10 px-4 lg:px-16">
        <h2 className="text-2xl font-bold mb-4">Mastering the {quizType} Domain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg p-4">
            <h3 className="font-bold text-lg">Key Objectives</h3>
            <ul className="list-disc list-inside">
              <li>{lineOne}</li>
              <li>{lineTwo}</li>
              <li>{lineThree}</li>
            </ul>
          </div>
          <div className="card bg-base-100 shadow-lg p-4">
            <h3 className="font-bold text-lg">Types of PMP Questions</h3>
            <ul className="list-disc list-inside">
              <li>{typeOne}</li>
              <li>{typeTwo}</li>
              <li>{typeThree}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PmpContext