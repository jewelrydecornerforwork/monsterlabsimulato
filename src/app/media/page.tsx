"use client";

import { useState } from "react";
import Link from "next/link";
import { MediaTag } from "@/types/media";
import { getAllMedia } from "@/lib/media";
import MediaPageLayout from "@/components/media/MediaPageLayout";
import MediaHeader from "@/components/media/MediaHeader";
import MediaFilterSidebar from "@/components/media/MediaFilterSidebar";
import MediaGrid from "@/components/media/MediaGrid";
import MediaUsagePanel from "@/components/media/MediaUsagePanel";
import MediaStandards from "@/components/media/MediaStandards";

const relatedTools = [
  {
    href: "/monsters",
    title: "Monster Database",
    description: "Use media to illustrate monster entries and stat breakdowns.",
  },
  {
    href: "/tools/recipes",
    title: "Breeding Calculator",
    description:
      "Attach breeding captures to recipe documentation and guides.",
  },
  {
    href: "/guide",
    title: "Lab Guides",
    description: "Embed screenshots into walkthroughs and strategy articles.",
  },
];

export default function MediaPage() {
  const allMedia = getAllMedia();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<MediaTag | "all">("all");
  const [selectedSystem, setSelectedSystem] = useState("All systems");

  const filtered = allMedia.filter((item) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchesTitle = item.title.toLowerCase().includes(q);
      const matchesDesc = item.description?.toLowerCase().includes(q) ?? false;
      if (!matchesTitle && !matchesDesc) return false;
    }
    if (selectedTag !== "all" && !item.tags.includes(selectedTag)) return false;
    if (
      selectedSystem !== "All systems" &&
      !(item.systemTags ?? []).some((s) => s === selectedSystem)
    )
      return false;
    return true;
  });

  function handleReset() {
    setSearchQuery("");
    setSelectedTag("all");
    setSelectedSystem("All systems");
  }

  return (
    <MediaPageLayout>
      <MediaHeader />

      {/* Main content: sidebar + grid */}
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,2.2fr)]">
        <MediaFilterSidebar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
          selectedSystem={selectedSystem}
          onSystemChange={setSelectedSystem}
        />

        <div className="space-y-8">
          <MediaGrid items={filtered} onReset={handleReset} />
          <MediaUsagePanel />
          <MediaStandards />
        </div>
      </div>

      {/* Related Tools */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">
          Related Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href}>
              <div className="rounded-lg bg-surface border border-surface-light/30 p-3 hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-white text-sm">
                  {tool.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MediaPageLayout>
  );
}
