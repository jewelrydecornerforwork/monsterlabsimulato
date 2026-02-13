export type ElementType = "fire" | "water" | "nature" | "neutral" | "shadow" | "light";
export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary";
export type Role = "tank" | "dps" | "support" | "utility";

export interface Essence {
  id: ElementType;
  name: string;
  unlockLevel: number;
  description: string;
}

export interface Monster {
  id: string;
  name: string;
  slug: string;
  element: ElementType;
  rarity: Rarity;
  role: Role;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  recipe: {
    essences: [ElementType, ElementType, ElementType];
    labLevel: number;
  };
  description: string;
  abilities: string[];
  lore: string;
  family?: string;
  habitat?: string;
  stage?: "egg" | "juvenile" | "adult" | "ascended";
  tags?: string[];
}

export interface Recipe {
  id: string;
  name: string;
  essences: [ElementType, ElementType, ElementType];
  resultMonster: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface TeamBuild {
  id: string;
  name: string;
  description: string;
  phase: "early" | "mid" | "late" | "pvp";
  monsters: string[];
  strategy: string;
  strengths: string[];
  weaknesses: string[];
}
