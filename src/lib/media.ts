import { MediaItem } from "@/types/media";
import mediaData from "../../data/media.json";

export function getAllMedia(): MediaItem[] {
  return mediaData as MediaItem[];
}

export const MEDIA_SYSTEM_OPTIONS = [
  "All systems",
  "Essences & recipes",
  "Lab & machines",
  "Eggs & incubation",
  "Habitats",
  "Combat",
  "UI & HUD",
] as const;
