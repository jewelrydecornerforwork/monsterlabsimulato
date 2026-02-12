import { Monster, Essence, Recipe, TeamBuild, ElementType, Rarity } from "@/types";
import monstersData from "../../data/monsters.json";
import essencesData from "../../data/essences.json";
import recipesData from "../../data/recipes.json";
import teamsData from "../../data/teams.json";

export function getAllMonsters(): Monster[] {
  return monstersData as Monster[];
}

export function getMonsterBySlug(slug: string): Monster | undefined {
  return (monstersData as Monster[]).find((m) => m.slug === slug);
}

export function getMonsterById(id: string): Monster | undefined {
  return (monstersData as Monster[]).find((m) => m.id === id);
}

export function getAllEssences(): Essence[] {
  return essencesData as Essence[];
}

export function getRecipes(): Recipe[] {
  return recipesData as Recipe[];
}

export function getTeams(): TeamBuild[] {
  return teamsData as TeamBuild[];
}

export function findMonstersByRecipe(
  essences: [ElementType, ElementType, ElementType],
  rarity?: Rarity
): Monster[] {
  const sorted = [...essences].sort();
  return (monstersData as Monster[]).filter((m) => {
    const monsterSorted = [...m.recipe.essences].sort();
    const matchesRecipe =
      sorted[0] === monsterSorted[0] &&
      sorted[1] === monsterSorted[1] &&
      sorted[2] === monsterSorted[2];
    if (rarity) {
      return matchesRecipe && m.rarity === rarity;
    }
    return matchesRecipe;
  });
}

export function getRelatedMonsters(monster: Monster, limit = 4): Monster[] {
  return (monstersData as Monster[])
    .filter(
      (m) =>
        m.id !== monster.id &&
        (m.element === monster.element || m.role === monster.role)
    )
    .slice(0, limit);
}

export function getMonstersByElement(element: ElementType): Monster[] {
  return (monstersData as Monster[]).filter((m) => m.element === element);
}

export function getMonstersByRarity(rarity: Rarity): Monster[] {
  return (monstersData as Monster[]).filter((m) => m.rarity === rarity);
}

export const ELEMENT_COLORS: Record<ElementType, string> = {
  fire: "bg-fire text-white",
  water: "bg-water text-white",
  nature: "bg-nature text-white",
  neutral: "bg-neutral text-white",
  shadow: "bg-shadow text-white",
  light: "bg-light text-gray-900",
};

export const ELEMENT_GRADIENTS: Record<ElementType, string> = {
  fire: "gradient-fire",
  water: "gradient-water",
  nature: "gradient-nature",
  neutral: "gradient-neutral",
  shadow: "gradient-shadow",
  light: "gradient-light",
};

export const RARITY_COLORS: Record<Rarity, string> = {
  common: "bg-rarity-common/20 text-rarity-common border-rarity-common/30",
  rare: "bg-rarity-rare/20 text-rarity-rare border-rarity-rare/30",
  epic: "bg-rarity-epic/20 text-rarity-epic border-rarity-epic/30",
  legendary: "bg-rarity-legendary/20 text-rarity-legendary border-rarity-legendary/30",
};

export const ROLE_COLORS: Record<string, string> = {
  tank: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  dps: "bg-red-500/20 text-red-400 border-red-500/30",
  support: "bg-green-500/20 text-green-400 border-green-500/30",
};
