import { Monster } from "@/types";

interface MonstersOverviewStatsProps {
  monsters: Monster[];
}

export default function MonstersOverviewStats({ monsters }: MonstersOverviewStatsProps) {
  const totalFulus = monsters.length;

  const families = new Set(monsters.map((m) => m.family).filter(Boolean));
  const familyCount = families.size;

  const elements = new Set(monsters.map((m) => m.element));
  const elementCount = elements.size;
  const elementList = Array.from(elements)
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(", ");

  const rarityCounts: Record<string, number> = {};
  monsters.forEach((m) => {
    rarityCounts[m.rarity] = (rarityCounts[m.rarity] || 0) + 1;
  });
  const topRarity = Object.entries(rarityCounts).sort((a, b) => b[1] - a[1])[0];
  const rarityLabel = topRarity
    ? `${topRarity[0].charAt(0).toUpperCase() + topRarity[0].slice(1)}-heavy`
    : "N/A";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard label="Total Fulus" value={totalFulus} caption="in the database" />
      <StatCard label="Families Tracked" value={familyCount} caption="distinct lineages" />
      <StatCard label="Elements" value={elementCount} caption={elementList} />
      <StatCard label="Rarity Spread" value={rarityLabel} caption={`${Object.keys(rarityCounts).length} tiers`} />
    </div>
  );
}

function StatCard({
  label,
  value,
  caption,
}: {
  label: string;
  value: string | number;
  caption: string;
}) {
  return (
    <div className="rounded-xl bg-surface border border-surface-light/30 p-4">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-gray-500 mt-1 truncate">{caption}</p>
    </div>
  );
}
