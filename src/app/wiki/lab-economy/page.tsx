import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laboratory Management & Economy",
  description:
    "Optimize your Monster Lab Simulator laboratory. Learn machine upgrade priorities, efficient layouts, and master the economy loop for maximum resource generation.",
};

const machines = [
  {
    name: "Synthesis Machine",
    desc: "The core machine for combining essences into monster eggs. Higher levels unlock better recipes and improve success rates.",
    priority: "Highest",
    priorityColor: "text-red-400",
  },
  {
    name: "Essence Extractor",
    desc: "Harvests essences from raw materials. Upgrades increase yield and unlock rarer essence types.",
    priority: "High",
    priorityColor: "text-orange-400",
  },
  {
    name: "Egg Incubator",
    desc: "Hatches monster eggs. Better incubators reduce hatch time and improve the chance of higher-quality monsters.",
    priority: "Medium",
    priorityColor: "text-yellow-400",
  },
  {
    name: "Amber Processor",
    desc: "Refines raw Amber into usable catalysts. Upgrades improve Amber quality and processing speed.",
    priority: "Medium",
    priorityColor: "text-yellow-400",
  },
  {
    name: "Monster Housing",
    desc: "Provides living space for your monsters. More housing means a larger roster to choose from for battles.",
    priority: "Low",
    priorityColor: "text-green-400",
  },
  {
    name: "Training Grounds",
    desc: "Passively levels up housed monsters. Essential for end-game but low priority in early game.",
    priority: "Low",
    priorityColor: "text-green-400",
  },
];

export default function LabEconomyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Laboratory Management & <span className="text-primary-light">Economy</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Optimize your lab for maximum efficiency and profit
        </p>
        <div className="w-full rounded-xl border-2 border-dashed border-surface-light/40 bg-surface/60 flex items-center justify-center text-center p-6" style={{ aspectRatio: "21/9" }}>
          <span className="text-sm text-gray-500">Lab Economy banner &mdash; lab layout or machine upgrade screenshot</span>
        </div>
      </section>

      {/* Machine Types */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Machine Types</h2>
        <div className="space-y-3">
          {machines.map((machine) => (
            <div
              key={machine.name}
              className="bg-surface rounded-lg border border-surface-light/30 p-5 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-white text-lg">{machine.name}</h3>
                  <span className={`text-xs font-medium ${machine.priorityColor}`}>
                    {machine.priority} Priority
                  </span>
                </div>
                <p className="text-sm text-gray-400">{machine.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upgrade Path */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Recommended Upgrade Path</h2>
        <div className="space-y-6">
          {[
            {
              phase: "Early Game (Lab Level 1-3)",
              color: "border-green-500/30",
              steps: [
                "Level up Synthesis Machine to Lv.3 first — this unlocks rare recipes",
                "Upgrade Essence Extractor to Lv.2 for better yields",
                "Build at least 2 Monster Housing units",
                "Create a Sproutling for passive income ASAP",
              ],
            },
            {
              phase: "Mid Game (Lab Level 4-6)",
              color: "border-yellow-500/30",
              steps: [
                "Push Synthesis Machine to Lv.5 to unlock Shadow/Light recipe potential",
                "Upgrade Egg Incubator to Lv.3 for faster hatching",
                "Build and upgrade the Amber Processor",
                "Expand Monster Housing to hold at least 10 monsters",
                "Start upgrading Training Grounds for passive leveling",
              ],
            },
            {
              phase: "Late Game (Lab Level 7-10)",
              color: "border-red-500/30",
              steps: [
                "Max out Synthesis Machine for legendary recipes",
                "Max Egg Incubator for highest rarity chances",
                "Focus on Amber Processor for Pure Amber production",
                "Build the full Training Grounds complex",
                "Optimize layout for maximum automation efficiency",
              ],
            },
          ].map((phase) => (
            <div
              key={phase.phase}
              className={`bg-surface rounded-lg border ${phase.color} p-6`}
            >
              <h3 className="text-lg font-semibold text-white mb-3">{phase.phase}</h3>
              <ol className="space-y-2">
                {phase.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-primary-light font-bold flex-shrink-0">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Economy Loop */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">The Economy Loop</h2>
        <div className="bg-surface rounded-lg border border-surface-light/30 p-6">
          <p className="text-sm text-gray-400 mb-6">
            Understanding the core economy loop is essential for efficient progression. Every action should feed into this cycle:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {[
              { label: "Collect Essences", icon: "E", color: "bg-nature" },
              { label: "Craft Monsters", icon: "C", color: "bg-primary" },
              { label: "Battle / Sell", icon: "B", color: "bg-fire" },
              { label: "Earn Currency", icon: "$", color: "bg-light" },
              { label: "Upgrade Lab", icon: "U", color: "bg-shadow" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="text-center">
                  <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white font-bold mx-auto mb-1`}>
                    {step.icon}
                  </div>
                  <p className="text-xs text-gray-400">{step.label}</p>
                </div>
                {i < 4 && (
                  <span className="text-gray-500 hidden sm:block">&rarr;</span>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm text-gray-400">
            <div className="bg-surface-dark rounded-lg p-4">
              <h4 className="font-semibold text-white mb-1">Essence Generation</h4>
              <p>
                Your Essence Extractor passively generates essences. Sproutlings and other
                resource monsters boost this rate. Always keep your extractor running.
              </p>
            </div>
            <div className="bg-surface-dark rounded-lg p-4">
              <h4 className="font-semibold text-white mb-1">Monster Monetization</h4>
              <p>
                Unwanted monsters can be sold for currency, or deployed in battles for
                rewards. Even common monsters have value — sell duplicates to fund upgrades.
              </p>
            </div>
            <div className="bg-surface-dark rounded-lg p-4">
              <h4 className="font-semibold text-white mb-1">Strategic Reinvestment</h4>
              <p>
                Always reinvest currency into lab upgrades before crafting more monsters. A
                higher-level lab produces better monsters, creating a positive feedback loop.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Ready to build? Use our{" "}
          <Link href="/tools/recipes" className="text-primary-light hover:text-primary">
            Recipe Calculator
          </Link>{" "}
          to plan efficient crafts. Check the{" "}
          <Link href="/guide" className="text-primary-light hover:text-primary">
            Beginner&apos;s Guide
          </Link>{" "}
          for getting started tips.
        </p>
      </section>
    </div>
  );
}
