function Strategies({
  materialsOne,
  materialsTwo,
  materialsThree,
  tacticsOne,
  tacticsTwo,
  tacticsThree
}) {
  return (
    <>
      <div className="py-10 px-4 lg:px-16">
        <h2 className="text-2xl font-bold mb-4">Study Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg p-4">
            <h3 className="font-bold text-lg">Recommended Materials</h3>
            <ul className="list-disc list-inside">
              <li>{materialsOne}</li>
              <li>{materialsTwo}</li>
              <li>{materialsThree}</li>
            </ul>
          </div>
          <div className="card bg-base-100 shadow-lg p-4">
            <h3 className="font-bold text-lg">Tactics & Tools</h3>
            <ul className="list-disc list-inside">
              <li>{tacticsOne}</li>
              <li>{tacticsTwo}</li>
              <li>{tacticsThree}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Strategies