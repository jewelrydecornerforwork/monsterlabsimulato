import Link from "next/link";
import { Monster } from "@/types";
import { ELEMENT_GRADIENTS } from "@/lib/data";
import Badge from "./Badge";

interface MonsterCardProps {
  monster: Monster;
}

export default function MonsterCard({ monster }: MonsterCardProps) {
  return (
    <Link href={`/monsters/${monster.slug}`}>
      <div className="bg-surface rounded-lg border border-surface-light/30 hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden group">
        {/* Image placeholder */}
        <div
          className={`h-40 ${ELEMENT_GRADIENTS[monster.element]} flex items-center justify-center relative`}
        >
          <span className="text-5xl font-bold text-white/30 group-hover:text-white/50 transition-colors">
            {monster.name.charAt(0)}
          </span>
          <div className="absolute top-2 right-2">
            <Badge type="rarity" value={monster.rarity} />
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold text-white text-lg mb-2">{monster.name}</h3>
          <div className="flex items-center gap-2 mb-3">
            <Badge type="element" value={monster.element} />
            <Badge type="role" value={monster.role} />
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
            <div>
              <span className="text-gray-500">HP</span>
              <p className="text-white font-medium">{monster.hp}</p>
            </div>
            <div>
              <span className="text-gray-500">ATK</span>
              <p className="text-white font-medium">{monster.attack}</p>
            </div>
            <div>
              <span className="text-gray-500">DEF</span>
              <p className="text-white font-medium">{monster.defense}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
