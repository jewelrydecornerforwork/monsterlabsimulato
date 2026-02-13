"use client";

import { useState } from "react";
import Link from "next/link";
import { ElementType, Rarity, Role } from "@/types";
import { getAllMonsters } from "@/lib/data";
import MonstersPageLayout from "@/components/monsters/MonstersPageLayout";
import MonstersOverviewStats from "@/components/monsters/MonstersOverviewStats";
import MonstersFilterBar from "@/components/monsters/MonstersFilterBar";
import MonstersGrid from "@/components/monsters/MonstersGrid";
import SEOArticle from "@/components/SEOArticle";

export default function MonstersPage() {
  const allMonsters = getAllMonsters();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedElement, setSelectedElement] = useState<ElementType | "">("");
  const [selectedRarity, setSelectedRarity] = useState<Rarity | "">("");
  const [selectedRole, setSelectedRole] = useState<Role | "">("");

  const filtered = allMonsters.filter((m) => {
    if (searchQuery && !m.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedElement && m.element !== selectedElement) return false;
    if (selectedRarity && m.rarity !== selectedRarity) return false;
    if (selectedRole && m.role !== selectedRole) return false;
    return true;
  });

  function handleReset() {
    setSearchQuery("");
    setSelectedElement("");
    setSelectedRarity("");
    setSelectedRole("");
  }

  return (
    <MonstersPageLayout>
      {/* Page Header */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-semibold text-white">Fulu Database</h1>
          <span className="inline-flex items-center rounded-full bg-surface-light/30 px-3 py-1 text-xs font-medium text-gray-300">
            {allMonsters.length} entries
          </span>
        </div>
        <p className="text-sm text-gray-500 max-w-2xl">
          Browse every known Fulu in Monster Lab Simulator &mdash; filter by element, rarity, role,
          and more to plan your ideal lab roster.
        </p>
      </section>

      {/* Overview Stats */}
      <MonstersOverviewStats monsters={allMonsters} />

      {/* Filters */}
      <MonstersFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedElement={selectedElement}
        onElementChange={setSelectedElement}
        selectedRarity={selectedRarity}
        onRarityChange={setSelectedRarity}
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        onReset={handleReset}
      />

      {/* Monster Grid */}
      <MonstersGrid monsters={filtered} onReset={handleReset} />

      {/* SEO Text Block */}
      <section className="max-w-3xl mx-auto">
        <SEOArticle>
          <h2>What Are Fulus in Monster Lab Simulator?</h2>
          <p>
            Fulus are the creatures you synthesize, train, and deploy in Monster Lab Simulator.
            Every Fulu is born from a unique combination of elemental essences mixed inside your lab,
            and each one belongs to a family lineage that influences its growth potential. From the
            humble Ember Pup to the legendary Celestial Dragon, the world of Fulus is vast and
            rewarding to explore.
          </p>

          <h2>Elements, Rarities, and Roles Explained</h2>
          <p>
            Each Fulu is defined by three core attributes. Its <strong>element</strong> (Fire, Water,
            Nature, Neutral, Shadow, or Light) determines type matchups and essence requirements.
            Its <strong>rarity</strong> ranges from Common through Legendary, reflecting both the
            difficulty of creation and raw power ceiling. Finally, its <strong>role</strong> &mdash;
            Tank, DPS, Support, or Utility &mdash; dictates how it fits into a balanced team
            composition. Understanding these three axes is key to building a competitive roster.
          </p>

          <h2>Building Your Ideal Lab Roster</h2>
          <p>
            Use the filters above to narrow down Fulus by any combination of element, rarity, and
            role. Planning a fire-heavy assault squad? Filter for Fire DPS monsters. Need a reliable
            healer for late-game content? Look at Nature and Light supports. Each card links to a
            detailed profile page with full stats, crafting recipes, and ability breakdowns.
          </p>

          <h2>Companion Tools and Guides</h2>
          <p>
            This database works best alongside our other resources. Use the{" "}
            <Link href="/tools/recipes" className="text-primary-light hover:text-primary">
              Recipe Calculator
            </Link>{" "}
            to discover which essence combinations produce each Fulu, or read our{" "}
            <Link href="/guide" className="text-primary-light hover:text-primary">
              Beginner&apos;s Guide
            </Link>{" "}
            for step-by-step strategies on lab management, team synergies, and resource optimization.
            Whether you are just starting out or min-maxing for PvP, these tools will help you get
            the most out of every experiment.
          </p>
        </SEOArticle>
      </section>
    </MonstersPageLayout>
  );
}
