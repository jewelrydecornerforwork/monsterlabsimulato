const systems = [
  {
    title: "Essences & Recipes",
    description:
      "Six elemental essences combine in trios to produce eggs. Recipe outcomes depend on the exact mix and order.",
    tags: ["Beginner"],
  },
  {
    title: "Eggs & Rarity",
    description:
      "Every synthesis yields an egg whose rarity\u2014Common through Legendary\u2014shapes the Fulu\u2019s stat ceiling. Amber boosts rarity odds.",
    tags: ["Beginner"],
  },
  {
    title: "Lab & Machines",
    description:
      "Synthesis machines, extractors, incubators, and processors form the production chain. Upgrade order matters.",
    tags: ["Beginner", "Intermediate"],
  },
  {
    title: "Orders & Economy",
    description:
      "Deliveries, ticket income, and currency loops keep the lab funded. Poor scheduling can stall progression entirely.",
    tags: ["Intermediate"],
  },
  {
    title: "Orbs & Collection",
    description:
      "Orbs track your Fulu library completion. Filling sets unlocks bonus rewards and cosmetic milestones.",
    tags: ["Intermediate"],
  },
  {
    title: "Evolution & Merging",
    description:
      "Duplicate Fulus can be merged to raise star level, improving stats and unlocking evolved ability slots.",
    tags: ["Intermediate", "Advanced"],
  },
  {
    title: "Luck & Gacha",
    description:
      "Hidden luck values influence rare drops and shiny encounters. Understanding the lever helps manage expectations.",
    tags: ["Advanced"],
  },
  {
    title: "Habitats & Recovery",
    description:
      "Element-matched habitats accelerate rest cycles. Layout and capacity upgrades directly affect team uptime.",
    tags: ["Beginner", "Intermediate"],
  },
  {
    title: "Hygiene & Mood",
    description:
      "Dirty labs lower Fulu mood, which tanks recovery speed and battle performance. Cleaning bots help automate upkeep.",
    tags: ["Beginner"],
  },
  {
    title: "Combat & Tournaments",
    description:
      "Turn-based battles reward smart role composition. Weekly tournaments offer exclusive crafting materials.",
    tags: ["Intermediate", "Advanced"],
  },
];

const tagColor: Record<string, string> = {
  Beginner: "bg-nature/20 text-nature-light",
  Intermediate: "bg-water/20 text-water-light",
  Advanced: "bg-shadow/20 text-shadow-light",
};

export default function GuidesSystemsGrid() {
  return (
    <section className="bg-surface/30 rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-white mb-4">
        Game Systems Overview
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        The major pillars of Monster Lab Simulator. Each system interacts with
        the others\u2014guides should explain those connections, not just
        isolated mechanics.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {systems.map((sys) => (
          <div
            key={sys.title}
            className="rounded-xl border border-surface-light/30 bg-surface p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-semibold text-white">
                {sys.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{sys.description}</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {sys.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tagColor[tag] ?? "bg-surface-light/30 text-gray-300"}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
