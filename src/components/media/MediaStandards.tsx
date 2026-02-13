export default function MediaStandards() {
  return (
    <div className="rounded-xl bg-surface border border-surface-light/30 p-4 space-y-2">
      <h2 className="text-lg font-semibold text-white">
        Documentation Standards
      </h2>
      <p className="text-sm text-gray-400">
        Every media entry added to this gallery should follow these guidelines:
      </p>
      <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
        <li>Include a visible source name and, if possible, a direct link</li>
        <li>Record the resolution and approximate capture date or game build</li>
        <li>
          Indicate which system(s) the screenshot covers (Lab, Essences, Combat,
          etc.)
        </li>
        <li>Mark speculative or unverified content clearly</li>
        <li>Prefer 16:9 aspect ratio for visual consistency across the gallery</li>
        <li>Use descriptive, human-readable file names and titles</li>
        <li>Tag all entries with at least one relevant category</li>
      </ul>
    </div>
  );
}
