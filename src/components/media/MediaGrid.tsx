import { MediaItem } from "@/types/media";
import MediaCard from "./MediaCard";

interface MediaGridProps {
  items: MediaItem[];
  onReset: () => void;
}

export default function MediaGrid({ items, onReset }: MediaGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">
          No media found for this filter.
        </p>
        <button
          onClick={onReset}
          className="mt-4 text-primary-light hover:text-primary transition-colors text-sm"
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-500 mb-3">
        {items.length} {items.length === 1 ? "result" : "results"}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
