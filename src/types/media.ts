export type MediaTag =
  | "lab"
  | "machines"
  | "eggs"
  | "incubation"
  | "habitats"
  | "combat"
  | "ui"
  | "hud"
  | "orders"
  | "automation"
  | "production"
  | "roster"
  | "close-up"
  | "console"
  | "tutorial"
  | "other";

export interface MediaItem {
  id: string;
  slug: string;
  title: string;
  description?: string;
  tags: MediaTag[];
  systemTags?: string[];
  sourceName?: string;
  sourceUrl?: string;
  resolution?: string;
  thumbnailUrl: string;
  fullImageUrl: string;
}
