"use client";

import { useState } from "react";
import { Monster, ElementType, Rarity, Role } from "@/types";
import FilterBar from "@/components/FilterBar";
import MonsterCard from "@/components/MonsterCard";

interface HomeMonsterGridProps {
  monsters: Monster[];
}

export default function HomeMonsterGrid({ monsters }: HomeMonsterGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedElement, setSelectedElement] = useState<ElementType | "">("");
  const [selectedRarity, setSelectedRarity] = useState<Rarity | "">("");
  const [selectedRole, setSelectedRole] = useState<Role | "">("");

  const filtered = monsters.filter((m) => {
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
    <div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
        {filtered.map((m) => (
          <MonsterCard key={m.id} monster={m} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          No monsters match your filters. Try adjusting your search.
        </p>
      )}
    </div>
  );
}
