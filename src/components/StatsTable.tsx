import { Monster } from "@/types";

interface StatsTableProps {
  monster: Monster;
}

export default function StatsTable({ monster }: StatsTableProps) {
  const stats = [
    { label: "HP", value: monster.hp, max: 400, color: "bg-green-500" },
    { label: "Attack", value: monster.attack, max: 130, color: "bg-red-500" },
    { label: "Defense", value: monster.defense, max: 110, color: "bg-blue-500" },
    { label: "Speed", value: monster.speed, max: 90, color: "bg-yellow-500" },
  ];

  return (
    <div className="space-y-3">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-3">
          <span className="w-16 text-sm text-gray-400 font-medium">{stat.label}</span>
          <div className="flex-1 h-3 bg-surface-dark rounded-full overflow-hidden">
            <div
              className={`h-full ${stat.color} rounded-full transition-all duration-500`}
              style={{ width: `${Math.min((stat.value / stat.max) * 100, 100)}%` }}
            />
          </div>
          <span className="w-10 text-right text-sm text-white font-bold">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
