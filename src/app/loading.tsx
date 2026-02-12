export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-surface rounded-lg w-2/3" />
        <div className="h-6 bg-surface rounded-lg w-1/2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-64 bg-surface rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
