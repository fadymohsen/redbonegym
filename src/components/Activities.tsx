const activities = [
  {
    title: "Enjoy 1 Day",
    description:
      "Experience our gym with a complimentary one-day trial session and see what RedBone Gym has to offer.",
    gradient: "from-red-900 to-gray-900",
  },
  {
    title: "InBody",
    description:
      "Get a detailed InBody body composition analysis to track your progress and fine-tune your training plan.",
    gradient: "from-gray-800 to-red-950",
  },
  {
    title: "Physical Therapy",
    description:
      "Professional physical therapy sessions for recovery, rehabilitation, and injury prevention.",
    gradient: "from-red-950 to-gray-800",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="bg-gray-950 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white mb-4">
          Activities &amp; Services
        </h2>
        <div className="mx-auto mb-12 h-1 w-20 bg-red-600 rounded" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-red-600/50 transition-colors"
            >
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${item.gradient}`}
              >
                <span className="text-lg font-semibold text-white/70">
                  {item.title}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
