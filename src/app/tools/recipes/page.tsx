import { Metadata } from "next";
import { Suspense } from "react";
import RecipeCalculator from "@/components/RecipeCalculator";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Recipe Calculator - Monster Lab Simulator",
  description:
    "Use the Monster Lab Simulator Recipe Calculator to find which Fulus you can create from any essence combination. Plan your synthesis and avoid wasting resources.",
};

function ImagePlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`w-full rounded-xl border-2 border-dashed border-surface-light/40 bg-surface/60 flex items-center justify-center text-center p-6`}
      style={{ aspectRatio: aspect }}
    >
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
}

const calculatorFaqItems = [
  {
    question: "How do I use the Recipe Calculator?",
    answer:
      "Select one essence for each of the three slots using the dropdown menus. Optionally pick a target rarity, then press Calculate. The tool will show every Fulu that matches your combination.",
  },
  {
    question: "Does essence order matter?",
    answer:
      "No. The calculator treats essences as an unordered set — Fire + Water + Nature gives the same results as Water + Nature + Fire.",
  },
  {
    question: "Why am I getting no results?",
    answer:
      "Not every combination produces a Fulu. Try swapping one essence or removing the rarity filter. Some recipes also require a minimum lab level that isn't reflected here yet.",
  },
  {
    question: "Can I share a recipe link?",
    answer:
      'Yes! After calculating, copy the page URL — it contains query parameters like <code class="text-primary-light">?e1=fire&amp;e2=water&amp;e3=neutral</code> that pre-fill the calculator for anyone who opens the link.',
  },
  {
    question: "Where does the data come from?",
    answer:
      "All recipes and monster data are sourced from the Monster Lab Simulator Early Access build. We update the database after each game patch.",
  },
];

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
        <p className="text-lg text-gray-400 max-w-2xl">
          Pick three essences, hit Calculate, and instantly see which Fulus you
          can hatch. Stop guessing and start planning every synthesis.
        </p>
      </section>

      {/* Image Placeholder */}
      <section className="mb-10">
        <ImagePlaceholder
          label="Calculator screenshot or hero banner placeholder"
          aspect="21/9"
        />
      </section>

      {/* Calculator */}
      <section className="mb-16">
        <Suspense fallback={<div className="text-gray-500">Loading calculator&hellip;</div>}>
          <RecipeCalculator />
        </Suspense>
      </section>

      {/* How to Use */}
      <section className="mb-16">
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

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          Recipe Calculator FAQ
        </h2>
        <div className="max-w-3xl">
          <FAQ items={calculatorFaqItems} />
        </div>
      </section>
    </div>
  );
}
