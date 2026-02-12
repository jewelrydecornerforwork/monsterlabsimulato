import { Suspense } from "react";
import { getAllMonsters, getRecipes } from "@/lib/data";
import RecipeCalculator from "@/components/RecipeCalculator";
import RecipeCard from "@/components/RecipeCard";
import SEOArticle from "@/components/SEOArticle";
import HomeMonsterGrid from "./HomeMonsterGrid";

export default function HomePage() {
  const allMonsters = getAllMonsters();
  const recipes = getRecipes();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Monster Lab Simulator
            <br />
            <span className="text-primary-light">Recipe Calculator & Monster Database</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Find the perfect essence combinations, unlock rare monsters, and build winning teams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#calculator"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary/25"
            >
              Open Recipe Calculator
            </a>
            <a
              href="#monster-database"
              className="px-8 py-3 bg-surface border border-surface-light/50 hover:border-primary/50 text-white font-semibold rounded-lg transition-colors"
            >
              Browse All Monsters
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Recipe Calculator */}
        <Suspense fallback={<div className="h-96 bg-surface rounded-xl animate-pulse" />}>
          <RecipeCalculator />
        </Suspense>

        {/* Monster Database Grid */}
        <section id="monster-database" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-white mb-2">Monster Database</h2>
          <p className="text-gray-400 mb-6">
            Browse all {allMonsters.length} monsters. Filter by element, rarity, or role.
          </p>
          <HomeMonsterGrid monsters={allMonsters} />
        </section>

        {/* Top Recipes */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-2">Most Popular Recipes</h2>
          <p className="text-gray-400 mb-6">
            Tried-and-true recipes recommended by experienced lab owners
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* SEO Content Footer */}
        <section>
          <SEOArticle>
            <h2>What is Monster Lab Simulator?</h2>
            <p>
              <strong>Monster Lab Simulator</strong> is an exciting Steam game that puts you in charge of your own monster breeding laboratory. As a lab owner, you collect magical essences, combine them in your synthesis machines, and create powerful monsters to battle other players. The game features a deep crafting system with hundreds of possible essence combinations, each producing unique monsters with different stats, abilities, and elemental affinities.
            </p>
            <p>
              Whether you&apos;re a new player just starting your first lab or a seasoned veteran pushing for legendary monsters, understanding the <strong>Monster Lab Simulator recipe system</strong> is crucial to your success. Our tools and guides are designed to help you make the most of every essence you collect.
            </p>

            <h2>How the Essence System Works</h2>
            <p>
              The essence system is the foundation of all monster creation in Monster Lab Simulator. There are six types of essences: <strong>Fire, Water, Nature, Neutral, Shadow, and Light</strong>. Each synthesis requires exactly three essences, and the combination determines which monster you&apos;ll create.
            </p>
            <p>
              Some essences are available from the start (Fire, Water, Neutral), while others like Shadow and Light essences require reaching higher lab levels. The order of essences doesn&apos;t matter — what matters is the combination of types. For example, Fire + Fire + Neutral produces the same result regardless of which slot each essence occupies.
            </p>

            <h3>Essence Rarity and Monster Quality</h3>
            <p>
              Higher-quality essences can improve the stats of monsters you create. Combined with the <strong>Amber system</strong>, which influences egg rarity, mastering essence quality is key to creating the strongest possible monsters. Check our <a href="/wiki/essences-eggs">Essences & Eggs Guide</a> for detailed breakdowns.
            </p>

            <h2>Why Use a Recipe Calculator?</h2>
            <p>
              With over 18 possible monsters and dozens of valid essence combinations, manually tracking recipes is impractical. Our <strong>Monster Lab Simulator Recipe Calculator</strong> instantly shows you which monsters you can create with your available essences. Simply select three essences, optionally filter by rarity, and discover all possible outcomes.
            </p>
            <p>
              The calculator is especially valuable for new players who want to avoid wasting rare essences on unwanted monsters. By planning your synthesis in advance, you can ensure every crafting session produces exactly the monster your team needs.
            </p>

            <h2>Popular Monster Combinations</h2>
            <p>
              Some recipes are universally recommended by the Monster Lab Simulator community. The <strong>Ember Pup</strong> (Fire + Fire + Neutral) is the ideal starter DPS monster, while the <strong>Aqualing</strong> (Water + Neutral + Water) serves as an excellent early tank. For economy-focused players, the <strong>Sproutling</strong> (Nature + Nature + Neutral) generates passive resources.
            </p>
            <p>
              As you progress, recipes like the <strong>Flame Striker</strong> (triple Fire) and <strong>Tidal Serpent</strong> (triple Water) become available, offering significant power spikes. End-game recipes like the <strong>Frost Leviathan</strong> and <strong>Celestial Dragon</strong> require rare essences and high lab levels but produce the most powerful monsters in the game.
            </p>

            <h2>Tips for New Players</h2>
            <ul>
              <li>Start with the <strong>Starter Squad</strong> team: Ember Pup + Aqualing + Sproutling. It covers all three roles (DPS, Tank, Support) and is cheap to build.</li>
              <li>Don&apos;t waste essences randomly. Use our <a href="#calculator">Recipe Calculator</a> to plan every synthesis.</li>
              <li>Create a <strong>Sproutling early</strong> for passive income. The resources it generates will accelerate your progress significantly.</li>
              <li>Focus on <strong>lab upgrades</strong> before chasing rare monsters. Higher lab levels unlock better recipes and improve synthesis success rates.</li>
              <li>Read our <a href="/guide">Beginner&apos;s Guide</a> for a complete walkthrough of your first few hours.</li>
            </ul>
          </SEOArticle>
        </section>
      </div>
    </div>
  );
}
