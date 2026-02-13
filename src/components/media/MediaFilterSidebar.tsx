"use client";

import { MediaTag } from "@/types/media";
import { MEDIA_SYSTEM_OPTIONS } from "@/lib/media";

const ALL_TAGS: MediaTag[] = [
  "lab",
  "machines",
  "eggs",
  "incubation",
  "habitats",
  "combat",
  "ui",
  "hud",
  "orders",
  "automation",
  "production",
  "roster",
  "close-up",
  "console",
  "tutorial",
  "other",
];

function tagLabel(tag: string) {
  return tag
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

interface MediaFilterSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTag: MediaTag | "all";
  onTagChange: (tag: MediaTag | "all") => void;
  selectedSystem: string;
  onSystemChange: (system: string) => void;
}

export default function MediaFilterSidebar({
  searchQuery,
  onSearchChange,
  selectedTag,
  onTagChange,
  selectedSystem,
  onSystemChange,
}: MediaFilterSidebarProps) {
  return (
    <div className="rounded-xl bg-surface border border-surface-light/30 p-4 space-y-5 h-fit md:sticky md:top-24">
      {/* Search */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1.5">
          Search
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by title or description…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-surface-dark border border-surface-light/50 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1.5">
          Tags
        </label>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onTagChange("all")}
            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs transition-colors ${
              selectedTag === "all"
                ? "bg-primary/20 text-primary-light border-primary/30"
                : "bg-surface-dark border-surface-light/50 text-gray-400 hover:text-white hover:border-surface-light"
            }`}
          >
            All
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagChange(tag)}
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs transition-colors ${
                selectedTag === tag
                  ? "bg-primary/20 text-primary-light border-primary/30"
                  : "bg-surface-dark border-surface-light/50 text-gray-400 hover:text-white hover:border-surface-light"
              }`}
            >
              {tagLabel(tag)}
            </button>
          ))}
        </div>
      </div>

      {/* System filter */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1.5">
          System
        </label>
        <select
          value={selectedSystem}
          onChange={(e) => onSystemChange(e.target.value)}
          className="w-full bg-surface-dark border border-surface-light/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
        >
          {MEDIA_SYSTEM_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
