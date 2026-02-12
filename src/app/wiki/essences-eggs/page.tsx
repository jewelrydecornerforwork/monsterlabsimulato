import { Metadata } from "next";
import { getAllEssences, getMonstersByElement } from "@/lib/data";
import EssenceIcon from "@/components/EssenceIcon";
import MonsterCard from "@/components/MonsterCard";
import { ElementType } from "@/types";

export const metadata: Metadata = {
  title: "Essences & Eggs Guide",
  description:
    "Master the essence and egg systems in Monster Lab Simulator. Learn about all 6 essence types, egg rarity tiers, the Amber system, and optimal crafting strategies.",
};

export default function EssencesEggsPage() {
  const essences = getAllEssences();

  const essenceDetails: Record<
    string,
    { use: string; examples: string[] }
  > = {
    fire: { use: "High-damage DPS monsters with burst abilities", examples: ["Ember Pup", "Flame Striker", "Magma Titan"] },
    water: { use: "Tanky defensive monsters and swift attackers", examples: ["Aqualing", "Tidal Serpent", "Frost Leviathan"] },
    nature: { use: "Support monsters with healing and resource generation", examples: ["Sproutling", "Thornback", "Verdant Wyrm"] },
    neutral: { use: "Versatile hybrid monsters and recipe fillers", examples: ["Stone Golem", "Chimera Scout"] },
    shadow: { use: "Glass cannon assassins with speed and burst damage", examples: ["Shadow Imp", "Void Reaper", "Abyssal Lord"] },
    light: { use: "Holy healers, buffers, and resurrection specialists", examples: ["Luminite", "Solar Phoenix", "Celestial Dragon"] },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Essences & Eggs <span className="text-primary-light">Guide</span>
        </h1>
        <p className="text-xl text-gray-400">
          Master the foundation of monster breeding
        </p>
      </section>

      {/* Essence Types */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Essence Types</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-light/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Essence</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Unlock Level</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Primary Use</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Example Monsters</th>
              </tr>
            </thead>
            <tbody>
              {essences.map((e) => (
                <tr key={e.id} className="border-b border-surface-light/20">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <EssenceIcon element={e.id} size="sm" />
                      <span className="font-medium text-white">{e.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-300">Level {e.unlockLevel}</td>
                  <td className="py-3 px-4 text-gray-300">
                    {essenceDetails[e.id]?.use || e.description}
                  </td>
                  <td className="py-3 px-4 text-gray-400">
                    {essenceDetails[e.id]?.examples.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Egg Rarity & Amber */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Egg Rarity & Amber System</h2>
        <div className="space-y-6">
          <div className="bg-surface rounded-lg border border-surface-light/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Rarity Tiers</h3>
            <p className="text-sm text-gray-400 mb-4">
              Every monster synthesis produces an egg. The egg&apos;s rarity determines the monster&apos;s stat potential and ability power.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "Common", color: "border-rarity-common/50 bg-rarity-common/10", stats: "100-150 HP", desc: "Base stats, 2 abilities" },
                { name: "Rare", color: "border-rarity-rare/50 bg-rarity-rare/10", stats: "150-250 HP", desc: "+15% stats, 3 abilities" },
                { name: "Epic", color: "border-rarity-epic/50 bg-rarity-epic/10", stats: "250-350 HP", desc: "+30% stats, 3 abilities" },
                { name: "Legendary", color: "border-rarity-legendary/50 bg-rarity-legendary/10", stats: "350-400 HP", desc: "+50% stats, 4 abilities" },
              ].map((tier) => (
                <div key={tier.name} className={`rounded-lg border p-4 ${tier.color}`}>
                  <h4 className="font-semibold text-white mb-1">{tier.name}</h4>
                  <p className="text-xs text-gray-400">{tier.stats}</p>
                  <p className="text-xs text-gray-500 mt-1">{tier.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface rounded-lg border border-surface-light/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">The Amber System</h3>
            <p className="text-sm text-gray-400 mb-3">
              Amber is a special catalytic material applied during synthesis to enhance egg quality. Higher-grade Amber increases the probability of producing a higher-rarity egg.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5">*</span>
                <span><strong className="text-white">Raw Amber</strong> — Small rarity boost. Best used on common recipes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5">*</span>
                <span><strong className="text-white">Refined Amber</strong> — Moderate boost. Ideal for rare-tier targets.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5">*</span>
                <span><strong className="text-white">Pure Amber</strong> — Maximum boost. Save for epic/legendary attempts.</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface rounded-lg border border-primary/30 p-6">
            <h3 className="text-lg font-semibold text-primary-light mb-2">Tips for Maximizing Rare Eggs</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>- Always use the highest-grade Amber you can afford</li>
              <li>- Upgrade your Egg Incubator to increase base rarity chances</li>
              <li>- Some essence combinations have higher base rarity potential</li>
              <li>- Save Pure Amber for legendary-capable recipes only</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Recipes by Element */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Sample Recipes by Element</h2>
        {(["fire", "water", "nature", "shadow", "light"] as ElementType[]).map((element) => {
          const monsters = getMonstersByElement(element).slice(0, 3);
          if (monsters.length === 0) return null;
          return (
            <div key={element} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <EssenceIcon element={element} size="md" />
                <h3 className="text-lg font-semibold text-white capitalize">{element} Monsters</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {monsters.map((m) => (
                  <MonsterCard key={m.id} monster={m} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
