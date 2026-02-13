import Link from "next/link";
import { Monster } from "@/types";
import { ELEMENT_GRADIENTS } from "@/lib/data";
import Badge from "@/components/Badge";

interface MonsterCardProps {
  monster: Monster;
}

export default function MonsterCard({ monster }: MonsterCardProps) {
  return (
    <Link href={`/monsters/${monster.slug}`}>
      <div className="rounded-xl bg-surface border border-surface-light/30 overflow-hidden hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group">
        {/* Image placeholder */}
        <div
          className={`aspect-[4/3] ${ELEMENT_GRADIENTS[monster.element]} flex items-center justify-center relative`}
        >
          <span className="text-5xl font-bold text-white/30 group-hover:text-white/50 transition-colors">
            {monster.name.charAt(0)}
          </span>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold text-white text-lg">{monster.name}</h3>
          {monster.family && (
            <p className="text-xs text-gray-500 mt-0.5">{monster.family} family</p>
          )}

          <div className="flex flex-wrap items-center gap-1.5 mt-3">
            <Badge type="element" value={monster.element} />
            <Badge type="rarity" value={monster.rarity} />
            <Badge type="role" value={monster.role} />
          </div>
        </div>
      </div>
    </Link>
  );
}
