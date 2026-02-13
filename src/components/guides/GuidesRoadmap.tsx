import Link from "next/link";

const steps = [
  {
    step: 1,
    title: "Beginner\u2019s Guide",
    description:
      "Learn the core essence loop, set up your first lab stations, and hatch a solid starter roster of Fulus.",
    href: "/guide",
  },
  {
    step: 2,
    title: "Economy & Orders",
    description:
      "Stabilise your lab finances, schedule delivery orders efficiently, and avoid running dry on essences mid-session.",
    href: "/wiki/lab-economy",
  },
  {
    step: 3,
    title: "Habitats & Combat",
    description:
      "Optimise habitat placement for faster recovery, then assemble teams that can handle tournament brackets.",
    href: "/wiki/combat-teams",
  },
];

export default function GuidesRoadmap() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4">
        Recommended Reading Path
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s) => (
          <div
            key={s.step}
            className="rounded-xl border border-surface-light/30 bg-surface p-5 flex flex-col justify-between"
          >
            <div>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary-light text-xs font-bold">
                {s.step}
              </span>
              <h3 className="mt-3 text-base font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{s.description}</p>
            </div>
            <Link
              href={s.href}
              className="mt-4 inline-flex items-center text-sm font-medium text-primary-light hover:text-primary transition-colors"
            >
              Read guide
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
