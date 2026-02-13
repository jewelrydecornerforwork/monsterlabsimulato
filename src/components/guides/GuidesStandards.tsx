const checklistItems = [
  "State the build or patch version the guide was tested on.",
  "Specify which stage it targets\u2014Prologue, early EA, mid-game, or endgame.",
  "Tag the primary system (Essences, Lab, Combat, Habitats, etc.).",
  "Mark community-sourced findings as \u201Cunverified\u201D until independently tested.",
  "Cite source links or video timestamps when summarising external content.",
];

const templateLines = [
  "# Guide Title",
  "",
  "## Overview",
  "  - Goal",
  "  - Target stage",
  "  - Recommended lab setup",
  "",
  "## Requirements",
  "  - Essences needed",
  "  - Machines / upgrades",
  "  - Habitats",
  "",
  "## Steps",
  "  1. ...",
  "  2. ...",
  "  3. ...",
  "",
  "## Validation",
  "  - Build version",
  "  - Verified by",
  "  - Date tested",
];

const featureAnchors = [
  {
    title: "20 Fulu Families",
    note: "Consider how each family plays differently and which ones excel at each progression stage.",
  },
  {
    title: "80 Abilities Across Elements",
    note: "Cover ability combos and elemental synergies instead of listing raw stat numbers.",
  },
  {
    title: "Orders & Lab Economy",
    note: "Explain how orders shape your daily lab routine and which loops keep the lab solvent.",
  },
  {
    title: "New Lab Areas & Upgrades",
    note: "Call out when a strategy depends on specific wings, machines, or hygiene upgrades.",
  },
  {
    title: "Cleaning Robots",
    note: "Mention whether a strategy assumes you have an auto-clean bot keeping the floor tidy.",
  },
  {
    title: "Daily & Weekly Tasks",
    note: "Note how daily and weekly missions interact with your recommended gameplay cycles.",
  },
];

export default function GuidesStandards() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4">
        Documentation Standards
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        How guides on this site are written, reviewed, and kept trustworthy.
      </p>

      {/* Standards + Template */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Checklist */}
        <div className="rounded-xl border border-surface-light/30 bg-surface p-5">
          <h3 className="text-base font-semibold text-white mb-3">
            Every guide should&hellip;
          </h3>
          <ul className="space-y-2">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Template */}
        <div className="rounded-xl border border-surface-light/30 bg-surface p-5">
          <h3 className="text-base font-semibold text-white mb-3">
            Guide Template
          </h3>
          <pre className="bg-surface-dark rounded-lg p-4 font-mono text-xs text-gray-400 overflow-x-auto leading-relaxed">
            {templateLines.join("\n")}
          </pre>
        </div>
      </div>

      {/* Feature Anchors */}
      <div className="mt-8">
        <h3 className="text-base font-semibold text-white mb-3">
          Feature Anchors for Guide Writers
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Key game features that guides should address when relevant.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {featureAnchors.map((fa) => (
            <div
              key={fa.title}
              className="rounded-lg border border-surface-light/20 bg-surface-dark p-3"
            >
              <h4 className="text-sm font-semibold text-white">{fa.title}</h4>
              <p className="mt-1 text-xs text-gray-400">{fa.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
