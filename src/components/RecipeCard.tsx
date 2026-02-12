import Link from "next/link";
import { Recipe } from "@/types";
import { getMonsterById } from "@/lib/data";
import EssenceIcon from "./EssenceIcon";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const monster = getMonsterById(recipe.resultMonster);

  return (
    <div className="bg-surface rounded-lg border border-surface-light/30 p-5 hover:border-primary/40 transition-all">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-white">{recipe.name}</h3>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            recipe.difficulty === "easy"
              ? "bg-green-500/20 text-green-400"
              : recipe.difficulty === "medium"
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-red-500/20 text-red-400"
          }`}
        >
          {recipe.difficulty}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        {recipe.essences.map((essence, i) => (
          <div key={i} className="flex items-center gap-1">
            <EssenceIcon element={essence} size="sm" />
            {i < recipe.essences.length - 1 && (
              <span className="text-gray-500 text-xs">+</span>
            )}
          </div>
        ))}
        <span className="text-gray-500 mx-1">=</span>
        {monster && (
          <span className="text-primary-light font-medium text-sm">{monster.name}</span>
        )}
      </div>

      <p className="text-sm text-gray-400 mb-4">{recipe.description}</p>

      <Link
        href={`/tools/recipes?e1=${recipe.essences[0]}&e2=${recipe.essences[1]}&e3=${recipe.essences[2]}`}
        className="inline-flex items-center text-sm text-primary-light hover:text-primary font-medium transition-colors"
      >
        Try This Recipe &rarr;
      </Link>
    </div>
  );
}
