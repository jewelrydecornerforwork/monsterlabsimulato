"use client";

import { ElementType, Rarity, Role } from "@/types";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedElement: ElementType | "";
  onElementChange: (element: ElementType | "") => void;
  selectedRarity: Rarity | "";
  onRarityChange: (rarity: Rarity | "") => void;
  selectedRole: Role | "";
  onRoleChange: (role: Role | "") => void;
  onReset: () => void;
}

const elements: ElementType[] = ["fire", "water", "nature", "neutral", "shadow", "light"];
const rarities: Rarity[] = ["common", "rare", "epic", "legendary"];
const roles: Role[] = ["tank", "dps", "support"];

const elementBtnColors: Record<ElementType, string> = {
  fire: "bg-fire/20 text-fire border-fire/30 hover:bg-fire/30",
  water: "bg-water/20 text-water border-water/30 hover:bg-water/30",
  nature: "bg-nature/20 text-nature border-nature/30 hover:bg-nature/30",
  neutral: "bg-neutral/20 text-neutral border-neutral/30 hover:bg-neutral/30",
  shadow: "bg-shadow/20 text-shadow border-shadow/30 hover:bg-shadow/30",
  light: "bg-light/20 text-light border-light/30 hover:bg-light/30",
};

export default function FilterBar({
  searchQuery,
  onSearchChange,
  selectedElement,
  onElementChange,
  selectedRarity,
  onRarityChange,
  selectedRole,
  onRoleChange,
  onReset,
}: FilterBarProps) {
  const hasFilters = searchQuery || selectedElement || selectedRarity || selectedRole;

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search monsters by name..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-surface-dark border border-surface-light/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
        />
      </div>

      {/* Filter tags */}
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-wrap gap-1.5">
          {elements.map((el) => (
            <button
              key={el}
              onClick={() => onElementChange(selectedElement === el ? "" : el)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all ${
                selectedElement === el
                  ? elementBtnColors[el] + " ring-1 ring-offset-1 ring-offset-surface-dark"
                  : "bg-surface-dark border-surface-light/50 text-gray-400 hover:text-gray-200"
              }`}
            >
              {el.charAt(0).toUpperCase() + el.slice(1)}
            </button>
          ))}
        </div>

        <div className="w-px bg-surface-light/30 hidden sm:block" />

        <div className="flex flex-wrap gap-1.5">
          {rarities.map((r) => (
            <button
              key={r}
              onClick={() => onRarityChange(selectedRarity === r ? "" : r)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all ${
                selectedRarity === r
                  ? "bg-primary/20 text-primary-light border-primary/30"
                  : "bg-surface-dark border-surface-light/50 text-gray-400 hover:text-gray-200"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <div className="w-px bg-surface-light/30 hidden sm:block" />

        <div className="flex flex-wrap gap-1.5">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => onRoleChange(selectedRole === role ? "" : role)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all ${
                selectedRole === role
                  ? "bg-primary/20 text-primary-light border-primary/30"
                  : "bg-surface-dark border-surface-light/50 text-gray-400 hover:text-gray-200"
              }`}
            >
              {role.toUpperCase()}
            </button>
          ))}
        </div>

        {hasFilters && (
          <button
            onClick={onReset}
            className="px-3 py-1 text-xs font-medium text-gray-400 hover:text-white transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}
