"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ElementType, Rarity, Monster } from "@/types";
import { getAllMonsters, findMonstersByRecipe } from "@/lib/data";
import BreedingPageLayout from "@/components/breeding/BreedingPageLayout";
import BreedingHeader from "@/components/breeding/BreedingHeader";
import BreedingStepsBanner from "@/components/breeding/BreedingStepsBanner";
import BreedingEssenceForm from "@/components/breeding/BreedingEssenceForm";
import BreedingResultsList from "@/components/breeding/BreedingResultsList";
import BreedingInfoPanel from "@/components/breeding/BreedingInfoPanel";
import BreedingFAQ from "@/components/breeding/BreedingFAQ";

const allMonsters = getAllMonsters();

export default function RecipesPage() {
  const searchParams = useSearchParams();

  const [essence1, setEssence1] = useState<ElementType | "">(
    (searchParams.get("e1") as ElementType) || ""
  );
  const [essence2, setEssence2] = useState<ElementType | "">(
    (searchParams.get("e2") as ElementType) || ""
  );
  const [essence3, setEssence3] = useState<ElementType | "">(
    (searchParams.get("e3") as ElementType) || ""
  );
  const [filterRarity, setFilterRarity] = useState<Rarity | "">("");
  const [filterElement, setFilterElement] = useState<ElementType | "">("");
  const [filterMinLabLevel, setFilterMinLabLevel] = useState<number | "">("");
  const [results, setResults] = useState<Monster[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (searchParams.get("e1") && searchParams.get("e2") && searchParams.get("e3")) {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearch() {
    if (!essence1 || !essence2 || !essence3) return;

    let found = findMonstersByRecipe(
      [essence1, essence2, essence3],
      filterRarity || undefined
    );

    if (filterElement) {
      found = found.filter((m) => m.element === filterElement);
    }

    if (filterMinLabLevel !== "") {
      found = found.filter((m) => m.recipe.labLevel >= filterMinLabLevel);
    }

    setResults(found);
    setHasSearched(true);
  }

  function handleReset() {
    setEssence1("");
    setEssence2("");
    setEssence3("");
    setFilterRarity("");
    setFilterElement("");
    setFilterMinLabLevel("");
    setResults([]);
    setHasSearched(false);
  }

  return (
    <BreedingPageLayout>
      <BreedingHeader recipeCount={allMonsters.length} />

      <BreedingStepsBanner />

      <div className="md:grid md:grid-cols-[2fr_1.2fr] gap-6">
        {/* Left column */}
        <div className="space-y-6">
          <BreedingEssenceForm
            essence1={essence1}
            essence2={essence2}
            essence3={essence3}
            onEssence1Change={setEssence1}
            onEssence2Change={setEssence2}
            onEssence3Change={setEssence3}
            filterRarity={filterRarity}
            onFilterRarityChange={setFilterRarity}
            filterElement={filterElement}
            onFilterElementChange={setFilterElement}
            filterMinLabLevel={filterMinLabLevel}
            onFilterMinLabLevelChange={setFilterMinLabLevel}
            onSearch={handleSearch}
            onReset={handleReset}
          />

          <BreedingResultsList
            results={results}
            hasSearched={hasSearched}
            onReset={handleReset}
          />
        </div>

        {/* Right column */}
        <div className="hidden md:block">
          <BreedingInfoPanel />
        </div>
      </div>

      <BreedingFAQ />
    </BreedingPageLayout>
  );
}
