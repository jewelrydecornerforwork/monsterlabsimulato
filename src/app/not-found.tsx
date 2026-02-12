import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-bold text-primary/30 mb-4">404</div>
      <h1 className="text-3xl font-bold text-white mb-3">Monster Not Found</h1>
      <p className="text-gray-400 mb-8 max-w-md">
        This monster seems to have escaped the lab. It might not exist yet, or the URL could be incorrect.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/monsters"
          className="px-6 py-2.5 bg-surface border border-surface-light/50 hover:border-primary/50 text-white font-medium rounded-lg transition-colors"
        >
          Browse Monsters
        </Link>
      </div>
    </div>
  );
}
