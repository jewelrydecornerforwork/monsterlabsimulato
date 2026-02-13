import Link from "next/link";

const featuredGuides = [
  {
    title: "Beginner\u2019s Lab Setup",
    description:
      "A step-by-step walkthrough covering your first lab stations, starter Fulus, and the core essence-to-egg loop.",
    tags: ["Beginner"],
    href: "/guide",
  },
  {
    title: "Early Game Economy Route",
    description:
      "How to keep your lab funded through the first dozen hours with smart order scheduling and ticket management.",
    tags: ["Economy", "Beginner"],
    href: "/wiki/lab-economy",
  },
  {
    title: "Habitat Layouts for Recovery",
    description:
      "Optimal habitat placement patterns that maximise element bonuses and cut downtime between battles.",
    tags: ["Habitats"],
    href: "#",
  },
  {
    title: "Combat Team Building",
    description:
      "Build balanced teams with clear Tank, DPS, and Support roles. Includes starter and mid-game compositions.",
    tags: ["Combat", "Intermediate"],
    href: "/wiki/combat-teams",
  },
  {
    title: "Essence Mastery",
    description:
      "Deep dive into the six essence types, rare drop conditions, and how Amber influences egg rarity outcomes.",
    tags: ["Essences", "Intermediate"],
    href: "/wiki/essences-eggs",
  },
  {
    title: "Lab Upgrade Path",
    description:
      "Prioritised upgrade order for machines, wings, and quality-of-life improvements like cleaning robots.",
    tags: ["Lab", "Economy"],
    href: "/wiki/lab-economy",
  },
];

export default function GuidesFeaturedList() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4">
        Featured Guides
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredGuides.map((guide) => (
          <div
            key={guide.title}
            className="rounded-xl border border-surface-light/30 bg-surface p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-semibold text-white">
                {guide.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                {guide.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {guide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-light/30 px-2.5 py-0.5 text-xs font-medium text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href={guide.href}
              className="mt-4 inline-flex items-center text-sm font-medium text-primary-light hover:text-primary transition-colors"
            >
              Open guide
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
