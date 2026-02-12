import { Metadata } from "next";
import Link from "next/link";
import { getTeams } from "@/lib/data";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "Combat System & Team Building",
  description:
    "Master the Monster Lab Simulator combat system. Learn turn-based mechanics, elemental advantages, and get proven team compositions for every stage of the game.",
};

export default function CombatTeamsPage() {
  const teams = getTeams();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Combat System & <span className="text-primary-light">Team Building</span>
        </h1>
        <p className="text-xl text-gray-400">
          Master turn-based combat and build unbeatable monster teams
        </p>
      </section>

      {/* Combat Basics */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">How Combat Works</h2>
        <div className="space-y-4">
          <div className="bg-surface rounded-lg border border-surface-light/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Turn-Based Mechanics</h3>
            <p className="text-sm text-gray-400 mb-3">
              Combat in Monster Lab Simulator is turn-based. Each round, monsters act in order of their <strong className="text-white">Speed stat</strong>. Faster monsters attack first, which can be decisive in close matches.
            </p>
            <p className="text-sm text-gray-400">
              Each monster can use one ability per turn. Some abilities have cooldowns, so choosing when to use powerful moves is a key strategic element.
            </p>
          </div>

          <div className="bg-surface rounded-lg border border-surface-light/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Elemental Advantages</h3>
            <p className="text-sm text-gray-400 mb-3">
              Elements create a rock-paper-scissors dynamic that adds depth to team building:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { matchup: "Fire > Nature", desc: "Fire burns Nature for 1.5x damage" },
                { matchup: "Water > Fire", desc: "Water douses Fire for 1.5x damage" },
                { matchup: "Nature > Water", desc: "Nature absorbs Water for 1.5x damage" },
                { matchup: "Light > Shadow", desc: "Light purifies Shadow for 1.5x damage" },
                { matchup: "Shadow > Light", desc: "Shadow corrupts Light for 1.5x damage" },
                { matchup: "Neutral", desc: "Neutral has no advantages or weaknesses" },
              ].map((item) => (
                <div key={item.matchup} className="flex items-start gap-2 bg-surface-dark rounded-lg p-3">
                  <span className="text-white font-medium flex-shrink-0">{item.matchup}</span>
                  <span className="text-gray-400">— {item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface rounded-lg border border-surface-light/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Skill Types</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-1">Offensive</h4>
                <p className="text-gray-400">Direct damage skills. Scale with Attack stat. Examples: Flame Bite, Tidal Wave</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-1">Defensive</h4>
                <p className="text-gray-400">Shields and damage reduction. Scale with Defense stat. Examples: Water Shield, Rock Wall</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-1">Support</h4>
                <p className="text-gray-400">Healing, buffs, and debuffs. Scale with HP. Examples: Healing Bloom, Radiant Aura</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Builds */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Sample Team Builds</h2>
        <div className="space-y-6">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>

      {/* Team Building Tips */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">General Team Building Principles</h2>
        <div className="bg-surface rounded-lg border border-surface-light/30 p-6">
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-primary-light font-bold mt-0.5">1.</span>
              <span><strong className="text-white">Always include a Tank.</strong> Without a front-line absorber, your DPS and Support will fall quickly. Aqualing or Frost Leviathan are strong choices.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light font-bold mt-0.5">2.</span>
              <span><strong className="text-white">Cover at least 2 elements.</strong> Mono-element teams are vulnerable to counters. Mix elements to handle diverse threats.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light font-bold mt-0.5">3.</span>
              <span><strong className="text-white">Speed matters in PVP.</strong> The team that acts first often wins. Consider at least one fast monster like Shadow Imp.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light font-bold mt-0.5">4.</span>
              <span><strong className="text-white">Healing is underrated.</strong> Support monsters may not deal damage, but they extend your team&apos;s staying power dramatically.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light font-bold mt-0.5">5.</span>
              <span><strong className="text-white">Build for the content.</strong> PVP teams differ from PVE teams. Resource farming needs a completely different setup. Adapt your roster.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-light font-bold mt-0.5">6.</span>
              <span><strong className="text-white">Upgrade monsters before replacing them.</strong> A well-leveled Rare monster often outperforms an underleveled Epic.</span>
            </li>
          </ul>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Need help with crafting? Use our{" "}
          <Link href="/#calculator" className="text-primary-light hover:text-primary">
            Recipe Calculator
          </Link>{" "}
          to plan your next monster.
        </p>
      </section>
    </div>
  );
}
