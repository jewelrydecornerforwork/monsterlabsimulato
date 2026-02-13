const focusAreas = [
  {
    title: "Beginner\u2019s Setup",
    points: [
      "Core loop: essences \u2192 eggs \u2192 Fulus",
      "Basic lab layout and station placement",
      "First 3\u20135 Fulus worth aiming for",
    ],
  },
  {
    title: "Economy & Farming",
    points: [
      "Orders, deliveries, and ticket income",
      "Money loops that keep the lab solvent",
      "Shift scheduling for maximum output",
    ],
  },
  {
    title: "Habitats & Recovery",
    points: [
      "Element-matched habitat bonuses",
      "Recovery rate optimisation",
      "Hygiene and happiness upkeep",
    ],
  },
  {
    title: "Combat & Teams",
    points: [
      "Turn-based battle fundamentals",
      "Starter team compositions",
      "Role synergy: Tank / DPS / Support",
    ],
  },
];

export default function GuidesFocusGrid() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4">
        What Each Stage Covers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {focusAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-xl border border-surface-light/30 bg-surface p-4 space-y-2"
          >
            <h3 className="text-base font-semibold text-white">
              {area.title}
            </h3>
            <ul className="space-y-1">
              {area.points.map((point) => (
                <li
                  key={point}
                  className="text-sm text-gray-400 flex items-start gap-2"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
