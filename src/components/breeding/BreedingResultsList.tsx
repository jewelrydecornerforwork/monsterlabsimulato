import Link from "next/link";
import { Monster } from "@/types";
import Badge from "@/components/Badge";
import EssenceIcon from "@/components/EssenceIcon";

interface BreedingResultsListProps {
  results: Monster[];
  hasSearched: boolean;
  onReset: () => void;
}

export default function BreedingResultsList({
  results,
  hasSearched,
  onReset,
}: BreedingResultsListProps) {
  if (!hasSearched) return null;

  return (
    <div className="mt-6 space-y-3">
      <h3 className="text-sm font-medium text-white">
        {results.length > 0
          ? `${results.length} matching result${results.length > 1 ? "s" : ""}`
          : "No recipes found for this combination"}
      </h3>

      {results.length > 0 ? (
        results.map((monster) => (
          <div
            key={monster.id}
            className="rounded-xl bg-surface border border-surface-light/30 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          >
            <div className="space-y-2">
              <p className="font-semibold text-white">{monster.name}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge type="element" value={monster.element} />
                <Badge type="rarity" value={monster.rarity} />
                <Badge type="role" value={monster.role} />
                <span className="inline-flex items-center rounded-full bg-surface-dark border border-surface-light/50 px-2.5 py-0.5 text-xs font-medium text-gray-400">
                  Lab Lv. {monster.recipe.labLevel}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {monster.recipe.essences.map((ess, i) => (
                  <div key={i} className="flex items-center gap-0.5">
                    <EssenceIcon element={ess} size="sm" />
                    {i < 2 && <span className="text-gray-600 text-xs mx-0.5">+</span>}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/monsters/${monster.slug}`}
              className="inline-flex items-center px-4 py-2 bg-surface-dark border border-surface-light/50 rounded-lg text-sm text-primary-light hover:text-white hover:border-primary/50 transition-colors whitespace-nowrap"
            >
              View Monster &rarr;
            </Link>
          </div>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm mb-3">
            Try a different essence combination, or loosen your output filters.
          </p>
          <button
            onClick={onReset}
            className="text-sm text-primary-light hover:text-primary transition-colors"
          >
            Reset all inputs
          </button>
        </div>
      )}
    </div>
  );
}
