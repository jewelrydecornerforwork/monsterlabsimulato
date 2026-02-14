import Image from "next/image";
import { MediaItem } from "@/types/media";

interface MediaCardProps {
  item: MediaItem;
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function tagLabel(tag: string) {
  return tag
    .split("-")
    .map((w) => capitalize(w))
    .join(" ");
}

function isRealImage(url: string) {
  return url.startsWith("/");
}

export default function MediaCard({ item }: MediaCardProps) {
  return (
    <div className="rounded-xl bg-surface border border-surface-light/30 overflow-hidden hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 group flex flex-col">
      {/* Thumbnail */}
      <div className="aspect-[16/9] relative overflow-hidden">
        {isRealImage(item.thumbnailUrl) ? (
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className={`w-full h-full ${item.thumbnailUrl} flex items-center justify-center`}>
            <span className="text-4xl font-bold text-white/25 group-hover:text-white/40 transition-colors select-none">
              {item.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <h3 className="font-medium text-white text-sm leading-tight">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-xs text-gray-400 line-clamp-2">
            {item.description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-auto">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-surface-light/30 border border-surface-light/50 px-2 py-0.5 text-[11px] text-gray-300"
            >
              {tagLabel(tag)}
            </span>
          ))}
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-gray-500 pt-1 border-t border-surface-light/20">
          {item.sourceName && <span>{item.sourceName}</span>}
          {item.resolution && <span>{item.resolution}</span>}
          <span className="ml-auto text-gray-600 text-[11px]">
            Details coming soon
          </span>
        </div>
      </div>
    </div>
  );
}
