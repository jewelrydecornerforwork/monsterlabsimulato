"use client";

import { ElementType, Rarity, Role } from "@/types";

interface MonstersFilterBarProps {
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
const rarities: Rarity[] = ["common", "uncommon", "rare", "epic", "legendary"];
const roles: Role[] = ["tank", "dps", "support", "utility"];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function MonstersFilterBar({
  searchQuery,
  onSearchChange,
  selectedElement,
  onElementChange,
  selectedRarity,
  onRarityChange,
  selectedRole,
  onRoleChange,
  onReset,
}: MonstersFilterBarProps) {
  const hasFilters = searchQuery || selectedElement || selectedRarity || selectedRole;

  return (
    <div className="rounded-xl bg-surface border border-surface-light/30 px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative w-full md:w-64">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-surface-dark border border-surface-light/50 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </div>

        {/* Element */}
        <select
          value={selectedElement}
          onChange={(e) => onElementChange(e.target.value as ElementType | "")}
          className="bg-surface-dark border border-surface-light/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
        >
          <option value="">All Elements</option>
          {elements.map((el) => (
            <option key={el} value={el}>
              {capitalize(el)}
            </option>
          ))}
        </select>

        {/* Rarity */}
        <select
          value={selectedRarity}
          onChange={(e) => onRarityChange(e.target.value as Rarity | "")}
          className="bg-surface-dark border border-surface-light/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
        >
          <option value="">All Rarities</option>
          {rarities.map((r) => (
            <option key={r} value={r}>
              {capitalize(r)}
            </option>
          ))}
        </select>

        {/* Role */}
        <select
          value={selectedRole}
          onChange={(e) => onRoleChange(e.target.value as Role | "")}
          className="bg-surface-dark border border-surface-light/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
        >
          <option value="">All Roles</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role === "dps" ? "DPS" : capitalize(role)}
            </option>
          ))}
        </select>

        {/* Reset */}
        {hasFilters && (
          <button
            onClick={onReset}
            className="ml-auto px-3 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}
