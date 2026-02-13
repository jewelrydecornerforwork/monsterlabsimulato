"use client";

import { ElementType, Rarity } from "@/types";
import EssenceIcon from "@/components/EssenceIcon";

interface BreedingEssenceFormProps {
  essence1: ElementType | "";
  essence2: ElementType | "";
  essence3: ElementType | "";
  onEssence1Change: (v: ElementType | "") => void;
  onEssence2Change: (v: ElementType | "") => void;
  onEssence3Change: (v: ElementType | "") => void;
  filterRarity: Rarity | "";
  onFilterRarityChange: (v: Rarity | "") => void;
  filterElement: ElementType | "";
  onFilterElementChange: (v: ElementType | "") => void;
  filterMinLabLevel: number | "";
  onFilterMinLabLevelChange: (v: number | "") => void;
  onSearch: () => void;
  onReset: () => void;
}

const elements: ElementType[] = ["fire", "water", "nature", "neutral", "shadow", "light"];
const rarities: Rarity[] = ["common", "uncommon", "rare", "epic", "legendary"];
const labLevels = [1, 3, 5, 7, 10];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function BreedingEssenceForm({
  essence1,
  essence2,
  essence3,
  onEssence1Change,
  onEssence2Change,
  onEssence3Change,
  filterRarity,
  onFilterRarityChange,
  filterElement,
  onFilterElementChange,
  filterMinLabLevel,
  onFilterMinLabLevelChange,
  onSearch,
  onReset,
}: BreedingEssenceFormProps) {
  const essenceSlots = [
    { label: "Essence 1", value: essence1, onChange: onEssence1Change },
    { label: "Essence 2", value: essence2, onChange: onEssence2Change },
    { label: "Essence 3", value: essence3, onChange: onEssence3Change },
  ];

  return (
    <div className="rounded-xl bg-surface border border-surface-light/30 p-5 space-y-5">
      {/* Essence Slots */}
      <div>
        <h3 className="text-sm font-medium text-white mb-3">Essence Slots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {essenceSlots.map((slot) => (
            <div key={slot.label}>
              <label className="block text-xs text-gray-500 mb-1.5">{slot.label}</label>
              <div className="flex items-center gap-2">
                {slot.value && <EssenceIcon element={slot.value} size="md" />}
                <select
                  value={slot.value}
                  onChange={(e) => slot.onChange(e.target.value as ElementType | "")}
                  className="flex-1 bg-surface-dark border border-surface-light/50 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                >
                  <option value="">Select essence</option>
                  {elements.map((el) => (
                    <option key={el} value={el}>
                      {capitalize(el)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Output Filters */}
      <div>
        <h3 className="text-sm font-medium text-white mb-3">Output Filters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Rarity</label>
            <select
              value={filterRarity}
              onChange={(e) => onFilterRarityChange(e.target.value as Rarity | "")}
              className="w-full bg-surface-dark border border-surface-light/50 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
            >
              <option value="">Any Rarity</option>
              {rarities.map((r) => (
                <option key={r} value={r}>
                  {capitalize(r)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Element</label>
            <select
              value={filterElement}
              onChange={(e) => onFilterElementChange(e.target.value as ElementType | "")}
              className="w-full bg-surface-dark border border-surface-light/50 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
            >
              <option value="">Any Element</option>
              {elements.map((el) => (
                <option key={el} value={el}>
                  {capitalize(el)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Min Lab Level</label>
            <select
              value={filterMinLabLevel}
              onChange={(e) => {
                const val = e.target.value;
                onFilterMinLabLevelChange(val === "" ? "" : Number(val));
              }}
              className="w-full bg-surface-dark border border-surface-light/50 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
            >
              <option value="">Any Level</option>
              {labLevels.map((lv) => (
                <option key={lv} value={lv}>
                  Level {lv}+
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={onSearch}
          className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-primary/20"
        >
          Search Recipes
        </button>
        <button
          onClick={onReset}
          className="px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
