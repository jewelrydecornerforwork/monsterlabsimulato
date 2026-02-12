import { TeamBuild } from "@/types";
import { getMonsterById } from "@/lib/data";
import Badge from "./Badge";

interface TeamCardProps {
  team: TeamBuild;
}

export default function TeamCard({ team }: TeamCardProps) {
  const monsters = team.monsters.map((id) => getMonsterById(id)).filter(Boolean);

  return (
    <div className="bg-surface rounded-lg border border-surface-light/30 p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-white">{team.name}</h3>
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            team.phase === "early"
              ? "bg-green-500/20 text-green-400"
              : team.phase === "mid"
                ? "bg-yellow-500/20 text-yellow-400"
                : team.phase === "late"
                  ? "bg-red-500/20 text-red-400"
                  : "bg-purple-500/20 text-purple-400"
          }`}
        >
          {team.phase === "pvp" ? "PVP" : `${team.phase.charAt(0).toUpperCase() + team.phase.slice(1)} Game`}
        </span>
      </div>
      <p className="text-gray-400 text-sm mb-4">{team.description}</p>

      <div className="flex flex-wrap gap-3 mb-4">
        {monsters.map((m) =>
          m ? (
            <div key={m.id} className="flex items-center gap-2 bg-surface-dark rounded-lg px-3 py-2">
              <Badge type="element" value={m.element} />
              <span className="text-sm text-white font-medium">{m.name}</span>
              <Badge type="role" value={m.role} />
            </div>
          ) : null
        )}
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-1">Strategy</h4>
        <p className="text-sm text-gray-400">{team.strategy}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-semibold text-green-400 mb-1">Strengths</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            {team.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-green-400 mt-0.5">+</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-red-400 mb-1">Weaknesses</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            {team.weaknesses.map((w, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-red-400 mt-0.5">-</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
