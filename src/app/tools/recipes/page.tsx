import { Metadata } from "next";
import { Suspense } from "react";
import RecipeCalculator from "@/components/RecipeCalculator";

export const metadata: Metadata = {
  title: "Recipe Calculator - Monster Lab Simulator",
  description:
    "Use the Monster Lab Simulator Recipe Calculator to find which Fulus you can create from any essence combination. Plan your synthesis and avoid wasting resources.",
};

export default function RecipesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Monster Lab Simulator
          <br />
          <span className="text-primary-light">Recipe Calculator</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mb-8">
          Pick three essences, hit Calculate, and instantly see which Fulus you
          can hatch. Stop guessing and start planning every synthesis.
        </p>
        <div className="w-full rounded-xl border-2 border-dashed border-surface-light/40 bg-surface/60 flex items-center justify-center text-center p-6" style={{ aspectRatio: "21/9" }}>
          <span className="text-sm text-gray-500">Calculator hero banner &mdash; synthesis machine or essence selection screenshot</span>
        </div>
      </section>

      {/* Calculator */}
      <section className="mb-16">
        <Suspense fallback={<div className="text-gray-500">Loading calculator&hellip;</div>}>
          <RecipeCalculator />
        </Suspense>
      </section>

      {/* How to Use */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          How to Use This Calculator
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: 1,
              title: "Choose 3 Essences",
              text: "Use the dropdown menus to select one essence per slot. The six types are Fire, Water, Nature, Neutral, Shadow, and Light.",
            },
            {
              step: 2,
              title: "Set Rarity (Optional)",
              text: "Filter results by Common, Rare, Epic, or Legendary. Leave it on \"Any Rarity\" to see all possibilities.",
            },
            {
              step: 3,
              title: "View Results",
              text: "Press Calculate. Every matching Fulu appears as a card you can click to visit its full stats page.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-surface rounded-xl border border-surface-light/30 p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary-light font-bold text-lg mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
