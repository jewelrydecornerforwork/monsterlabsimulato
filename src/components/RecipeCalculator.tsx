"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ElementType, Rarity, Monster } from "@/types";
import { findMonstersByRecipe } from "@/lib/data";
import EssenceIcon from "./EssenceIcon";
import MonsterCard from "./MonsterCard";

const essenceOptions: ElementType[] = ["fire", "water", "nature", "neutral", "shadow", "light"];
const rarityOptions: (Rarity | "")[] = ["", "common", "rare", "epic", "legendary"];

export default function RecipeCalculator() {
  const searchParams = useSearchParams();

  const [essence1, setEssence1] = useState<ElementType>(
    (searchParams.get("e1") as ElementType) || "fire"
  );
  const [essence2, setEssence2] = useState<ElementType>(
    (searchParams.get("e2") as ElementType) || "fire"
  );
  const [essence3, setEssence3] = useState<ElementType>(
    (searchParams.get("e3") as ElementType) || "neutral"
  );
  const [rarityFilter, setRarityFilter] = useState<Rarity | "">("");
  const [results, setResults] = useState<Monster[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (searchParams.get("e1")) {
      handleCalculate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCalculate() {
    const found = findMonstersByRecipe(
      [essence1, essence2, essence3],
      rarityFilter || undefined
    );
    setResults(found);
    setHasSearched(true);
  }

  return (
    <div id="calculator" className="scroll-mt-20">
      <div className="bg-surface rounded-xl border border-surface-light/30 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Recipe Calculator</h2>
        <p className="text-gray-400 mb-6">
          Select essences to see which monsters you can create
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {[
            { label: "Essence Slot 1", value: essence1, setter: setEssence1 },
            { label: "Essence Slot 2", value: essence2, setter: setEssence2 },
            { label: "Essence Slot 3", value: essence3, setter: setEssence3 },
          ].map((slot, i) => (
            <div key={i}>
              <label className="block text-sm text-gray-400 mb-1.5">{slot.label}</label>
              <div className="flex items-center gap-2">
                <EssenceIcon element={slot.value} size="md" />
                <select
                  value={slot.value}
                  onChange={(e) => slot.setter(e.target.value as ElementType)}
                  className="flex-1 bg-surface-dark border border-surface-light/50 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors"
                >
                  {essenceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)} Essence
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">
              Target Rarity (Optional)
            </label>
            <select
              value={rarityFilter}
              onChange={(e) => setRarityFilter(e.target.value as Rarity | "")}
              className="bg-surface-dark border border-surface-light/50 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors"
            >
              {rarityOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt ? opt.charAt(0).toUpperCase() + opt.slice(1) : "Any Rarity"}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleCalculate}
            className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shadow-lg shadow-primary/20"
          >
            Calculate
          </button>
        </div>

        {/* Results */}
        {hasSearched && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {results.length > 0
                ? `Found ${results.length} monster${results.length > 1 ? "s" : ""}`
                : "No monsters found for this combination"}
            </h3>
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((m) => (
                  <MonsterCard key={m.id} monster={m} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                Try a different essence combination. Not all combinations produce a monster.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
