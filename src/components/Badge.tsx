import { ElementType, Rarity, Role } from "@/types";
import { ELEMENT_COLORS, RARITY_COLORS, ROLE_COLORS } from "@/lib/data";

interface BadgeProps {
  type: "element" | "rarity" | "role";
  value: string;
}

export default function Badge({ type, value }: BadgeProps) {
  let colorClass = "";
  let label = value.charAt(0).toUpperCase() + value.slice(1);

  switch (type) {
    case "element":
      colorClass = ELEMENT_COLORS[value as ElementType] || "bg-gray-500 text-white";
      break;
    case "rarity":
      colorClass = RARITY_COLORS[value as Rarity] || "bg-gray-500/20 text-gray-400";
      break;
    case "role":
      label = value.toUpperCase();
      colorClass = ROLE_COLORS[value as Role] || "bg-gray-500/20 text-gray-400";
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClass}`}
    >
      {label}
    </span>
  );
}
