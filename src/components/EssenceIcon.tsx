import { ElementType } from "@/types";
import { ELEMENT_COLORS } from "@/lib/data";

interface EssenceIconProps {
  element: ElementType;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const sizeClasses = {
  sm: "w-6 h-6 text-[10px]",
  md: "w-8 h-8 text-xs",
  lg: "w-10 h-10 text-sm",
};

const elementSymbols: Record<ElementType, string> = {
  fire: "F",
  water: "W",
  nature: "N",
  neutral: "O",
  shadow: "S",
  light: "L",
};

export default function EssenceIcon({ element, size = "md", showLabel = false }: EssenceIconProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className={`${sizeClasses[size]} rounded-full ${ELEMENT_COLORS[element]} flex items-center justify-center font-bold shadow-lg`}
        title={`${element.charAt(0).toUpperCase() + element.slice(1)} Essence`}
      >
        {elementSymbols[element]}
      </div>
      {showLabel && (
        <span className="text-sm text-gray-300 capitalize">{element}</span>
      )}
    </div>
  );
}
