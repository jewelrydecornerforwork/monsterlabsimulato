import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllMonsters, getMonsterBySlug, getRelatedMonsters, ELEMENT_GRADIENTS } from "@/lib/data";
import Badge from "@/components/Badge";
import StatsTable from "@/components/StatsTable";
import EssenceIcon from "@/components/EssenceIcon";
import MonsterCard from "@/components/MonsterCard";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllMonsters().map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const monster = getMonsterBySlug(params.slug);
  if (!monster) return { title: "Monster Not Found" };
  return {
    title: `${monster.name} - Stats, Recipe & Teams`,
    description: `${monster.name} is a ${monster.rarity} ${monster.element}-type ${monster.role} monster. Learn its stats, crafting recipe, abilities, and best team compositions.`,
  };
}

export default function MonsterDetailPage({ params }: PageProps) {
  const monster = getMonsterBySlug(params.slug);
  if (!monster) notFound();

  const related = getRelatedMonsters(monster);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        {" / "}
        <Link href="/monsters" className="hover:text-gray-300">Monsters</Link>
        {" / "}
        <span className="text-gray-300">{monster.name}</span>
      </nav>

      {/* Hero */}
      <section className="flex flex-col md:flex-row gap-8 mb-12">
        <div
          className={`w-full md:w-64 h-64 rounded-xl ${ELEMENT_GRADIENTS[monster.element]} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-8xl font-bold text-white/30">{monster.name.charAt(0)}</span>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-3">{monster.name}</h1>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge type="element" value={monster.element} />
            <Badge type="rarity" value={monster.rarity} />
            <Badge type="role" value={monster.role} />
          </div>
          <p className="text-gray-400 mb-6">{monster.description}</p>
          <StatsTable monster={monster} />
        </div>
      </section>

      {/* Crafting Recipe */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How to Obtain</h2>
        <div className="bg-surface rounded-lg border border-surface-light/30 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              {monster.recipe.essences.map((e, i) => (
                <div key={i} className="flex items-center gap-1">
                  <EssenceIcon element={e} size="lg" showLabel />
                  {i < 2 && <span className="text-gray-500 mx-1">+</span>}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Required Lab Level: <span className="text-white font-semibold">{monster.recipe.labLevel}</span>
          </p>
          <Link
            href={`/tools/recipes?e1=${monster.recipe.essences[0]}&e2=${monster.recipe.essences[1]}&e3=${monster.recipe.essences[2]}`}
            className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors"
          >
            Try in Calculator
          </Link>
        </div>
      </section>

      {/* Abilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Stats & Abilities</h2>
        <div className="bg-surface rounded-lg border border-surface-light/30 p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-3 bg-surface-dark rounded-lg">
              <p className="text-2xl font-bold text-green-400">{monster.hp}</p>
              <p className="text-xs text-gray-500 mt-1">HP</p>
            </div>
            <div className="text-center p-3 bg-surface-dark rounded-lg">
              <p className="text-2xl font-bold text-red-400">{monster.attack}</p>
              <p className="text-xs text-gray-500 mt-1">Attack</p>
            </div>
            <div className="text-center p-3 bg-surface-dark rounded-lg">
              <p className="text-2xl font-bold text-blue-400">{monster.defense}</p>
              <p className="text-xs text-gray-500 mt-1">Defense</p>
            </div>
            <div className="text-center p-3 bg-surface-dark rounded-lg">
              <p className="text-2xl font-bold text-yellow-400">{monster.speed}</p>
              <p className="text-xs text-gray-500 mt-1">Speed</p>
            </div>
          </div>

          <h3 className="font-semibold text-white mb-3">Abilities</h3>
          <div className="flex flex-wrap gap-2">
            {monster.abilities.map((ability) => (
              <span
                key={ability}
                className="px-3 py-1.5 bg-surface-dark rounded-lg text-sm text-gray-300 border border-surface-light/30"
              >
                {ability}
              </span>
            ))}
          </div>

          {monster.lore && (
            <div className="mt-6 pt-4 border-t border-surface-light/30">
              <h3 className="font-semibold text-white mb-2">Lore</h3>
              <p className="text-sm text-gray-400 italic">{monster.lore}</p>
            </div>
          )}
        </div>
      </section>

      {/* Related Monsters */}
      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Similar Monsters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((m) => (
              <MonsterCard key={m.id} monster={m} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
