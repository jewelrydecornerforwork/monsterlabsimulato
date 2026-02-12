"use client";

import { useState } from "react";
import { ElementType, Rarity, Role } from "@/types";
import { getAllMonsters } from "@/lib/data";
import FilterBar from "@/components/FilterBar";
import MonsterCard from "@/components/MonsterCard";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Monster Database</h1>
        <p className="text-gray-400">
          Browse all {allMonsters.length} monsters. Search by name or filter by element, rarity, and role.
        </p>
      </section>

      {/* Filters */}
      <div className="mb-8">
        <FilterBar
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
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((m) => (
          <MonsterCard key={m.id} monster={m} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No monsters match your filters.</p>
          <button
            onClick={handleReset}
            className="mt-4 text-primary-light hover:text-primary transition-colors"
          >
            Reset all filters
          </button>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-gray-500">
        Showing {filtered.length} of {allMonsters.length} monsters
      </div>
    </div>
  );
}
