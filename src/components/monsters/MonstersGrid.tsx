import { Monster } from "@/types";
import MonsterCard from "./MonsterCard";

interface MonstersGridProps {
  monsters: Monster[];
  onReset?: () => void;
}

export default function MonstersGrid({ monsters, onReset }: MonstersGridProps) {
  if (monsters.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No monsters match your filters.</p>
        {onReset && (
          <button
            onClick={onReset}
            className="mt-4 text-primary-light hover:text-primary transition-colors text-sm"
          >
            Reset all filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {monsters.map((m) => (
          <MonsterCard key={m.id} monster={m} />
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-gray-500">
        Showing {monsters.length} {monsters.length === 1 ? "monster" : "monsters"}
      </p>
    </div>
  );
}
