function RealLife() {
  return (
    <>
      <div className="py-10 px-4 lg:px-16 bg-base-300">
        <h2 className="text-2xl font-bold mb-4">Real-Life Application</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg p-4">
            <h3 className="font-bold text-lg">Leadership Scenarios</h3>
            <p>Resolving team conflicts during tight deadlines, motivating underperforming team members, and handling stakeholder disagreements in a collaborative manner.</p>
          </div>
          <div className="card bg-base-100 shadow-lg p-4">
            <h3 className="font-bold text-lg">Practical Tips & Tools</h3>
            <ul className="list-disc list-inside">
              <li>Use stakeholder mapping to identify key influencers.</li>
              <li>Practice active listening during meetings to gain trust and buy-in.</li>
              <li>Leverage tools like Slack or Microsoft Teams for communication.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default RealLife