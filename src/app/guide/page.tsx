import { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Beginner's Guide - Monster Lab Simulator",
  description:
    "New to Monster Lab Simulator? Learn the essential tips, tricks, and strategies to master your lab in the first 3 hours. Complete beginner walkthrough.",
};

const faqItems = [
  {
    question: "What's the best starter monster?",
    answer:
      "Ember Pup (Fire + Fire + Neutral) is widely considered the best starter DPS monster due to its high attack and low crafting requirements. Pair it with Aqualing for defense and Sproutling for healing.",
  },
  {
    question: "How do I get Shadow and Light essences?",
    answer:
      "Shadow and Light essences unlock at Lab Level 5. Focus on upgrading your lab through the early game using Fire, Water, Nature, and Neutral essences. Once you reach Level 5, these powerful essence types become available.",
  },
  {
    question: "Should I focus on PVP or PVE first?",
    answer:
      "Start with PVE to build your monster roster and earn resources. PVP becomes more rewarding once you have a solid team of rare+ monsters, typically around mid-game.",
  },
  {
    question: "How does the Amber system work?",
    answer:
      "Amber is a special material that enhances egg quality during synthesis. Higher-quality Amber increases the chance of getting better stat rolls on your monsters. Save your best Amber for legendary recipes.",
  },
  {
    question: "What's the fastest way to earn currency?",
    answer:
      "Create a Sproutling early for passive income. Combine it with farming-optimized stages and the Resource Farming Team composition for maximum efficiency. Lab upgrades that boost resource generation also help significantly.",
  },
  {
    question: "Can I reset or re-craft a monster?",
    answer:
      "Monsters cannot be directly reset, but you can recycle unwanted monsters for a portion of the essences used. This makes planning with the Recipe Calculator even more important to avoid waste.",
  },
];

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Monster Lab Simulator
          <br />
          <span className="text-primary-light">Beginner&apos;s Guide</span>
        </h1>
        <p className="text-xl text-gray-400">
          Everything you need to know in your first 3 hours
        </p>
      </section>

      {/* First 5 Steps */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Your First 5 Steps</h2>
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: "Complete the Tutorial",
              desc: "The tutorial teaches you how to operate the synthesis machine and create your first monster. It also unlocks basic Fire, Water, and Neutral essences for free.",
            },
            {
              step: 2,
              title: "Unlock Fire, Water, and Nature Essences ASAP",
              desc: "These three elements form the foundation of early-game recipes. Nature essences unlock at Lab Level 2, so prioritize that upgrade first.",
            },
            {
              step: 3,
              title: "Build a Resource Farming Monster",
              desc: "Create a Sproutling (Nature + Nature + Neutral) as soon as possible. Its passive resource generation will fund all your future experiments.",
            },
            {
              step: 4,
              title: "Choose Your Playstyle",
              desc: "Decide whether you want to focus on synthesis (collecting and crafting) or combat (PVP tournaments). This determines which monsters and upgrades to prioritize.",
            },
            {
              step: 5,
              title: "Join Tournaments for Rewards",
              desc: "Even losing in tournaments earns you rewards. Enter early and often, but don't burn through all your resources trying to win — focus on building a solid roster first.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 bg-surface rounded-lg border border-surface-light/30 p-5"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary-light flex items-center justify-center font-bold text-lg">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essences & Eggs */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding Essences & Eggs</h2>
        <p className="text-gray-400 mb-6">
          Essences are the raw materials for monster creation. Each synthesis requires exactly 3 essences.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mb-3">Essence Types</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-light/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Essence</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Unlock Level</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Primary Use</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                { name: "Fire", level: 1, use: "High-damage DPS monsters" },
                { name: "Water", level: 1, use: "Tanky defensive monsters" },
                { name: "Neutral", level: 1, use: "Versatile hybrid monsters" },
                { name: "Nature", level: 2, use: "Support and healing monsters" },
                { name: "Shadow", level: 5, use: "Glass cannon assassins" },
                { name: "Light", level: 5, use: "Holy healers and buffers" },
              ].map((e) => (
                <tr key={e.name} className="border-b border-surface-light/20">
                  <td className="py-3 px-4 font-medium text-white">{e.name}</td>
                  <td className="py-3 px-4">{e.level}</td>
                  <td className="py-3 px-4">{e.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-200 mb-3">Egg Rarity & Amber System</h3>
        <p className="text-gray-400 text-sm mb-2">
          When you synthesize a monster, the result comes as an egg. Egg rarity (Common to Legendary) affects the monster&apos;s stat rolls.
          Higher-quality Amber can be applied during synthesis to boost the egg&apos;s rarity tier.
        </p>
        <p className="text-gray-400 text-sm">
          For a deeper dive, check our{" "}
          <Link href="/wiki/essences-eggs" className="text-primary-light hover:text-primary">
            Essences & Eggs Guide
          </Link>
          .
        </p>
      </section>

      {/* Crafting Basics */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">How to Craft Monsters Efficiently</h2>
        <div className="bg-surface rounded-lg border border-surface-light/30 p-5 space-y-3 text-sm text-gray-400">
          <p>
            <strong className="text-white">Don&apos;t waste essences randomly</strong> — save them for planned recipes.
            Use our{" "}
            <Link href="/#calculator" className="text-primary-light hover:text-primary">
              Recipe Calculator
            </Link>{" "}
            to find the exact combination you need before committing resources.
          </p>
          <p>
            <strong className="text-white">Prioritize utility monsters early</strong> — monsters that generate XP or Gold (like Sproutling) will pay for themselves many times over.
          </p>
          <p>
            <strong className="text-white">Save rare essences</strong> — Shadow and Light essences are scarce in the early game. Don&apos;t use them until you can craft Rare or higher tier monsters.
          </p>
        </div>
      </section>

      {/* Lab Layout */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Laboratory Management Tips</h2>
        <div className="space-y-3 text-sm text-gray-400">
          <div className="bg-surface rounded-lg border border-surface-light/30 p-4">
            <h3 className="font-semibold text-white mb-1">Upgrade Priority</h3>
            <p>Synthesis Machine &gt; Essence Extractor &gt; Egg Incubator &gt; Amber Processor. The synthesis machine directly affects recipe quality.</p>
          </div>
          <div className="bg-surface rounded-lg border border-surface-light/30 p-4">
            <h3 className="font-semibold text-white mb-1">Machine Arrangement</h3>
            <p>Place machines close together to reduce transfer time. The optimal layout minimizes the distance between your Essence Extractor and Synthesis Machine.</p>
          </div>
          <div className="bg-surface rounded-lg border border-surface-light/30 p-4">
            <h3 className="font-semibold text-white mb-1">Economy Loop</h3>
            <p>Essences &rarr; Craft Monsters &rarr; Battle/Sell for Currency &rarr; Upgrade Lab &rarr; Unlock Better Recipes. Keep this cycle going for steady progression.</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Read the full{" "}
          <Link href="/wiki/lab-economy" className="text-primary-light hover:text-primary">
            Lab & Economy Guide
          </Link>{" "}
          for detailed upgrade paths.
        </p>
      </section>

      {/* Combat Intro */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Your First Battle Team</h2>
        <p className="text-gray-400 text-sm mb-4">
          A balanced team needs three roles: Tank (absorbs damage), DPS (deals damage), and Support (heals and buffs).
        </p>
        <div className="bg-surface rounded-lg border border-surface-light/30 p-5">
          <h3 className="font-semibold text-white mb-3">Recommended Starter Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {[
              { name: "Aqualing", role: "Tank", element: "Water" },
              { name: "Ember Pup", role: "DPS", element: "Fire" },
              { name: "Sproutling", role: "Support", element: "Nature" },
            ].map((m) => (
              <div key={m.name} className="bg-surface-dark rounded-lg p-3 text-center">
                <p className="font-medium text-white">{m.name}</p>
                <p className="text-xs text-gray-400">
                  {m.element} | {m.role}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            This team is cheap to build and effective through the early game. For advanced compositions, visit our{" "}
            <Link href="/wiki/combat-teams" className="text-primary-light hover:text-primary">
              Combat & Teams Guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <FAQ items={faqItems} />
      </section>
    </div>
  );
}
